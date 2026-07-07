# CLAUDE.md — operating this repo

This repo tracks two tracks of DOSS's thinking: **Product Strategy** (STRATEGY.md + hypotheses/) and **Product Process** (PROCESS.md + process/). Structure and flow are described in [README.md](README.md). Your job in any session here is usually one of the workflows below.

## Workflows

### Every iteration from Kurt (always, before anything else)
Each substantive prompt from Kurt is an iteration of his thinking. Save it verbatim as `history/YYYY-MM-DD-iteration-N-slug.md` with a `## Signal` section, and add a row to [ITERATIONS.md](ITERATIONS.md) linking the note and what it changed. `history/` is version log, not strategic input — never cite it as evidence in a hypothesis file (the sole exception is iteration 1, `inputs/notes/2026-07-06-initial-observations.md`, which predates this split and is genuinely raw strategic content H1–H6 cite directly).

### Ingest an input ("here's a call transcript / Slack thread / my notes…")
1. Save it verbatim under the right `inputs/` subdir as `YYYY-MM-DD-slug.md` with a source header.
2. Add a `## Signal` section: 1–5 bullets, each tagged to the hypothesis it touches (`→ H2`).
3. Update the touched hypothesis files: add dated bullets under **Evidence for** / **Evidence against**, linking the input file. Update status if warranted.
4. Do NOT rewrite STRATEGY.md on a single input — flag tension for the next synthesis instead.

### Run a synthesis ("synthesize" / "what's moved?")
1. Diff: which `inputs/` files are new since the last `synthesis/` file?
2. Write `synthesis/YYYY-MM-DD-synthesis.md` answering the four questions in [synthesis/README.md](synthesis/README.md).
3. Propose STRATEGY.md edits to Kurt rather than silently rewriting the thesis; small factual updates are fine to make directly. Add a Changelog entry for any STRATEGY.md change.

### Ingest or synthesize process signal ("here's a meeting note / process question")
Mirrors the strategy workflow, in the process track: raw signal goes verbatim under `process/inputs/` (or `process/inputs/research/` for external best-practice research), synthesis and proposed mechanisms go in `process/deepdive/`, and PROCESS.md changes only when a deep-dive pass justifies it — propose edits rather than silently rewriting the thesis, and add a Changelog entry for any change.

### Make a presentation ("turn X into a deck")
1. Decks live in `deck/src/decks/`. Copy the structure of an existing deck file; register it in `deck/src/decks/index.ts`. Every deck needs a `track: "strategy" | "process"` field so it shows up in the right track hub.
2. Keep slides to one idea each; pull content from STRATEGY.md/PROCESS.md and their hypotheses/deep-dives, don't invent new claims.
3. Verify with `npm run build` in `deck/`, and view with `npm run dev`.

### Track assignment for new files
A doc's track is inferred purely from its path (`deck/vite.config.ts`'s `trackFromPath`): `PROCESS.md` and anything under `process/` is the Process track; everything else defaults to Strategy, including `history/`. Keep new process content under `process/` so it's picked up automatically — no manual tagging needed for docs (only decks need the explicit `track` field). `history/` gets its own "Version History" doc-hub category via `categoryFromPath`, kept separate from "Inputs."

### Fetch fresh signal from company channels
- **Slack / Linear / Notion:** connectors are installed but need authorization in claude.ai connector settings (or `/mcp` in an interactive session). If unauthorized, say so and ask Kurt to paste instead.
- **Fireflies:** no MCP connector exists (checked 2026-07-06). Kurt pastes transcripts or drops exports into `inputs/calls/`.

## Rules

- **Voice rule for STRATEGY.md, PROCESS.md, and decks (Kurt, iteration 18):** write present-tense, current-state only, for a DOSS board member or a customer's executive sponsor. Never narrate version evolution in the body — no "corrected from v5," "new this pass," "demoted from." History lives in ITERATIONS.md, the changelog at the bottom, hypotheses files, and git. Minimize internal jargon (SPICED archetype codenames, LIR, TTRTX); plain English over codenames.
- Inputs are immutable after capture; thinking evolves in hypotheses/synthesis/STRATEGY.
- Every evidence bullet in a hypothesis file must link a specific input file and date.
- Hypothesis statuses: `untested`, `gathering evidence`, `supported`, `challenged`, `killed`, `promoted`.
- Commit after each workflow with a message describing what moved (e.g., `ingest: 3 calls; H2 +2 for, H4 +1 for`).
