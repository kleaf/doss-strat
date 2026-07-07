# Research: accountability metrics, customer discovery, and team-sizing benchmarks

**Source:** web research 2026-07-07 (product-process strawman, survey 2 of 2).

## The say/do ratio (the metric Kurt's notes already named)

- Formula: **(commitments completed ÷ commitments made) × 100**. Originated in agile teams comparing sprint-planning commitments ("say") to sprint-completion reality ("do"), now used more broadly as a trust/predictability metric.
- **Healthy benchmark: 80–110%.** Below that, forecasting and trust erode; consistently *over* 100% (sandbagging commitments to always over-deliver) is its own dysfunction.
- **Explicit, well-documented caution**: used punitively, it drives sandbagging and quiet scope-cutting to protect the number, rather than honest forecasting. Multiple sources single this out as *the* way to wreck the metric's value. It must be a **team-level learning signal**, published and discussed, never an individual performance score.

## Continuous discovery habits (Teresa Torres)

- Core practice: **the "product trio" (PM + designer + engineer) talks to at least one customer every week — together, not filtered through a report.** The point is direct, continuous signal to the people building the thing, not research arriving six weeks stale.
- Practical enabler: **recruiting must be automated/pre-scheduled** — "if you have to hustle to find a customer every week, you won't." A standing interview slot on the calendar every Monday, filled automatically, is the mechanism that makes this durable rather than aspirational.
- Two research modes: **opportunity interviews** (what's the problem, really) and **assumption testing** (does this solution idea actually hold up) — deliberately small and continuous, not a big periodic research initiative.

## PM:engineer staffing ratios

- Common range across sources: **1 PM per 5–10 engineers**, with wide variance by stage.
- **Earlier-stage companies run richer PM ratios** (~1:5–7.5) because more hypothesis-testing and direct founder/PM involvement is needed; **later-stage scale-ups run leaner** (~1:9–12) once the product surface is established and execution, not discovery, dominates.
- A more experienced PM can responsibly hold a wider ratio; a first-time PM (as flagged for DOSS's Platform team) needs a *narrower* scope or more scaffolding, not the same ratio as a veteran.

## Roadmap communication: commit-confidence tiers

- **Now / Next / Later** (see companion doc) is the dominant lightweight pattern for avoiding false date-precision while still communicating direction.
- The broader pattern across GitLab/Atlassian-style public roadmaps: **separate "what we're committed to shipping" from "what we're exploring"** — visually and structurally distinct, so the field/sales org can tell a promise from a possibility at a glance.
- Cross-team dependency negotiation ("asks" in Atlassian's model) — teams explicitly negotiate scope and dates for shared dependencies rather than assuming another team's roadmap silently accommodates them. Relevant to DOSS given Platform/OS/Applications are interdependent (Applications is "built around ARP V2 and ZSL," i.e., depends on Platform/OS output).

## Signal

- The say/do ratio Kurt's notes already reach for is a real, well-validated mechanic — but it must be introduced as a **team-level trend line reviewed openly**, not an individual scorecard, or it will manufacture exactly the sandbagging/low-EOD-completion dysfunction already showing up (low EOD-update completion rate is itself a mild version of this failure mode: a lightweight accountability ritual people quietly stop doing).
- Continuous discovery gives a concrete, low-overhead fix for "PMs not customer facing": a standing weekly customer slot per trio, not a new team or a research function — directly answers the customer-learning-loop part of Kurt's ask.
- The PM ratio data validates the H2-headcount decision (2 PMs Apps, 1 PM OS) as directionally reasonable for team *sizes* likely in play, but flags Platform's single first-time PM as the highest-risk staffing point — first-time PMs need narrower scope, and Platform is foundational/high-blast-radius work, the opposite of "safe to under-scaffold."
- Commit-vs-explore visual separation is the direct mechanism for "not a lot of communication out to the field" — the roadmap tool already exists (Lovable dashboard); the gap is a *commitment-confidence layer* on top of it, not a new tool.
