import { DeckDef, Rise } from "../components/Deck";

export const processV2: DeckDef = {
  id: "process-v2",
  title: "DOSS Product Process — Roadmap Alignment & Accountability",
  date: "2026-07-08",
  track: "process",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          Customer-<em>evidenced</em> roadmap. <em>Owned</em> commitments.
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product &amp; engineering process</span>
          <span>Current process + focused improvements</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — current process
    <>
      <Rise order={0}>
        <div className="kicker">Current process</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          DOSS already has the core <span className="accent">operating system</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="board">
          <div className="cell">
            <span className="id">01</span>
            <h4>PRD tier system</h4>
            <span className="status">3 tiers</span>
          </div>
          <div className="cell">
            <span className="id">02</span>
            <h4>POR PMap</h4>
            <span className="status">8-stage gate</span>
          </div>
          <div className="cell">
            <span className="id">03</span>
            <h4>Full RACI matrix</h4>
            <span className="status">stage × function</span>
          </div>
          <div className="cell hot-cell">
            <span className="id">04</span>
            <h4>Weekly Staff Mtg + Quarterly SLT review</h4>
            <span className="status hot">already exists</span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          The answer is not a new parallel process. It is to use the lifecycle already in place,
          then tighten a few fields and ownership points where roadmap evidence and delivery
          commitments need more discipline.
        </p>
      </Rise>
    </>,

    // 3 — the two things missing
    <>
      <Rise order={0}>
        <div className="kicker">Operating questions</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Three questions every committed project answers</h1>
      </Rise>
      <div className="board">
        <Rise order={2}>
          <div className="cell hot-cell">
            <span className="id">01</span>
            <h4>What are we doing?</h4>
            <span className="status hot">definition of done</span>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="cell hot-cell">
            <span className="id">02</span>
            <h4>How will we know it worked?</h4>
            <span className="status hot">KPI / outcome</span>
          </div>
        </Rise>
        <Rise order={4}>
          <div className="cell hot-cell">
            <span className="id">03</span>
            <h4>When will we deliver it?</h4>
            <span className="status hot">owned timeline</span>
          </div>
        </Rise>
      </div>
      <Rise order={5}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          These are Kurt's independently-arrived-at pillars. They do not require reinventing the
          lifecycle — they require making the existing lifecycle answer the questions explicitly.
        </p>
      </Rise>
    </>,

    // 4 — the two gaps
    <>
      <Rise order={0}>
        <div className="kicker">Where to improve</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Two gaps, named precisely</h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card blue-card">
            <span className="card-num">Gap 01</span>
            <h3>Roadmap ↔ customer need</h3>
            <p>
              Intake asks "why now" but does not require named customers, ARR/pipeline at stake,
              or the success measure that says whether the work mattered.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card blue-card">
            <span className="card-num">Gap 02</span>
            <h3>Delivery commitment ownership</h3>
            <p>
              The RACI's "Accountable" owner changes every stage. Nobody owns the definition of
              done, KPI, and ship-date promise end-to-end.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 5 — Addition A
    <>
      <Rise order={0}>
        <div className="kicker">Addition A</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          A customer-evidence and KPI gate on <span className="accent">Intake</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Add two required fields to the existing Intake one-pager: <strong>Customer
          Evidence</strong> — named accounts or account count, ARR/pipeline at stake, and a VoC or
          growth-pillar citation — plus <strong>Success Measure</strong>, the KPI or
          customer/business outcome that says whether the work mattered.
        </p>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.4rem", fontSize: "1rem" }}>
          This becomes a third resourcing question at weekly Triage, alongside owner and capacity:
          <em> do we know the customer evidence and success measure?</em> No candidate advances
          past "Not Started" without it.
        </p>
      </Rise>
    </>,

    // 6 — Addition B: commitment + DRI
    <>
      <Rise order={0}>
        <div className="kicker">Addition B — part 1</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          A <span className="accent">Commitment</span> field and a{" "}
          <span className="accent">DRI</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">01</span>
            <span>
              Every POR PMap project is marked <strong>Committed</strong> (locked ship window) or{" "}
              <strong>Exploring</strong> (no locked date).
            </span>
          </li>
          <li>
            <span className="n">02</span>
            <span>
              Changing a Committed date requires the <strong>same Arnav approval</strong> already
              required for engineering due dates — extended one level up, logged visibly.
            </span>
          </li>
          <li>
            <span className="n">03</span>
            <span>
              A <strong>DRI per committed project</strong> — the term the org already uses for
              PRDs — accountable end-to-end for the definition of done, KPI, and timeline.
            </span>
          </li>
        </ol>
      </Rise>
    </>,

    // 7 — Addition B: say/do
    <>
      <Rise order={0}>
        <div className="kicker">Addition B — part 2</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          A real <span className="accent">say/do metric</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">80–110%</span>
            <span className="stat-label">the healthy range for committed-projects-on-time</span>
          </div>
          <div className="stat">
            <span className="stat-num">Weekly</span>
            <span className="stat-label">
              leading indicator at Staff Mtg — <strong>which commitments are at risk</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">Quarterly</span>
            <span className="stat-label">
              trailing scorecard at the SLT review — <strong>team-level trend, never
              individual</strong>
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Nothing like this exists in the current process — but it needs no new ritual. It's a
          standing agenda item added to the two meetings that already happen every week and every
          quarter.
        </p>
      </Rise>
    </>,

    // 8 — supporting fixes
    <>
      <Rise order={0}>
        <div className="kicker">Two supporting fixes</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Independent of A and B</h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">Fix 01</span>
            <h3>Customer-facing release check</h3>
            <p>
              Add one plain Release question: <strong>will customers notice this change?</strong>{" "}
              If yes, name who sees it first and who tells Sales/CS. That question is independent
              of PRD tier; even a small change can need careful communication.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Fix 02</span>
            <h3>Forward field communication</h3>
            <p>
              Extend the existing quarterly SLT review to include a field-facing segment on
              what's locked for next quarter — not a new meeting, a new segment of a real one.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 9 — governance role
    <>
      <Rise order={0}>
        <div className="kicker">Governance role</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Product writes the PRD; <span className="accent">Wiley approves it</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          The documented RACI already assigns PM as Accountable for PRD authorship at every
          applicable stage. Wiley's role is not to create the PRD from scratch; Product brings him
          the PRD, customer evidence, KPI, definition of done, and tradeoff recommendation so he
          can review, push, and approve the decision at CEO altitude.
        </p>
      </Rise>
    </>,

    // 10 — rollout
    <>
      <Rise order={0}>
        <div className="kicker">Rolling this out</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">No pilot required — these are fields, not rituals</h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Both additions attach to tools and meetings already in weekly use. Introduce the
          Customer Evidence, Success Measure, Commitment, and DRI fields at the next weekly Staff
          Mtg; start the say/do trend line at the next quarterly SLT review once a baseline exists.
        </p>
      </Rise>
    </>,
  ],
};
