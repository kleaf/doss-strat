# H5 — AI enables a fundamentally dynamic (agentic) ERP

**Status:** gathering evidence — elaborated into the V2 plan: [deepdives/2026-07-06-agentic-ai-v2.md](../deepdives/2026-07-06-agentic-ai-v2.md) (implementation agent + runtime agency ladder; sub-claims split into [H7](07-exceptions-first-runtime-agency.md) and [H8](08-moat-is-the-loop.md))
**Opened:** 2026-07-06
**Source:** [Kurt's initial observations](../inputs/notes/2026-07-06-initial-observations.md)

## Claim

AI changes what an ERP *can be* in two escalating ways:

1. **Radically easier implementation** — AI does the mapping, migration, and configuration work that today takes consultants months/years. This collapses the single biggest cost and risk of ERP adoption.
2. **Dynamic evolution** — the system continuously adapts its schemas and backend to the business as it changes (new channels, SKUs, workflows), abstracted away from the end user. The ERP stops being a static artifact you implement once and start fighting, and becomes an agentic system that reshapes itself.

Level 1 is a go-to-market weapon. Level 2 is the structural moat — incumbents can bolt AI onto static systems, but they cannot make 30-year-old schema architectures dynamic.

## Why it matters

This is the strongest candidate answer to [H1](01-beyond-tables-and-forms.md) (differentiation) and the mechanism behind [H6](06-stable-markets-dynamic-systems.md) (the intersection bet). If it holds, it should be the centerpiece of positioning ([H4](04-value-prop-front-and-center.md)).

## Hard questions inside this claim

- **Trust:** will operators accept a system that changes its own schema? What's the human-in-the-loop model — propose-and-approve, or fully autonomous with audit trails?
- **Concreteness:** what does dynamic evolution look like in month 6 of a real customer's life? Can we name three specific moments (e.g., "you added a second 3PL and the system restructured inventory tracking overnight")?
- **Demo-ability:** how much of this is real today vs. roadmap? The gap between the story and the product is a credibility risk in sales.
- **Data gravity:** does dynamic schema evolution break reporting, integrations, and the customer's own mental model?

## Evidence for

- 2026-07-06: DOSS already claims "deploy 3x faster" / configuration in weeks vs. 12–18-month consultant implementations — level 1 is partially real and selling ([doss.com research](../inputs/research/2026-07-06-doss-positioning.md)). *(Still need internal data: actual median implementation time.)*
- 2026-07-06: a16z independently identifies implementation cost/time as the incumbents' most brutal weakness (mid-market 4–6+ months, enterprise 4–6 years, consulting > software cost) ([landscape research](../inputs/research/2026-07-06-ai-erp-landscape.md)).

## Evidence against

- 2026-07-06: Publicly, Dossbot is copilot-level ("query, analyze, automate via chat") — level 2 (dynamic schema evolution, agents that operate the value chain) is not yet visible in the product's public story. Today it's rung-3 branding on rung-1 capability ([doss.com research](../inputs/research/2026-07-06-doss-positioning.md)).
- 2026-07-06: NetSuite Next shows incumbents will have agentic *UX* quickly — the defensible version of this hypothesis must be architectural (adaptive schemas), not conversational (chat on top) ([landscape research](../inputs/research/2026-07-06-ai-erp-landscape.md)).

## How to test

- Measure current DOSS implementation time end-to-end; compare to published NetSuite/SAP B1 mid-market baselines. If we're not already ≥5x faster, level 1 is aspiration, not asset.
- Identify one real customer schema-evolution event that already happened (or manufacture one with a design partner) and write it up as the flagship story.
- Pressure-test the trust model with 3 ops leaders: show the propose-and-approve flow, watch where they flinch.

## V4 update (2026-07-06): implementation agent = loop activation agent

Additional evidence for:
- 2026-07-06 (V4): The Value Loops model gives the implementation agent a concrete objective: get one lead transaction cycle to external-boundary activation, then repeat for two cycles. This is more measurable than generic configuration completion or go-live ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).
- 2026-07-06 (V4): Day-1 rails (forms, AI document parsing, CSV, email) plus durable rails (EDI, GL sync, 3PL APIs) create the practical path for AI-assisted implementation: start transaction throughput before full integration hardening, then swap durable rails underneath the same DOSS record ([Value Loops / LIR](../inputs/internal/Value-Loops---Outcome-Based-Productization-and-the-DOSS-LIR.html)).

Refinement: the dynamic ERP should first prove it can activate and maintain Value Loops; schema/workflow self-evolution is the later architectural expression of the same capability.
