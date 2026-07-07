# Deep dive: a lightweight-but-robust product process for DOSS

> **Status:** v1 strawman, 2026-07-07. Synthesizes Kurt's [early take and internal meeting notes](../inputs/2026-07-07-kurt-early-take-and-meeting-notes.md) with external research on [lightweight cadence frameworks](../inputs/research/2026-07-07-lightweight-cadence-frameworks.md) and [accountability/discovery practices](../inputs/research/2026-07-07-accountability-and-discovery-practices.md). Companion to [PROCESS.md](../../PROCESS.md).

## The diagnosis, stated plainly

DOSS has a strong, deep engineering org that has spent 3–4 years getting the ERP fundamentals right, and is now pivoting into applications and field-facing delivery with a small, fast-ramping sales team behind it. The process gap is not "we have nothing" — there's a roadmap tool, a tiered PRD library, an org diagram, and a documented product development lifecycle. The gap is **commitment and communication**: no fixed point where a specific set of capabilities gets locked to a specific delivery window, measured afterward, and communicated to the field *before* it ships, not after. "Been 3 weeks still discussing ARP V2" and nobody clearly owning its definition of done is the symptom; the underlying disease is that **planning currently has no closing bell.**

## The design constraint

Kurt named it directly: not heavyweight, big-room, old-ERP-consultant-style planning — but not zero-accountability drift either. The frameworks below (Shape Up, the Linear Method, Amazon's Working Backwards, and what's visible of how Anthropic ships) all converge on the same shape, independently: **short fixed cycles, a lightweight written commitment artifact, a closing ritual that's a bet rather than a status meeting, and no backlog theater.** That convergence is itself evidence this is the right shape for DOSS, not a novel invention.

## What DOSS already has — extend it, don't replace it

| Already exists | What it's missing |
|---|---|
| Public roadmap tool (Lovable dashboard) | A visual split between *committed* and *exploring* — right now a field viewer can't tell a promise from a possibility |
| PRD tiers (Tier 1/2/3, introduced ~6/17) | A rule for when a PRD requires a staged customer rollout — the tiers exist but don't yet drive rollout behavior |
| Weekly staff meeting + EOD update ritual | Low EOD-completion rate — a lightweight ritual already quietly failing; more ritual won't fix this without first asking why |
| Informal staged rollout (internal → safe customers → high-priority customers) | Formalization: named rings, exit criteria per ring, tied to PRD tier |
| Product Development Lifecycle doc + org diagram (Tapestry) | Not independently reviewable from here — reconcile the strawman below against it directly with Wiley/Joyce |

## The strawman, as eight concrete mechanisms

### 1. Cadence: quarterly betting, monthly checkpoint — differentiated by team

A quarterly **betting table** (borrowed directly from Shape Up) sets committed themes for the quarter — a few hours with team leads + PMs + Kurt/Wiley as needed, not an off-site. A monthly checkpoint reviews progress and re-forecasts; it does not re-open commitments mid-quarter.

- **Applications** (customer/revenue-facing, most mature PM bench): monthly commitment granularity — the tightest loop, because it's closest to the field and the revenue ramp.
- **Platform / OS** (foundational, higher unknown-unknown risk, thinner PM bench): quarterly appetite-setting with a **monthly hill-chart check-in** (uphill/downhill, not % done) rather than a hard monthly commitment — matches the actual risk profile of infrastructure work instead of forcing it into sprint theater it will fight.

This directly operationalizes Kurt's own "monthly or quarterly" instinct rather than replacing it.

### 2. One artifact that carries all three of Kurt's pillars

Kurt independently named definition of done, KPI attachment, and timeline commitment as the three things missing. Rather than three separate processes, one short **commitment one-pager** (PR/FAQ-lite, filled in at the betting table, one to two hours to draft) carries all three:

*Problem → who's asking for it → the shape of the solution → the metric it moves → the appetite (time budget, not estimate) → rollout tier + ring plan → definition of done → owner.*

This sits **upstream** of the existing Tier 1/2/3 PRD — it's the bet; the PRD is the detailed build spec once the bet is placed. Nothing about the existing PRD tiering needs to change.

### 3. Tie PRD tiers to rollout rings — close the named gap

The notes are explicit: *"no process — writing a PRD — not defining will this feature require a customer rollout, if yes, follow this process."* Fix: add a mandatory field to the PRD template — **Customer-visible? If yes: which ring plan?**

| Tier | Ring plan | Exit criteria to advance |
|---|---|---|
| Tier 1 (broad customer-facing change) | Internal dogfood → 2–3 design-partner customers → high-priority cohort → GA | Named KPI/error-rate threshold per ring, reviewed before advancing |
| Tier 2 (moderate) | Internal → one early-adopter ring → GA | Lighter, single gate |
| Tier 3 (small/internal/low-risk) | Continuous deployment, no ring required | N/A |

This formalizes exactly what's already happening informally ("internal instances, safe customers... high-priority customers") — it doesn't invent new infrastructure, it makes the existing instinct a rule instead of tribal knowledge.

### 4. Say/do ratio — the metric Kurt already reached for, with its failure mode pre-empted

