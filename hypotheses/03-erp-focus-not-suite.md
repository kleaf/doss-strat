# H3 — Focus on resource planning; don't become a suite

**Status:** gathering evidence
**Opened:** 2026-07-06
**Source:** [Kurt's initial observations](../inputs/notes/2026-07-06-initial-observations.md)

## Claim

DOSS should stay focused on the literal meaning of ERP — *resource planning*: optimizing how organizations generate revenue and manage costs across the physical value chain. We are not doing HR, not doing CRM, and not (for now) replacing the finance system. Focus is a strategic asset, not a limitation.

## Why it matters

- The graveyard of ERP challengers is full of companies that spread across modules before winning any of them.
- "We do everything" is the incumbent's pitch; a challenger wins by being 10x on a sharper problem.
- Focus also disciplines the integration strategy: QuickBooks is a *boundary* we sync with, not a product we rebuild.

## Tensions to watch

- Customers will pull us toward adjacent modules ("can you also do our commissions / our support tickets / our GL?"). Each pull is revenue now vs. focus later.
- At some point finance may become the natural expansion (the accounting boundary is where much of the pain lives — reconciliation, COGS accuracy, landed cost). "Not finance *yet*" needs a revisit trigger, not a permanent stance.

## Evidence for

- 2026-07-06: Intuit Ventures invested in the Series B and DOSS publicly positions as integrating with QuickBooks — the "accounting is a boundary, not a product" stance is now structural, not just preference ([doss.com research](../inputs/research/2026-07-06-doss-positioning.md)).
- 2026-07-06: The finance lane is crowded with specialized, well-funded players (Rillet $70M, Campfire $100M) — entering it would mean fighting funded specialists on their turf ([landscape research](../inputs/research/2026-07-06-ai-erp-landscape.md)).

## Evidence against

- *(none captured yet)*

## Boundary ruling (2026-07-06): demand generation

The V2 agentic plan draws the line explicitly: demand *generation* (campaigns, acquisition) is marketing's lane and out of scope; **inventory-driven demand shaping** (markdowns/bundles/wholesale offers to clear excess or expiring stock) is an ops decision and in scope. See [deep dive](../deepdives/2026-07-06-agentic-ai-v2.md).

## New tension (2026-07-06)

The Intuit relationship cuts both ways: it cements focus today but could constrain the long-term "adaptive system of record" ambition if the finance boundary ever needs to move. Flagged as open question Q5 in STRATEGY.md.

## How to test

- Log every out-of-scope customer ask in [inputs/customers/](../inputs/customers/) with what they'd pay / whether it blocked the deal. Review quarterly: is any adjacent area blocking >20% of deals?
- Define the revisit trigger for finance explicitly (e.g., "when N customers cite QuickBooks limits as their top pain").

## V4 update (2026-07-06): focus becomes loop-shaped delivery

Additional evidence for:
- 2026-07-06 (V4): Internal requirements cluster around operational resource planning and the accounting boundary: inventory, POs, COGS/landed cost, retail/EDI, order routing, planning/MRP, and keeping the GL while moving operations onto DOSS. There is still no evidence to expand into HR/CRM-style suite breadth ([internal VoC](../inputs/internal/Top-10-Customer-ERP-Ops-Requirements---1H-FY26-SPICED-LIR.html)).
- 2026-07-06 (V4): The Value Loops model resolves suite-vs-focus tension: contracts can remain suite-shaped, but delivery and expansion should be loop-shaped, one transaction cycle at a time ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).
