import { DeckDef, Rise } from "../components/Deck";

export const strategyV7: DeckDef = {
  id: "strategy-v7",
  title: "DOSS Product Strategy — v7",
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
          <span>v7</span>
          <span>July 2026</span>
        </div>
      </Rise>
    </div>,

    // 2 — the thesis
    <>
      <Rise order={0}>
        <div className="kicker">The thesis</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Four things cap growth for a <span className="accent">physical-goods brand</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          The books close late, so nobody trusts the numbers. Purchasing waits on a person to
          notice stock is low. Nobody is certain what inventory actually exists. And every product
          or price change gets re-keyed into a dozen systems by hand. DOSS removes those caps —{" "}
          <strong>not just records what happened after the fact.</strong> That's a growth engine,
          not a system of record.
        </p>
      </Rise>
    </>,

    // 3 — four pillars overview
    <>
      <Rise order={0}>
        <div className="kicker">The four growth pillars</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">Grounded in what we're actually building</h1>
      </Rise>
      <Rise order={2}>
        <div className="board">
          <div className="cell">
            <span className="id">01</span>
            <h4>Close the books, trust the numbers</h4>
            <span className="status">finance link</span>
          </div>
          <div className="cell">
            <span className="id">02</span>
            <h4>Never get caught short</h4>
            <span className="status">procure-to-pay</span>
          </div>
          <div className="cell">
            <span className="id">03</span>
            <h4>Know exactly what you have</h4>
            <span className="status">inventory</span>
          </div>
          <div className="cell">
            <span className="id">04</span>
            <h4>Change it once, it's everywhere</h4>
            <span className="status">master data</span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Each pillar maps directly to a loop the near-term roadmap is building. A fifth —
          launching new sales channels — is sequenced deliberately on top of these; more later.
        </p>
      </Rise>
    </>,

    // 4 — pillar 1: close the books
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 01 · the finance link</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Close the books — <span className="accent">trust the numbers</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">44%</span>
            <span className="stat-label">
              of Verve's COGS journal entries still fail — <strong>in the same window</strong>{" "}
              invoicing runs 23/23 clean
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">
              consecutive real closes Sauz ran <strong>through DOSS → QuickBooks</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">29</span>
            <span className="stat-label">
              customers name this their top ask — <strong>the most of any capability</strong>
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Tag Wall's bank credit-line renewal hinged on a COGS report that couldn't be produced
          reliably. SLM's churn post-mortem named the three-way match "the core value prop for
          accounting" — its absence is why they left. A brand that trusts its numbers can raise
          capital and extend credit; the close is the gate to everything else.
        </p>
      </Rise>
    </>,

    // 5 — pillar 2: procure-to-pay
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 02 · procure-to-pay</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Never get caught short — <span className="accent">buying that doesn't wait on a human</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">~140</span>
            <span className="stat-label">
              zero-failure runs of Carrom's <strong>supplier-email PO loop</strong> — the most
              reliable automation on the account
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">70%</span>
            <span className="stat-label">
              of Eight Sleep's receiving <strong>doesn't match</strong> — the honest weak spot;
              fixing it unlocks trustworthy landed cost
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">13</span>
            <span className="stat-label">
              customers want a reorder trigger they can <strong>see and override</strong> — not a
              black box
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Kahawa's replenishment triggers fired falsely on bad data, with real financial
          consequences; Athena's co-manufacturer receiving gap has been the #1 architectural risk
          four straight weekly reviews. A brand that misses reorders can't fill the orders it
          already has — and can't add capacity without clean co-man onboarding.
        </p>
      </Rise>
    </>,

    // 6 — pillar 3: inventory truth
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 03 · inventory management</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Know exactly what you <span className="accent">actually have</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <div className="stats">
          <div className="stat">
            <span className="stat-num">$2M</span>
            <span className="stat-label">
              gap between Shopify and the 3PL at Instant Hydration — <strong>orders nobody
              saw</strong>
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">~1,000</span>
            <span className="stat-label">
              orders Pavoi <strong>silently missed in one day</strong> from routing on an
              untrustworthy position
            </span>
          </div>
          <div className="stat">
            <span className="stat-num">10</span>
            <span className="stat-label">
              3PLs Eight Sleep reconciles <strong>simultaneously</strong>; Magic Mind syncs 14/14
              clean, Spread the Love 30/30
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Carrom's operator says it plainly: "flying blind right now with what we actually have."
          Echelon churned entirely over bundle-routing failures — this pillar's failure mode isn't
          just lost revenue, it's lost accounts. Every routing and planning decision downstream
          depends on this one number being right.
        </p>
      </Rise>
    </>,

    // 7 — pillar 4: master data
    <>
      <Rise order={0}>
        <div className="kicker">Pillar 04 · master data management</div>
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
              approved change goes live on <strong>every channel alias</strong> — Shopify, Amazon,
              EDI, vendor SKU
            </span>
          </div>
        </div>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "2rem", fontSize: "1.05rem" }}>
          Verve replaced Cin7 specifically for SKU-level profitability visibility. New-product
          launch is the flagship example, but this covers every item, BOM, vendor, and price
          change a brand makes — it's the loop every other loop depends on for correct data.
          Product and pricing velocity is how mid-market CPG competes.
        </p>
      </Rise>
    </>,

    // 8 — the fifth pillar
    <>
      <Rise order={0}>
        <div className="kicker">The fifth pillar — sequenced deliberately</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          New sales channels: <span className="accent">the expansion promise</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          The most customer-visible growth story we have: Gorgie scaled 5,000→15,000 doors on
          DOSS; Snackwise ran 345,000 transactions with zero custom integrations and renewed on
          it; Clean Age hit a live Walmart reset. A fast channel launch depends on two pillars
          holding first — <strong>trustworthy inventory</strong> (so the new channel doesn't
          oversell) and <strong>instant product-data propagation</strong> (so the catalog is right
          on day one). When those hold, channel onboarding becomes the fastest growth lever we
          offer — and the natural expansion conversation with every customer.
        </p>
      </Rise>
    </>,

    // 9 — why this matters
    <>
      <Rise order={0}>
        <div className="kicker">Why this framing matters</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          "Ops platform" is a <span className="accent">feature list.</span> Growth engine is a{" "}
          <span className="accent">promise.</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          Everything underneath — composable no-code, unified operational data, automated
          transaction flow, AI adaptivity — exists to serve these pillars, not the other way
          around. Positioned as an ops platform, we compete on features. Positioned as the growth
          engine for physical-goods companies, we compete on <strong>whether revenue can actually
          scale</strong> — a claim no incumbent and no point tool is making.
        </p>
      </Rise>
    </>,

    // 10 — the mechanism beneath
    <>
      <Rise order={0}>
        <div className="kicker">The mechanism — the how, not the message</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">How the engine runs underneath</h1>
      </Rise>
      <Rise order={2}>
        <table className="laneTable">
          <thead>
            <tr>
              <th>Pillar</th>
              <th>Runs on</th>
              <th>Proof it's live</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Close the books</td>
              <td>Finance loop → cost figure-8 → month-end snapshot</td>
              <td>Entries posted to the ledger; no Excel backfill</td>
            </tr>
            <tr>
              <td>Never caught short</td>
              <td>Procure-to-pay loop → automated replenishment</td>
              <td>POs acknowledged by vendors, weekly</td>
            </tr>
            <tr>
              <td>Know what you have</td>
              <td>Inventory loop → positions across all locations</td>
              <td>3PL's own count matches DOSS, daily</td>
            </tr>
            <tr>
              <td>Change it once</td>
              <td>Master-data loop → every channel alias</td>
              <td>Change live everywhere the same day</td>
            </tr>
          </tbody>
        </table>
      </Rise>
      <Rise order={3}>
        <p className="prose" style={{ marginTop: "1.6rem", fontSize: "1rem" }}>
          "Live" always means the outside world confirmed it — a vendor, a ledger, a 3PL, a
          retailer. This table is internal working detail; it never leads a strategy conversation.
        </p>
      </Rise>
    </>,

    // 11 — sequencing discipline
    <>
      <Rise order={0}>
        <div className="kicker">Sequencing discipline</div>
      </Rise>
      <Rise order={1}>
        <h1 className="headline">
          Don't sell the promise <span className="accent">ahead of the mechanism</span>
        </h1>
      </Rise>
      <Rise order={2}>
        <p className="prose">
          The rule is simple: never sell a higher-level promise before the level beneath it holds
          steady. It's why new sales channels is the fifth pillar, not the first — it depends on
          inventory truth and master data being solid. The pillars are the message; each one is
          earned loop by loop, verified by the outside world, before the next claim is made.
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
              Should <strong>master data management</strong> become a named, first-class business
              process with its own definition of "live"?
            </span>
          </li>
          <li>
            <span className="n">Q·02</span>
            <span>
              What's the concrete trigger for <strong>promoting new sales channels</strong> to a
              top-level pillar — defined well enough it isn't a judgment call?
            </span>
          </li>
          <li>
            <span className="n">Q·03</span>
            <span>
              Which customer produces the first <strong>master-data outcome receipt</strong> — a
              new item or price live everywhere, same day?
            </span>
          </li>
          <li>
            <span className="n">Q·04</span>
            <span>
              Does <strong>"growth engine"</strong> become the external category claim, or stay
              the internal narrative frame?
            </span>
          </li>
        </ol>
      </Rise>
    </>,
  ],
};
