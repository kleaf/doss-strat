import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { OAuth2Client } from "google-auth-library";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "0.0.0.0";
const AUTH_DOMAIN = process.env.GOOGLE_AUTH_DOMAIN || "doss.com";
const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const SESSION_SECRET = process.env.SESSION_SECRET;
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL;
const COOKIE_NAME = "doss_strategy_session";
const STATE_COOKIE_NAME = "doss_strategy_oauth_state";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const SESSION_TTL_MS = 7 * ONE_DAY_MS;

const required = { GOOGLE_CLIENT_ID: CLIENT_ID, GOOGLE_CLIENT_SECRET: CLIENT_SECRET, SESSION_SECRET };
const missing = Object.entries(required).filter(([, value]) => !value).map(([key]) => key);
if (missing.length > 0) {
  console.error(`Missing required environment variables: ${missing.join(", ")}`);
  console.error("Set them before starting the protected server. Example:");
  console.error("  GOOGLE_CLIENT_ID=... GOOGLE_CLIENT_SECRET=... SESSION_SECRET=$(openssl rand -hex 32) npm run serve");
  process.exit(1);
}

const app = express();
app.set("trust proxy", true);

const oauthClient = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

function baseUrl(req) {
  return PUBLIC_BASE_URL || `${req.protocol}://${req.get("host")}`;
}

function redirectUri(req) {
  return `${baseUrl(req)}/auth/callback`;
}

function base64url(input) {
  return Buffer.from(input).toString("base64url");
}

function hmac(value) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("base64url");
}

function signJson(payload) {
  const body = base64url(JSON.stringify(payload));
  return `${body}.${hmac(body)}`;
}

function verifySignedJson(value) {
  if (!value || !value.includes(".")) return null;
  const [body, signature] = value.split(".");
  const expected = hmac(body);
  if (signature.length !== expected.length) return null;
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  if (payload.exp && Date.now() > payload.exp) return null;
  return payload;
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  return Object.fromEntries(
    header
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [decodeURIComponent(part.slice(0, index)), decodeURIComponent(part.slice(index + 1))];
      }),
  );
}

function cookieOptions({ maxAge = SESSION_TTL_MS } = {}) {
  const secure = PUBLIC_BASE_URL?.startsWith("https://") || process.env.NODE_ENV === "production";
  return [`HttpOnly`, `SameSite=Lax`, `Path=/`, `Max-Age=${Math.floor(maxAge / 1000)}`, secure ? "Secure" : ""].filter(Boolean).join("; ");
}

function setCookie(res, name, value, options) {
  res.setHeader("Set-Cookie", `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${cookieOptions(options)}`);
}

function clearCookie(res, name) {
  res.append("Set-Cookie", `${encodeURIComponent(name)}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
}

function getSession(req) {
  return verifySignedJson(parseCookies(req)[COOKIE_NAME]);
}

function isAllowedUser(payload) {
  const email = payload.email || "";
  return payload.email_verified === true && payload.hd === AUTH_DOMAIN && email.toLowerCase().endsWith(`@${AUTH_DOMAIN}`);
}

function requireAuth(req, res, next) {
  if (req.path.startsWith("/auth/")) return next();
  const session = getSession(req);
  if (session?.email?.toLowerCase().endsWith(`@${AUTH_DOMAIN}`)) {
    req.user = session;
    return next();
  }
  if (req.path === "/favicon.ico" || req.path === "/favicon.svg" || req.path === "/apple-touch-icon.png") return next();
  return res.redirect(`/auth/login?next=${encodeURIComponent(req.originalUrl)}`);
}

app.get("/auth/login", (req, res) => {
  const state = crypto.randomBytes(24).toString("base64url");
  const next = typeof req.query.next === "string" && req.query.next.startsWith("/") ? req.query.next : "/";
  setCookie(res, STATE_COOKIE_NAME, signJson({ state, next, exp: Date.now() + 10 * 60 * 1000 }), { maxAge: 10 * 60 * 1000 });
  const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, redirectUri(req));
  const url = client.generateAuthUrl({
    access_type: "offline",
    hd: AUTH_DOMAIN,
    prompt: "select_account",
    scope: ["openid", "email", "profile"],
    state,
  });
  res.redirect(url);
});

app.get("/auth/callback", async (req, res, next) => {
  try {
    const stateCookie = verifySignedJson(parseCookies(req)[STATE_COOKIE_NAME]);
    if (!stateCookie || stateCookie.state !== req.query.state) return res.status(400).send("Invalid OAuth state.");
    if (typeof req.query.code !== "string") return res.status(400).send("Missing OAuth code.");

    const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, redirectUri(req));
    const { tokens } = await client.getToken(req.query.code);
    if (!tokens.id_token) return res.status(401).send("Google did not return an ID token.");

    const ticket = await oauthClient.verifyIdToken({ idToken: tokens.id_token, audience: CLIENT_ID });
    const payload = ticket.getPayload();
    if (!payload || !isAllowedUser(payload)) {
      clearCookie(res, COOKIE_NAME);
      clearCookie(res, STATE_COOKIE_NAME);
      return res.status(403).send(`Access requires a verified ${AUTH_DOMAIN} Google account.`);
    }

    setCookie(
      res,
      COOKIE_NAME,
      signJson({ email: payload.email, name: payload.name, picture: payload.picture, exp: Date.now() + SESSION_TTL_MS }),
    );
    clearCookie(res, STATE_COOKIE_NAME);
    res.redirect(stateCookie.next || "/");
  } catch (error) {
    next(error);
  }
});

app.get("/auth/logout", (_req, res) => {
  clearCookie(res, COOKIE_NAME);
  res.redirect("/auth/login");
});

app.get("/auth/me", (req, res) => {
  const session = getSession(req);
  if (!session) return res.status(401).json({ authenticated: false });
  res.json({ authenticated: true, user: { email: session.email, name: session.name, picture: session.picture } });
});

app.use(requireAuth);
app.use(express.static(distDir, { index: false }));
app.use((_req, res) => res.sendFile(path.join(distDir, "index.html")));

app.listen(PORT, HOST, () => {
  console.log(`DOSS strategy app listening on http://${HOST}:${PORT}`);
  console.log(`Google auth restricted to ${AUTH_DOMAIN}`);
});
