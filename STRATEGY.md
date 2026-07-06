# DOSS Strategy — Working Thesis

> **Status:** v3, 2026-07-06. v1 refined Kurt's observations with research; v2 elaborated the agentic-AI core ([deep dive](deepdives/2026-07-06-agentic-ai-v2.md)); v3 grounds it in proof points — pain survey, inventory-edge case studies, competitor agentic offerings ([deep dive](deepdives/2026-07-06-proof-points-v3.md)). Iteration trail: [ITERATIONS.md](ITERATIONS.md). Evidence status per claim lives in [hypotheses/](hypotheses/).

## Where DOSS stands today (facts, not strategy)

- **Product:** Operations Cloud = ARP (composable tables/forms/workflows) + IDP (master-data unification layer) + DataStudio (real-time BI) + Dossbot (AI copilot).
- **Market:** mid-market physical goods ($20–250M revenue) — consumer goods, food & bev, health & beauty, manufacturing, distribution.
- **Capital:** $73M raised; Series B co-led by Madrona + Premji, with **Intuit Ventures** as strategic. VP Sales hired from NetSuite/Coupa.
- **Positioning today is dual:** website says "the ERP evolved / ERP alternative"; press says "middleware that plugs into existing ERPs and QuickBooks."
- **Proof points today:** hours-saved efficiency metrics (Verve Coffee 20+ hrs/wk; Mezcla 2x faster POs; Spread The Love 92% faster order processing).

## The refined thesis

**DOSS is the operations cloud for mid-market physical-goods brands — landing beside QuickBooks as the system that unifies the value chain, and becoming, through AI, the first ERP that adapts itself to the business.**

Three moves, in order:

### 1. Own the uncontested lane

The AI-ERP wave is real ($100M+ rounds at Campfire, Rillet) but almost entirely **finance-first** — GL, close, consolidation, mostly for software companies. Nobody well-capitalized is attacking the **operational value chain of physical goods**: procurement → inventory → orders → fulfillment → the accounting boundary. That's DOSS's lane, and the finance-first crowding *validates the category while leaving the lane open*. Strategy: name the lane loudly ("operations cloud," not "another AI ERP"), and let Rillet/Campfire teach the market that legacy ERP is replaceable.

### 2. Land beside, expand to the center (resolve the dual positioning deliberately)

The a16z logic holds: replacing an ERP requires trust; wedges win. The Intuit Ventures investment and QuickBooks integration make the wedge concrete: **don't ask mid-market brands to rip anything out — plug in, unify their goods/dollars/data flows, become the place where operations actually run.** The system of record follows the system of engagement. "ERP evolved" is the destination story for investors and vision; "plugs into what you have" is the entry story for buyers. These aren't contradictory, but they must be *sequenced on purpose* — today they read as accidental inconsistency.

### 3. Climb the differentiation ladder before incumbents and neighbors close in

This is the sharpened answer to "how is this not just tables and forms with a modern face" — a question made urgent by the fact that **tables, forms, and workflows is literally DOSS's own pitch today**:

| Rung | What it is | Who else can claim it | Durability |
|---|---|---|---|
| 1. **Composability** | No-code tables/forms/workflows; configured in weeks, changed in minutes | Airtable, Retool, and every no-code vendor; incumbents eventually | Table stakes — wins deals today, not a moat |
| 2. **Unified operational data** | IDP: master-data unification across ordering, web, 3PL, accounting — one live picture of the value chain | Hard for point tools; painful for incumbents (their modules don't reconcile) | Real moat that compounds with integrations |
| 3. **Adaptivity** | The system implements, evolves, and optimizes *itself*: AI-driven onboarding, schema evolution as the business changes, agents that operate the value chain — abstracted from the end user | Nobody yet. Incumbents can bolt copilots onto static architectures (NetSuite Next); they cannot make 30-year-old schemas dynamic | The structural bet — must be built before the window closes |

Dossbot today is rung-3 *branding* on rung-1 *capability* (a chat copilot). The strategic imperative is making rung 3 real.

## Rung 3, made concrete (the V2 agentic plan)

Full argument in the [deep dive](deepdives/2026-07-06-agentic-ai-v2.md); the spine:

- **One agent, two lifecycle moments.** *Implementation is the first optimization; optimization is continuous re-implementation.* The agent that learns the business well enough to configure DOSS in week one is the same asset that keeps reshaping the system as the business changes.
- **Role 1 — Implementation agent.** The five jobs of implementation (migration/entity resolution, process discovery, integration config, schema generation, validation) are all LLM-shaped. Ship *opinionated onboarding*: don't reproduce the customer's mess, tune it against customer-base benchmarks. Turns services cost into product capability, expands TAM downward, and is the rung-3 demo.
- **Role 2 — Runtime agency ladder**, in trust order: **(1) exception handling — led by deductions/compliance** (V3 sharpening): retail chargebacks are $5B+/yr, up to 30% of gross sales in deductions, enforced by retailer rule engines against brands armed with spreadsheets — hard-dollar recovery/prevention is the wedge with the fastest provable ROI ([H7](hypotheses/07-exceptions-first-runtime-agency.md)); **(2) replenishment & proactive planning** — the working-capital money story; **(3) forecasting as ingredient, not product**; **(4) demand *shaping*, not demand generation** ([H3](hypotheses/03-erp-focus-not-suite.md)).
- **LLMs for connective tissue and judgment; traditional ML for numerics; the moat is the closed loop** — decide → execute in the system of record → measure → learn. Point tools can't execute; enterprise agents (Blue Yonder's "agent is the app") don't serve the mid-market ([H8](hypotheses/08-moat-is-the-loop.md)).
- **Trust mechanism everywhere:** a per-workflow agency dial — propose → approve-by-default → autonomous-with-audit.

