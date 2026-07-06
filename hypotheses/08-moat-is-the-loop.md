# H8 — The AI moat is the execution loop, not the model

**Status:** gathering evidence
**Opened:** 2026-07-06
**Source:** [Agentic AI V2 deep dive](../deepdives/2026-07-06-agentic-ai-v2.md)

## Claim

Two-part division of labor, one moat claim:

1. **Division of labor:** traditional ML/OR handles the numerics (forecasting, safety stock, reorder math — mature, commoditized, don't reinvent); LLMs handle the connective tissue (entity resolution, document/email/EDI ingestion, exception judgment, explanation, schema evolution). Trying to out-model Blue Yonder on forecast accuracy is a losing game.
2. **The moat:** every competitor can call the same LLM APIs. What compounds is the **closed loop** — unified data → decision → execution inside the system of record → measured outcome → learning. Point tools can't execute; enterprise vendors don't have unified mid-market data; only the system of record closes the loop.

## Why it matters

Determines build-vs-buy for the ML stack (buy/standard), where AI engineering effort goes (the loop and the tissue, not model research), and the defensibility narrative for investors ("our agents get measurably better because they act and observe outcomes — recommendations can't learn what execution can").

## Evidence for

- 2026-07-06: Mid-market planning tools (Cogsy, Netstock, Inventory Planner, Prediko) are structurally recommendation-only and Shopify-centric ([landscape](../inputs/research/2026-07-06-runtime-ai-landscape.md)).
- 2026-07-06 (V3): NetSuite states recommend-don't-act as explicit design policy for NetSuite Next agents; incumbent center of gravity across the survey is bucket C (monitor/advise), not bucket D (act) ([competitor survey](../inputs/research/2026-07-06-competitor-agentic-offerings.md)).
- 2026-07-06 (V3): The edge case studies (Zara, Shein) show the durable advantage is precisely the closed loop — demand signal flowing to supply *action* without human re-keying ([case studies](../inputs/research/2026-07-06-inventory-edge-case-studies.md)).

## Evidence against

- 2026-07-06 (V3): Microsoft's Dynamics 365 Commerce MCP Server (preview Feb 2026) exposes catalog/inventory/orders/fulfillment as agent-callable capabilities — a path for point tools to gain execution without owning the record. Watch closely ([competitor survey](../inputs/research/2026-07-06-competitor-agentic-offerings.md)).

## How to test

- Benchmark: standard open-source forecasting on DOSS's unified data vs. a point tool's output on Shopify-only data for the same brand. If completeness doesn't beat sophistication, part of this claim weakens.
- Track one closed loop end-to-end with a design partner: does outcome data measurably improve the agent's next proposals within a quarter?

## V4 update (2026-07-06): LIR makes the moat measurable

Additional evidence for:
- 2026-07-06 (V4): The proposed LIR defines the loop moat in measurable terms: P% of live ICP customers auto-process ≥5 transactional documents through DOSS every week with zero work-leaving-DOSS events in the trailing 30 days. This ties retention directly to closed-loop execution, not login activity or feature usage ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).
- 2026-07-06 (V4): The runner-SUCCEEDED trap shows why owning the loop matters: internal success is insufficient unless the external boundary accepted the document, posted the GL entry, or matched the 3PL count. Point tools and copilots cannot claim that verification loop without being in the transactional path ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).

Status note: this hypothesis should move from gathering evidence toward supported once the 12-week LIR baseline is restored from transactional instrumentation.
