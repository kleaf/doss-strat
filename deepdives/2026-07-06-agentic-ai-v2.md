# Deep dive: Agentic AI — the V2 strategy

> **Status:** v2 elaboration of rung 3, 2026-07-06. Companion to [STRATEGY.md](../STRATEGY.md); evidence in [inputs/research/2026-07-06-runtime-ai-landscape.md](../inputs/research/2026-07-06-runtime-ai-landscape.md). Kurt's framing: AI has two big roles — implementation, and active optimization of the running business. This doc takes a position on both, and on how far to push.

## The unifying idea first

The two roles are usually treated as separate products. They shouldn't be. They are the **same agent at two points in the business lifecycle**:

> **Implementation is the first optimization. Optimization is continuous re-implementation.**

The agent that learns a business deeply enough to configure DOSS in week one (its entities, flows, channels, quirks) is exactly the asset that can keep re-shaping the system as the business changes — new 3PL, new retailer, new co-packer, SKU explosion. This is what makes "adaptive" architectural rather than a chat feature, and it's the thing neither Blue Yonder (static enterprise deployments) nor the point tools (no system to reshape) can copy.

---

## Role 1 — The implementation agent

### What implementation actually is (five jobs)

1. **Data migration + entity resolution** — items, BOMs, vendors, customers, order history out of QuickBooks, spreadsheets, legacy systems; resolving "ACME CORP" = "Acme Corp." across sources.
2. **Process discovery** — how orders actually flow, who approves what, where exceptions go. Today: consultant interviews. Tomorrow: LLM over discovery-call transcripts, existing spreadsheets, and email patterns.
3. **Integration configuration** — Shopify, EDI, 3PL APIs, QuickBooks mappings.
4. **Schema + workflow generation** — turning discovery into configured tables/forms/workflows.
5. **Validation + parallel run** — generated test cases, reconciliation against the old system, cutover confidence.

Every one of these is **LLM-shaped work**: reading messy semi-structured artifacts, inferring structure, mapping between schemas, drafting configurations for human approval. This is not speculative — DualEntry already ships "NextDay Migration" (24-hour legacy migration) in the finance lane. **Nobody has built it for operations**, where the payoff is bigger because the data is messier.

### The upgrade Kurt flagged: implement *and* optimize

The agent shouldn't faithfully reproduce the customer's current mess — it should be **opinionated onboarding**: "your PO approval has four steps; brands your size run one," "your safety stock on these 40 SKUs is 3x what your actual lead-time variance justifies." Benchmarks from the customer base become configuration defaults. The implementation deliverable is not "your old process, digitized" but "your business, tuned." That reframing alone separates DOSS from every migration story.

### Why this is strategic, not just operational

