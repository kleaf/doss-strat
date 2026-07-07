# DOSS Strategy

> Living document, maintained against evidence. Every claim traces to a source in [hypotheses/](hypotheses/) and [inputs/](inputs/); how the document has evolved lives in [ITERATIONS.md](ITERATIONS.md) and the changelog at the end — not in the body.

## The strategy in one paragraph

**DOSS is the growth engine for companies that make physical goods, starting with consumer packaged goods.** Mid-market brands ($20–250M revenue) run their operations across QuickBooks, spreadsheets, 3PL portals, and channel dashboards — and their growth stalls when four basic capabilities break: the books close late so nobody trusts the numbers, purchasing waits on a person to notice stock is low, nobody is certain what inventory actually exists, and every product or price change has to be re-keyed into a dozen systems by hand. DOSS plugs in beside the customer's accounting system, takes over these operational loops one at a time, proves each one with a measurable business outcome, and — as AI keeps those loops running, improving, and expanding — becomes the adaptive system that runs operations largely on its own.

## Where DOSS stands today

- **Product:** an Operations Cloud — composable tables, forms, and workflows; a master-data unification layer; real-time BI; and an AI copilot.
- **Market:** mid-market physical goods ($20–250M revenue) — consumer goods, food & beverage, health & beauty, manufacturing, distribution.
- **Capital:** $73M raised; Series B co-led by Madrona and Premji Invest, with **Intuit Ventures** as a strategic investor. VP Sales hired from NetSuite/Coupa.
- **What buyers ask for**, from our own pipeline (66 substantively-documented opportunities in 1H FY26): one source of truth (40), trustworthy inventory (33), scale without adding headcount (22), PO automation and three-way match (21), accurate COGS/landed cost/margin (18), retail and EDI readiness (18), adaptability (17), order routing (16), planning/MRP (16), replacing a failing ERP while keeping the accounting system (15).
- **What retains customers:** every confirmed churn shares one failure mode — real transaction volume never flowed through DOSS automatically, or flowed and then left. The value event is not go-live; it is the first real transaction, repeated on the business's natural rhythm, confirmed by the outside world (the vendor acknowledged the PO, the ledger accepted the entry, the 3PL count matched).

## The four growth pillars

These are the four capabilities the product and near-term roadmap are built around. Each is stated in the customer's terms, with proof from live accounts.

### 1. Close the books with numbers you can trust *(the finance link)*

**What breaks:** Tag Wall's bank credit-line renewal hinged on a cost-of-goods report that couldn't be produced reliably. Verve's CFO won't call the implementation done until the COGS report is trustworthy — their COGS journal entries still fail 44% of the time even while invoicing runs clean in the same window. SLM's churn post-mortem named the three-way match "the core value prop for accounting"; its absence is why they left.

**What DOSS does:** the close runs on a clock inside DOSS and posts straight to the customer's ledger (QuickBooks, NetSuite, IES) — no Excel backfill, exceptions surfaced instead of hunted.

**Proof:** Sauz has run three consecutive real month-end closes through DOSS into QuickBooks; Magic Mind pushed 62 clean journal entries in 14 days; 29 customers name this their top ask — the most of any capability.

**Why it's growth:** a brand that trusts its own numbers can raise capital and extend credit lines. Closing the books isn't bookkeeping; it's the gate to everything else a growing company does.

### 2. Never get caught short *(procure-to-pay)*

**What breaks:** purchasing waits on people, and receiving silently corrupts the cost basis for everything downstream. Kahawa's replenishment triggers fired falsely on bad data, with real financial consequences. Athena's co-manufacturer receiving gap has been the #1 architectural risk four consecutive weekly reviews, across 8+ co-mans. Eight Sleep's receiving fails to match 70% of the time — which blocks trustworthy landed cost entirely.

**What DOSS does:** PO → freight → receipt → vendor invoice runs as one loop on a weekly rhythm, with a reorder trigger a human can always see and override — not a black box.

**Proof:** Carrom's supplier-email PO loop has run ~140 times with zero failures — the most reliable automation on the account. Smash Foods runs full planning through it: finished-goods forecast → bill-of-materials explosion → PO recommendations. 13 customers explicitly want planning they can override by hand.

**Why it's growth:** a brand that misses reorders can't fill the orders it already has, and a brand that can't onboard a co-manufacturer cleanly can't add capacity.

### 3. Know exactly what you have *(inventory management)*

**What breaks:** Instant Hydration had a **$2M gap** in unfulfilled orders between Shopify and its 3PL that neither system was tracking. Pavoi silently missed **~1,000 orders in one day** from a routing bug that only fires when the inventory position can't be trusted. Carrom's operator says it plainly: "flying blind right now with what we actually have." Echelon churned entirely over bundle-routing failures through its 3PL — this pillar's failure mode isn't just lost revenue, it's lost accounts.

**What DOSS does:** one reconciled inventory position across every 3PL, warehouse, and channel — the number every routing and planning decision downstream depends on.