*(Commitments completed ÷ commitments made) × 100*, published **per team, per cycle**, reviewed at the existing weekly staff meeting. Healthy range **80–110%**. This is a well-validated mechanic — but every source is emphatic about its one failure mode: used as an individual scorecard, it produces sandbagging and quiet scope-cutting rather than honest forecasting. **DOSS is already showing a version of this failure** — the low EOD-update completion rate is a lightweight accountability ritual people have quietly stopped doing. Diagnose *why* that happened before adding a second ritual on top of it; the say/do ratio must launch explicitly as a team-level trend line, never a name-and-shame list, or it will suffer the same fate.

### 5. The customer learning loop — route through the people who already have it

PMs aren't customer-facing today; Corey (CS) and the PFMs (who own SOW-to-go-live and feel every scoping/re-scoping fight firsthand) already are. Rather than standing up a new research function, **rotate product (PM + one engineer) into an existing PFM/CS customer call every week** — continuous discovery's core mechanic (weekly trio touchpoints), adapted to use the customer contact DOSS already has instead of building new interview infrastructure. Pair this with a standing structured intake from PFMs/Corey — the "Eng Product Listening" Slack channel and Corey's own suggested "product intake for customer installs" (already raised 6/17) are the right home for this; don't create a second channel.

This is also where **"implementation is a bottleneck"** gets a home: make *reducing implementation friction* an explicit, KPI-attached committed theme for Applications, sourced directly from PFM signal — not a vague ongoing concern nobody owns.

### 6. Field communication: protect one meeting, add one visual distinction

The product enablement meeting already exists — and is being cancelled some weeks. Fix: **make it the fixed, non-cancelable monthly field-comms mechanism**, not an optional one. On the roadmap tool itself, add the one missing visual: a clear **Now (committed this cycle) / Next (next quarter's bet) / Later (exploring)** split, so field/sales can tell a promise from a possibility at a glance without asking product directly. Quarterly, do the "roadshow" the notes themselves already floated ("share the prototype... All hands? Team roadshow meetings?") — that's the public version of the betting table's output.

### 7. Protect platform depth explicitly, don't leave it to political pressure

The tension in Kurt's ask — ship predictably to the field *and* keep building out the platform/OS/AI layer — gets resolved by making it a portfolio decision made openly at the quarterly betting table: **reserve a fixed share of each quarter's committed themes for Platform/OS foundational work**, decided alongside the Applications commitments, not squeezed out ad hoc by whichever field ask is loudest that week. This is the direct mechanism for "continuing to innovate the platform" without it silently losing every prioritization fight to short-term revenue pressure.

### 8. Shaping vs. building — reframe, don't just flag, "Wiley literally writing PRDs"

In Shape Up's terms, a senior leader defining the shape of a hard problem *is* the expected "shaper" role — that part is fine. The actual gap is that **Joyce, not Wiley, should own turning a shaped pitch into the committed one-pager and the execution timeline** once Wiley has shaped it. Made explicit, this turns a "PM leader doing IC work" smell into a normal, bounded shaping/building split — and gives Joyce (first time fully driving OS's committed cadence) a concrete boundary of ownership rather than open-ended translation of "what's in Wiley's head."

## Cross-functional gaps, closed by decision rather than more meetings

- **Urgent product questions:** the "Eng Product Listening" Slack channel already exists — declare it the single channel, with a same-business-day acknowledgment norm. Don't create a second channel; that just fragments the question DOSS is already asking itself (5/20, 6/17) about where these questions should go.
- **Integration/partnership product ownership:** name a co-owner (PFM + Platform PM) explicitly and publish it, closing the open question from 6/17 directly rather than re-raising it at the next staff meeting.

## Tying the cadence to the revenue ramp

The ramp from ~$500–800K to $1–3M net-new/quarter over 12–24 months is the actual reason this matters — a process that doesn't visibly serve it isn't worth adopting. Two concrete links:

1. Applications' quarterly committed themes should be selected **against PFM/CS-sourced blockers to deals and implementations** — not a generic feature list — so the committed-theme set is explicitly a ramp-unblocking set each quarter.
2. Track **"committed themes shipped on time" alongside net-new ARR/quarter** on the same dashboard. This is the feedback loop that tells leadership whether fixing the process is actually moving the number it exists to move — otherwise "we shipped our themes" and "revenue ramped" stay two disconnected stories.

## Rollout of the process itself (don't boil the ocean)

1. **Weeks 1–4 — pilot in Applications only** (most mature PM bench, closest to the ramp, most urgent). Run one quarterly betting table, adopt the one-pager, start the say/do trend line.
2. **Weeks 5–8 — extend to Platform/OS** with the lighter quarterly-appetite/monthly-hill-chart version, once Applications has proven the one-pager and cadence aren't dead weight.
3. **Ongoing** — reconcile all of the above against the existing Tapestry "Product Development Lifecycle" doc and org diagram directly with Wiley/Joyce, since those weren't independently reviewable here; this strawman should be read as a proposal to merge into that existing doc, not a competing one.

## Open questions (can't be resolved from the notes alone)

1. What do **BIDEC, ZSL, Mission0, BYOFE, "Actions-as-Code"** actually refer to? Flagged rather than guessed at — needed to know whether any of the mechanisms above already exist informally under those names.
2. Does the existing Tapestry lifecycle doc already define some version of PRD-tier → rollout-ring mapping? If so, this strawman should defer to it and just add the missing pieces.
3. What is the actual root cause of the low EOD-update completion rate? Diagnosing this matters more than designing around it — a second ritual layered on an unaddressed first-ritual failure will likely fail the same way.
4. Who is the right owner to run the quarterly betting table itself — Wiley, Kurt, or a rotating chair? Not specified in the notes.
