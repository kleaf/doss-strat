import { DeckDef, Rise } from "../components/Deck";

export const strategyV6: DeckDef = {
  id: "strategy-v6",
  title: "DOSS Product Strategy — Working Thesis v6",
  date: "2026-07-08",
  track: "strategy",
  slides: [
    // 1 — title
    <div className="title-slide">
      <Rise order={0}>
        <div className="wordmark">DOSS</div>
      </Rise>
      <Rise order={1}>
        <h1>
          The <em>growth engine</em> for physical-goods companies
        </h1>
      </Rise>
      <Rise order={3}>
        <div className="meta">
          <span>Product strategy</span>
          <span>Working thesis · v6</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — the correction
    <>
      <Rise order={0}>
        <div className="kicker">Correction from v5</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          v5's four pillars weren't <span className="accent">sanity-checked</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Closing the books, introducing new products, ensuring availability, introducing new
          sales channels — taken from Kurt's framing verbatim, without checking them against what
          the product actually does or what the near-term roadmap is building. This pass re-derives
          them against the four loops the roadmap is actually built around: <strong>Procure-to-Pay,
          Inventory Management, Link to Finance, Master Data Management.</strong>
        </p>
      </Rise>
    </>,

    // 3 — four pillars overview
    <>
      <Rise order={0}>
        <div className="kicker">The four customer growth pillars, corrected</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Grounded in the loops, not just the pain</h1>
      </Rise>
      <Rise order={2}>
        <div className="board">
          <div className="cell">
            <span className="id">01</span>
            <h4>Closing the books</h4>
            <span className="status">Op/Fin</span>
          </div>
          <div className="cell hot-cell">
            <span className="id">02</span>
            <h4>Never caught short</h4>
            <span className="status hot">P2P · new</span>
          </div>
          <div className="cell">
            <span className="id">03</span>
            <h4>Knowing what you have</h4>
            <span className="status">IMS</span>
          </div>
          <div className="cell hot-cell">
            <span className="id">04</span>
            <h4>Change it once, it's everywhere</h4>
            <span className="status hot">UMD · broadened</span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Two pillars are new or reshaped this pass. "Introducing new sales channels" is gone from
          this board — not deleted, demoted. See the callout later in this deck.
        </p>
      </Rise>
    </>,

    // 4 — pillar 1: close the books
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 01 — Op/Fin loop — unchanged, held up</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Closing the books — <span className="accent">trust the numbers</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">44%</span>
            <span className="stat-label">
              of Verve's COGS JEs still fail — <strong>in the same window</strong> invoicing runs
              23/23 clean
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">
              consecutive real closes Sauz ran <strong>through DOSS → QBO</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">29</span>
            <span className="stat-label">customers name this their top ask</span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Tag Wall's bank credit-line renewal hinged on a COGS report DOSS couldn't yet reliably
          produce. SLM's churn post-mortem named the three-way match "the core value prop for
          accounting" — its absence is why they left. The strongest-evidenced pillar of the four;
          the Value Stack doc itself calls this the highest-retention-weight process.
        </p>
      </Rise>
    </>,

    // 5 — pillar 2: never caught short (P2P)
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 02 — Procure-to-Pay — new this pass</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Never caught short — <span className="accent">buying that doesn't wait on a human</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">~140</span>
            <span className="stat-label">
              zero-failure runs of Carrom's <strong>supplier-email PO loop</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">70%</span>
            <span className="stat-label">
              of Eight Sleep's receiving <strong>doesn't match</strong> — blocks the entire
              landed-cost build
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">13</span>
            <span className="stat-label">
              customers want a <strong>human-modifiable</strong> reorder trigger, not a black box
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Kahawa's false replenishment triggers caused real financial damage; Athena's co-man
          receipt gap has been the #1 architectural risk four straight weekly reviews. This pillar
          was hidden inside v5's "availability" — splitting it out surfaces a real weak spot
          (Eight Sleep's 70%) that a combined pillar was masking.
        </p>
      </Rise>
    </>,

    // 6 — pillar 3: know what you have (IMS)
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 03 — Inventory Management — narrowed this pass</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Knowing what you <span className="accent">actually have</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">$2M</span>
            <span className="stat-label">
              gap between Shopify and 3PL at Instant Hydration — <strong>orders nobody saw</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">~1,000</span>
            <span className="stat-label">
              orders Pavoi <strong>silently missed in a single day</strong> from a routing bug
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">10</span>
            <span className="stat-label">
              3PLs Eight Sleep reconciles <strong>simultaneously</strong>
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Carrom says flatly they're "flying blind." Echelon churned entirely over bundle-routing
          failure through its 3PL — this pillar's failure mode is not just lost revenue, it's lost
          accounts. This is the visibility half of what v5 called "availability"; the action half
          moved to Procure-to-Pay.
        </p>
      </Rise>
    </>,

    // 7 — pillar 4: change it once (UMD)
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 04 — Master Data Management — broadened this pass</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Change it once, it's <span className="accent">everywhere</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">70%</span>
            <span className="stat-label">
              of Ark's team time spent <strong>hand-building pricing sheets</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">30–40</span>
            <span className="stat-label">pricing sheets built by hand, every single week</span>
          </div>
          <div className="stat">
            <span className="stat-num">1</span>
            <span className="stat-label">
              change updates <strong>every channel alias</strong> — Shopify, Amazon, EDI, vendor SKU
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Verve replaced Cin7 specifically for SKU-profitability visibility. "Introducing new
          products" was too narrow a name — this pillar covers every master-data change (item,
          BOM, vendor, price), with new-product launch as the flagship example. Unlike the other
          three, no single buyer archetype leads with this one — it's cross-cutting by nature.
        </p>
      </Rise>
    </>,

    // 8 — what happened to channels
    <>
      <Rise order={0}>
        <div className="kicker">What happened to "new sales channels"?</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Demoted, <span className="accent">not deleted</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          It's real: Gorgie scaled 5,000→15,000 doors; Snackwise ran 345,000 transactions on zero
          custom integrations and renewed on it; Clean Age had a live Walmart reset to hit. It was
          even named the #1 critical event in our own buyer research. But it isn't one of the four
          loops the near-term roadmap is built around. Structurally, channel-onboarding speed is{" "}
          <strong>downstream</strong> of Inventory Management (trustworthy positions) and Master
          Data Management (channel-alias propagation) — it's the payoff once those two loops hold
          cadence, not an independent capability being built right now.
        </p>
      </Rise>
    </>,

    // 9 — why this matters
    <>
      <Rise order={0}>
        <div className="kicker">Why this reframe matters</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          "Ops platform" is a <span className="accent">feature list.</span> Growth engine is a{" "}
          <span className="accent">promise.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Every rung of our differentiation ladder — composability, unified data, transactional
          throughput, adaptivity — exists to serve these four pillars, not the other way around.
          Positioned as an ops platform, we compete on features. Positioned as the growth engine
          for physical-goods companies, we compete on <strong>whether revenue can actually
          scale</strong> — and now the four pillars actually match what's being built, not just
          what sounded compelling.
        </p>
      </Rise>
    </>,

    // 10 — the mechanism beneath
    <>
      <Rise order={0}>
        <div className="kicker">The mechanism — briefly, because it's the how, not the message</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">No loose ends this time</h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Pillar</th>
              <th>Served by (internal architecture)</th>
              <th>Named process today?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Closing the books</td>
              <td>Op/Fin loop → Cost Components figure-8 → Month-End Snapshot composite</td>
              <td>Yes — "Close the Books"</td>
            </tr>
            <tr>
              <td>Never caught short</td>
              <td>P2P loop → Automated Replenishment figure-8</td>
              <td>Partial — "Supply/Demand Planning"</td>
            </tr>
            <tr>
              <td>Knowing what you have</td>
              <td>IMS loop → Inventory Positions composite</td>
              <td>Partial — feeds Planning + Order Routing</td>
            </tr>
            <tr className="us">
              <td>Change it once, everywhere</td>
              <td>
                UMD loop — <em>now confirmed a full change-transaction loop, not just a gate</em>
              </td>
              <td>
                <em>No — the remaining gap</em>
              </td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.6rem", fontSize: "1rem" }}>
          Every pillar now maps to real architecture with no invented connective tissue. This
          table — and the fuller model behind it — is internal working detail. It should never
          again be what leads a strategy conversation.
        </p>
      </Rise>
    </>,

    // 11 — sequencing discipline
    <>
      <Rise order={0}>
        <div className="kicker">The caution — the same one that demoted channels</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Don't sell the promise <span className="accent">ahead of the mechanism</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Our own architecture doc states the rule plainly: never sell a higher-level claim before
          the level beneath it holds cadence. That's precisely why "new sales channels" isn't one
          of the four pillars right now — it's a claim built on Inventory Management and Master
          Data Management, and those two need to hold cadence first. The four pillars are the
          message; they still have to be earned loop by loop.
        </p>
      </Rise>
    </>,

    // 12 — open questions
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
              Should <strong>Master Data Management</strong> become a named, first-class
              BusinessProcess with its own activation predicate?
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the concrete trigger for <strong>promoting new sales channels back</strong>{" "}
              to a top-level pillar — defined well enough it isn't a judgment call each time?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Which customer can produce the first <strong>Master Data Management</strong> outcome
              receipt — new item or price live everywhere, same day?
            </span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>
              Does <strong>"growth engine"</strong> replace "adaptive ERP" as our external
              category claim, or stay an internal frame?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
