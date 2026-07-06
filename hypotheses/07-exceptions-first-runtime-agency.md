# H7 — Runtime agency should start with exceptions, not forecasts

**Status:** gathering evidence (leaning supported; V3 sharpened the wedge to deductions/compliance)
**Opened:** 2026-07-06
**Source:** [Agentic AI V2 deep dive](../deepdives/2026-07-06-agentic-ai-v2.md); [runtime AI landscape research](../inputs/research/2026-07-06-runtime-ai-landscape.md); sharpened in [V3 proof points](../deepdives/2026-07-06-proof-points-v3.md)

## Claim

The first runtime AI loop DOSS ships should be **exception handling / ops hygiene** (stuck orders, short shipments, 3PL discrepancies, invoice mismatches) — not demand forecasting or planning. Exceptions are daily-frequency, low-stakes-per-instance (low trust barrier), require the cross-system picture only DOSS has, face no point-tool competition, and are pure LLM-agent territory. The agent earns trust on small actions before operators hand it POs; replenishment/planning (the working-capital money story) comes second, on top of that earned trust.

## Why it matters

This is the sequencing decision for the entire rung-3 roadmap. Getting it wrong in either direction is costly: leading with forecasting fights entrenched point tools with a lower trust ceiling; leading with autonomy on high-stakes actions risks the one-bad-PO trust collapse.

## Evidence for

- 2026-07-06: No mid-market point tool competes for exception handling — they're recommendation engines without execution ([landscape](../inputs/research/2026-07-06-runtime-ai-landscape.md)).
- 2026-07-06: Blue Yonder's enterprise agentic motion validates the pattern (agents that act, not advise) while ignoring the mid-market segment.
- 2026-07-06 (V3): The strongest exception class has hard dollars attached — retail chargebacks/deductions: $5B+/yr issued, up to 30% of gross sales in deductions, Walmart OTIF at 3% of COGS, and enforcement is now *system-triggered* while brands defend with spreadsheets and contingency-fee services ([pain survey](../inputs/research/2026-07-06-cpg-pain-survey.md)). Resolving/preventing these requires joining PO + EDI 856 + 3PL + invoice — exactly the cross-system record DOSS holds.
- 2026-07-06 (V3): Incumbents state "recommend, don't act" as design policy (NetSuite Next); autonomy ships only at enterprise (Blue Yonder) — the mid-market *acting* agent space is empty ([competitor survey](../inputs/research/2026-07-06-competitor-agentic-offerings.md)).

## Evidence against

- 2026-07-06 (V3): Fishbowl ships mid-market agentic replenishment + "Juno" assistant — a leading indicator the segment won't stay agent-free; the window is real but not leisurely ([competitor survey](../inputs/research/2026-07-06-competitor-agentic-offerings.md)).

## How to test

- Pull exception-type volume from current DOSS customers: what are the top 5 exception types, weekly counts, and minutes-per-resolution? (If exceptions aren't actually a big time sink, this hypothesis dies.)
- Prototype triage-and-propose on one exception type with one design partner; measure acceptance rate of agent proposals.
- In customer calls, tally: do operators describe their day as planning or firefighting?
