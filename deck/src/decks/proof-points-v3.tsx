import { DeckDef, Rise } from "../components/Deck";

export const proofPointsV3: DeckDef = {
  id: "proof-points-v3",
  title: "DOSS Proof Points — Where the AI Differentiation Is (V3)",
  date: "2026-07-06",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          Proof points: where the <em>AI differentiation</em> really is
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product strategy</span>
          <span>Evidence pass · V3</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — method
    <>
      <Rise order={0}>
        <div className="kicker">The evidence pass</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Three surveys, one question</h1>
      </Rise>
      <div className="cols three">
        <Rise order={2}>
          <div className="card">
            <span className="card-num">Survey 01</span>
            <h3>Where the pain is</h3>
            <p>
              Where do mid-market CPG companies hurt most — excess inventory, stockouts, pricing,
              system disconnects — and how do they cope today, pre-DOSS?
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card">
            <span className="card-num">Survey 02</span>
            <h3>Who wins on operations</h3>
            <p>
              Which companies are differentiated <em>because of</em> order &amp; inventory
              management — and what did they do to get the edge?
            </p>
          </div>
        </Rise>
        <Rise order={4}>
          <div className="card">
            <span className="card-num">Survey 03</span>
            <h3>What competitors ship</h3>
            <p>
              The early agentic offerings across incumbents, AI-natives, and mid-market tools —
              bucketed, detailed, and ranked by delivered agency.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 3 — pain 1: inventory distortion
    <>
      <Rise order={0}>
        <div className="kicker">Survey 01 — the pain map</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Too much <span className="accent">and</span> too little — at the same time
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">$1.7T</span>
            <span className="stat-label">
              lost globally to <strong>inventory distortion</strong> every year — $1.2T
              out-of-stocks, $554B overstocks (IHL)
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">9 in 10</span>
            <span className="stat-label">
              CPG ops teams hit an <strong>operational consequence</strong> last year — canceled
              launches (25%), missed retail windows (25%) — per DOSS's own study
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">22% + 19%</span>
            <span className="stat-label">
              had <strong>stockouts at retail</strong> AND <strong>dumped excess at a
              discount</strong> — both directions at once
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2.4rem", fontSize: "1.05rem" }}>
          Both failures in the same year means this is a <strong>data and visibility
          failure</strong>, not a buying-discipline failure — exactly the failure a unified,
          agentic system fixes.
        </p>
      </Rise>
    </>,

    // 4 — pain 2: deductions (the sleeper)
    <>
      <Rise order={0}>
        <div className="kicker">Survey 01 — the sleeper finding</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Retailers enforce with machines. Brands defend with{" "}
          <span className="accent">spreadsheets.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">$5B+</span>
            <span className="stat-label">
              in retailer <strong>chargebacks issued annually</strong> — most from routing-guide
              and EDI misconfigurations
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">3–5%</span>
            <span className="stat-label">
              of COGS taken per <strong>OTIF miss</strong> (Walmart 3%, Target 5%; Amazon: 15+
              chargeback types)
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">$4M</span>
            <span className="stat-label">
              potential annual deductions for an <strong>$80M shipper</strong> — deductions can
              reach 30% of gross sales
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2.4rem", fontSize: "1.05rem" }}>
          As of 2026, enforcement is <strong>system-triggered</strong> — Target fines fire
          automatically on EDI 856 mismatches. Fighting back requires joining PO + ASN + 3PL +
          invoice: <em>the cross-system record only the system of record holds.</em>
        </p>
      </Rise>
    </>,

    // 5 — how they cope
    <>
      <Rise order={0}>
        <div className="kicker">Survey 01 — pre-DOSS coping</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          The competition isn't software. It's <span className="accent">headcount.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Coping mechanism</th>
              <th>What it costs them</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Spreadsheets + ops hires</td>
              <td>Error-prone at machine-enforcement speed; the 9-in-10 consequence rate</td>
            </tr>
            <tr>
              <td>Point planning tools ($199–400/mo)</td>
              <td>Recommendations without execution; Shopify-centric blind spots</td>
            </tr>
            <tr>
              <td>EDI VANs + compliance consultants</td>
              <td>Per-document fees; compliance as a permanent tax</td>
            </tr>
            <tr>
              <td>Deduction-recovery services</td>
              <td>Contingency fees to claw back money that shouldn't have been lost</td>
            </tr>
            <tr>
              <td>"Graduate to NetSuite"</td>
              <td>4–6+ month implementation tax; static once live</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 6 — edge companies
    <>
      <Rise order={0}>
        <div className="kicker">Survey 02 — who wins on operations</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          The edge is real — and always <span className="accent">custom-built</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Company</th>
              <th>The number</th>
              <th>The edge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zara</td>
              <td>2–4 weeks design-to-shelf</td>
              <td>Small demand-responsive batches; store signal drives production; markdown avoidance</td>
            </tr>
            <tr>
              <td>Shein</td>
              <td>100–200 unit test batches; ~4-day turns</td>
              <td>Test-and-scale as default; engagement data as leading demand signal</td>
            </tr>
            <tr>
              <td>e.l.f. Beauty</td>
              <td>
                <em>13–27 week launches vs. 9+ months</em>
              </td>
              <td>Fast-follower velocity in DOSS's own category — and it runs NetSuite</td>
            </tr>
            <tr>
              <td>Trader Joe's / ALDI</td>
              <td>4,000 / 1,400 SKUs vs. 40K+</td>
              <td>Assortment discipline → turns, supplier leverage, ~2x sales/sq-ft</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.8rem", fontSize: "1.05rem" }}>
          Every edge was built with <strong>custom systems, large ops orgs, and years</strong>.
          None of it is buyable as product by a $20–250M brand. The e.l.f. footnote: the edge is
          the capability <em>around</em> the system — not the software.
        </p>
      </Rise>
    </>,

    // 7 — patterns → loops
    <>
      <Rise order={0}>
        <div className="kicker">Survey 02 — the patterns, mapped</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Four proven patterns. <span className="accent">Four DOSS loops.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Proven edge pattern</th>
              <th>Who proved it</th>
              <th>The DOSS agent that productizes it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loop speed</td>
              <td>Zara</td>
              <td>Replenishment &amp; planning agent — signal→PO in days</td>
            </tr>
            <tr>
              <td>Test-and-scale</td>
              <td>Shein</td>
              <td>Demand-shaping + reorder agent — commit after the market votes</td>
            </tr>
            <tr>
              <td>Assortment discipline</td>
              <td>Trader Joe's · ALDI</td>
              <td>Agent-surfaced SKU-level profitability flags</td>
            </tr>
            <tr>
              <td>Signal completeness</td>
              <td>All four</td>
              <td>IDP + exception agent — no human re-keying anywhere</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.8rem", fontSize: "1.1rem" }}>
          The differentiation narrative: <strong>the Zara loop, productized</strong> — the
          operational capabilities of category killers, delivered as product to $20–250M brands.
        </p>
      </Rise>
    </>,

    // 8 — competitor buckets
    <>
      <Rise order={0}>
        <div className="kicker">Survey 03 — what competitors ship</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Six buckets of "agentic"</h1>
      </Rise>
      <Rise order={2}>
        <div className="board">
          <div className="cell">
            <span className="id">A</span>
            <h4>Conversational copilots</h4>
            <span className="status">Ask Oracle · Joule assistants · Dossbot today</span>
          </div>
          <div className="cell">
            <span className="id">B</span>
            <h4>Document &amp; data automation</h4>
            <span className="status">NetSuite matching · DualEntry migration</span>
          </div>
          <div className="cell">
            <span className="id">C</span>
            <h4>Monitor &amp; advise — human signs off</h4>
            <span className="status hot">incumbent center of gravity</span>
          </div>
          <div className="cell">
            <span className="id">D</span>
            <h4>Autonomous execution</h4>
            <span className="status hot">Blue Yonder only — enterprise price</span>
          </div>
          <div className="cell">
            <span className="id">E</span>
            <h4>Agent platforms / MCP · A2A</h4>
            <span className="status">Joule Studio · Dynamics MCP</span>
          </div>
          <div className="cell hot-cell">
            <span className="id">F</span>
            <h4>Implementation agents — empty in ops</h4>
            <span className="status hot">DOSS whitespace</span>
          </div>
        </div>
      </Rise>
    </>,

    // 9 — ranking
    <>
      <Rise order={0}>
        <div className="kicker">Survey 03 — ranked by delivered agency</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Autonomy is enterprise-only. Incumbents{" "}
          <span className="accent">recommend, don't act.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>#</th>
              <th>Vendor</th>
              <th>Reality</th>
              <th>Threat to DOSS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Blue Yonder</td>
              <td>True autonomous replenishment in production — enterprise-only</td>
              <td>Narrative: sets expectations</td>
            </tr>
            <tr>
              <td>2</td>
              <td>SAP Joule</td>
              <td>200+ agents + best interop story; much is vision/roadmap</td>
              <td>Low direct (segment)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>NetSuite Next</td>
              <td>
                <em>"Recommend and prepare, don't act" — by design; finance-centric</em>
              </td>
              <td>
                <em>Highest direct — same buyer</em>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Dynamics 365</td>
              <td>MCP-exposing commerce/ops primitives (Feb 2026)</td>
              <td>Could arm anyone's agents</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Finance AI-natives</td>
              <td>Deep in the GL lane; only shipping migration agent (DualEntry)</td>
              <td>Could turn ops-ward</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mid-market tools</td>
              <td>Thin — but Fishbowl ships agentic replenishment</td>
              <td>Rising — in our segment</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 10 — the two sharpenings
    <>
      <Rise order={0}>
        <div className="kicker">What the evidence changes</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Two sharpenings</h1>
      </Rise>
      <div className="cols two">
        <Rise order={2}>
          <div className="card blue-card">
            <span className="card-num">Sharpening 01 — the wedge gets a name</span>
            <h3>Deductions &amp; compliance first</h3>
            <p>
              The one exception class denominated in <strong>hard dollars</strong>. Machine-speed
              enforcement deserves machine-speed defense — and prevention (catching the ASN
              mismatch before it ships) beats recovery. First metric: <strong>"$X recovered and
              prevented in 90 days."</strong> No product competes for it today.
            </p>
          </div>
        </Rise>
        <Rise order={3}>
          <div className="card blue-card">
            <span className="card-num">Sharpening 02 — the story gets a spine</span>
            <h3>The Zara loop, productized</h3>
            <p>
              The pitch stops being "modern ERP with AI." It becomes: the operational edge that
              made Zara, Shein, and e.l.f. category killers — loop speed, test-and-scale,
              assortment discipline — delivered by agents to brands that can't build it
              themselves.
            </p>
          </div>
        </Rise>
      </div>
    </>,

    // 11 — refined ladder
    <>
      <Rise order={0}>
        <div className="kicker">The refined proof-point ladder</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Every phase ships a <span className="accent">number</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">P·01</span>
            <span>
              <strong>Implementation agent</strong> — time-to-first-value in days. Confirmed
              whitespace: nobody ships this for operations.
            </span>
          </li>
          <li>
            <span className="n">P·02</span>
            <span>
              <strong>Deduction &amp; compliance agent</strong> — $ recovered + prevented in 90
              days. Hard dollars in weeks, not quarters.
            </span>
          </li>
          <li>
            <span className="n">P·03</span>
            <span>
              <strong>Replenishment loop</strong> — inventory down X%, working capital freed $Y.
              The flagship operating-system number.
            </span>
          </li>
          <li>
            <span className="n">P·04</span>
            <span>
              <strong>Demand shaping + SKU flags</strong> — margin recovered from would-be dead
              stock.
            </span>
          </li>
        </ol>
      </Rise>
    </>,

    // 12 — internal asks
    <>
      <Rise order={0}>
        <div className="kicker">Next — answerable from our own data</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Four questions for <span className="accent">the team</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Q·01</span>
            <span>
              What's the current <strong>deduction/chargeback exposure</strong> across our
              customers? (Sizes the wedge instantly.)
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              Do we already ingest <strong>EDI 850/855/856/810 and retailer scorecards</strong> —
              and if not, what's the lift?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Which customer is our best <strong>"Zara loop" story</strong> — fastest signal→PO
              cycle we've enabled?
            </span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>
              Deduction <strong>disputes vs. prevention</strong>: any channel-relationship risk in
              drafting claims against Walmart/Target?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