- Turns implementation from a **services cost into a product capability** — margin, and a demo ("watch it ingest your spreadsheets live" is the rung-3 demo that closes deals).
- **Expands TAM downward**: if implementation is near-free, $10–20M brands become servable, catching customers *before* the QuickBooks graduation moment.
- Creates the measurable claim: time-to-first-value in **days**, not the current "weeks" (already 3x better than incumbents' months). Metrics: % of implementation done by agent; implementation cost as % of first-year contract; time-to-first-transaction.

---

## Role 2 — The runtime agent: where to focus

Kurt's candidate list: proactive planning, inventory reduction, demand forecasting, demand generation. Ranked below against four filters: **data advantage** (does the unified IDP picture matter?), **frequency of pain**, **trust barrier** (will an operator let an agent act?), and **incumbent strength**.

### The agency ladder (recommended order)

#### 1. Exception handling & ops hygiene — *start here; this is the wedge*

Stuck orders, short shipments, 3PL receiving discrepancies, invoice/PO mismatches, address failures, unsynced records. Daily-frequency pain; each instance is low-stakes (low trust barrier); resolution *requires* the cross-system picture only DOSS has; and **no point tool competes** because none of them own the workflows where fixes happen. Pure LLM territory: triage, investigate across systems, draft the vendor email, propose the correcting entry, execute on approval. This is where "agentic" becomes credible with operators — the agent earns trust on small things before being handed big ones.

#### 2. Proactive planning & replenishment — *the money story*

PO proposals, reorder timing, stock rebalancing across 3PLs, safety-stock tuning; weekly cadence; medium trust barrier. The competition (Cogsy, Netstock, Inventory Planner) is real but structurally limited: Shopify-centric data (weak on wholesale/EDI/co-packers — half a mid-market CPG brand's demand) and **recommendation-only** — the human still re-keys the PO somewhere else. DOSS sees the whole demand picture and *is* where the PO gets cut: closed loop, measured outcome. This is the loop that generates the strategy's flagship metric — **working capital freed / inventory reduced** — so it's the second build, entered as soon as exception-handling has earned account-level trust.

#### 3. Demand forecasting — *an ingredient, not a product*

The numeric core is a solved, commoditized problem — hierarchical time series, gradient boosting; the techniques are open-source and the enterprise vendors have 20-year leads. **Do not try to out-model Blue Yonder.** DOSS's forecast only needs to be (a) good enough to drive loop 2, (b) built on *more complete data* than the point tools see, and (c) **explainable and correctable** — which is the actual LLM contribution: folding in unstructured signal (a buyer's email about a promo, a retailer's reset calendar, a co-packer delay) and letting the operator interrogate and adjust the forecast in plain language. Forecast accuracy is not the pitch; *decision quality* is.

#### 4. Demand generation — *don't cross the line; shape, don't generate*

Generating demand (campaigns, acquisition) is marketing — Klaviyo's lane, a different buyer, and a violation of the focus hypothesis (H3). **The exception that stays in-lane: inventory-driven demand shaping.** When the system sees excess or expiring stock, it proposes the markdown, the bundle, the wholesale offer — demand actions *in service of a supply problem*. That's an ops decision with a revenue lever, it's differentiated (no marketing tool sees inventory age; no inventory tool touches demand), and it keeps DOSS out of the CMO's budget fight.

### LLM vs. traditional ML — the division of labor

| Job | Right tool | Why |
|---|---|---|
| Numeric forecasting, safety stock, reorder math, allocation | **Traditional ML / OR** (standard, mostly open-source) | Mature, cheap, auditable; LLMs don't beat it on numerics |
| Entity resolution, document/EDI/email ingestion, schema mapping | **LLM** | The connective-tissue work that made implementations human-heavy |
| Exception triage, investigation, drafting actions | **LLM agents** | Judgment over heterogeneous context |
| Explanation, interrogation, adjustment of any model output | **LLM over ML** | The trust interface — why operators will accept the numbers |
| Schema/workflow evolution | **LLM** | The adaptive-architecture bet itself |

**The moat is not the model.** Every competitor can call the same APIs. The moat is the **loop**: unified data → decision → *execution inside the system of record* → measured outcome → learning. Point tools have no execution; incumbents have no unified mid-market data; only the system of record can close the loop.

### The trust model (applies to every loop)

One mechanism everywhere: an **agency dial per workflow** — `propose → approve-by-default → autonomous-with-audit`. Operators move the dial per loop as the agent earns trust; every autonomous action is reversible and logged. This is both the product answer to "will operators accept it?" and the sales answer to "what happens when it's wrong?"

---

## Sequencing and proof

| Phase | Ship | Proof metric |
|---|---|---|
| 1 | Implementation agent (migration + entity resolution + generated config, human-approved) | Time-to-first-value in days; % agent-completed |
| 2 | Exception agent on the top 5 exception types | Exceptions auto-resolved/week; hours returned |
| 3 | Replenishment loop with 2–3 design partners | **Inventory ↓ X% / working capital freed $Y** — the flagship number |
| 4 | Demand shaping on excess stock; forecast interrogation UI | Margin recovered from would-be dead stock |

Phases 1–2 are almost entirely LLM-engineering on data DOSS already holds — buildable now, demo-able, low trust barrier. Phase 3 is where the strategy's proof-economics upgrade gets its number. Phase 4 is optional spice until 1–3 are real.

## What kills this / open questions

1. **Agent reliability on messy data** — one hallucinated PO kills a year of trust. The agency dial and audit trail are load-bearing, not optional.
2. **Blue Yonder's framing trickles down-market** faster than expected; "agent is the app" becomes the RFP checkbox before DOSS owns the mid-market version. (Watch: any BY/o9 mid-market motion.)
3. **Point tools add execution** via deeper integrations (Cogsy cutting POs in DOSS/NetSuite via API) — partial loop closure without owning the record.
4. Open: what are the **top 5 exception types by volume** across current customers? (Answerable from DOSS's own data today — first thing to ask the team.)
5. Open: how much of current implementation time is the five jobs above vs. sales/org delays that AI can't compress?

## V4 addendum — Value Loops change the sequencing

The internal Value Loops / LIR work refines this V2 plan without overturning it. The implementation agent should now be specified as a **loop activation agent**: pick the lead Value Loop, stand up a day-1 rail, reach the first externally verified transaction, and repeat for two cycles. Runtime agency should first keep those loops healthy: failed GL posts, missing partner acknowledgements, pending ASNs, mismatched 3PL counts, and manual fallback events. Planning remains second-order until the Truth loop is reliable. Chargeback/deduction automation remains a high-value Retail follow-on, but the Retail O2C rail and partner-ack telemetry must be trustworthy first ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).
