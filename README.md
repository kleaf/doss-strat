# DOSS Strategy & Process Framework

A living system for tracking DOSS's thinking across two tracks: **Product Strategy** (what we build, and why) and **Product Process** (how we plan, ship, and stay accountable). The [deck app](deck/README.md) presents both as a single two-track library — pick a track, browse its docs, or present its decks.

## How it works

Each track flows in the same one-way direction, from raw signal to presentable thesis:

```
inputs/            ──►  hypotheses/          ──►  STRATEGY.md  ──►  deck/
(raw signal)             (claims + evidence)       (current thesis)   (presentable output)

process/inputs/     ──►  process/deepdive/    ──►  PROCESS.md   ──►  deck/
(raw signal)             (synthesis)                (current thesis)   (presentable output)
```

1. **Raw signal lands in `inputs/`** — call transcripts/notes, Slack threads, Linear themes, customer asks, and Kurt's own notes. Never edited after capture; dated filenames (`YYYY-MM-DD-slug.md`).
2. **Hypotheses live in `hypotheses/`** — one file per strategic claim. Each has a status, evidence for and against (linked back to inputs), and a concrete way to test it. Hypotheses are meant to be killed or promoted, not admired.
3. **`STRATEGY.md` is the current thesis** — a one-pager that represents our best current answer. It changes only when the evidence in the hypothesis files justifies it. It is versioned via git history.
4. **`synthesis/`** holds periodic (roughly weekly/biweekly) synthesis passes: what new signal arrived, which hypotheses moved, what questions opened or closed.
5. **`deck/`** is a TypeScript (Vite + React) presentation app. Key work product gets converted into a deck there for presenting to larger groups; its home page is a chooser between the Product Strategy and Product Process tracks. See [deck/README.md](deck/README.md).

## Directory map

| Path | Track | What goes there |
|---|---|---|
| `STRATEGY.md` | Strategy | The living strategy one-pager (current best thesis) |
| `hypotheses/` | Strategy | One file per strategic hypothesis, with evidence and status |
| `inputs/calls/` | Strategy | Fireflies transcripts / call notes |
| `inputs/slack/` | Strategy | Notable Slack threads and discussions |
| `inputs/linear/` | Strategy | Product/roadmap signal from Linear |
| `inputs/customers/` | Strategy | Customer asks, objections, wins, losses |
| `inputs/notes/` | Strategy | Kurt's raw observations and thinking |
| `inputs/research/`, `inputs/internal/` | Strategy | External research and internal VoC/telemetry exports |
| `deepdives/` | Strategy | Focused elaborations of one strategic area that STRATEGY.md links to |
| `synthesis/` | Strategy | Dated synthesis passes across all of the above |
| `history/` | Both | Version history — every substantive ask made to Claude, verbatim, logged in [ITERATIONS.md](ITERATIONS.md). Not strategic input; don't cite it as evidence in a hypothesis. |
| `PROCESS.md` | Process | The living product-process one-pager (current best strawman) |
| `process/inputs/` | Process | Raw signal for the process track — Kurt's notes, meeting logs, external research |
| `process/deepdive/` | Process | Focused synthesis of the process strawman that PROCESS.md links to |
| `deck/` | Both | TypeScript presentation app for sharing work product from either track |

A file's track is inferred by path: anything under `process/` or `PROCESS.md` itself is the Process track; everything else is Strategy, including `history/`. Decks declare their track explicitly (`track: "strategy" | "process"` in the `DeckDef`). Within the docs hub, `history/` gets its own "Version History" category, separate from "Inputs," since it's session log rather than strategic content.

## Conventions

- **Date everything.** Files in `inputs/` and `synthesis/` are named `YYYY-MM-DD-slug.md`.
- **Cite signal.** When a hypothesis file claims evidence, link the specific input file.
- **Statuses** for hypotheses: `untested` → `gathering evidence` → `supported` / `challenged` / `killed` / `promoted` (folded into STRATEGY.md).
- **Commit often.** The git history *is* the record of how thinking evolved.