**Proof:** Magic Mind's 3PL sync runs 14-for-14 clean, nightly; Spread the Love runs 30-for-30, daily; Eight Sleep reconciles positions across 10 different 3PLs simultaneously.

**Why it's growth:** every missed order and phantom stockout is top-line revenue left on the table.

### 4. Change it once, and it's everywhere *(master data management)*

**What breaks:** Ark spends **70% of its team's time every week** hand-building 30–40 pricing sheets. New items, bill-of-material changes, and price updates don't propagate to every place a product lives — the Shopify listing, the Amazon ASIN, the EDI item code, the vendor's SKU — so people re-key them, and things drift.

**What DOSS does:** one change — item, BOM, vendor, or price — approved once and live on every channel alias automatically. New-product launch is the flagship example, but this covers every master-data change a brand makes.

**Proof:** Verve replaced Cin7 specifically to get SKU-level profitability visibility; Magic Mind is asking for the same today.

**Why it's growth:** product and pricing velocity is how mid-market CPG brands compete ([the macro bet](#the-macro-bet), [H6](hypotheses/06-stable-markets-dynamic-systems.md)). A brand that can't launch or reprice quickly loses to one that can, regardless of how good its back office is.

## The fifth pillar, sequenced deliberately: launching new sales channels

The most customer-visible growth promise DOSS makes is speed to a new retailer, marketplace, or region: Gorgie scaled from 5,000 to 15,000 doors on DOSS; Snackwise ran 345,000 transactions with zero custom integrations and renewed on the strength of it; Clean Age hit a live Walmart reset. This is deliberately sequenced **after** pillars 3 and 4, because a fast channel launch depends on them: trustworthy inventory positions (so the new channel doesn't oversell) and instant product-data propagation (so the catalog is right on day one). When those two hold steady for a customer, channel onboarding becomes the fastest growth lever we offer — and the natural expansion conversation.

## How DOSS wins: land one loop, prove it, expand

- **Land beside the accounting system, not in place of it.** The customer keeps QuickBooks (or NetSuite); DOSS becomes the place operations actually run. No rip-and-replace conversation on day one.
- **Deliver one loop at a time, not a suite.** The contract can name the full vision; delivery sequences a single transaction cycle to live before wiring anything else.
- **Every loop starts fast and hardens underneath.** A "day-1 rail" (native forms, document parsing, CSV, email) gets real transactions flowing in week one; EDI, APIs, and ledger sync harden underneath the same records afterward.
- **"Live" means the outside world confirms it.** A loop counts as activated only when the external boundary verifies the transaction: the vendor acknowledged the PO, the ledger accepted the entry, the 3PL's own count matched, the retailer accepted the documents.

| Loop | Lead buyer | Proof it's live | Outcome sold |
|---|---|---|---|
| **Finance close** | CFO / controller | Month-end close in DOSS; entries auto-posted to the ledger; three-way match clears | Close in days, with COGS a CFO will stand behind |
| **Procure-to-pay** | Ops lead drowning in POs | PO created → approved → sent → acknowledged, weekly | Buyer time back; no missed reorders |
| **Inventory truth** | Operator who has outgrown spreadsheets | Daily reconciled on-hand across 3PLs and channels, within tolerance | Flying blind ends; channels scale safely |
| **Master data** | Cross-cutting — every team touches it | Item/BOM/vendor/price change approved once, live on every alias | Change it once; nothing breaks downstream |
| **Retail order-to-cash / EDI** | Brand landing its first major retailer | Retailer order auto-creates; compliant documents round-trip weekly | Live before the retail deadline; zero chargebacks |
| **Traceability / compliance** | Food, beverage, regulated goods | Lot-coded shipment documents pass retailer compliance | Recall-ready; FSMA 204 |

## Why DOSS wins: the differentiation ladder

| Rung | What it is | Why it matters | Durability |
|---|---|---|---|
| 1. **Composability** | No-code tables, forms, workflows | Gets customers live in weeks — the day-1 rails | Strong wedge; weak moat |
| 2. **Unified operational data** | One reconciled model across ordering, web, 3PL, accounting | What lets DOSS verify loops are really live, and keep master data true | Compounds with every integration |
| 3. **Transactional throughput** | Real orders, POs, invoices, and journal entries flowing automatically | The retention engine — a system doing the work is hard to remove | The near-term moat |
| 4. **AI adaptivity** | AI implements, monitors, repairs, and expands the loops | The destination: the system reshapes itself as the business changes | The structural bet |

**How AI runs the engine.** The AI agenda serves the loops, in this order: an **activation agent** that gets a customer's lead loop to its first externally-verified transaction in days, not months (migration, document parsing, configuration); **reliability agents** that keep live loops from breaking — missing acknowledgements, mismatched 3PL counts, failed ledger posts, work quietly leaving for spreadsheets; then higher-order work in sequence — retail deduction recovery once the retail rail is trustworthy, demand planning once inventory is trusted. The moat is the closed loop no point tool can copy: unified data → transaction → external verification → measured outcome → improvement. Recommendation tools advise; DOSS executes and observes. (Full plan: [agentic deep dive](deepdives/2026-07-06-agentic-ai-v2.md).)

## How we measure success

Not logins. A healthy automation product should be *invisible* — the customer shouldn't babysit it. The north-star candidate: **the share of live target customers whose declared loops run on the business's natural rhythm every period, with zero "work leaving DOSS" events** (shadow spreadsheets, reverts to the old system, export spikes, manual re-creation of records) in the trailing 30 days.

Every loop ships an **outcome receipt** — proof in the customer's language, not ours:

| Loop | The receipt |
|---|---|
| Finance close | "Month-end close executed in DOSS; entries posted to the ledger; no Excel backfill" |
| Procure-to-pay | "POs created, approved, sent, and acknowledged on a weekly rhythm; buyer time returned" |
| Inventory truth | "Daily on-hand reconciled per SKU and location, within tolerance" |
| Master data | "New item or price change live on every channel alias the same day it's approved" |
| Retail / EDI | "Every retailer order round-tripped weekly; zero chargebacks or compliance misses" |

One customer who can say "DOSS closed our books in days with COGS our CFO stands behind" is worth fifty who saved 20 hours a week.

## The macro bet

Demand for physical goods is stable against AI — people will still buy coffee, detergent, and skincare no matter how good models get. But the companies making those goods face accelerating complexity: more SKUs, more channels, more retailers, more fulfillment partners, faster product cycles. The systems running their operations have to change as fast as the business does, and 30-year-old ERP architecture structurally cannot. That intersection — a durable market whose operational systems must become adaptive — is DOSS's opening.

The clock on that opening is the incumbents' move to agentic interfaces (NetSuite Next and peers). Our answer is not a better chat window on a static system; it is adaptivity at the loop level — the system activates a real transaction cycle, verifies it with the outside world, watches for breakage, repairs it, and expands to the next loop.

## Threats

1. **False "live" signals.** Internal workflow completions get mistaken for value while the outside world never confirms a transaction.
2. **Full-suite implementation drag.** Customers buy the vision but never reach recurring throughput because delivery tries to wire everything before one loop is live.
3. **Finance-first AI-ERP competitors turn toward operations** after winning the ledger (Campfire, Rillet).
4. **NetSuite Next proves good enough** — agentic UX on incumbent depth blunts the story before loop-level adaptivity is real.
5. **Horizontal no-code ships CPG templates**, undercutting the composability wedge before the throughput and AI moats are proven.
6. **Positioning confusion** unless the sequence is explicit: land beside the ledger, become the operational system of record, expand loop by loop.

## Top open questions

1. Should **master data management become a named, first-class business process** — a peer to Close the Books — with its own external-boundary definition of "live"?
2. What is the **concrete trigger for promoting "launching new sales channels"** to a top-level pillar — defined well enough that it isn't a judgment call?
3. What are the 12-week baseline values for the throughput metric — what share of customers hold loop cadence today, and how much work is leaving DOSS?
4. Which two loops does the company harden first — the finance-close boundary and the retail partner-acknowledgement telemetry are the leading candidates?
5. What is the exact "live" definition for each loop, and can Sales, Product, and Delivery all inspect it in one place?
6. Which customer produces the first CFO-forwardable outcome receipt — for the close, procure-to-pay, or inventory truth — and which produces the first master-data receipt?
7. How should pricing and packaging preserve full-suite deal size while delivery stays loop-shaped?
8. What does the Intuit relationship imply long-term: a permanent ledger boundary, or an eventual constraint on how far the adaptive system can go?
9. Does "growth engine" become the external category claim, or remain the internal narrative frame while public positioning says "operations cloud"? This needs a deliberate decision, not drift.

## Changelog

- **2026-07-08** — v7. Rewritten for a board/exec-sponsor reader: current strategy only, plain language, version narration removed from the body. No strategic content changed.
- **2026-07-08** — v6. Growth pillars re-derived against the four roadmap loops (P2P, IMS, Op/Fin, UMD); "availability" split into procure-to-pay and inventory truth; "new products" broadened to master data; "new sales channels" sequenced as the fifth pillar.
- **2026-07-08** — v5. Growth-engine framing introduced; four customer pain pillars elevated above mechanism; Value Stack framework incorporated.
- **2026-07-06** — v4. Loop-shaped operating thesis: external-boundary activation, transactional-throughput retention metric, outcome receipts; internal VoC evidence incorporated.
- **2026-07-06** — v3. Proof points: CPG pain survey, inventory-edge case studies, competitor agentic offerings ranked; deductions identified as the hard-dollar wedge.
- **2026-07-06** — v2. Agentic-AI core: implementation agent + runtime agency ladder; loop-as-moat.
- **2026-07-06** — v1. Positioning research: the uncontested physical-goods ops lane; differentiation ladder; proof-economics upgrade.
- **2026-07-06** — v0. Initial thesis from Kurt's observations; hypotheses H1–H6 opened.
