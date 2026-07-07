# Kurt — iteration 16: split iteration notes into Version History

**Source:** Kurt, 2026-07-08 (sixteenth prompt; verbatim below)

---

let's move the "iterations" files into a separate "Version History" section rather than having it in inputs/notes; it's confusing.

---

## Signal

- `inputs/notes/` was conflating two different things: genuine raw strategic signal (Kurt's own thinking) and a meta-log of every ask made to Claude across sessions — confusing when browsing the docs hub
- Fix: a new top-level `history/` directory holds all iteration-N note files (2 through 15, plus this one); the docs hub gets a dedicated "Version History" category
- Exception: iteration 1's note (`inputs/notes/2026-07-06-initial-observations.md`) stays in `inputs/notes/` — it's cited directly by H1–H6 as raw strategic-evidence source, not just a session log entry
