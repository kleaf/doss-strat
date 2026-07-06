import { useEffect, useState } from "react";
import { Deck } from "./components/Deck";
import { decks } from "./decks";

// hash routes: "#/" (index) or "#/<deckId>/<slideNumber>"
function parseHash(): { deckId: string | null; slide: number } {
  const parts = window.location.hash.replace(/^#\/?/, "").split("/");
  if (!parts[0]) return { deckId: null, slide: 0 };
  const n = parseInt(parts[1] ?? "1", 10);
  return { deckId: parts[0], slide: (Number.isNaN(n) ? 1 : n) - 1 };
}

export default function App() {
  const [route, setRoute] = useState(parseHash);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const deck = decks.find((d) => d.id === route.deckId);

  if (!deck) {
    return (
      <div className="stage">
        <div className="home">
          <div className="wordmark rise">DOSS</div>
          <h1 className="rise" style={{ animationDelay: "0.1s" }}>
            Strategy decks
          </h1>
          <ul className="deck-list">
            {decks.map((d, i) => (
              <li key={d.id} className="rise" style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
                <a href={`#/${d.id}/1`}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="deck-title">{d.title}</span>
                  <span className="date">{d.date}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="hint rise" style={{ animationDelay: "0.4s" }}>
            open a deck · navigate with ← → · esc returns here
          </p>
        </div>
      </div>
    );
  }

  return (
    <Deck
      deck={deck}
      slideIndex={route.slide}
      onNavigate={(i) => (window.location.hash = `#/${deck.id}/${i + 1}`)}
      onExit={() => (window.location.hash = "#/")}
    />
  );
}
