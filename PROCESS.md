# DOSS Product Process — Working Thesis

> **Status:** v2, 2026-07-08. Reconciles the v1 strawman against the real, currently-owned [Product Development Lifecycle @ DOSS](process/inputs/2026-07-08-doss-product-development-lifecycle-RAW.md) that Kurt dropped in as a raw Notion export. Full argument: [v2 reconciliation deep dive](process/deepdive/2026-07-08-roadmap-alignment-and-accountability-v2.md); v1 context (research on lightweight cadence/accountability practices) stands as background in [v1 strawman](process/deepdive/2026-07-07-product-process-strawman.md). Iteration trail: [ITERATIONS.md](ITERATIONS.md).

## The corrected diagnosis

DOSS's product process is more mature than the v1 pass assumed. A fully specced PRD tier system (Vision / Standard / Feature one-pager), a granular stage-gate roadmap (the POR PMap: `Not Started → PRD → Design → EngDesign → Dev → QA → Shipped → Adoption`), a full RACI matrix, structured per-team listening channels, and a **weekly ProductOrg Staff Mtg plus a quarterly POR PMap review with SLT** all already exist and are well-documented. The gap Kurt named on this pass is narrow and specific: **the roadmap isn't tightly gated on customer evidence, and delivery commitments don't have a single accountable owner or a real measure of whether they're kept.**

## The two additions that actually matter

Both attach to existing mechanics — nothing here proposes a new ritual.

### A. A customer-evidence gate on Intake

The Project Intake one-pager already asks for problem, hypothesis, rough scope, and "why now." Add one required field: **Customer Evidence** — named accounts or account count, ARR/pipeline at stake, and a citation of the VoC signal or [growth pillar](STRATEGY.md) (Close the Books / Introducing New Products / Ensuring Availability / Introducing New Sales Channels) it serves. This becomes a third resourcing question at the existing weekly Triage, alongside "do we have the owner" and "do we have capacity": **do we have the customer evidence.**

### B. A Commitment field, a DRI, and a real say/do metric

1. **`Commitment` field on the POR PMap**: every project is **Committed** (locked ship window) or **Exploring** (no locked date). Changing a *Committed* date requires the same Arnav approval already required for engineering due dates — extended one level up, logged visibly.
2. **A DRI per committed project** — the doc already uses this exact term for PRDs; extend the same role to the whole committed arc, accountable end-to-end (idea through adoption), not just per stage.
3. **A say/do metric**: % of *Committed* projects hitting their locked window, rolled up per team — a standing item at the *existing* weekly Staff Mtg (leading indicator) and *existing* quarterly SLT review (trailing scorecard, healthy range 80–110%, published as a team-level trend, never an individual scorecard).

## Two supporting fixes, independent of A and B

- **Staged rollout, decoupled from PRD tier**: add a "customer rollout required? ring plan?" field to the Release process, since tier measures scope/clarity, not customer-facing blast radius — a small Tier 3 change can still need staged rollout.
- **Forward field communication via the existing quarterly review**: extend the quarterly POR PMap/SLT review to include a field-facing segment on what's locked for next quarter, rather than inventing a new comms ritual.

## What v1 got wrong, corrected

"Wiley literally writing PRDs" isn't an ambiguous shaping/building boundary needing a new framework — the documented RACI already assigns PM as Accountable for PRD authorship, with Wiley in the Process Owner/Approver role the process already defines for him. The fix is adherence to the existing process, not a new one.

## Rollout of these two additions

Both are single-field/single-role additions to tools and rituals already in weekly use — no phased pilot required the way v1's invented cadence would have needed. Introduce the Customer Evidence field and the Commitment/DRI fields at the next weekly Staff Mtg; start the say/do trend line at the next quarterly SLT review once a baseline exists.

## Top open questions

1. What do **BIDEC, ZSL, Mission0, BYOFE, "bootloader"** refer to? Absent from both Kurt's notes and the real lifecycle doc.
2. What is the actual current say/do rate, if tracked informally today — is there a baseline to compare against?
3. Is "why now" in the existing Intake template already doing the job of a customer-evidence gate informally, and if so, why doesn't it feel sufficient (per the original complaint)?

## Changelog

- **2026-07-08** — v2. Reconciled against the real Product Development Lifecycle doc (Notion export). Corrected the "what already exists" picture; narrowed to two additive mechanisms (customer-evidence gate on Intake; Commitment field + DRI + say/do metric on the POR PMap), both attaching to existing tools/rituals rather than proposing new ones. Corrected the "shaping vs. building" read using the doc's own RACI.
- **2026-07-07** — v1. Strawman drafted from Kurt's early take + internal staff-meeting notes, combined with research on Shape Up, the Linear Method, Amazon Working Backwards, AI-native org practice, staged-rollout/release-ring norms, the say/do ratio, continuous discovery, and PM:eng staffing ratios.
