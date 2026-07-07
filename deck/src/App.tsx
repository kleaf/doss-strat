import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";
import { Deck } from "./components/Deck";
import { decks } from "./decks";
import { docs, RepoDoc, Track } from "virtual:repo-docs";

type Route =
  | { kind: "home" }
  | { kind: "track"; track: Track }
  | { kind: "deck"; deckId: string; slide: number }
  | { kind: "doc"; path: string };

const TRACK_META: Record<Track, { label: string; tagline: string }> = {
  strategy: {
    label: "Product Strategy",
    tagline: "Market thesis, differentiation, agentic AI roadmap, proof points.",
  },
  process: {
    label: "Product Process",
    tagline: "How we plan, ship, and stay accountable to the field.",
  },
};

marked.use({
  gfm: true,
  breaks: false,
});

function parseHash(): Route {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/");
  if (!parts[0]) return { kind: "home" };
  if (parts[0] === "docs") {
    return { kind: "doc", path: decodeURIComponent(parts.slice(1).join("/")) };
  }
  if (parts[0] === "track" && (parts[1] === "strategy" || parts[1] === "process")) {
    return { kind: "track", track: parts[1] };
  }
  const n = parseInt(parts[1] ?? "1", 10);
  return { kind: "deck", deckId: parts[0], slide: (Number.isNaN(n) ? 1 : n) - 1 };
}

function docHref(doc: RepoDoc) {
  return `#/docs/${encodeURIComponent(doc.path)}`;
}

function trackHref(track: Track) {
  return `#/track/${track}`;
}

