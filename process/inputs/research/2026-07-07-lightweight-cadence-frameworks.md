# Research: lightweight planning/cadence frameworks

**Source:** web research 2026-07-07 (product-process strawman, survey 1 of 2).

## Shape Up (Basecamp)

- **6-week build cycles** + a **2-week cooldown** between them. Long enough to finish something meaningful, short enough to keep an end in sight.
- **No backlog.** No grooming ritual, no "someday" list that grows forever — just a handful of shaped pitches considered at each cycle boundary.
- **Betting, not planning.** The **betting table** meets during cooldown; stakeholders "bet" cycle time on pitches. Bets have a payout, unlike a sprint that's just "filled with tasks."
- **Appetite, not estimate.** Instead of "how long will this take," ask "how much time is this worth to us" — and shape the solution to fit that budget, not the other way around.
- **Hill charts** replace burndown charts: each piece of work is placed on a hill — left side ("uphill") means still figuring out the unknowns, right side ("downhill") means execution on a known path. This is a much better predictability signal than "% tasks done," because it surfaces *unknown unknowns* early.
- Explicitly designed to scale down: Basecamp's own appendix ("Adjust to Your Size") acknowledges smaller teams should shrink cycle length and formality, not copy the ritual wholesale.

## The Linear Method

- **2-week cycles** are the most common cadence — short enough not to lose sight of priorities, long enough to ship something real.
- Small teams: roughly **1 designer + 2 engineers** per project team; a ~50-person company runs about 6 such teams in parallel.
- **Now / Next / Later roadmap**: avoids far-out date commitments. *Now* = active/imminent (1–2 cycles), *Next* = high priority, coming in 1–3 months, *Later* = 3–6+ months out / still in discovery. Re-prioritization moves items *between buckets* rather than rewriting a dated Gantt chart.
- Principle: **projects should trace to goals directly** — the ranking mechanism is "does this serve an ambitious goal," not a complicated scoring rubric.

## Amazon Working Backwards (PR/FAQ)

- A short (**~6-page**) narrative: mock press release (headline, customer, problem, solution, leader quote, customer quote, call to action) + FAQ.
- **Explicitly lightweight by design** — first draft should take hours, not days. The rigor is proportional to project size/risk, not a fixed heavyweight template applied everywhere.
- Written narratives replace slide decks in reviews — forces actual thinking to be legible, and lets readers engage with reasoning rather than bullet fragments.

## AI-native org practice (Anthropic / Cat Wu, Head of Product for Claude Code)

- Cadence has compressed "**from months to weeks to days**" as the org matured.
- Named first principle: **"just do things"** — bias to action over process ceremony.
- **Mission alignment substitutes for governance layers** — shared purpose reduces the coordination overhead that heavyweight process exists to manage.
- Notable practice: **build products before the underlying model fully supports them**, so the product is ready the moment capability catches up — i.e., roadmap sequencing is deliberately coupled to a capability curve, not just feature requests.
- (Much of the source is paywalled; treat as directional signal — the throughline across every AI-native-org reference is *small teams, written docs, minimal ceremony, fast iteration*, not a specific named framework to copy wholesale.)

## Staged rollout / release rings (SRE & release-engineering practice)

- Standard progression: **team that built it → wider internal team → beta/trusted early adopters → general rollout**, typically ramping numerically (1–5% → incrementally higher), watching KPIs at each step before expanding.
- **Feature flags decouple deploy from release** — code ships continuously; exposure to users is a separate, reversible decision. This is the mechanism that makes continuous deployment *safe* to pair with staged rollout.
- **Rings** (Microsoft/Windows Insider model) let multiple production versions run in parallel across cohorts (canary/dev/beta/stable), each getting a different exposure level — a more formal version of exactly what DOSS's notes describe informally ("internal instances, safe customers, high-priority customers").

## Signal

- Every framework here rejects big-room, long-horizon, heavyweight planning **and** rejects zero-accountability drift — they converge on the same shape: **short fixed cycles + a lightweight commitment ritual + written narratives over meetings + no backlog theater**. This directly answers Kurt's stated tension.
- Shape Up's hill chart is a strong candidate mechanism for "definition of done" visibility without task-counting theater — maps well onto Kurt's "committing to a timeline" pillar.
- Linear's Now/Next/Later is close to what "calendar quarters" + "monthly or quarterly themes" in Kurt's notes is already reaching for — validates the instinct, gives it a name and a lighter mechanic than date-locked roadmaps.
- DOSS's *already-informal* staged rollout (internal → safe customers → high-priority customers) is textbook release-ring practice — it doesn't need to be invented, just **formalized and tied to a trigger rule** (the exact gap Kurt's notes name: "no process for defining will this feature require a customer rollout").
- Appetite-over-estimate reframes "who's in charge of ARP V2, what's the definition of done" — the problem may partly be that the team is estimating an open-ended vision (Wiley's) instead of shaping a fixed-appetite bet.
