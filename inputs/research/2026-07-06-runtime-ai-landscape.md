# Runtime AI landscape: planning/optimization tools and agentic supply chain

**Source:** web research 2026-07-06. Context for the V2 agentic-AI push.

## Mid-market planning/forecasting point tools (the neighbors)

| Tool | Position | Price signal |
|---|---|---|
| Cogsy | Growth-stage DTC brands, seasonal/multi-location | from $199/mo |
| Netstock | SMB/lower mid-market; reorder automation, excess-stock reduction | ~$400/mo |
| Inventory Planner | Larger retailers, multi-channel, big catalogs; SKU-level profitability | ~$245/mo, revenue-based |
| Prediko | AI demand forecasting, alerts, reports (Shopify-centric) | SMB |
| StockTrim | SMB demand/reorder planning | SMB |
| Alloy.ai | Mid-market/enterprise CPG; joins sales + supply chain + inventory data for demand planning | custom/annual |
| Toolio, Crisp, RELEX | Merch planning / retail data / enterprise shelf & supply | mid→enterprise |

**Common structural trait:** they sit *beside* the systems of record, ingest partial data (often Shopify-centric — wholesale/EDI/co-packer flows are weak spots), and produce **recommendations**. Execution (cutting the PO, rebalancing stock, changing the listing) happens elsewhere, by a human, in another system.

**Note:** DOSS itself publishes content marketing in exactly this category ("8 Best Inventory Management Solutions for CPG 2026" on doss.com) — the company already sees these tools as its SEO-adjacent competition.

## Enterprise agentic supply chain (the ceiling)

- **Blue Yonder went all-in agentic**: as of early 2026 it sells only its "cognitive portfolio"; positioning is "the agent is the app." Named, governed digital workers with persistent memory; domain agents for inventory ops, replenishment, allocation, warehouse, returns; claims of autonomous action, not just monitoring. Example scale: a North American beverage distributor with ~326K demand-forecast units migrated to cognitive allocation/replenishment.
- Built on enterprise data infrastructure (Snowflake), sold to enterprise; nothing in coverage targets $20–250M brands.
- o9, Kinaxis similar enterprise-tier motion.

## AI-led implementation precedent

- **DualEntry "NextDay Migration"** (finance lane): maps and ports historical data from legacy systems within 24 hours — proof that agentic migration is credible as a *product feature*, not services.

## Signal

- The agentic supply-chain pattern is **proven at enterprise** (Blue Yonder) and **absent at mid-market** — the pattern is de-risked, the segment is open → V2 deep dive
- Point tools recommend; none execute. Execution requires owning the system of record where POs/orders/inventory live — DOSS's exact position → **H7** (new)
- Mid-market planning tools are Shopify-centric; the complete demand picture (DTC + wholesale/EDI + retail) is exactly what IDP unifies → **H2**, **H7**
- Agentic migration-as-product exists in the finance lane (DualEntry); nobody has built it for operations → **H5**
- Blue Yonder's "agent is the app" framing will set buyer expectations that trickle down-market → **H6** clock

## Links

- https://blueyonder.com/why-blue-yonder/ai-and-machine-learning/ai-agents
- https://diginomica.com/icon-2026-blue-yonder-bets-everything-cognitive-agent-app-and-new-operating-model-product
- https://siliconangle.com/2026/06/11/supply-chain-operations-blueyonder/
- https://www.prediko.io/blog/best-inventory-forecasting-software
- https://deposco.com/blog/best-supply-chain-planning-software-for-mid-market-companies/
- https://www.doss.com/trends/8-best-inventory-management-solutions-for-cpg-companies-in-2026
