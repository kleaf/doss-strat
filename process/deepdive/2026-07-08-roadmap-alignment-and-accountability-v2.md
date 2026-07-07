# Deep dive: roadmap↔customer alignment and delivery accountability (v2)

> **Status:** v2, 2026-07-08. Reconciles the [v1 strawman](2026-07-07-product-process-strawman.md) against the real, currently-owned [Product Development Lifecycle @ DOSS](../inputs/2026-07-08-doss-product-development-lifecycle-RAW.md) (Notion export, owned by Wiley, last updated 2026-05-16). Companion to [PROCESS.md](../../PROCESS.md).

## What changed since v1

The v1 strawman assumed a thinner process than actually exists, because the only artifacts visible at the time were Kurt's raw notes and staff-meeting fragments. The real lifecycle doc shows DOSS already has:

- **A fully specced PRD tier system** — Tier 1 (Vision, for problem spaces too big to build in one pass), Tier 2 (Standard, the default), Tier 3 (Feature one-pager) — each with a template, explicit document rules (a DRI and an Approver who can't be the same person, sentence limits, "no AI-slop," reject-and-rewrite if violated).
- **A granular stage-gate roadmap** — the POR PMap: `Not Started → PRD → Design → EngDesign → Dev → QA → Shipped → Adoption`, single source of cross-functional truth, write access scoped to PMs/leads.
- **A full RACI matrix** (§13) across every stage and every function (PM, Eng, Design, PMO, Sales, SoCon, Marketing).
- **Structured listening channels** per team (`#<team>-product-listening`), with named owners (Joyce, Srujun, Luke W.) and a weekly triage cadence.
- **A real cadence already in place** — the weekly ProductOrg Staff Mtg (Tuesdays 9:45am: roadmap review, resourcing, candidate triage) and a **quarterly POR PMap review with SLT**.
- **An adoption phase** (§12) with named owners and a one-month post-ship review, explicitly stating "shipping is not the finish line."

None of v1's proposed mechanisms should be built as new, parallel machinery. The corrected job is much narrower — and it matches exactly what Kurt asked for on this pass: **sharpen roadmap-to-customer-need alignment, and make delivery commitments real and owned.**

## Where v1's ideas survive, revised to attach to what's real

| v1 idea | Verdict | Revised form |
|---|---|---|
| Quarterly betting table + monthly checkpoint | **Unnecessary — already exists** | Use the existing weekly Staff Mtg and quarterly SLT review; add content, not meetings |
| One commitment one-pager (done/KPI/timeline) | **Partially exists** — the Intake one-pager is close | Add two required fields to the *existing* Intake template (below) rather than a new artifact |
| PRD tiers wired to rollout rings | **Still a real gap** | Keep, but decouple from PRD tier — tier is about solution clarity/scope, not customer-facing risk; a small Tier 3 change can still need a staged rollout |
| Say/do ratio | **Still a real gap** — no such metric exists | Keep, attach to the existing quarterly SLT review as standing content |
| Customer learning loop via PFM/CS rotation | **Partially exists** — listening channels exist but proxy through internal functions (AEs, SoCon, PMO), and no channel owner represents CS/PFM directly | Keep the spirit; the concrete fix is adding a customer-evidence field to Intake (below), not a new interview ritual |
| Protect one field-comms meeting, Now/Next/Later | **Unnecessary as a new meeting** — the quarterly SLT review already exists | Recommend extending that review's audience/format to include forward field commitments |
| Platform protection / portfolio allocation | **Still a real gap**, but has a natural home | Attach to the existing Intake resourcing question ("what gets paused to make room," §4.2) |
| Shaping vs. building (Wiley/Joyce) | **Wrong diagnosis** — this isn't an ambiguous boundary | The RACI already assigns PM as Accountable for PRD authorship (§13); the fix is adherence, not a new framework |

## The two things actually missing

Kurt named these precisely: "make sure the roadmap is aligned closely with customer needs" and "delivery commitments are made and owners are accountable to those commitments." Both are narrow, additive changes to the existing Intake/Triage and POR PMap mechanics — not new rituals.

### Addition A — a customer-evidence gate on Intake

The Project Intake one-pager (§4.1) already asks for "problem, hypothesis, rough scope, why now." Add one required field: **Customer Evidence** — named accounts or account count asking for it, ARR/pipeline at stake, and a citation of the specific VoC signal or [growth pillar](../../STRATEGY.md) it serves (Close the Books / Introducing New Products / Ensuring Availability / Introducing New Sales Channels — the four pillars in STRATEGY.md v5 are the natural taxonomy to cite against). This becomes a third resourcing question at Triage (§4.2), alongside the existing "do we have the right owner" and "do we have capacity": **do we have the customer evidence.** No candidate advances past `Not Started` without it. This scales naturally with the doc's own listening-intensity model — Applications ("a lot of listening") should have the richest evidence; Platform ("the least listening... direction mostly from Wiley + Arnav") can cite internal technical conviction instead, and should say so explicitly rather than leaving the field blank.

### Addition B — a Commitment field, a DRI, and a real say/do metric

1. **Add a `Commitment` field to the POR PMap**: every project is marked **Committed** (a locked ship window) or **Exploring** (no locked date). Changing a *Committed* ship window requires the same approval already required for engineering due dates (§6: "requires approval from Arnav") — extended one level up, from the engineering due date to the roadmap-commitment date itself — and is logged visibly, not just approved quietly.
2. **Name a DRI per committed project**, distinct from the per-stage RACI ★ owner that already exists. The doc already uses this exact term for PRDs ("each PRD has a DRI and an Approver," §5) — this simply extends the same role, with the same name, to the whole committed arc: the DRI is accountable for the ship-date promise end-to-end (idea through adoption), not just for their stage.
3. **Introduce a say/do metric**: % of *Committed* projects that hit their locked ship window, rolled up per team. This is genuinely new — nothing like it exists in the current doc — but it needs no new ritual: it's a standing agenda item at the *existing* weekly Staff Mtg (leading indicator: which committed items are at risk this week) and the *existing* quarterly SLT review (trailing scorecard: the say/do trend, healthy range 80–110%, published as a team-level trend line — never an individual scorecard, for the same reason flagged in v1).

## The two supporting fixes that remain independent of A and B

- **Staged rollout, decoupled from PRD tier.** Add a "Customer rollout required? Y/N + ring plan" field to §11 Production Release (or the PRD template), independent of Tier 1/2/3 — because tier measures scope/clarity, not customer-facing blast radius. A Tier 3 feature one-pager can still need internal → design-partner → high-priority-cohort → GA staging.
- **Forward field communication via the existing quarterly review.** Recommend the quarterly POR PMap review with SLT explicitly add a field/sales-facing segment: which *Committed* projects are locked for next quarter, in the field's language — not just an internal SLT status check. This closes the original "not enough communication out to the field" complaint using a real forum instead of a new one.

## What this changes about the "shaping vs. building" question

v1 read "Wiley literally writing PRDs" as an ambiguous shaping/building boundary needing a new framework. The real RACI (§13) already says PM is Accountable for PRD writing at every stage where it applies; Wiley is the **Process Owner** and **Approver** in the authoring flow (§5: async review → live review "with Wiley/Arnav"). The fix here isn't conceptual — it's adherence: route PRD authorship through the PM (Joyce for OS) per the documented process, and reserve Wiley's involvement for the approver/reviewer role the process already defines for him.

## Open questions (unchanged from v1, still unresolved by this document)

1. What do **BIDEC, ZSL, Mission0, BYOFE, "bootloader"** refer to? None appear in the lifecycle doc either.
2. What is the actual current say/do rate, if measured informally today? No baseline exists to compare against once the metric is introduced.
3. Who should own the customer-evidence field's quality bar at Triage — is "why now" alone currently doing this job informally, and if so, why doesn't it feel like enough (per Kurt's original complaint)?
