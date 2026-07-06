# DOSS Strategy App

Vite + React + TypeScript strategy library and presentation app.

The home page is a table-of-contents hub for every markdown file in the repo plus presentation-mode entry points for each deck. Deck slides are keyboard-navigable (`←` `→` `space`, `esc` for the index). Markdown is loaded at build/dev time from the repo root through the Vite `repo-docs` plugin in [vite.config.ts](vite.config.ts).

Styling follows DOSS brand tokens extracted from doss.com (2026-07-06): greige palette (`#E6E3E0` bg, `#1E1E1E` ink), electric blue `#0D3CFC`, PP Neue Montreal headings (woff2 in `public/fonts/`, sourced from doss.com assets), Inter body. Tokens are CSS variables at the top of [src/styles.css](src/styles.css).

## Run

```sh
npm install   # first time
npm run dev -- --host 0.0.0.0 --port 4180
```

Open the app index at `http://localhost:4180/`.

Deep-link examples:

- Document reader: `#/docs/STRATEGY.md`
- Presentation mode: `#/proof-points-v3/6`

## Add a deck

1. Create `src/decks/<name>.tsx` exporting a `DeckDef` — copy the structure of [proof-points-v3.tsx](src/decks/proof-points-v3.tsx). Slides are plain JSX using the shared classes (`kicker`, `headline`, `prose`, `cols`/`card`, `biglist`, `board`) and the `<Rise order={n}>` wrapper for staggered reveals.
2. Register it in [src/decks/index.ts](src/decks/index.ts).
3. `npm run build` to verify.
