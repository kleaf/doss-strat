import { ReactNode, useEffect } from "react";

export interface DeckDef {
  id: string;
  title: string;
  date: string;
  slides: ReactNode[];
}

interface DeckProps {
  deck: DeckDef;
  slideIndex: number;
  onNavigate: (index: number) => void;
  onExit: () => void;
}

export function Deck({ deck, slideIndex, onNavigate, onExit }: DeckProps) {
  const count = deck.slides.length;
  const i = Math.min(Math.max(slideIndex, 0), count - 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        onNavigate(Math.min(i + 1, count - 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        onNavigate(Math.max(i - 1, 0));
      } else if (e.key === "Home") {
        onNavigate(0);
      } else if (e.key === "End") {
        onNavigate(count - 1);
      } else if (e.key === "Escape") {
        onExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, count, onNavigate, onExit]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="stage">
      <div className="progress" style={{ width: `${((i + 1) / count) * 100}%` }} />
      <div className="slide" key={i}>
        {i > 0 && <div className="ghost-num">{pad(i + 1)}</div>}
        {deck.slides[i]}
      </div>
      <div className="chrome">
        <span>{deck.title}</span>
        <span>← → to navigate · esc for index</span>
        <span className="counter">
          <em>{pad(i + 1)}</em> / {pad(count)}
        </span>
      </div>
    </div>
  );
}

/** Staggered-reveal wrapper: give children sequential entrance delays. */
export function Rise({ order = 0, children }: { order?: number; children: ReactNode }) {
  return (
    <div className="rise" style={{ animationDelay: `${order * 0.12}s` }}>
      {children}
    </div>
  );
}
