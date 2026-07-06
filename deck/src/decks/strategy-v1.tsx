import { DeckDef, Rise } from "../components/Deck";

export const strategyV1: DeckDef = {
  id: "strategy-v1",
  title: "DOSS Product Strategy — Working Thesis v1",
  date: "2026-07-06",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          The operations cloud that <em>adapts itself</em>
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product strategy</span>
          <span>Working thesis · v1</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — where we stand
    <>
      <Rise order={0}>
        <div className="kicker">Where we stand</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">A real position, worth sharpening</h1>
      </Rise>
      <div className="cols three">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">Product</span>
            <h3>Operations Cloud</h3>
            <p>
              ARP (composable tables, forms, workflows) + IDP (master-data unification) +
              DataStudio (real-time BI) + Dossbot (AI copilot).
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Market</span>
            <h3>Mid-market physical goods</h3>
            <p>
              $20–250M brands in consumer goods, food &amp; bev, health &amp; beauty,
              manufacturing, distribution. $73M raised; Intuit Ventures strategic.
            </p>
          </div>
        </Rise>
        <Rise order={4}>
          <div className="card">
            <span className="card-num">Proof</span>
            <h3>Hours saved, today</h3>
            <p>
              Verve Coffee: 20+ hrs/week. Mezcla: 2x faster POs. Spread The Love: 92% faster
              order processing. Real — but efficiency stories, not value-chain outcomes.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 3 — the uncomfortable question
    <>
      <Rise order={0}>
        <div className="kicker">The uncomfortable question</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Our own pitch is <span className="accent">tables, forms, and workflows.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          ERP has been tables and forms for thirty years. Composability wins deals today — but
          Airtable can claim it, Retool can claim it, and incumbents will eventually copy it.{" "}
          <strong>It's a wedge, not a moat.</strong> The strategy below is about what we build{" "}
          <em>on top of</em> the wedge before the window closes.
        </p>
      </Rise>
    </>,

    // 4 — landscape
    <>
      <Rise order={0}>
        <div className="kicker">The landscape</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          The AI-ERP wave is <span className="accent">finance-first.</span> Our lane is open.
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Funding</th>
              <th>Lane</th>
              <th>Who they serve</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rillet</td>
              <td>$70M B</td>
              <td>Finance / GL — "zero-day close"</td>
              <td>Software companies</td>
            </tr>
            <tr>
              <td>Campfire</td>
              <td>$100M</td>
              <td>Finance / GL — NetSuite replacement</td>
              <td>High-growth tech</td>
            </tr>
            <tr>
              <td>Nominal · DualEntry</td>
              <td>$20M+</td>
              <td>Finance layers on existing ERPs</td>
              <td>Finance teams</td>
            </tr>
            <tr className="us">
              <td>DOSS</td>
              <td>$73M</td>
              <td>
                <em>Operations — the physical value chain</em>
              </td>
              <td>Physical-goods brands</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.8rem", fontSize: "1.05rem" }}>
          The finance-first crowd <strong>validates the category</strong> and teaches the market
          that legacy ERP is replaceable — while leaving procurement → inventory → orders →
          fulfillment <em>uncontested</em>.
        </p>
      </Rise>
    </>,

    // 5 — move 1
    <>
      <Rise order={0}>
        <div className="kicker">Move 01</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Own the lane. <span className="accent">Name it loudly.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          We are not "another AI ERP" — we are <strong>the operations cloud for physical-goods
          brands</strong>. Resource planning in the literal sense: optimizing how companies
          generate revenue and manage costs across the flow of goods, dollars, and data.{" "}
          <em>Not HR. Not CRM. Not the general ledger</em> — QuickBooks is a boundary we sync
          with, and Intuit's investment makes that stance structural.
        </p>
      </Rise>
    </>,

    // 6 — move 2
    <>
      <Rise order={0}>
        <div className="kicker">Move 02</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Land beside. <span className="accent">Expand to the center.</span>
        </h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card blue-card">
            <span className="card-num">Entry story — for buyers</span>
            <h3>"Plugs into what you have"</h3>
            <p>
              Replacing an ERP requires trust; wedges win. Don't ask a $50M brand to rip anything
              out — connect QuickBooks, the 3PL, the storefronts, and give them the one live
              picture nobody has.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Destination story — for the vision</span>
            <h3>"The ERP evolved"</h3>
            <p>
              The system of record follows the system of engagement. Once operations run through
              DOSS, we are the ERP — without ever having fought a rip-and-replace battle.
            </p>
          </div>
        </Rise>
      </div>
      <Rise order={4}>
        <p className="prose" style={{ marginTop: "2.2rem", fontSize: "1.05rem" }}>
          Today these two stories coexist <em>by accident</em> and confuse buyers into
          integration-weeds conversations. Sequenced <strong>on purpose</strong>, they're the
          growth path.
        </p>
      </Rise>
    </>,

    // 7 — move 3: the ladder
    <>
      <Rise order={0}>
        <div className="kicker">Move 03 — the differentiation ladder</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Composability sells. Data compounds. <span className="accent">Adaptivity wins.</span>
        </h1>
      </Rise>
      <div className="cols three">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">Rung 1 · Today</span>
            <h3>Composability</h3>
            <p>
              Tables, forms, workflows — configured in weeks, changed in minutes. Wins deals now.
              Claimable by no-code vendors and, eventually, incumbents. Table stakes.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Rung 2 · Compounding</span>
            <h3>Unified operational data</h3>
            <p>
              IDP: one reconciled model across ordering, web, 3PL, accounting. Point tools can't;
              incumbent modules don't. A moat that deepens with every integration.
            </p>
          </div>
        </Rise>
        <Rise order={4}>
          <div className="card blue-card">
            <span className="card-num">Rung 3 · The bet</span>
            <h3>Adaptivity</h3>
            <p>
              The system implements, evolves, and optimizes itself — AI-led onboarding, schemas
              that change as the business changes, agents that close operational loops. Nobody
              has this. Static architectures can't retrofit it.
            </p>
          </div>
        </Rise>
      </div>
      <Rise order={5}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Honest read: Dossbot today is rung-3 <em>branding</em> on rung-1 <em>capability</em>.
          Making rung 3 real is the product strategy.
        </p>
      </Rise>
    </>,

    // 8 — proof economics
    <>
      <Rise order={0}>
        <div className="kicker">The proof-economics upgrade</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          From hours saved to <span className="accent">working capital freed.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Now</span>
            <span>
              <strong>"20 hours a week saved"</strong> — a productivity-tool story, priced like a
              productivity tool.
            </span>
          </li>
          <li>
            <span className="n">Next</span>
            <span>
              <strong>Order cycle time · inventory turns · stockout rate</strong> — operator
              metrics that VP Ops and COOs are paid on.
            </span>
          </li>
          <li>
            <span className="n">Goal</span>
            <span>
              <strong>"DOSS freed $2M of working capital"</strong> — an operating-system story,
              priced like an operating system. One customer who can say this is worth fifty
              hours-saved logos.
            </span>
          </li>
        </ol>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.6rem", fontSize: "1.05rem" }}>
          This is also why value doesn't lead our sales calls yet: <em>it can't lead until it's
          quantified in the operator's terms.</em> Fix the proof, and the pitch fixes itself.
        </p>
      </Rise>
    </>,

    // 9 — macro bet
    <>
      <Rise order={0}>
        <div className="kicker">The macro bet — and the clock</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Stable demand. Accelerating change. <span className="accent">A 2–4 year window.</span>
        </h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">Why the market is durable</span>
            <h3>Physical goods are AI-stable</h3>
            <p>
              People still buy coffee and detergent no matter how good AI gets. But AI accelerates
              the brands themselves — more SKUs, more channels, faster launches — so their
              operational systems must change ever faster. The adaptive ERP wins that world.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card blue-card">
            <span className="card-num">Why there's a clock</span>
            <h3>NetSuite Next is coming</h3>
            <p>
              Incumbents will have agentic <strong>UX</strong> quickly — chat and copilots on
              static architecture. Our window is the gap between AI-as-feature and
              AI-as-architecture. It does not stay open forever.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 10 — threats
    <>
      <Rise order={0}>
        <div className="kicker">What kills this</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Four ways to lose</h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">T·01</span>
            <span>
              <strong>The finance-first cohort turns ops-ward</strong> after winning the ledger —
              Campfire already claims "full replacement" ambitions.
            </span>
          </li>
          <li>
            <span className="n">T·02</span>
            <span>
              <strong>NetSuite Next is good enough</strong> — agentic UX on incumbent depth blunts
              our story before rung 3 is real.
            </span>
          </li>
          <li>
            <span className="n">T·03</span>
            <span>
              <strong>Horizontal no-code undercuts rung 1</strong> — Airtable ships CPG ops
              templates at a fraction of the price.
            </span>
          </li>
          <li>
            <span className="n">T·04</span>
            <span>
              <strong>Dual positioning confuses</strong> — buyers stall on "what happens to my
              ERP?" and sales cycles die in the integration weeds.
            </span>
          </li>
        </ol>
      </Rise>
    </>,

    // 11 — open questions
    <>
      <Rise order={0}>
        <div className="kicker">Open questions</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          What we answer <span className="accent">next</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Q·01</span>
            <span>
              The one-sentence pain. Candidate: <strong>"You run a $50M brand on QuickBooks plus
              14 spreadsheets, and nobody can see the whole operation."</strong>
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the <strong>first rung-3 proof</strong> we can ship and demo — measured
              AI-led implementation, a live schema-evolution story, or an agent closing a loop?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Which <strong>value-chain metric</strong> do we commit to moving with 2–3 design
              partners — and by how much?
            </span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>
              When does the <strong>expand-to-replace</strong> conversation happen in the customer
              journey — and who triggers it?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