function rewriteInternalMarkdownLinks(content: string, docPath: string) {
  const baseDir = docPath.includes("/") ? docPath.slice(0, docPath.lastIndexOf("/")) : "";
  return content.replace(/\[([^\]]+)\]\(([^)]+\.(?:md|html))(#[^)]+)?\)/g, (_match, label: string, href: string, hash = "") => {
    if (/^(https?:|mailto:|#)/.test(href)) return `[${label}](${href}${hash})`;
    const normalized = `${baseDir}/${href}`
      .replace(/^\//, "")
      .split("/")
      .reduce<string[]>((parts, part) => {
        if (!part || part === ".") return parts;
        if (part === "..") parts.pop();
        else parts.push(part);
        return parts;
      }, [])
      .join("/");
    return `[${label}](#/docs/${encodeURIComponent(normalized)}${hash})`;
  });
}

function BackLink({ track }: { track: Track }) {
  return (
    <a className="back-link" href={trackHref(track)}>
      ← {TRACK_META[track].label} index
    </a>
  );
}

function MarkdownView({ doc }: { doc: RepoDoc }) {
  const html = useMemo(() => marked.parse(rewriteInternalMarkdownLinks(doc.content, doc.path)) as string, [doc]);

  return (
    <main className="doc-view">
      <BackLink track={doc.track} />
      <div className="doc-shell">
        <aside className="doc-meta">
          <div className="eyebrow">{doc.category}</div>
          <h1>{doc.title}</h1>
          <p>{doc.path}</p>
        </aside>
        <article className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </main>
  );
}

function prepareHtmlDocument(content: string) {
  const lightThemeStyle = `<style data-doss-light-html>
    :root,
    :root[data-theme="light"],
    :root[data-theme="auto"] {
      color-scheme: light !important;
      --bg-100: #ffffff !important;
      --bg-200: #fafafa !important;
      --bg: #fafafa !important;
      --card: #ffffff !important;
      --ink: #171717 !important;
      --gray-900: #4d4d4d !important;
      --gray-1000: #171717 !important;
      --g900: hsl(0, 0%, 30%) !important;
      --g1000: hsl(0, 0%, 9%) !important;
    }
    html,
    body {
      background: #ffffff !important;
      color: #171717 !important;
      color-scheme: light !important;
    }
    body,
    p,
    li,
    td,
    th,
    div,
    span {
      border-color: #ebebeb;
    }
    table,
    thead,
    tbody,
    tr,
    td,
    th,
    .card,
    .block,
    .callout,
    .strip,
    .matrix,
    .summary,
    .insight {
      background-color: #ffffff !important;
    }
  </style>`;

  const themed = content.replace(/<html([^>]*)>/i, (_match, attrs: string) => {
    const withoutTheme = attrs.replace(/\sdata-theme=("[^"]*"|'[^']*'|[^\s>]*)/i, "");
    return `<html${withoutTheme} data-theme="light">`;
  });

  if (themed.includes("</head>")) return themed.replace("</head>", `${lightThemeStyle}</head>`);
  return `${lightThemeStyle}${themed}`;
}

function HtmlDocumentView({ doc }: { doc: RepoDoc }) {
  const html = useMemo(() => prepareHtmlDocument(doc.content), [doc.content]);

  return (
    <main className="doc-view">
      <BackLink track={doc.track} />
      <div className="doc-shell html-doc-shell">
        <aside className="doc-meta">
          <div className="eyebrow">{doc.category}</div>
          <h1>{doc.title}</h1>
          <p>{doc.path}</p>
        </aside>
        <iframe className="html-document" title={doc.title} srcDoc={html} sandbox="" />
      </div>
    </main>
  );
}

function Home() {
  const counts = useMemo(() => {
    const result: Record<Track, { docs: number; decks: number }> = {
      strategy: { docs: 0, decks: 0 },
      process: { docs: 0, decks: 0 },
    };
    for (const doc of docs) result[doc.track].docs += 1;
    for (const deck of decks) result[deck.track].decks += 1;
    return result;
  }, []);

  return (
    <div className="stage">
      <div className="home chooser">
        <div className="wordmark rise">DOSS</div>
        <div className="hub-hero">
          <h1 className="rise" style={{ animationDelay: "0.1s" }}>
            Strategy &amp; process library
          </h1>
          <p className="rise" style={{ animationDelay: "0.18s" }}>
            Pick a track — the working thesis on what we build, or how we build it.
          </p>
        </div>

        <div className="track-choice">
          {(Object.keys(TRACK_META) as Track[]).map((track, index) => (
            <a
              className="track-card rise"
              href={trackHref(track)}
              key={track}
              style={{ animationDelay: `${0.28 + index * 0.1}s` }}
            >
              <span className="idx">{String(index + 1).padStart(2, "0")}</span>
              <strong>{TRACK_META[track].label}</strong>
              <p>{TRACK_META[track].tagline}</p>
              <em>
                {counts[track].decks} deck{counts[track].decks === 1 ? "" : "s"} ·{" "}
                {counts[track].docs} doc{counts[track].docs === 1 ? "" : "s"}
              </em>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrackHub({ track }: { track: Track }) {
  const trackDecks = useMemo(() => decks.filter((deck) => deck.track === track), [track]);
  const trackDocs = useMemo(() => docs.filter((doc) => doc.track === track), [track]);
  const docsByCategory = useMemo(() => {
    return trackDocs.reduce<Record<string, RepoDoc[]>>((groups, doc) => {
      groups[doc.category] = groups[doc.category] ?? [];
      groups[doc.category].push(doc);
      return groups;
    }, {});
  }, [trackDocs]);

  return (
    <div className="stage">
      <div className="home hub">
        <a className="back-link" href="#/">
          ← All tracks
        </a>
        <div className="wordmark rise">DOSS</div>
        <div className="hub-hero">
          <h1 className="rise" style={{ animationDelay: "0.1s" }}>
            {TRACK_META[track].label}
          </h1>
          <p className="rise" style={{ animationDelay: "0.18s" }}>
            {TRACK_META[track].tagline}
          </p>
        </div>

        <section className="hub-section rise" style={{ animationDelay: "0.24s" }}>
          <div className="section-head">
            <span>Presentation mode</span>
            <em>← → navigate · esc returns here</em>
          </div>
          <div className="deck-grid">
            {trackDecks.map((deck, index) => (
              <a className="deck-card" href={`#/${deck.id}/1`} key={deck.id}>
                <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                <strong>{deck.title}</strong>
                <em>
                  {deck.date} · {deck.slides.length} slides
                </em>
              </a>
            ))}
          </div>
        </section>

        <section className="hub-section rise" style={{ animationDelay: "0.32s" }}>
          <div className="section-head">
            <span>Document table of contents</span>
            <em>{trackDocs.length} files</em>
          </div>
          <div className="doc-index">
            {Object.entries(docsByCategory).map(([category, categoryDocs]) => (
              <div className="doc-group" key={category}>
                <h2>{category}</h2>
                {categoryDocs.map((doc) => (
                  <a href={docHref(doc)} key={doc.path}>
                    <strong>{doc.title}</strong>
                    <span>{doc.path}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.kind === "doc") {
    const doc = docs.find((candidate) => candidate.path === route.path);
    if (!doc) return <Home />;
    return doc.format === "html" ? <HtmlDocumentView doc={doc} /> : <MarkdownView doc={doc} />;
  }

  if (route.kind === "track") {
    return <TrackHub track={route.track} />;
  }

  if (route.kind === "deck") {
    const deck = decks.find((candidate) => candidate.id === route.deckId);
    if (deck) {
      return (
        <Deck
          deck={deck}
          slideIndex={route.slide}
          onNavigate={(i) => (window.location.hash = `#/${deck.id}/${i + 1}`)}
          onExit={() => (window.location.hash = trackHref(deck.track))}
        />
      );
    }
  }

  return <Home />;
}
