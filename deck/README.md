# DOSS Strategy Decks

Vite + React + TypeScript presentation app. Each deck is a TSX file; slides are keyboard-navigable (`←` `→` `space`, `esc` for the index).

Styling follows DOSS brand tokens extracted from doss.com (2026-07-06): greige palette (`#E6E3E0` bg, `#1E1E1E` ink), electric blue `#0D3CFC`, PP Neue Montreal headings (woff2 in `public/fonts/`, sourced from doss.com assets), Inter body. Tokens are CSS variables at the top of [src/styles.css](src/styles.css).

## Run

```sh
npm install   # first time
npm run dev   # present at http://localhost:5173
```

Deep-link a slide: `#/strategy-v0/4`.

## Add a deck

1. Create `src/decks/<name>.tsx` exporting a `DeckDef` — copy the structure of [strategy-v0.tsx](src/decks/strategy-v0.tsx). Slides are plain JSX using the shared classes (`kicker`, `headline`, `prose`, `cols`/`card`, `biglist`, `board`) and the `<Rise order={n}>` wrapper for staggered reveals.
2. Register it in [src/decks/index.ts](src/decks/index.ts).
3. `npm run build` to verify.
