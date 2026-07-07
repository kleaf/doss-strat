import { DeckDef, Rise } from "../components/Deck";

export const strategyV4: DeckDef = {
  id: "strategy-v4",
  title: "DOSS Product Strategy — Working Thesis v4",
  date: "2026-07-07",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          The operations cloud where <em>real transactions loop</em>
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product strategy</span>
          <span>Working thesis · v4</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — what changed
    <>
      <Rise order={0}>
        <div className="kicker">The V4 revision</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">From category thesis to operating thesis</h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          "Operations cloud" is still the lane and "adaptive ERP" is still the destination.
          V4 adds the spine: <strong>one loop live, external boundary verified, recurring
          throughput measured, outcome receipt delivered.</strong>
        </p>
      </Rise>
      <Rise order={3}>
        <ol className="biglist">
          <li>
            <span className="n">01</span>
            <span>Land loop-shaped, not suite-shaped.</span>
          </li>
          <li>
            <span className="n">02</span>
            <span>Measure retention by transactional throughput, not usage.</span>
          </li>
          <li>
            <span className="n">03</span>
            <span>Make AI serve loop activation, reliability, and expansion.</span>
          </li>
        </ol>
      </Rise>
    </>,

    // 3 — buyer facts
    <>
      <Rise order={0}>
        <div className="kicker">Internal buyer evidence</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Discovery is not asking for generic ERP. It is asking for <span className="accent">operational truth.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">66</span>
            <span className="stat-label">substantive 1H FY26 discovery records analyzed</span>
          </div>
          <div className="stat">
            <span className="stat-num">40</span>
            <span className="stat-label">deals cite <strong>one source of truth</strong></span>
          </div>
          <div className="stat">
            <span className="stat-num">33</span>
            <span className="stat-label">cite <strong>trustworthy inventory</strong></span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          The repeated needs are inventory trust, PO automation, COGS / landed cost, retail / EDI readiness,
          order routing, planning, and offloading a failing ERP while keeping the GL.
        </p>
      </Rise>
    </>,

    // 4 — thesis
    <>
      <Rise order={0}>
        <div className="kicker">The refined thesis</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Land beside the GL by activating <span className="accent">one productized Value Loop.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          DOSS becomes indispensable as real transactions flow through it automatically, then compounds into
          the adaptive ERP as AI keeps those loops running, improving, and expanding.
        </p>
      </Rise>
      <Rise order={3}>
        <div className="cols two">
          <div className="card blue-card">
            <span className="card-num">Entry motion</span>
            <h3>Beside the GL</h3>
            <p>Connect the incumbent accounting system as a boundary. Do not start with rip-and-replace.</p>
          </div>
          <div className="card">
            <span className="card-num">Expansion motion</span>
            <h3>Into the operating record</h3>
            <p>Every verified loop makes DOSS harder to remove and easier to expand.</p>
          </div>
        </div>
      </Rise>
    </>,

    // 5 — loops map
    <>
      <Rise order={0}>
        <div className="kicker">The productization map</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Core loops, activation events, outcomes</h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Loop</th>
              <th>Activation event</th>
              <th>Outcome sold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Close / Finance Bridge</td>
              <td>Month-end close in DOSS; JEs auto-posted to GL</td>
              <td>Close in days; CFO-trustable COGS</td>
            </tr>
            <tr>
              <td>Retail O2C / EDI</td>
              <td>850 creates order; 856 / 810 round-trip weekly</td>
              <td>Live before retail deadline; zero chargebacks</td>
            </tr>
            <tr>
              <td>Replenishment / Co-man POs</td>
              <td>PO created → approved → sent → acknowledged weekly</td>
              <td>Buyer time back; no missed reorders</td>
            </tr>
            <tr>
              <td>Truth / Inventory</td>
              <td>Daily reconciled on-hand across 3PLs / channels</td>
              <td>Flying blind ends; scale channels safely</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 6 — delivery rule
    <>
      <Rise order={0}>
        <div className="kicker">Delivery rule</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Contracts can stay suite-shaped. Delivery must be <span className="accent">loop-shaped.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">Lead</span>
            <span>The order form names the lead loop and business objective.</span>
          </li>
          <li>
            <span className="n">Rail</span>
            <span>Day-1 rails get the customer into the path immediately; durable rails harden underneath.</span>
          </li>
          <li>
            <span className="n">Gate</span>
            <span>Master data enables flows; it is not the value event.</span>
          </li>
          <li>
            <span className="n">Proof</span>
            <span>Activation requires real external-boundary confirmation, not internal runner success.</span>
          </li>
        </ol>
      </Rise>
    </>,

    // 7 — LIR
    <>
      <Rise order={0}>
        <div className="kicker">Retention metric</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Healthy automation does not necessarily produce high WAU.
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          The user should not have to babysit the system. V4 candidate north star:
          <strong> P% of live ICP customers auto-process ≥5 transactional documents through DOSS
          every week, with zero work-leaving-DOSS events in the trailing 30 days.</strong>
        </p>
      </Rise>
      <Rise order={3}>
        <div className="cols two">
          <div className="card blue-card">
            <span className="card-num">Signal</span>
            <h3>Recurring throughput</h3>
            <p>SOs, POs, invoices, journal syncs, ASNs flowing automatically through DOSS.</p>
          </div>
          <div className="card">
            <span className="card-num">Anti-signal</span>
            <h3>Work leaving DOSS</h3>
            <p>Shadow spreadsheets, old-ERP reverts, export spikes, manual creation ratio breaches.</p>
          </div>
        </div>
      </Rise>
    </>,

    // 8 — differentiation ladder
    <>
      <Rise order={0}>
        <div className="kicker">Differentiation ladder</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Composability sells. Throughput retains. <span className="accent">Adaptivity wins.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Rung</th>
              <th>V4 interpretation</th>
              <th>Durability</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Composability</td>
              <td>Day-1 rails for Value Loops</td>
              <td>Strong wedge; weak moat</td>
            </tr>
            <tr>
              <td>Unified data</td>
              <td>Required to verify activation and maintain truth</td>
              <td>Compounds with integrations</td>
            </tr>
            <tr>
              <td>Transactional throughput</td>
              <td>Real work flows automatically through DOSS</td>
              <td>Near-term moat</td>
            </tr>
            <tr>
              <td>Adaptivity</td>
              <td>AI monitors, repairs, and expands loops</td>
              <td>Structural bet</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 9 — agentic plan
    <>
      <Rise order={0}>
        <div className="kicker">Rung 4, sequenced</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Make the agent serve the loop</h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">01</span>
            <span><strong>Implementation agent</strong> becomes Value-Loop activation agent.</span>
          </li>
          <li>
            <span className="n">02</span>
            <span><strong>Runtime agency</strong> starts with loop reliability: missing ACKs, failed GL posts, mismatched 3PL counts.</span>
          </li>
          <li>
            <span className="n">03</span>
            <span><strong>Deductions and chargebacks</strong> move after the Retail rail is trustworthy.</span>
          </li>
          <li>
            <span className="n">04</span>
            <span><strong>Planning</strong> is Loop 2, built on trusted inventory.</span>
          </li>
        </ol>
      </Rise>
    </>,

    // 10 — outcome receipts
    <>
      <Rise order={0}>
        <div className="kicker">Proof economics</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          From hours saved to <span className="accent">outcome receipts.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Loop</th>
              <th>First receipt</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Close</td>
              <td>Month-end close executed in DOSS; JEs posted; no Excel fallback</td>
            </tr>
            <tr>
              <td>Retail</td>
              <td>Every retailer order round-tripped weekly; zero chargebacks / misses</td>
            </tr>
            <tr>
              <td>Replenishment</td>
              <td>POs created, approved, sent, acknowledged on weekly cadence</td>
            </tr>
            <tr>
              <td>Truth</td>
              <td>Daily on-hand reconciled per SKU / location within tolerance</td>
            </tr>
          </tbody>
        </table>
      </Rise>
    </>,

    // 11 — threats
    <>
      <Rise order={0}>
        <div className="kicker">What kills this</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">V4 threats are execution threats</h1>
      </Rise>
      <Rise order={2}>
        <ol className="biglist">
          <li>
            <span className="n">T·01</span>
            <span><strong>False activation metrics</strong> mistake runner success for value.</span>
          </li>
          <li>
            <span className="n">T·02</span>
            <span><strong>Full-suite implementation drag</strong> delays the first real loop.</span>
          </li>
          <li>
            <span className="n">T·03</span>
            <span><strong>Finance-first ERPs turn ops-ward</strong> after winning the GL.</span>
          </li>
          <li>
            <span className="n">T·04</span>
            <span><strong>NetSuite Next is good enough</strong> before loop-level adaptivity is real.</span>
          </li>
        </ol>
      </Rise>
    </>,

    // 12 — next questions
    <>
      <Rise order={0}>
        <div className="kicker">Next decisions</div>
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
            <span>What are the 12-week LIR baselines: N, P, document throughput, and work-leaving-DOSS events?</span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>Are Close/QBO boundary and Retail partner-ack telemetry the first two hardening priorities?</span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>Can Sales, EPD, and PMO inspect one Loop Metric Registry?</span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>Which customer can produce the first CFO-forwardable outcome receipt?</span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
