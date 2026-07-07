import { DeckDef, Rise } from "../components/Deck";

export const processV1: DeckDef = {
  id: "process-v1",
  title: "DOSS Product Process — Strawman v1",
  date: "2026-07-07",
  track: "process",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          A lightweight but <em>robust</em> product process
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product &amp; engineering process</span>
          <span>Strawman · v1</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — the diagnosis
    <>
      <Rise order={0}>
        <div className="kicker">The diagnosis</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Planning has no <span className="accent">closing bell</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Three to four years of deep engineering work, now pivoting into applications and
          field-facing delivery behind a small, fast-ramping sales team. The gap isn't process
          infrastructure — a roadmap tool, tiered PRDs, and a lifecycle doc already exist. The gap
          is <strong>commitment and communication</strong>: no fixed point where specific
          capabilities lock to a delivery window, get measured, and reach the field before they
          ship. <em>"Three weeks still discussing ARP V2"</em> with no clear owner is the symptom.
        </p>
      </Rise>
    </>,

    // 3 — the constraint
    <>
      <Rise order={0}>
        <div className="kicker">The design constraint</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Not big-room planning. <span className="accent">Not zero accountability.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Shape Up, the Linear Method, Amazon's Working Backwards, and how AI-native orgs like
          Anthropic ship all converge on the same shape, independently: <strong>short fixed
          cycles, a lightweight written commitment, a closing ritual that's a bet rather than a
          status meeting, no backlog theater.</strong> That convergence is the evidence this is
          the right shape for DOSS — not a novel invention.
        </p>
      </Rise>
    </>,

    // 4 — what already exists
    <>
      <Rise order={0}>
        <div className="kicker">Extend, don't replace</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">More is already in place than it feels like</h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Already exists</th>
              <th>What's missing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Public roadmap tool</td>
              <td>A visual split between committed and exploring</td>
            </tr>
            <tr>
              <td>PRD tiers (1/2/3)</td>
              <td>A rule for when a tier requires a staged customer rollout</td>
            </tr>
            <tr>
              <td>Weekly staff meeting + EOD updates</td>
              <td>Low completion rate — a ritual already quietly failing</td>
            </tr>
            <tr>
              <td>Informal staged rollout</td>
              <td>Named rings, exit criteria, tied to PRD tier</td>
            </tr>
            <tr>
              <td>Lifecycle doc + org diagram</td>
              <td>Reconciliation with this strawman, directly with Wiley/Joyce</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 5 — cadence
    <>
      <Rise order={0}>
        <div className="kicker">Mechanism 01</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Quarterly betting. Monthly checkpoint. <span className="accent">Per team.</span>
        </h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card blue-card">
            <span className="card-num">Applications</span>
            <h3>Monthly commitment</h3>
            <p>
              Field-facing, most mature PM bench, closest to the revenue ramp — the tightest loop.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Platform · OS</span>
            <h3>Quarterly appetite + monthly hill chart</h3>
            <p>
              Higher unknown-unknown risk, thinner PM bench — uphill/downhill progress, not a
              forced monthly commitment.
            </p>
          </div>
        </Rise>
      </div>
      <Rise order={4}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          A betting table (a few hours, not an off-site) sets committed themes each quarter.
          Monthly checkpoints re-forecast — they don't re-open commitments.
        </p>
      </Rise>
    </>,

    // 6 — the one-pager
    <>
      <Rise order={0}>
        <div className="kicker">Mechanism 02</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          One artifact carries all three <span className="accent">pillars</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Definition of done, KPI attached, timeline committed — the three things already named as
          missing. One short commitment one-pager, drafted at the betting table, carries all
          three: <em>problem → who's asking → shape of the solution → metric it moves → appetite →
          rollout tier + ring plan → definition of done → owner.</em> It sits upstream of the
          existing Tier 1/2/3 PRD — it's the bet; the PRD is the build spec once the bet is placed.
        </p>
      </Rise>
    </>,

    // 7 — PRD tier -> ring mapping
    <>
      <Rise order={0}>
        <div className="kicker">Mechanism 03</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Tie PRD tiers to rollout rings</h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Ring plan</th>
              <th>Advance when</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tier 1</td>
              <td>Internal → design partners → high-priority cohort → GA</td>
              <td>Named KPI/error threshold cleared per ring</td>
            </tr>
            <tr>
              <td>Tier 2</td>
              <td>Internal → one early-adopter ring → GA</td>
              <td>Single lighter gate</td>
            </tr>
            <tr>
              <td>Tier 3</td>
              <td>Continuous deployment</td>
              <td>No ring required</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.8rem", fontSize: "1.05rem" }}>
          Closes the named gap directly: <em>"no process for defining will this feature require a
          customer rollout."</em> Formalizes what's already happening informally — doesn't invent
          new infrastructure.
        </p>
      </Rise>
    </>,

    // 8 — say/do ratio
    <>
      <Rise order={0}>
        <div className="kicker">Mechanism 04</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Say/do ratio — <span className="accent">team-level, never individual</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">80–110%</span>
            <span className="stat-label">
              the healthy range — <strong>commitments completed ÷ commitments made</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">1 ritual</span>
            <span className="stat-label">
              already quietly failing: <strong>low EOD-update completion</strong> — the warning
              sign for this exact failure mode
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">0</span>
            <span className="stat-label">
              individual scorecards — used punitively, this metric produces{" "}
              <strong>sandbagging</strong>, not honesty
            </span>
          </div>
        </div>
      </Rise>
    </>,

    // 9 — customer learning loop
    <>
      <Rise order={0}>
        <div className="kicker">Mechanism 05</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Route the learning loop through <span className="accent">who already has it</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          PMs aren't customer-facing today — Corey (CS) and the PFMs already are, and they see
          every scoping fight from SOW to go-live firsthand. Rather than building new research
          infrastructure: <strong>rotate PM + engineer into an existing PFM/CS customer call every
          week</strong>. And make <em>reducing implementation friction</em> an explicit,
          KPI-attached Applications theme, sourced directly from that signal — not a vague ongoing
          concern nobody owns.
        </p>
      </Rise>
    </>,

    // 10 — field comms + platform protection + shaping
    <>
      <Rise order={0}>
        <div className="kicker">Mechanisms 06–08</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Communicate, protect, and clarify ownership</h1>
      </Rise>
      <div className="cols three">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">06 · Field comms</span>
            <h3>Protect one meeting</h3>
            <p>
              Make the enablement meeting non-cancelable; add Now/Next/Later to the existing
              roadmap tool; a quarterly roadshow shares the betting table's output.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">07 · Platform protection</span>
            <h3>Reserve a fixed share</h3>
            <p>
              Foundational Platform/OS work gets a protected slice of every quarter's committed
              themes, decided openly — not squeezed out by the loudest field ask.
            </p>
          </div>
        </Rise>
        <Rise order={4}>
          <div className="card">
            <span className="card-num">08 · Shaping vs. building</span>
            <h3>Wiley shapes, Joyce builds</h3>
            <p>
              A senior leader shaping hard problems is expected. The gap is Joyce owning the
              committed one-pager and timeline once a pitch is shaped — not open-ended translation.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 11 — tying to the ramp
    <>
      <Rise order={0}>
        <div className="kicker">Why this matters</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Tie the cadence to the <span className="accent">ramp</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">$500–800K</span>
            <span className="stat-label">net-new per quarter today</span>
          </div>
          <div className="stat">
            <span className="stat-num">$1–3M</span>
            <span className="stat-label">target net-new per quarter, 12–24 months out</span>
          </div>
          <div className="stat">
            <span className="stat-num">2 links</span>
            <span className="stat-label">
              committed themes sourced from PFM/CS blockers; shipped-on-time tracked{" "}
              <strong>next to</strong> net-new ARR
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          A process that doesn't visibly serve the ramp isn't worth adopting — this is the
          feedback loop that proves whether it does.
        </p>
      </Rise>
    </>,

    // 12 — rollout + open questions
    <>
      <Rise order={0}>
        <div className="kicker">Rolling this out — and what we don't know yet</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Pilot first. Reconcile. Ask.</h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Wk 1–4</span>
            <span>
              <strong>Pilot in Applications only</strong> — most mature bench, most urgent. One
              betting table, the one-pager, the say/do trend line starts.
            </span>
          </li>
          <li>
            <span className="n">Wk 5–8</span>
            <span>
              <strong>Extend to Platform/OS</strong> with the lighter quarterly-appetite version,
              once the cadence has proven itself.
            </span>
          </li>
          <li>
            <span className="n">Q·01</span>
            <span>
              What do <strong>BIDEC, ZSL, Mission0</strong> actually refer to — do any of these
              mechanisms already exist informally under those names?
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the <strong>root cause of the low EOD-update completion rate</strong> —
              worth diagnosing before layering a second ritual on top?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
