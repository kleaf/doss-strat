# Survey: where mid-market CPG operational pain concentrates, and how it's handled pre-DOSS

**Source:** web research 2026-07-06 (V3 proof points, survey 1 of 3).

## The pain map, ranked by evidence weight

### 1. Inventory distortion — both directions at once (the biggest dollars)

- Global retail loses **$1.7–1.77T annually** to inventory distortion: out-of-stocks ~$1.2T, overstocks ~$554B (IHL Group, 2023–2025 studies). US retail out-of-stocks alone: **$48B** (52 weeks ending Sep 2023).
- The mid-market CPG version, from a **DOSS-commissioned study** (covered by Supply & Demand Chain Executive): **9 in 10 CPG ops teams experienced at least one operational/supply-chain consequence in the past year** — canceled launches (25%), missed major retail windows (25%), **stockouts at retail (22%)**, **excess inventory sold at a discount (19%)**, lost retail accounts or distribution partnerships (16%).
- Note the shape: it's not "too much" or "too little" — it's *both simultaneously*, across SKUs and locations. That's a data/visibility failure, not a buying-discipline failure.

### 2. Retail compliance chargebacks & deductions (hard dollars, worsening)

- Retailers issue **$5B+ in chargebacks annually**; trade claims and deductions can reach **up to 30% of gross sales** for CPG brands; ~55% of trade spend is lost to invalid or misunderstood fines.
- Penalty mechanics: Walmart **3% of COGS** for missing 98% OTIF; Target 5%; Amazon 15+ chargeback types ($2.60/unit to $250/incident). An $80M shipper can face up to **$4M/year in deductions**; a $10M brand at a 2% chargeback rate loses $200K.
- **2026 shift: enforcement is now system-triggered** — Target fines fire automatically when EDI 856 (ASN) data mismatches physical receiving. Machine-speed enforcement vs. human-speed defense.
- An entire services industry exists just to dispute these (Vendormint, RetailPath, deduction-recovery consultants) — evidence the pain is real, recurring, and unsolved in-product.

### 3. Demand volatility / forecasting difficulty (the upstream cause of #1)

- Constantly shifting consumer preferences make forecasting "notoriously difficult"; delayed or incomplete store-level data hides stockouts, phantom inventory, and local demand shifts until sales stop (Circana, Crisp).
- 84% of CPGs planned to invest in real-time dashboards and 81% in advanced analytics in 2025 — i.e., the market's current answer is *more visibility*, not better decisions.

### 4. System disconnects / manual operations (the root-cause enabler)

- The DOSS study's own framing: manual CPG operations experience delays, recalls, and supply-chain disruptions — the consequences in #1 are attributed to manual/spreadsheet-driven ops across disconnected systems.
- This is the pain that *causes* the others: the ASN mismatch that triggers the chargeback, the phantom inventory that causes the stockout, the late signal that strands excess stock.

### 5. Pricing / trade promotion (real, but least ops-shaped)

- The evidence found is trade-spend effectiveness (~30% of gross sales, ~55% ineffective) rather than list-pricing pain. Mid-market pricing pain appears mostly as *markdown pressure from excess inventory* (#1) and *deduction leakage* (#2) — i.e., it's downstream of inventory and compliance, not a standalone wedge.

## How they cope pre-DOSS (the competitive set is mostly not software)

| Coping mechanism | What it costs them |
|---|---|
| Spreadsheets + ops headcount | The DOSS study's consequence list; error-prone at machine-enforcement speed |
| Point planning tools (Cogsy $199/mo, Netstock ~$400/mo, Inventory Planner, Prediko) | Recommendations without execution; Shopify-centric blind spots |
| EDI VANs + compliance consultants (SPS, TrueCommerce; routing-guide specialists) | Per-document fees; compliance as a permanent tax |
| Deduction-recovery services (Vendormint, RetailPath et al.) | Contingency fees to claw back money that shouldn't have been lost |
| Retail data aggregators (Crisp, Alloy.ai) | Visibility without action |
| "Graduate to NetSuite" | The 4–6+ month implementation tax; static once live |

## Signal

- Chargebacks/deductions are a **hard-dollar, high-frequency, exception-shaped** pain with system-triggered enforcement on the other side — the strongest concrete candidate yet for the H7 exceptions-first wedge → **H7**
- Inventory distortion is bidirectional and rooted in fragmented data — validates the unified-picture wedge and the working-capital flagship metric → **H2**, proof economics
- The pre-DOSS coping stack is spreadsheets + services, not software — DOSS's real competition at the pain level is headcount and consultants → **H2**, **H4** (pitch in these terms)
- Pricing as a standalone wedge: weak evidence; treat as downstream of inventory + deductions → scope discipline, **H3**

## Links

- https://www.ihlservices.com/news/analyst-corner/2025/09/retail-inventory-crisis-persists-despite-172-billion-in-improvements/ · https://www.retailtouchpoints.com/features/industry-insights/ihl-study-inventory-distortion-will-cost-retailers-1-77-trillion-in-2023
- https://www.sdcexec.com/sourcing-procurement/manufacturing/news/22965322/doss-manual-cpg-operations-experience-delays-recalls-and-supply-chain-disruptions-study (DOSS-commissioned study)
- https://retailpath.xyz/articles/walmart-otif-fines · https://retailpath.xyz/articles/how-cpg-brands-can-automate-invalid-retailer-fines · https://www.boldvan.com/blog/why-chargebacks-happen-in-cpg-and-retailand-how-edi-mapping-can-prevent-them
- https://www.gocrisp.com/learning-center/operations-supply-chain/retail-supply-chain-challenges-6-risks-cpg-suppliers-must-manage · https://www.circana.com/post/supply-chain-optimization-guide-for-cpg-brands
