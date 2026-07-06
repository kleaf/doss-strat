import { useEffect, useMemo, useState } from "react";
import { marked } from "marked";
import { Deck } from "./components/Deck";
import { decks } from "./decks";
import { docs, RepoDoc } from "virtual:repo-docs";

type Route =
  | { kind: "home" }
  | { kind: "deck"; deckId: string; slide: number }
  | { kind: "doc"; path: string };

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
  const n = parseInt(parts[1] ?? "1", 10);
  return { kind: "deck", deckId: parts[0], slide: (Number.isNaN(n) ? 1 : n) - 1 };
}

function docHref(doc: RepoDoc) {
  return `#/docs/${encodeURIComponent(doc.path)}`;
}

function rewriteInternalMarkdownLinks(content: string, docPath: string) {
  const baseDir = docPath.includes("/") ? docPath.slice(0, docPath.lastIndexOf("/")) : "";
  return content.replace(/\[([^\]]+)\]\(([^)]+\.md)(#[^)]+)?\)/g, (_match, label: string, href: string, hash = "") => {
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

function MarkdownView({ doc }: { doc: RepoDoc }) {
  const html = useMemo(() => marked.parse(rewriteInternalMarkdownLinks(doc.content, doc.path)) as string, [doc]);

  return (
    <main className="doc-view">
      <a className="back-link" href="#/">← Strategy index</a>
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

function Home() {
  const docsByCategory = useMemo(() => {
    return docs.reduce<Record<string, RepoDoc[]>>((groups, doc) => {
      groups[doc.category] = groups[doc.category] ?? [];
      groups[doc.category].push(doc);
      return groups;
    }, {});
  }, []);

  return (
    <div className="stage">
      <div className="home hub">
        <div className="wordmark rise">DOSS</div>
        <div className="hub-hero">
          <h1 className="rise" style={{ animationDelay: "0.1s" }}>
            Strategy library
          </h1>
          <p className="rise" style={{ animationDelay: "0.18s" }}>
            One interface for the working thesis, hypotheses, research inputs, synthesis notes,
            and presentation-mode decks.
          </p>
        </div>

        <section className="hub-section rise" style={{ animationDelay: "0.24s" }}>
          <div className="section-head">
            <span>Presentation mode</span>
            <em>← → navigate · esc returns here</em>
          </div>
          <div className="deck-grid">
            {decks.map((deck, index) => (
              <a className="deck-card" href={`#/${deck.id}/1`} key={deck.id}>
                <span className="idx">{String(index + 1).padStart(2, "0")}</span>
                <strong>{deck.title}</strong>
                <em>{deck.date} · {deck.slides.length} slides</em>
              </a>
            ))}
          </div>
        </section>

        <section className="hub-section rise" style={{ animationDelay: "0.32s" }}>
          <div className="section-head">
            <span>Markdown table of contents</span>
            <em>{docs.length} files</em>
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
    return doc ? <MarkdownView doc={doc} /> : <Home />;
  }

  if (route.kind === "deck") {
    const deck = decks.find((candidate) => candidate.id === route.deckId);
    if (deck) {
      return (
        <Deck
          deck={deck}
          slideIndex={route.slide}
          onNavigate={(i) => (window.location.hash = `#/${deck.id}/${i + 1}`)}
          onExit={() => (window.location.hash = "#/")}
        />
      );
    }
  }

  return <Home />;
}
