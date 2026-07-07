import { DeckDef, Rise } from "../components/Deck";

export const processV2: DeckDef = {
  id: "process-v2",
  title: "DOSS Product Process — Roadmap Alignment & Accountability v2",
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
          <span>Reconciled · v2</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — what's already real
    <>
      <Rise order={0}>
        <div className="kicker">Correction from v1</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          More is real than <span className="accent">v1 gave credit for</span>
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
          None of v1's proposed mechanisms should be built as new, parallel machinery. The real
          job is narrower — and matches exactly what Kurt asked for this pass.
        </p>
      </Rise>
    </>,

    // 3 — the two things missing
    <>
      <Rise order={0}>
        <div className="kicker">What's actually missing</div>
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
              Intake asks "why now" but nothing requires citing named accounts, ARR at stake, or a
              VoC signal before a candidate is triaged.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card blue-card">
            <span className="card-num">Gap 02</span>
            <h3>Delivery commitment ownership</h3>
            <p>
              The RACI's "Accountable" owner changes every stage. Nobody owns the ship-date
              promise end-to-end, and no metric tracks whether commitments are kept.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 4 — Addition A
    <>
      <Rise order={0}>
        <div className="kicker">Addition A</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          A customer-evidence gate on <span className="accent">Intake</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Add one required field to the existing Intake one-pager: <strong>Customer
          Evidence</strong> — named accounts or account count, ARR/pipeline at stake, and a
          citation of the growth pillar it serves (Close the Books · Introducing New Products ·
          Ensuring Availability · Introducing New Sales Channels). This becomes a third resourcing
          question at the existing weekly Triage: <em>do we have the owner, do we have capacity,
          do we have the customer evidence.</em> No candidate advances past "Not Started" without
          it.
        </p>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.4rem", fontSize: "1rem" }}>
          Scales naturally with the doc's own listening model: Applications (richest listening)
          cites the richest evidence; Platform (least listening, Wiley/Arnav-directed) cites
          technical conviction explicitly instead of leaving the field blank.
        </p>
      </Rise>
    </>,

    // 5 — Addition B: commitment + DRI
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
              PRDs — accountable end-to-end, idea through adoption, not just per stage.
            </span>
          </li>
        </ol>
      </Rise>
    </>,

    // 6 — Addition B: say/do
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

    // 7 — supporting fixes
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
            <h3>Staged rollout, decoupled from PRD tier</h3>
            <p>
              A "customer rollout required? ring plan?" field on Release — tier measures
              scope/clarity, not customer-facing blast radius. A small Tier 3 change can still
              need staged rollout.
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

    // 8 — corrected diagnosis
    <>
      <Rise order={0}>
        <div className="kicker">Corrected diagnosis</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          "Wiley writing PRDs" isn't ambiguous — it's <span className="accent">adherence</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          v1 read this as a fuzzy shaping/building boundary needing a new framework. The
          documented RACI already assigns the PM as Accountable for PRD authorship at every
          applicable stage; Wiley is the Process Owner and Approver the process already defines
          for him. The fix isn't conceptual — it's routing PRD authorship through the PM (Joyce
          for OS) per the process that already exists, and reserving Wiley's time for the
          approver role.
        </p>
      </Rise>
    </>,

    // 9 — rollout
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
          Customer Evidence field and the Commitment/DRI fields at the next weekly Staff Mtg;
          start the say/do trend line at the next quarterly SLT review once a baseline exists.
        </p>
      </Rise>
    </>,

    // 10 — open questions
    <>
      <Rise order={0}>
        <div className="kicker">Still open</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          What we still don't <span className="accent">know</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Q·01</span>
            <span>
              What do <strong>BIDEC, ZSL, Mission0, BYOFE, "bootloader"</strong> refer to? Absent
              from both Kurt's notes and the real lifecycle doc.
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the <strong>current say/do rate</strong>, if tracked informally today — is
              there a baseline to compare against?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Is <strong>"why now"</strong> in the existing Intake template already doing this job
              informally — and if so, why doesn't it feel sufficient?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
