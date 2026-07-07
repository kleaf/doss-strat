# H9 — DOSS is a growth engine, not just an ops platform

**Status:** gathering evidence
**Opened:** 2026-07-08
**Source:** Kurt's framing ([iteration 14](../history/2026-07-08-iteration-14-growth-engine-v5.md)); evidence from the internal [Value Stack framework](../inputs/internal/The-DOSS-Value-Stack---TX-Loops-Figure-8s-Composites-BusinessProcesses.html)

## Claim

DOSS's positioning should lead with customer growth outcomes, not category ("ERP") or mechanism ("operations cloud," "loops," "LIR"). The growth engine framing decomposes into four customer pillars, each capping revenue growth today when it fails: **closing the books, introducing new products, ensuring product availability, introducing new sales channels.** DOSS's differentiation is that it removes all four caps through one connected system, rather than four separate point tools.

## Why it matters

This is a positioning-altitude claim, not a new product claim — it asks whether "growth engine for physical-goods companies" should replace or sit above "adaptive ERP" / "operations cloud" as the destination narrative (see [STRATEGY.md](../STRATEGY.md) open question on this). It also disciplines internal process/architecture work (TX loops, figure-8s, LIR) to stay in service of a customer-legible story rather than becoming the story itself — exactly the drift Kurt flagged as having crept back in.

## Sub-claims and evidence

### 1. Closing the books
- **For:** Tag Wall's bank credit-line renewal hinged on a COGS report DOSS couldn't yet reliably produce; SLM's churn post-mortem named the 3-way match as accounting's core value prop, and its absence is why they left; Sauz ran 3 consecutive real closes through DOSS → QBO; Magic Mind pushed 62 clean JEs in 14 days; 29 customers name this their top ask.
- **Against / risk:** Verve's COGS JEs still fail 44% of the time in the same window invoicing runs 23/23 clean — the pillar's proof point and its biggest current weakness sit in the same account.

### 2. Introducing new products
- **For:** Ark spends 70% of team time hand-building 30–40 pricing sheets/week; Verve replaced Cin7 specifically for SKU-profitability visibility; Magic Mind wants the same.
- **Against / risk:** this pillar has no named BusinessProcess in the internal architecture yet (unlike Close and Channel onboarding) — the least mature of the four, evidence is thinner and more indirect (inferred from UMD-loop pain, not a named process with its own proof set).

### 3. Ensuring product availability
- **For:** Instant Hydration's $2M Shopify↔Stord unfulfilled-order gap; Pavoi's ~1,000 missed orders in a day from silent routing failure; Echelon churned entirely over bundle-routing failures; Magic Mind 3PL sync 14/14 clean, Spread the Love 30/30 clean; 13 customers want overridable replenishment.
- **Against / risk:** Kahawa's false-replenishment-trigger incident shows automated availability tooling can actively damage trust if it fires on bad data — the pillar's upside and downside are the same mechanism.

### 4. Introducing new sales channels
- **For:** named the #1 critical event in DOSS's own SPICED buyer research; Gorgie scaled 5,000→15,000 doors; Snackwise ran 345K transactions on zero custom integrations and renewed on it; Eight Sleep runs 10 3PLs simultaneously; Mezcla stood up weekly EDI O2C cadence.
- **Against / risk:** none surfaced yet in this document; strongest-evidenced pillar of the four.

## How to test

- Ask the field: does leading discovery calls with these four pillars (instead of "operations cloud" or loop/architecture language) change how prospects respond in the first 10 minutes? (Directly testable against [H4](04-value-prop-front-and-center.md).)
- Track whether "Introducing New Products" gets promoted to a named BusinessProcess with its own external boundary/activation predicate — the clearest internal signal this hypothesis has been acted on, not just agreed with.
- Watch whether "growth engine" appears in external positioning (website, sales decks) within two quarters, or stays an internal frame only — resolves the open question in STRATEGY.md about whether it replaces or supplements "adaptive ERP."