## The proof-economics upgrade

Current proof is "hours saved" — an efficiency story that prices like a productivity tool. The value-chain story prices like an operating system. Climb the metric ladder with design partners: hours saved → **deduction dollars recovered/prevented** (fastest hard-dollar proof — arrives in weeks, per the V3 pain survey) → **order cycle time, inventory turns, stockout rate, working capital freed**. One customer who can say "DOSS freed $2M of working capital" is worth fifty who saved 20 hours a week. This is also the fix for the sales-call gap: value can't lead the conversation until it's quantified in operators' terms — and V3 supplies the narrative: **the Zara/Shein/e.l.f. operational edge, delivered as product to $20–250M brands** ([case studies](inputs/research/2026-07-06-inventory-edge-case-studies.md)).

## The macro bet (unchanged, now with a clock)

Demand for physical goods is AI-stable (people still buy coffee and detergent); the companies making them face AI-accelerated product/channel proliferation, so their operational systems must change ever faster. The adaptive ERP wins that world. The clock: **NetSuite Next** (agentic, announced Oct 2025) is the incumbents' bid to bolt agents onto static architecture. DOSS's window is the gap between "AI as feature" and "AI as architecture" — likely 2–4 years.

## Threats

1. **Finance-first cohort turns ops-ward** after winning the GL (Campfire "full replacement" ambition).
2. **NetSuite Next is good enough** — agentic UX on incumbent depth blunts the differentiation story before rung 3 is real.
3. **Horizontal no-code** (Airtable et al.) ships ops templates for CPG and undercuts rung 1 on price.
4. **Dual positioning confuses** — buyers can't tell if DOSS is a layer or a replacement; sales cycles stall on "what happens to my ERP?"

## Top open questions

1. What's the **one-sentence operator pain** that opens doors? (Candidate to test: *"You run a $50M brand on QuickBooks plus 14 spreadsheets, and nobody can see the whole operation."*)
2. What are the **top 5 exception types by volume** and the **current deduction/chargeback exposure** across existing customers? (Gates and sizes the H7 wedge — answerable from DOSS's own data today. Also: do we already ingest EDI 850/855/856/810 and retailer scorecards?)
3. How much of current **implementation time** is the five automatable jobs vs. sales/org delay AI can't compress?
4. Which **value-chain metric** do we commit to moving with 2–3 design partners, and by how much?
5. When does the **expand-to-replace** conversation happen in the customer journey, and who triggers it — us or them?
6. What does **Intuit strategic alignment** imply about the finance boundary long-term — permanent partner, or eventual constraint on rung-3 ambitions?

## Changelog

- **2026-07-06** — v3. Proof points gathered (3 surveys): exceptions wedge sharpened to deductions/compliance (hard dollars); "Zara loop, productized" adopted as the differentiation narrative; competitor agentic offerings bucketed A–F and ranked (incumbents recommend-don't-act; autonomy is enterprise-only; ops implementation agents are whitespace); Fishbowl and Dynamics-MCP added as watch items. H2/H4/H7/H8 evidence updated.
- **2026-07-06** — v2. Agentic-AI core elaborated: implementation agent + runtime agency ladder (exceptions → replenishment → forecasting-as-ingredient → demand shaping), LLM/ML division of labor, loop-as-moat. New deep dive; H7, H8 opened.
- **2026-07-06** — v1. Refined with DOSS public positioning + AI-ERP landscape research: named the uncontested ops lane, sequenced the dual positioning, replaced flat differentiation candidates with a three-rung ladder, added proof-economics upgrade and threat clock.
- **2026-07-06** — v0. Initial thesis drafted from Kurt's observations; six hypotheses opened.
