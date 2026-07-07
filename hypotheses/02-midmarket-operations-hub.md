# H2 — The wedge is mid-market operations: one end-to-end value chain

**Status:** supported (by market structure + company traction; still needs win/loss data)
**Opened:** 2026-07-06
**Source:** [Kurt's initial observations](../inputs/notes/2026-07-06-initial-observations.md)

## Claim

Mid-market physical-goods companies run their operations across a fragmented stack — ordering/EDI, e-commerce sites, 3PLs, QuickBooks, spreadsheets in between. Nobody owns the end-to-end picture. Bringing that data together to track and optimize the entire order-to-cash / procure-to-pay flow is a wedge big enough to build an ERP company on.

## Why it matters

If true, DOSS's near-term product priority is breadth of integration + a genuinely unified operational model, and the buyer is an ops leader (VP Ops / COO), not the CFO. If false — if customers really just want a better single module — the roadmap looks completely different.

## Assumptions inside this claim

- The pain of fragmentation is acute enough that someone will pay to fix it *before* any single system breaks.
- Mid-market is the right altitude: big enough to have the fragmentation problem, small enough to adopt a new system without a 2-year procurement cycle.
- The data can actually be joined well enough (identifiers, timing, formats) to produce trustworthy end-to-end views.

## Evidence for

- 2026-07-06: This is already DOSS's declared market — $20–250M physical-goods brands across procurement/inventory/orders/fulfillment — and investors funded it at $55M Series B ([doss.com research](../inputs/research/2026-07-06-doss-positioning.md)).
- 2026-07-06: The AI-ERP cohort (Rillet, Campfire, DualEntry, Nominal) is almost entirely finance-first for software companies — the ops/physical-goods lane is uncontested among well-funded startups ([landscape research](../inputs/research/2026-07-06-ai-erp-landscape.md)).
- 2026-07-06: a16z thesis independently endorses the wedge logic: target size/complexity bands, catch QuickBooks-graduation moments, land with a wedge and expand ([landscape research](../inputs/research/2026-07-06-ai-erp-landscape.md)).
- 2026-07-06: Intuit Ventures' strategic investment + plugs-into-QuickBooks stance make "land beside the accounting system" concrete.
- 2026-07-06 (V3): DOSS-commissioned study — 9 in 10 CPG ops teams hit at least one operational consequence in a year: canceled launches (25%), missed retail windows (25%), stockouts (22%), excess dumped at discount (19%), lost retail accounts (16%). The pain is bidirectional and rooted in manual/disconnected systems ([pain survey](../inputs/research/2026-07-06-cpg-pain-survey.md)).
- 2026-07-06 (V3): The pre-DOSS coping stack is spreadsheets + consultants + deduction-recovery services — the real competition at pain level is headcount and services, not software.

## Evidence against

- *(none captured yet — the missing evidence is deal-level: does the end-to-end pain actually open and close sales?)*

## How to test

- Tag every customer call in [inputs/calls/](../inputs/calls/) with which systems they mention and where the pain sits (ordering, fulfillment, accounting sync, visibility).
- Count: in the last 10 deals, how often was "we can't see across our systems" the stated pain vs. "system X is failing us"?
- Identify which cross-system view (e.g., true landed cost, inventory position across 3PLs, order status across channels) customers ask for first — that's the wedge inside the wedge.

## Open questions

- Where is the mid-market boundary for us — revenue band, SKU count, order volume, channel count?
- Who feels the pain most acutely and has budget: COO, VP Ops, head of supply chain?

## V4 update (2026-07-06): internal VoC materially supports the wedge

Additional evidence for:
- 2026-07-06 (V4): Salesforce discovery synthesis found the top buyer needs across 66 substantive 1H FY26 opportunities are exactly end-to-end operations pains: one source of truth (40/66), real-time inventory (33/66), scale without headcount (22/66), PO automation / three-way match (21/66), COGS/landed cost accuracy (18/66), retail/EDI readiness (18/66), order routing (16/66), planning/MRP (16/66), and offloading a failing ERP while keeping the GL (15/66) ([internal VoC](../inputs/internal/Top-10-Customer-ERP-Ops-Requirements---1H-FY26-SPICED-LIR.html)).
- 2026-07-06 (V4): The SPICED archetypes map the wedge by buyer: Drowning Operator, We've Outgrown This, Disillusioned Incumbent, ERP Control Without the ERP, Numbers I Can't Trust, and Retail Is Coming. All are operational-system-of-record pains, not generic ERP-suite appetite ([internal VoC](../inputs/internal/Top-10-Customer-ERP-Ops-Requirements---1H-FY26-SPICED-LIR.html)).

Status note: this hypothesis is now supported by market structure, public traction, and internal discovery data; remaining validation is win/loss causality.

## V5 update (2026-07-08): named account evidence across the whole value chain

- 2026-07-08 (V5): The internal Value Stack framework grounds the wedge in named accounts spanning the full chain, not just survey counts: Instant Hydration ($2M Shopify↔Stord unfulfilled-order gap), Pavoi (~1,000 silently missed orders/day), Gorgie (5,000→15,000 doors), Snackwise (345K transactions on zero custom integrations), Eight Sleep (10 3PLs run simultaneously) ([Value Stack](../inputs/internal/The-DOSS-Value-Stack---TX-Loops-Figure-8s-Composites-BusinessProcesses.html)). See [H9](09-growth-engine-not-ops-platform.md) for the full pillar-by-pillar breakdown.
