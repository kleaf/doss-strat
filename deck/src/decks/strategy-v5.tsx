import { DeckDef, Rise } from "../components/Deck";

export const strategyV5: DeckDef = {
  id: "strategy-v5",
  title: "DOSS Product Strategy — Working Thesis v5",
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
          <span>Working thesis · v5</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — the reframe
    <>
      <Rise order={0}>
        <div className="kicker">The reframe</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          We are not just an <span className="accent">ERP or ops platform.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Growth for a physical-goods company is capped by four things breaking down before
          revenue can scale: closing the books, introducing new products, ensuring product
          availability, introducing new sales channels. DOSS's job is to remove all four caps —{" "}
          <strong>not just record what happened after the fact.</strong> That's a growth engine,
          not a system of record.
        </p>
      </Rise>
    </>,

    // 3 — four pillars overview
    <>
      <Rise order={0}>
        <div className="kicker">The four customer growth pillars</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">What actually caps growth today</h1>
      </Rise>
      <Rise order={2}>
        <div className="board">
          <div className="cell">
            <span className="id">01</span>
            <h4>Closing the books</h4>
            <span className="status">Trust the numbers</span>
          </div>
          <div className="cell">
            <span className="id">02</span>
            <h4>Introducing new products</h4>
            <span className="status">Innovation velocity</span>
          </div>
          <div className="cell">
            <span className="id">03</span>
            <h4>Ensuring product availability</h4>
            <span className="status">Revenue on the shelf</span>
          </div>
          <div className="cell hot-cell">
            <span className="id">04</span>
            <h4>Introducing new sales channels</h4>
            <span className="status hot">#1 critical event, SPICED</span>
          </div>
        </div>
      </Rise>
    </>,

    // 4 — pillar 1: close the books
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 01</div>
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
          produce. SLM's own churn post-mortem named the three-way match as{" "}
          <em>"the core value prop for accounting"</em> — its absence is why they left. A brand
          that trusts its numbers can raise capital and extend credit; closing the books is the
          gate to everything else.
        </p>
      </Rise>
    </>,

    // 5 — pillar 2: new products
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 02 — least mature of the four</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Introducing new products — <span className="accent">innovation velocity</span>
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
              change should update <strong>every channel alias</strong> — Shopify, Amazon, EDI,
              vendor SKU
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Verve replaced Cin7 specifically for SKU-profitability visibility; Magic Mind is asking
          for the same today. Product-innovation velocity is the entire premise of our macro bet —
          a brand that can't launch new SKUs fast can't compete no matter how good its back office
          is. <strong>This pillar has no named process in our own architecture yet</strong> — see
          the gap slide.
        </p>
      </Rise>
    </>,

    // 6 — pillar 3: availability
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 03</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Ensuring availability — <span className="accent">revenue on the shelf</span>
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
            <span className="stat-num">14/14 · 30/30</span>
            <span className="stat-label">
              clean nightly/daily 3PL syncs at Magic Mind and Spread the Love
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Carrom says flatly they're "flying blind." Echelon churned entirely over bundle-routing
          failures through its 3PL. Every missed order or phantom stockout is lost revenue —
          availability isn't an ops metric, it's top-line growth left on the table.
        </p>
      </Rise>
    </>,

    // 7 — pillar 4: new channels
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 04 — strongest evidenced</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          New sales channels — <span className="accent">the most direct lever</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">5K→15K</span>
            <span className="stat-label">
              doors Gorgie scaled to <strong>on DOSS</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">345K</span>
            <span className="stat-label">
              transactions Snackwise ran on <strong>zero custom integrations</strong> — renewed on
              it
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">10</span>
            <span className="stat-label">
              3PLs Eight Sleep runs <strong>simultaneously</strong>
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Named the #1 critical event in our own buyer research. Clean Age had a live Walmart
          reset to hit; Selkirk had a hard e-invoicing deadline in Malaysia. A new channel goes
          live on a fast day-1 rail in week one — it doesn't wait for the integration to be
          perfect. Every channel we turn on fast is revenue surface a brand couldn't otherwise
          reach.
        </p>
      </Rise>
    </>,

    // 8 — why this matters
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
          scale</strong> — a claim NetSuite Next and every point tool in our category is not
          making.
        </p>
      </Rise>
    </>,

    // 9 — the mechanism beneath
    <>
      <Rise order={0}>
        <div className="kicker">The mechanism — briefly, because it's the how, not the message</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">How the growth engine runs underneath</h1>
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
            <tr className="us">
              <td>Introducing new products</td>
              <td>UMD (master-data) loop</td>
              <td>
                <em>No — the gap</em>
              </td>
            </tr>
            <tr>
              <td>Ensuring availability</td>
              <td>IMS loop → Order Routing + Automated Replenishment figure-8s</td>
              <td>Partial — "Supply/Demand Planning"</td>
            </tr>
            <tr>
              <td>New sales channels</td>
              <td>OMS loop → Order Routing figure-8</td>
              <td>Yes — "Onboarding a Sales Channel"</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.6rem", fontSize: "1rem" }}>
          This table — and the fuller TX-loop / figure-8 / composite / BusinessProcess model
          behind it — is internal working detail. It should never again be what leads a strategy
          conversation.
        </p>
      </Rise>
    </>,

    // 10 — the gap
    <>
      <Rise order={0}>
        <div className="kicker">The gap</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Name <span className="accent">"Introducing New Products"</span> as its own process
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Three of the four pillars already have a named, evidenced home in our architecture:
          Close the Books, Onboarding a Sales Channel, and (partially) Supply/Demand Planning. The
          fourth — introducing new products — is real, painful (Ark's 70% of team time), and
          proven to matter competitively (Verve replaced Cin7 over it), but it isn't yet a
          first-class BusinessProcess the way the others are. Naming it is the clearest next step
          to prove this reframe was acted on, not just agreed with.
        </p>
      </Rise>
    </>,

    // 11 — sequencing discipline
    <>
      <Rise order={0}>
        <div className="kicker">The caution</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Don't sell the promise <span className="accent">ahead of the mechanism</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Our own architecture doc states the rule plainly: never sell a higher-level claim before
          the level beneath it holds cadence. A growth-engine story built on an unreliable close or
          a silently-failing routing loop reports a promise the customer will disprove within a
          quarter. The four pillars are the message; they still have to be earned loop by loop,
          in the order the evidence says is real.
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
              Does <strong>"growth engine"</strong> replace "adaptive ERP" as our external
              category claim, or stay an internal frame while positioning still says "operations
              cloud"?
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the <strong>activation predicate</strong> for a named "Introducing New
              Products" process — what does external-boundary-verified even mean here?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Which customer can produce the first outcome receipt for the two still-missing
              pillars: <strong>new-SKU-live-everywhere</strong> and{" "}
              <strong>new-channel-live-and-compliant</strong>?
            </span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>
              Does field/sales respond differently when discovery calls open with these four
              pillars instead of loop or architecture language?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
