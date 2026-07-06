# Deep dive: Proof points — where the AI differentiation really is (V3)

> **Status:** V3, 2026-07-06. Synthesizes three surveys: [CPG pain map](../inputs/research/2026-07-06-cpg-pain-survey.md), [inventory-edge case studies](../inputs/research/2026-07-06-inventory-edge-case-studies.md), [competitor agentic offerings](../inputs/research/2026-07-06-competitor-agentic-offerings.md). Refines the [V2 agentic plan](2026-07-06-agentic-ai-v2.md). Iteration trail: [ITERATIONS.md](../ITERATIONS.md).

## What the three surveys say when you overlay them

**Survey 1 (pain)** says the money is in bidirectional inventory distortion ($1.7T globally; 22% of CPG ops teams hit stockouts *and* 19% dumped excess at discount in the same year) and in compliance chargebacks ($5B+/yr, up to 30% of gross sales in deductions, now enforced by retailer *machines*). The coping stack is spreadsheets, consultants, and recovery services — not software.

**Survey 2 (edges)** says the companies that win *because of* operations (Zara, Shein, e.l.f., Trader Joe's) all built the same four capabilities: fast demand→supply loops, small-batch test-and-scale, assortment discipline, and complete signal flow — each with custom systems, big ops orgs, and years. None of it is buyable as product by a $20–250M brand.

**Survey 3 (competitors)** says incumbent agents recommend but don't act (NetSuite's explicit stance), real autonomy ships only at enterprise prices (Blue Yonder), and *nobody* ships an operations implementation agent. The mid-market execution loop is open — with Fishbowl as the early sign it won't stay open.

**The overlay:** the pain is exception-and-loop shaped, the proven edges are exactly what DOSS's agentic loops would productize, and the competitive space for *acting* (vs. recommending) at mid-market is empty. The V2 plan survives contact with evidence — with two sharpenings below.

## Sharpening 1: the exceptions wedge now has a name — **deductions & compliance**

V2 said "start with exception handling" generically. The pain survey found the specific exception class with the best economics:

- **Hard dollars, not hours**: chargebacks/deductions are cash leakage (3% of COGS per Walmart OTIF miss; up to $4M/yr for an $80M shipper) — the first agentic loop can be denominated in *recovered dollars*, upgrading proof economics immediately (vs. "hours saved").
- **Asymmetric warfare today**: retailers enforce with automated rule engines; brands defend with spreadsheets and contingency-fee consultants. "Machine-speed enforcement deserves machine-speed defense" is a self-evident pitch.
- **Requires exactly DOSS's position**: disputing an invalid fine means joining PO + ASN/EDI + 3PL shipping confirmation + invoice + retailer scorecard — the cross-system picture only the system of record holds.
- **Prevention beats recovery**: recovery services dispute after the fact; DOSS can catch the ASN mismatch *before it ships*. That's the difference between a service and a system.

Candidate first metric: **"DOSS recovered/prevented $X in deductions in 90 days"** — hard-dollar, fast, measurable per customer, and no point tool or incumbent agent competes for it today.

## Sharpening 2: the differentiation story is **"the Zara loop, productized"**

The edge case studies give the value narrative that's been missing from sales calls (H4). The pitch stops being "modern ERP with AI" and becomes:

> *The operational capabilities that made Zara, Shein, and e.l.f. category killers — days-long demand→supply loops, test-and-scale inventory commitment, SKU-level discipline, zero re-keying — exist today only as custom systems inside billion-dollar companies. DOSS's agents deliver them as product to $20–250M brands.*

Mapping (edge pattern → DOSS agentic loop):

| Proven edge pattern | Who proved it | DOSS loop that productizes it |
|---|---|---|
| Loop speed (signal→decision in days) | Zara | Replenishment/planning agent (V2 phase 3) |
| Small-batch test-and-scale | Shein | Demand shaping + reorder agent |
| Assortment discipline | Trader Joe's/ALDI | Agent-surfaced SKU-level profitability flags |
| Signal completeness, no re-keying | All four | IDP + exception agent (V2 phases 1–2) |
| Speed enables product innovation | e.l.f. | The macro thesis (H6), demonstrated in-category |

The e.l.f. footnote matters: e.l.f. runs NetSuite — the edge is the *capability around the system*, not the software. So sell the capability, and let the agents be how it's delivered.

## The refined proof-point ladder (V3 update to V2 sequencing)

| Phase | Loop | Proof metric | Evidence basis |
|---|---|---|---|
| 1 | Implementation agent | Time-to-first-value in days; % agent-completed | Whitespace confirmed (survey 3: nobody ships ops implementation agents) |
| 2a | **Deduction/compliance agent** (was: generic exceptions) | **$ recovered + $ prevented in 90 days** | $5B+/yr pain, machine-enforced, zero product competition (survey 1) |
| 2b | Ops-hygiene exceptions (stuck orders, 3PL discrepancies) | Exceptions auto-resolved/week | DOSS study: 9-in-10 consequence rate (survey 1) |
| 3 | Replenishment loop | Inventory ↓ X%; working capital freed $Y | $1.7T distortion; Zara/Shein loop-speed patterns (surveys 1–2) |
| 4 | Demand shaping + assortment flags | Margin recovered from would-be dead stock | 19% dumped excess at discount; TJ's/ALDI discipline (surveys 1–2) |

## What this changes in the strategy

1. **H7 upgraded**: exceptions-first is now evidence-backed, and the wedge has a named first target (deductions/compliance). Status → gathering evidence, leaning supported.
2. **Proof economics get a faster path**: deduction dollars arrive in weeks; working-capital proof takes quarters. Sequence the stories accordingly.
3. **The H4 pitch has its content**: lead with the deduction number and the Zara-loop narrative, not the platform.
4. **New watch items**: Fishbowl's mid-market agentic replenishment (first mover in segment); Dynamics MCP servers arming point tools with execution.

## Open questions raised

1. What's the current deduction/chargeback exposure across DOSS's existing customers? (Directly measurable; would size the 2a wedge instantly.)
2. Does DOSS today ingest the EDI documents (850/855/856/810) and retailer scorecards needed for the compliance agent — and if not, what's the lift?
3. Which existing customer is the best "Zara loop" story candidate — fastest signal→PO cycle we've enabled?
4. Legal/positioning: deduction *prevention* is safe ground; deduction *disputes* (drafting claims against Walmart/Target) — any channel-relationship risk?
