# H9 — DOSS is a growth engine, not just an ops platform

**Status:** gathering evidence
**Opened:** 2026-07-08
**Source:** Kurt's framing ([iteration 14](../history/2026-07-08-iteration-14-growth-engine-v5.md)); evidence from the internal [Value Stack framework](../inputs/internal/The-DOSS-Value-Stack---TX-Loops-Figure-8s-Composites-BusinessProcesses.html); pillars corrected against capability/roadmap evidence in [iteration 17](../history/2026-07-08-iteration-17-sanity-check-four-pillars.md)

## Claim

DOSS's positioning should lead with customer growth outcomes, not category ("ERP") or mechanism ("operations cloud," "loops," "LIR"). The growth engine framing decomposes into four customer pillars, each capping revenue growth today when it fails: **closing the books (Op/Fin), never caught short (Procure-to-Pay), knowing what you actually have (Inventory Management), and change it once, it's everywhere (Master Data Management).** DOSS's differentiation is that it removes all four caps through one connected system, rather than four separate point tools.

## Why it matters

This is a positioning-altitude claim, not a new product claim — it asks whether "growth engine for physical-goods companies" should replace or sit above "adaptive ERP" / "operations cloud" as the destination narrative (see [STRATEGY.md](../STRATEGY.md) open question on this). It also disciplines internal process/architecture work (TX loops, figure-8s, LIR) to stay in service of a customer-legible story rather than becoming the story itself.

## V6 correction (2026-07-08): the original four pillars weren't checked against capability/roadmap evidence

The v5 pillars (closing the books, introducing new products, ensuring availability, introducing new sales channels) were taken from Kurt's own framing verbatim. Sanity-checked against the Value Stack doc and re-grounded to the four loops Kurt named as the actual near-term roadmap focus (Procure-to-Pay, Inventory Management, Link to Finance, Master Data Management), three findings:

1. **"Ensuring product availability" was actually two loops merged into one pillar.** The evidence split cleanly: Procure-to-Pay evidence (Kahawa's replenishment trigger, 13 customers wanting overridable forecasts, Smash Foods MRP) is about the supply-side action; Inventory Management evidence (Instant Hydration's $2M gap, Pavoi's missed orders, Magic Mind/Spread the Love sync stats) is about the visibility layer that supply-side action depends on. Merging them hid a real weak spot: Eight Sleep's 70% receiving no-match rate, which blocks the entire landed-cost build, wasn't visible under the combined "availability" framing.
2. **"Introducing new products" was too narrow a label for what UMD actually does.** It's every master-data change — item, BOM, vendor, price — not just new-SKU launches. New-product launch stays as the flagship example, but the pillar and its evidence (Ark's 70% time on pricing, Eight Sleep's bulk-CSV gap) are broader than the old name implied.
3. **"Introducing new sales channels" doesn't belong at this altitude right now.** It's real, well evidenced (Gorgie, Snackwise, Clean Age, Mezcla), and was even named the #1 critical event in DOSS's own SPICED buyer research — but it isn't one of the four loops Kurt identified as the near-term roadmap focus. Structurally, channel-onboarding speed is downstream of Inventory Management (trustworthy positions) and Master Data Management (channel-alias propagation already working) — it's the payoff once those two loops hold cadence, not an independent capability being built right now.

## Sub-claims and evidence (corrected)

### 1. Closing the books (Op/Fin)
- **For:** Tag Wall's bank credit-line renewal hinged on a COGS report DOSS couldn't yet reliably produce; SLM's churn post-mortem named the 3-way match as accounting's core value prop, and its absence is why they left; Sauz ran 3 consecutive real closes through DOSS → QBO; Magic Mind pushed 62 clean JEs in 14 days; 29 customers name this their top ask.
- **Against / risk:** Verve's COGS JEs still fail 44% of the time in the same window invoicing runs 23/23 clean — the pillar's proof point and its biggest current weakness sit in the same account.
- **Status:** unchanged from v5 — the strongest-evidenced pillar of the four, confirmed "highest retention weight" in the Value Stack doc itself.

### 2. Never caught short (Procure-to-Pay)
- **For:** Carrom's supplier-email PO loop has run ~140 times with zero failures ("the most reliable automation on the account"); Smash Foods runs full MRP (forecast → BOM explosion → PO recs) through the loop; Athena's co-man receipt gap is the #1 architectural risk four straight weekly reviews.
- **Against / risk:** Eight Sleep's receiving no-match rate is 70%, blocking the landed-cost build entirely; Kahawa's false replenishment triggers caused real financial damage — this pillar's upside and downside are literally the same mechanism (an automated trigger firing on bad data).
- **Status:** new pillar this pass, split out of v5's "ensuring availability."

### 3. Knowing what you actually have (Inventory Management)
- **For:** Instant Hydration's $2M Shopify↔Stord unfulfilled-order gap; Pavoi's ~1,000 missed orders in a day from a routing bug that only fires on untrustworthy positions; Magic Mind 3PL sync 14/14 clean; Spread the Love 30/30 clean; Eight Sleep reconciles across 10 3PLs simultaneously.
- **Against / risk:** Echelon churned entirely over bundle-routing failure through its 3PL — the clearest evidence this pillar's failure mode is not just lost revenue but lost accounts.
- **Status:** narrowed from v5 — the "13 customers want overridable replenishment" evidence moved to Procure-to-Pay, where it actually belongs.

### 4. Change it once, it's everywhere (Master Data Management)
- **For:** Ark spends 70% of team time hand-building 30–40 pricing sheets/week; Verve replaced Cin7 specifically for SKU-profitability visibility; Magic Mind wants the same; the Value Stack doc's own D5 revision confirms UMD is now a first-class change-transaction loop, not merely a gate.
- **Against / risk:** Eight Sleep's bulk-CSV path is "the broken half" of an otherwise-working single-SKU flow; unlike the other three pillars, UMD has no single buyer archetype that leads with it — it's cross-cutting, which may make it harder to sell as a standalone story.
- **Status:** broadened from v5's "introducing new products," which was really just UMD's most visceral example, not its full scope.

### 5. Introducing new sales channels (demoted, tracked separately)
- **For:** named the #1 critical event in DOSS's own SPICED buyer research; Gorgie scaled 5,000→15,000 doors; Snackwise ran 345K transactions on zero custom integrations and renewed on it; Mezcla stood up weekly EDI O2C cadence; Clean Age had a live Walmart reset to hit.
- **Against / risk:** not a weakness in the evidence itself (this remains the most customer-visible growth story of the original five) — the risk is purely one of sequencing: selling it as a co-equal pillar before Inventory Management and Master Data Management hold cadence oversells a capability that depends on two other loops being solid first.
- **Status:** demoted from top-level pillar to a tracked, not-yet-promoted claim. Revisit once IMS and UMD both hold cadence at the ICP fence (see STRATEGY.md open question on defining that trigger concretely).

## How to test

- Ask the field: does leading discovery calls with these four pillars (instead of "operations cloud" or loop/architecture language) change how prospects respond in the first 10 minutes? (Directly testable against [H4](04-value-prop-front-and-center.md).)
- Track whether Master Data Management gets promoted to a named BusinessProcess with its own external boundary/activation predicate — the clearest internal signal this hypothesis has been acted on, not just agreed with.
- Define "holds cadence" concretely enough for IMS and UMD that promoting "introducing new sales channels" back to a top-level pillar is a measurable trigger, not a judgment call.
- Watch whether "growth engine" appears in external positioning (website, sales decks) within two quarters, or stays an internal frame only.
