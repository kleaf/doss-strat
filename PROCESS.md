# DOSS Product Process — Working Thesis

> **Status:** Working thesis, 2026-07-08. Grounded in the currently-owned [Product Development Lifecycle @ DOSS](process/inputs/2026-07-08-doss-product-development-lifecycle-RAW.md). Supporting argument: [roadmap alignment and accountability deep dive](process/deepdive/2026-07-08-roadmap-alignment-and-accountability-v2.md). Iteration trail: [ITERATIONS.md](ITERATIONS.md).

## The diagnosis

DOSS's product process already has a fully specced PRD tier system (Vision / Standard / Feature one-pager), a granular stage-gate roadmap (the POR PMap: `Not Started → PRD → Design → EngDesign → Dev → QA → Shipped → Adoption`), a full RACI matrix, structured per-team listening channels, and a **weekly ProductOrg Staff Mtg plus a quarterly POR PMap review with SLT**. The gap is narrow and specific: **the roadmap isn't tightly gated on customer evidence, and delivery commitments don't have a single accountable owner or a real measure of whether they're kept.**

## The three operating questions

Kurt's three independently-arrived-at pillars are the right frame to validate against product-development best practice. They do not require reinventing the process; they require making the existing lifecycle answer three questions consistently:

1. **What are we doing?** Every committed project needs a clear definition of done.
2. **How will we know it worked?** Every committed project needs a KPI or customer/business outcome attached.
3. **When will we deliver it?** Every committed project needs an owned timeline and a visible commitment status.

The recommendations below are just the minimum fields, roles, and review moments needed to make those three questions explicit.

## The two additions that actually matter

Both attach to existing mechanics — nothing here proposes a new ritual.

### A. A customer-evidence and KPI gate on Intake

The Project Intake one-pager already asks for problem, hypothesis, rough scope, and "why now." Add two required fields: **Customer Evidence** — named accounts or account count, ARR/pipeline at stake, and a citation of the VoC signal or [growth pillar](STRATEGY.md) (Close the Books / Introducing New Products / Ensuring Availability / Introducing New Sales Channels) it serves — and **Success Measure**, the KPI or customer/business outcome that says whether the work mattered. This becomes a third resourcing question at the existing weekly Triage, alongside "do we have the owner" and "do we have capacity": **do we know the customer evidence and success measure.**

### B. A Commitment field, a DRI, and a real say/do metric

1. **`Commitment` field on the POR PMap**: every project is **Committed** (locked ship window) or **Exploring** (no locked date). Changing a *Committed* date requires the same Arnav approval already required for engineering due dates — extended one level up, logged visibly.
2. **A DRI per committed project** — the doc already uses this exact term for PRDs; extend the same role to the whole committed arc, accountable end-to-end for the definition of done, KPI, and timeline.
3. **A say/do metric**: % of *Committed* projects hitting their locked window, rolled up per team — a standing item at the *existing* weekly Staff Mtg (leading indicator) and *existing* quarterly SLT review (trailing scorecard, healthy range 80–110%, published as a team-level trend, never an individual scorecard).

## Two supporting fixes, independent of A and B

- **Customer-facing release check, decoupled from PRD tier**: add one plain Release question — **will customers notice this change?** If yes, name who sees it first and who tells Sales/CS. PRD tier measures scope/clarity, not whether customers need careful communication.
- **Forward field communication via the existing quarterly review**: extend the quarterly POR PMap/SLT review to include a field-facing segment on what's locked for next quarter, rather than inventing a new comms ritual.

## PRD governance

The documented RACI already assigns PM as Accountable for PRD authorship, with Wiley in the Process Owner/Approver role the process defines for him. Product should bring Wiley the PRD, customer evidence, KPI, definition of done, and tradeoff recommendation so he can review, push, and approve at CEO altitude.

## Rollout of these two additions

Both are single-field/single-role additions to tools and rituals already in weekly use. Introduce the Customer Evidence, Success Measure, Commitment, and DRI fields at the next weekly Staff Mtg; start the say/do trend line at the next quarterly SLT review once a baseline exists.

## Top open questions

1. What do **BIDEC, ZSL, Mission0, BYOFE, "bootloader"** refer to? Absent from both Kurt's notes and the real lifecycle doc.
2. What is the actual current say/do rate, if tracked informally today — is there a baseline to compare against?
3. Is "why now" in the existing Intake template already doing the job of a customer-evidence gate informally, and if so, why doesn't it feel sufficient (per the original complaint)?

## Changelog

- **2026-07-08** — v2. Reconciled against the real Product Development Lifecycle doc (Notion export). Corrected the "what already exists" picture; narrowed to two additive mechanisms (customer-evidence gate on Intake; Commitment field + DRI + say/do metric on the POR PMap), both attaching to existing tools/rituals rather than proposing new ones. Corrected the "shaping vs. building" read using the doc's own RACI.
- **2026-07-08** — Elevated Kurt's three operating questions: definition of done, success measure/KPI, and delivery timeline. Added Success Measure to the Intake recommendation and removed presentation-copy version narration from the working thesis.
- **2026-07-07** — v1. Strawman drafted from Kurt's early take + internal staff-meeting notes, combined with research on Shape Up, the Linear Method, Amazon Working Backwards, AI-native org practice, staged-rollout/release-ring norms, the say/do ratio, continuous discovery, and PM:eng staffing ratios.
