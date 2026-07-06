# Survey: competitor agentic offerings — bucketed, detailed, ranked

**Source:** web research 2026-07-06 (V3 proof points, survey 3 of 3). Combines with the earlier [runtime-AI landscape](2026-07-06-runtime-ai-landscape.md) (Blue Yonder detail there).

## The six capability buckets

### A. Conversational copilots — *query, explain, report*
Chat over the system's data; no persistent goals, no actions beyond retrieval/drafting.
- **NetSuite "Ask Oracle"** — natural-language search and Q&A across the suite.
- **SAP Joule Assistants** — 50+ domain assistants (finance, procurement, supply chain, HR, CX) answering and navigating.
- **Cin7 "Inventory Intelligence" / Katana insights** — AI-flavored analytics and Q&A in mid-market inventory tools.
- **Dossbot today** sits here (query/analyze/automate via chat).

### B. Document & data automation — *ingest, match, reconcile*
Bounded ML/LLM tasks on documents and records; high accuracy bar, no autonomy.
- **NetSuite transaction-matching assistant** (ML match suggestions), generative flux analysis (plain-language explanations of balance movements).
- **DualEntry NextDay Migration** — maps and ports legacy financial data in ~24 hours. The only shipping *implementation* agent found, and it's finance-lane.

### C. Monitoring & advisory agents — *detect, recommend, prepare; human signs off*
Persistent watchers with prepared actions. **This is the incumbent center of gravity.**
- **NetSuite Next agents** — continuous anomaly detection (returns spikes, overdue approvals, reconciliation discrepancies), surface recommended actions; Intelligent Close Manager; EPM model-build and allocation-trace assistants. Explicit design stance: *"agents recommend and prepare but do not act without human sign-off."*
- **SAP Order Reliability Agent** (planned Q2 2026) — proactively flags and resolves order issues in Order Management Services.
- **Blue Yonder Advisory agents** — inventory/supply, warehouse, shelf compliance, logistics pain-point advisors.

### D. Autonomous execution agents — *act under governance*
Agents that take operational actions. Rare, and enterprise-priced where real.
- **Blue Yonder cognitive agents** — the deepest shipping example: named, governed "digital workers" with persistent memory; autonomous allocation and replenishment in a continuous loop (beverage distributor, ~326K forecast units, migrated to cognitive replenishment in 72 hours). Sold only as its cognitive portfolio since early 2026: "the agent is the app."
- **SAP "Autonomous Enterprise"** (Sapphire 2026 vision) — 200+ specialized agents orchestrated by Joule Assistants; proactive agents acting without prompts. Partly shipping, partly vision.
- **Fishbowl (mid-market!)** — agentic AI replenishment, constraint-aware rescheduling, mid-build BOM/WO edits, "Juno" assistant checking materials/flagging shortages/preparing orders. Thin vs. Blue Yonder, but proof the mid-market won't stay agent-free.

### E. Agent platforms & interop — *build-your-own, agent-to-agent*
The 2026 battleground: exposing ERP capability to agents.
- **SAP Joule Studio 2.0** (GA Q1 2026) — no-code agent builder; bidirectional A2A so third-party agents (Copilot Studio, Google) can invoke Joule agents inside SAP processes.
- **Microsoft Dynamics 365 Commerce MCP Server** (preview Feb 2026) — catalog, pricing, promotions, inventory, carts, orders, fulfillment exposed as MCP capabilities for any agent to "discover, decide, execute."
- **NetSuite MCP / custom agents** — SuiteCloud agent-building and MCP support.

### F. Implementation & migration agents — *stand the system up*
- **DualEntry NextDay** (finance only). **Nobody ships this for operations.** The lane is empty.

## Ranking — by depth of *delivered* agency (not vision)

| Rank | Vendor | Bucket depth | Reality check | Threat to DOSS |
|---|---|---|---|---|
| 1 | **Blue Yonder** | D — true autonomous loops in production | Enterprise-only (Snowflake-scale data, enterprise contracts) | Low direct / high narrative: sets buyer expectations that trickle down |
| 2 | **SAP Joule** | C–E — biggest catalog (50+ assistants, 200+ agents), best interop story | Much is < 12 months old or roadmap; S/4 customers only | Low direct (segment), medium narrative |
| 3 | **NetSuite Next** | A–C — solid monitoring/advisory + close automation | Finance-centric; recommend-don't-act by design; ops agents thin | **Highest direct threat** — same buyer as DOSS's graduating customers |
| 4 | **Microsoft Dynamics** | E — MCP exposure of commerce/ops primitives | Platform play, not shipped agents; retail-commerce oriented | Medium — could arm anyone's agents with execution |
| 5 | **Finance AI-natives** (Rillet, Campfire, DualEntry, Nominal) | B–D in the GL lane, incl. the only migration agent | Deep but confined to finance | Medium — proves patterns DOSS needs, could turn ops-ward |
| 6 | **Mid-market ops tools** (Fishbowl, Cin7, Katana, Prediko) | A–B, first D sprouts (Fishbowl replenishment) | Thin, bolt-on, single-system data | Medium-rising — they're in DOSS's segment, and Fishbowl shows intent |

## The four takeaways

1. **"Recommend, don't act" is the incumbent default** — NetSuite says it out loud. Autonomy-with-governance at the mid-market is open space.
2. **Real autonomy exists only at enterprise price points** (Blue Yonder). The pattern is de-risked; the segment translation hasn't happened.
3. **Implementation agents don't exist for operations** — the single emptiest, most defensible space found (DualEntry proves the concept next door).
4. **MCP/A2A interop is the new battleground** — ERP primitives exposed to agents. DOSS should treat "agent-operable by design" as an architecture requirement, not a feature.

## Signal

- Incumbent recommend-don't-act stance + enterprise-only autonomy = the mid-market execution loop is uncontested, but Fishbowl is the leading indicator it won't stay so → **H7**, **H8**
- NetSuite Next is the direct-threat clock, and it's finance-centric — DOSS's ops lane remains differentiated even against the closest threat → **H2**, **H6**
- Ops implementation agent = confirmed whitespace → **H5**
- Watch item: Dynamics MCP-izing commerce/ops primitives could let point tools close execution loops without owning the record → **H8** evidence-against watch

## Links

- https://www.netsuite.com/portal/products/netsuite-next.shtml · https://www.netsuite.com/portal/resource/articles/financial-management/netsuite-2026-1-features-new-ai-close-and-cash-management-ai-agents-for-enterprise-performance-management-and-more.shtml
- https://www.sap.com/products/artificial-intelligence/ai-agents.html · https://news.sap.com/2026/05/sap-sapphire-sap-unveils-autonomous-enterprise/ · https://aimultiple.com/sap-ai-agents
- https://azure.microsoft.com/en-us/blog/advancing-enterprise-ai-new-sap-on-azure-announcements-from-sap-sapphire-2026/
- https://blueyonder.com/why-blue-yonder/ai-and-machine-learning/ai-agents · https://diginomica.com/icon-2026-blue-yonder-bets-everything-cognitive-agent-app-and-new-operating-model-product
- https://www.techrepublic.com/article/best-inventory-management-software/ (Fishbowl agentic detail) · https://www.cin7.com/inventory-intelligence/
