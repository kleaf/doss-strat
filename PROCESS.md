# DOSS Product Process — Working Thesis

> **Status:** v1, 2026-07-07. Seeded from Kurt's early take and internal notes ([raw input](process/inputs/2026-07-07-kurt-early-take-and-meeting-notes.md)), refined against external research on lightweight cadence, accountability, and discovery practices ([research](process/inputs/research/)). Full argument: [Product Process Strawman](process/deepdive/2026-07-07-product-process-strawman.md). Iteration trail: [ITERATIONS.md](ITERATIONS.md).

## The problem in one paragraph

DOSS's engineering org is strong and has spent 3–4 years building real ERP depth; it's now pivoting into applications and field-facing delivery behind a small, fast-ramping sales team. The gap isn't a lack of process infrastructure — a roadmap tool, tiered PRDs, and a documented lifecycle already exist. The gap is a **closing bell**: no fixed point where a specific set of capabilities gets locked to a delivery window, measured afterward, and communicated to the field before it ships. "Three weeks still discussing ARP V2" with no clear owner or definition of done is the symptom.

## The design constraint

Not heavyweight, big-room, old-ERP-consultant-style planning. Not zero-accountability drift either. Independently, Shape Up, the Linear Method, Amazon's Working Backwards, and how AI-native orgs like Anthropic ship all converge on the same shape: **short fixed cycles, a lightweight written commitment, a closing ritual that's a bet rather than a status meeting, no backlog theater.** That convergence is the evidence this is the right shape for DOSS.

## The strawman, in eight mechanisms

1. **Quarterly betting table + monthly checkpoint**, differentiated by team — monthly commitment granularity for Applications (field-facing, most mature PM bench); quarterly appetite with a monthly hill-chart check-in for Platform/OS (higher unknown-unknown risk, thinner PM bench).
2. **One commitment one-pager** carries all three of Kurt's own named pillars — definition of done, KPI attached, timeline committed — drafted at the betting table, sitting upstream of the existing Tier 1/2/3 PRD.
3. **PRD tiers wired to rollout rings**: every PRD gets a customer-visible field; if yes, a named ring plan (internal → design partners → high-priority cohort → GA for Tier 1) with exit criteria per ring — formalizing the staged rollout that already happens informally.
4. **Say/do ratio**, published per team per cycle, healthy range 80–110% — introduced as a team-level trend line, never an individual scorecard, with the low EOD-update completion rate treated as an early warning of exactly this failure mode.
5. **Customer learning loop via existing contact**: rotate PM + engineer into an existing PFM/CS customer call weekly, rather than building new research infrastructure — PMs aren't customer-facing today, but PFMs and Corey already are.
6. **Field communication**: protect the product enablement meeting as non-cancelable; add a Now/Next/Later (committed/next bet/exploring) visual split to the existing roadmap tool; a quarterly roadshow shares the betting table's output org-wide.
7. **Explicit platform protection**: reserve a fixed share of each quarter's committed themes for Platform/OS foundational work, decided openly at the betting table — not squeezed out ad hoc by whichever field ask is loudest.
8. **Shaping vs. building, made explicit**: Wiley shaping hard problems is the expected senior-leader role; Joyce owns turning shaped pitches into committed one-pagers and execution timelines — reframing "Wiley literally writing PRDs" into a bounded, normal split.

## Tying it to the ramp

The reason this matters: going from ~$500–800K to $1–3M net-new/quarter over 12–24 months. Two links make the process serve that number rather than existing for its own sake: Applications' committed themes should be selected against PFM/CS-sourced deal and implementation blockers, not a generic feature list; and "committed themes shipped on time" should sit on the same dashboard as net-new ARR/quarter, so the org can see whether fixing the process is actually moving the ramp.

## Rollout of the process itself

Pilot in Applications only for one quarter (most mature bench, most urgent) → extend the lighter quarterly-appetite version to Platform/OS once the one-pager and cadence have proven themselves → reconcile the whole strawman directly against the existing Tapestry lifecycle doc with Wiley/Joyce, since that doc wasn't independently reviewable here.

## Top open questions

1. What do **BIDEC, ZSL, Mission0, BYOFE, "Actions-as-Code"** refer to — do any of the mechanisms above already exist informally under those names?
2. Does the existing Tapestry lifecycle doc already define a PRD-tier → rollout-ring mapping this should defer to instead of duplicate?
3. What's the actual root cause of the low EOD-update completion rate — worth diagnosing before layering a second ritual (say/do ratio) on top of a first one (EOD updates) that's already quietly failing?
4. Who runs the quarterly betting table — Wiley, Kurt, or a rotating chair?

## Changelog

- **2026-07-07** — v1. Strawman drafted from Kurt's early take + internal staff-meeting notes, combined with research on Shape Up, the Linear Method, Amazon Working Backwards, AI-native org practice, staged-rollout/release-ring norms, the say/do ratio, continuous discovery, and PM:eng staffing ratios.
