# DOSS Strategy — Working Thesis

> **Status:** v5, 2026-07-08. v5 incorporates the internal Value Stack framework (TX loops → figure-8s → composites → BusinessProcesses) from `inputs/internal/`, and re-elevates customer pain and customer value above process/architecture detail — the mechanism is real and stays in this document, but it no longer leads. Earlier: v1 research refinement, v2 agentic-AI core ([deep dive](deepdives/2026-07-06-agentic-ai-v2.md)), v3 proof points ([deep dive](deepdives/2026-07-06-proof-points-v3.md)), v4 loop-shaped operating thesis. Iteration trail: [ITERATIONS.md](ITERATIONS.md). Evidence status per claim lives in [hypotheses/](hypotheses/).

## Where DOSS stands today (facts, not strategy)

- **Product:** Operations Cloud = ARP (composable tables/forms/workflows) + IDP (master-data unification layer) + DataStudio (real-time BI) + Dossbot (AI copilot).
- **Market:** mid-market physical goods ($20–250M revenue) — consumer goods, food & bev, health & beauty, manufacturing, distribution.
- **Capital:** $73M raised; Series B co-led by Madrona + Premji, with **Intuit Ventures** as strategic. VP Sales hired from NetSuite/Coupa.
- **Positioning today is dual:** website says "the ERP evolved / ERP alternative"; press says "middleware that plugs into existing ERPs and QuickBooks."
- **Internal buyer evidence:** 77 1H FY26 opportunities entered Discovery; 66 had substantive notes. Top needs: one source of truth (40/66), trustworthy inventory (33/66), scale without headcount (22/66), PO automation / three-way match (21/66), accurate COGS / landed cost / margin (18/66), retail / EDI readiness (18/66), adaptability (17/66), order routing (16/66), planning/MRP (16/66), offload failing ERP while keeping the GL (15/66) ([internal VoC](inputs/internal/Top-10-Customer-ERP-Ops-Requirements---1H-FY26-SPICED-LIR.html)).
- **Internal retention evidence:** confirmed churns and silent accounts share the same failure mode: real transaction volume never flowed through DOSS automatically, or flowed and then left. Go-live is not the value event; the first successful end-to-end transaction, repeated at cadence and verified at the external boundary, is ([Value Loops / LIR](inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).

## The growth engine thesis

**DOSS is not just an ERP or an operations platform — it is the growth engine for companies that make physical goods, starting with CPG.** Growth for these businesses is capped by four things breaking down before revenue can scale: they can't close the books fast enough to trust their own numbers, can't launch new products without weeks of manual busywork, can't guarantee the product is actually where it needs to be, and can't stand up new sales channels fast enough to catch a retail or marketplace window. DOSS's job is to remove all four caps — not just record what happened after the fact. "Operations cloud" remains the lane and "adaptive ERP" remains the underlying mechanism (below); **growth engine is the destination promise**, and it is what should lead every customer- and exec-facing narrative from here forward.

## The four customer growth pillars

Real evidence below is drawn from the internal Value Stack framework ([TX Loops → Figure-8s → Composites → BusinessProcesses](inputs/internal/The-DOSS-Value-Stack---TX-Loops-Figure-8s-Composites-BusinessProcesses.html)) — translated out of its internal architecture language into what it actually says about customers, because that architecture is the mechanism, not the message.

### 1. Closing the books

**Pain:** Tag Wall's bank credit-line renewal hinged on a COGS report DOSS couldn't yet produce reliably — the underlying money-writers were broken, so no trustworthy snapshot existed when the bank asked. Verve's CFO won't call the DOSS implementation "done" until the COGS report is trustworthy; today, COGS journal entries still fail 44% of the time even while invoicing runs clean in the same window. SLM's own churn post-mortem named the three-way match as "the core value prop for accounting" — its absence is why they left.

**DOSS answer:** the close runs on a clock inside DOSS and posts straight to the GL (QuickBooks, NetSuite, IES) — no Excel backfill, exceptions surfaced instead of hunted.

**Proof:** Sauz ran three consecutive months of real closes through DOSS → QBO; Magic Mind pushed 62 clean journal entries in 14 days; 29 customers have named this their primary ask.

**Growth link:** a brand that trusts its own numbers can raise capital and extend credit lines. Closing the books isn't bookkeeping — it's the gate to everything else a growing company needs to do.

### 2. Introducing new products

**Pain:** Ark spends **70% of its team's time every week** hand-building 30–40 pricing sheets. New SKUs, BOM changes, and price updates don't propagate cleanly to every channel a product touches. Eight Sleep's single-SKU approval path works, but bulk changes are "the broken half."

**DOSS answer:** one change — item, BOM, vendor, or price — approved once and propagated automatically to every channel alias (Shopify listing, Amazon ASIN, EDI item code, vendor SKU) instead of being manually re-keyed everywhere.

**Proof:** Verve replaced Cin7 specifically for SKU-profitability visibility; Magic Mind is asking for the same today.

**Growth link:** product-innovation velocity is the entire premise of the macro bet ([H6](hypotheses/06-stable-markets-dynamic-systems.md)) — a brand that can't launch new SKUs fast can't compete no matter how good its back-office operations are. **This is also the least mature of the four pillars today** — see Open Questions.

### 3. Ensuring product availability

**Pain:** Instant Hydration had a **$2M gap** between Shopify and its 3PL (Stord) in unfulfilled orders that neither system was really tracking. Carrom says flatly they're "flying blind." Pavoi silently missed **~1,000 orders in a single day** from a routing bug. Echelon churned entirely over bundle-routing failures through its 3PL.

**DOSS answer:** one reconciled inventory position across every 3PL, warehouse, and channel, feeding automated replenishment and order routing that only commits inventory it can actually see.

**Proof:** Magic Mind's 3PL sync runs 14/14 clean, nightly; Spread the Love runs 30/30, daily; 13 customers are explicitly asking for replenishment they can override by hand, not a black box.

**Growth link:** every missed order or phantom stockout is lost revenue, and at the extreme (Echelon) a lost customer entirely. Availability isn't an ops metric — it's top-line growth left on the table.

### 4. Introducing new sales channels

**Pain:** launching a new retailer, marketplace, or region is named the single most critical event in DOSS's own buyer research (the SPICED model) — and it's won or lost on speed: Clean Age had a live Walmart reset to hit; Selkirk had a hard e-invoicing deadline in Malaysia.

**DOSS answer:** a new channel goes live on a fast "day-1 rail" (native forms, portal, PDF parsing) in week one, with EDI and deeper integration hardening underneath the same record afterward — the channel doesn't wait for the integration to be perfect.

**Proof:** Gorgie scaled from 5,000 to 15,000 doors on DOSS; Snackwise ran 345,000 transactions through zero custom integrations and renewed specifically because of it; Eight Sleep runs 10 different 3PLs simultaneously; Mezcla stood up weekly EDI order-to-cash cadence (850→810).

**Growth link:** the most direct growth lever of the four — every new channel DOSS turns on fast is revenue surface a brand couldn't otherwise have reached.

## The mechanism: how the growth engine runs

The four pillars above are the promise; this section is the machinery that makes them real — internal, not customer-facing, and it should never be what leads a strategy conversation again.

**DOSS is the operations cloud for mid-market physical-goods brands: it lands beside the GL by activating one productized Value Loop, becomes indispensable as real transactions flow through it automatically, and compounds into the adaptive ERP as AI keeps those loops running, improving, and expanding.**

The V4 revision was the move from a category thesis to an operating thesis. The new spine is: **one loop live, external boundary verified, recurring throughput measured, outcome receipt delivered.** The V5 Value Stack document supersedes the earlier "Value Loops v2" taxonomy with a four-level stack — **TX Loops (survival) → Figure-8s (trust/integrity) → Composites (insight) → BusinessProcesses (autonomy)** — and maps directly onto the four pillars above: Close the Books and Onboarding a Sales Channel are already named BusinessProcesses (Level 4) in that framework; Ensuring Availability is served by the Inventory Positions composite plus the Order Routing and Automated Replenishment figure-8s; **Introducing New Products is served by the underlying master-data (UMD) loop but is not yet named as its own BusinessProcess** — the gap flagged above.

## The strategic moves, in order

### 1. Own the physical-goods operations lane

The AI-ERP wave is real ($100M+ rounds at Campfire, Rillet) but mostly **finance-first** — GL, close, consolidation, mostly for software companies. Internal discovery confirms DOSS is not chasing a vague ERP replacement desire: buyers repeatedly cite fragmented operating truth, inventory trust, PO/procurement automation, retail readiness, and COGS/landed-cost accuracy. That is a distinct lane: procurement → inventory → orders → fulfillment → the accounting boundary.

Strategy: name the lane loudly ("operations cloud," not "another AI ERP"), and let Rillet/Campfire teach the market that legacy ERP is replaceable while DOSS owns the physical-goods value chain.

### 2. Land loop-shaped, not suite-shaped

The a16z wedge logic was right but too abstract. Internal LIR work makes it operational:

- **Contracts can stay suite-shaped; delivery must be loop-shaped.** The order form names the lead loop and business objective; implementation sequences one transaction cycle instead of the whole ERP surface.
- **Every loop has a day-1 rail and a durable rail.** Native forms, AI document parsing, CSV, and email get the customer into the path immediately; EDI, GL sync, and 3PL APIs harden underneath the same DOSS record.
- **Go-live is replaced by activation.** A loop is activated only when the real external boundary confirms the transaction: partner accepted the document, GL posted the journal entry, 3PL count matched, retailer round-trip completed.
- **Master data is a gate, not a loop.** SKU/BOM/vendor coverage enables flows; transactions then maintain the system of truth by accretion.

The core loops now become the productization map:

| Loop | Lead archetype | Activation event | Outcome sold |
|---|---|---|---|
| **Close / Finance Bridge** | C "Numbers I Can't Trust" + F "Disillusioned Incumbent" | Month-end close in DOSS; JEs auto-posted to GL; three-way match clears | Close in days; CFO-trustable COGS; keep the incumbent GL |
| **Retail O2C / EDI** | B "Retail Is Coming" | Retailer 850 auto-creates order; compliant 856/810 round-trips weekly | Live before retail deadline; zero chargebacks |
| **Replenishment / Co-man POs** | A "Drowning Operator" | PO created → approved → sent → acknowledged weekly | Buyer time back; no missed reorders |
| **Truth / Inventory** | D "We've Outgrown This" | Daily reconciled on-hand across 3PLs/channels within tolerance | Flying blind ends; scale channels safely |
| **Traceability / Compliance** | Cross-cut | Lot-coded ASN passes retailer compliance per shipment | FSMA 204 / recall-ready |

### 3. Measure retention by transactional throughput, not usage

This is the biggest strategy upgrade. Healthy automation products do not necessarily produce high WAU; the user should not have to babysit the system. The internal LIR proposal is the right north-star candidate:

> **LIR v1:** P% of live ICP customers auto-process ≥5 transactional documents (SOs + POs + invoices / journal syncs) through DOSS every week, with zero work-leaving-DOSS events in the trailing 30 days.

Implications:

- The anti-signal is not low logins; it is work leaving DOSS: shadow spreadsheets, reverts to QuickBooks/old ERP, export spikes, manual-creation ratio breaches.
- TTX should mean **time to first end-to-end transaction**, not time to read someone else's orders or mark a runner `SUCCEEDED`.
- Proof should ship as **outcome receipts**: close days reduced, chargebacks prevented, freight saved vs. benchmark, POs processed without fallback, inventory reconciled daily.

### 4. Climb the differentiation ladder, now grounded in loops

| Rung | What it is | V4 interpretation | Durability |
|---|---|---|---|
| 1. **Composability** | No-code tables/forms/workflows | Useful because it creates day-1 rails for Value Loops | Strong wedge; weak moat |
| 2. **Unified operational data** | IDP across ordering, web, 3PL, accounting | Required to verify loop activation and maintain master data by transaction | Real moat that compounds with integrations |
| 3. **Transactional throughput** | Real orders, POs, invoices, JEs, ASNs flow automatically through DOSS | The retention engine; makes DOSS hard to remove | The near-term moat |
| 4. **Adaptivity** | AI implements, monitors, repairs, and expands loops | The destination: loops self-heal and the system reshapes as the business changes | The structural bet |

Dossbot today is still mostly rung-3 *branding* on rung-1/2 capability. The V4 correction is to make the agent serve the loop: parse documents into day-1 rails, watch activation predicates, surface work-leaving-DOSS events, draft fixes, and eventually run closed-loop optimization.

## Rung 4, made concrete (reconciled agentic plan)

Full V2 argument is in the [agentic deep dive](deepdives/2026-07-06-agentic-ai-v2.md); V4 changes the sequencing:

- **Implementation agent becomes Value-Loop activation agent.** It does not implement "the ERP"; it gets the lead loop to its first external-boundary-verified transaction and two consecutive cycles.
- **Runtime agency starts with loop reliability.** The first agentic work is not generic chat or abstract planning; it is keeping Close, Retail, Replenishment, and Truth loops from breaking: missing acknowledgements, mismatched 3PL counts, failed GL posts, pending ASNs, manual fallbacks.
- **Chargebacks/deductions remain a strong hard-dollar story, but move after Retail is trustworthy.** V3 correctly found the money; internal evidence says the Retail O2C rail and partner-ack telemetry are prerequisites. Deduction/cash application is whitespace after the round-trip is reliable.
- **Planning and forecasting remain second-order.** Demand planning is a top-10 buyer requirement, but the D archetype should land on the Truth loop first. Planning is Loop 2, built on trusted inventory.
- **The moat is the closed loop:** unified data → transaction → external verification → measured outcome → improvement. Point tools can recommend; DOSS can execute and observe.

## Proof economics: from hours saved to outcome receipts

Current public proof is "hours saved" — useful, but it prices like productivity software. V4 says every loop needs an outcome receipt:

| Loop | First receipt |
|---|---|
| Close | "Month-end close executed in DOSS; JEs posted to QBO/GL; no Excel fallback" |
| Retail | "Every retailer order round-tripped weekly; zero chargebacks / compliance misses" |
| Replenishment | "POs created, approved, sent, acknowledged on weekly cadence; buyer time returned" |
| Truth | "Daily on-hand reconciled per SKU/location within tolerance" |
| Freight/AP extensions | "Freight saved vs. benchmark; bills matched and paid without manual chase" |

One customer who can say "DOSS closed our books in days with CFO-trustable COGS" or "DOSS prevented $X of retail deductions" is worth fifty who saved 20 hours per week.

Two of the four growth pillars still lack a named outcome receipt: **"new SKU live on every channel alias the same day it's approved"** (Introducing New Products) and **"new retailer live and compliant within N days"** (Introducing New Sales Channels, distinct from the ongoing Retail loop receipt above). Both should be added once the underlying loop/process work is trustworthy enough to make the claim.

## The macro bet (unchanged, now operationalized)

Demand for physical goods is AI-stable: people still buy coffee, detergent, beauty products, snacks, and household goods. But the companies making them face accelerating product, channel, retailer, and fulfillment complexity. Internal discovery now gives the macro story operational teeth: buyers are asking for real-time inventory across channels, retail readiness, order routing, planning/MRP, and scale without headcount. The adaptive ERP wins that world only if it is first trusted as the system where real transaction loops run.

The clock remains NetSuite Next and the broader incumbent move to agentic UX. V4's answer is not "better chat"; it is loop-level adaptivity: the system activates one real transaction cycle, verifies it at the external boundary, watches for breakage, repairs it, and expands to the next loop.

## Threats

1. **False activation metrics.** Runner success, read-only ingest, or internal workflow completion gets mistaken for value while the external boundary never confirms the transaction.
2. **Full-suite implementation drag.** Customers buy the vision but never reach recurring throughput because DOSS tries to wire the whole stack before one loop is live.
3. **Finance-first cohort turns ops-ward** after winning the GL (Campfire "full replacement" ambition).
4. **NetSuite Next is good enough** — agentic UX on incumbent depth blunts the differentiation story before loop-level adaptivity is real.
5. **Horizontal no-code** ships CPG templates and undercuts rung 1 before DOSS proves rung 3/4.
6. **Dual positioning confuses** unless explicitly sequenced: land beside the GL, become the ops record, expand by loops.

## Top open questions

1. **Should "Introducing New Products" become a named, first-class BusinessProcess** (a peer to Close the Books and Onboarding a Sales Channel), given Kurt's four-pillar framing names it as equally important but the internal architecture doesn't yet? What would its external boundary/activation predicate be?
2. What are the 12-week baseline values for LIR: N, P, document throughput, and work-leaving-DOSS events, by ICP fence?
3. Which two loops are the company committing to harden first: Close/QBO boundary and Retail partner-ack telemetry, as internal evidence suggests?
4. What is the exact activation predicate for each lead loop, and can Sales, EPD, and PMO all inspect it in the same registry?
5. Which customer can produce the first CFO-forwardable outcome receipt for Close, Retail, Replenishment, or Truth — and who can produce the first for the two still-missing pillar receipts (new-product-live, new-channel-live)?
6. How should pricing/packaging preserve suite ACV while making loop-shaped delivery and expansion explicit?
7. What does Intuit strategic alignment imply long-term: permanent GL boundary, or eventual constraint on adaptive-system ambitions?
8. Does "growth engine" replace "adaptive ERP" as the external category claim, or stay an internal narrative frame while positioning still says "operations cloud"? Needs a deliberate answer, not drift.

## Changelog

- **2026-07-08** — v5. Incorporated the internal Value Stack framework (TX loops → figure-8s → composites → BusinessProcesses, supersedes Value Loops v2). Re-elevated customer pain/value above process detail: new "growth engine" destination framing and four named customer pillars (closing the books, introducing new products, ensuring product availability, introducing new sales channels), each with real customer evidence. Flagged "Introducing New Products" as not yet a named BusinessProcess — a gap. H9 opened; H2/H6 evidence updated.
- **2026-07-06** — v4. Internal Value Loops / LIR revision: strategy now centers on loop-shaped delivery, external-boundary activation, transactional-throughput retention metrics, and outcome receipts. Internal 1H FY26 VoC evidence incorporated; H1–H8 updated. H7 refined: deductions remain high-value but follow Retail rail hardening; Close and Retail boundaries are first hardening priorities.
- **2026-07-06** — v3. Proof points gathered (3 surveys): exceptions wedge sharpened to deductions/compliance (hard dollars); "Zara loop, productized" adopted as the differentiation narrative; competitor agentic offerings bucketed A–F and ranked (incumbents recommend-don't-act; autonomy is enterprise-only; ops implementation agents are whitespace); Fishbowl and Dynamics-MCP added as watch items. H2/H4/H7/H8 evidence updated.
- **2026-07-06** — v2. Agentic-AI core elaborated: implementation agent + runtime agency ladder (exceptions → replenishment → forecasting-as-ingredient → demand shaping), LLM/ML division of labor, loop-as-moat. New deep dive; H7, H8 opened.
- **2026-07-06** — v1. Refined with DOSS public positioning + AI-ERP landscape research: named the uncontested ops lane, sequenced the dual positioning, replaced flat differentiation candidates with a three-rung ladder, added proof-economics upgrade and threat clock.
- **2026-07-06** — v0. Initial thesis drafted from Kurt's observations; six hypotheses opened.
