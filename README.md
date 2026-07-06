# DOSS Strategy Framework

A living system for tracking DOSS product strategy: hypotheses, evidence, open questions, and the synthesis that turns them into decisions and presentations.

## How it works

Everything flows in one direction:

```
inputs/  ──►  hypotheses/  ──►  STRATEGY.md  ──►  deck/
(raw signal)  (claims + evidence)  (current thesis)   (presentable output)
```

1. **Raw signal lands in `inputs/`** — call transcripts/notes, Slack threads, Linear themes, customer asks, and Kurt's own notes. Never edited after capture; dated filenames (`YYYY-MM-DD-slug.md`).
2. **Hypotheses live in `hypotheses/`** — one file per strategic claim. Each has a status, evidence for and against (linked back to inputs), and a concrete way to test it. Hypotheses are meant to be killed or promoted, not admired.
3. **`STRATEGY.md` is the current thesis** — a one-pager that represents our best current answer. It changes only when the evidence in the hypothesis files justifies it. It is versioned via git history.
4. **`synthesis/`** holds periodic (roughly weekly/biweekly) synthesis passes: what new signal arrived, which hypotheses moved, what questions opened or closed.
5. **`deck/`** is a TypeScript (Vite + React) presentation app. Key work product gets converted into a deck there for presenting to larger groups. See [deck/README.md](deck/README.md).

## Directory map

| Path | What goes there |
|---|---|
| `STRATEGY.md` | The living strategy one-pager (current best thesis) |
| `hypotheses/` | One file per strategic hypothesis, with evidence and status |
| `inputs/calls/` | Fireflies transcripts / call notes |
| `inputs/slack/` | Notable Slack threads and discussions |
| `inputs/linear/` | Product/roadmap signal from Linear |
| `inputs/customers/` | Customer asks, objections, wins, losses |
| `inputs/notes/` | Kurt's raw observations and thinking |
| `deepdives/` | Focused elaborations of one strategic area (e.g., agentic AI) that STRATEGY.md links to |
| `synthesis/` | Dated synthesis passes across all of the above |
| `deck/` | TypeScript presentation app for sharing work product |

## Conventions

- **Date everything.** Files in `inputs/` and `synthesis/` are named `YYYY-MM-DD-slug.md`.
- **Cite signal.** When a hypothesis file claims evidence, link the specific input file.
- **Statuses** for hypotheses: `untested` → `gathering evidence` → `supported` / `challenged` / `killed` / `promoted` (folded into STRATEGY.md).
- **Commit often.** The git history *is* the record of how thinking evolved.
