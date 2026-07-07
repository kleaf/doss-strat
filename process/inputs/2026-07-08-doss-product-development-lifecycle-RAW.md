> **Source:** Notion export dropped by Kurt as `process/inputs/2026-05-Current-Process` (a nested Notion Export-Block zip); extracted verbatim 2026-07-08. This is the real, currently-owned "Product Development Lifecycle @ DOSS" doc — not a strawman, the actual process in force. The original zip is left in place alongside this readable transcription.

# Product Development Lifecycle @ DOSS

**Audience:** PMs, Eng, Design, PMO, Sales, SoCon, Marketing

**Process Owner:** @Wiley Jones 

**POR PMap:** [doss-roadmap.lovable.app](http://doss-roadmap.lovable.app)

**Cadence:** ProductOrg Staff Mtg (Weekly)

**Last updated:** May 16, 2026 

## 1. Why do we need this process?

We have a Product organization now! Without a shared lifecycle, every project reinvents its own process, communications drift, and adoption suffers. This doc defines the durable core: **idea, design, ship, adopt**. It is opinionated where it can be and explicit where it varies by team.

**Two operating principles:**

**[1] Default Clarity >>> Constant Communication.**
If everyone knows where a project is in the sequence, you do not need to ask.

**[2] POR PMap is the cross-functional system the organization can trust is correct.**
Our product roadmap “POR PMap” is the single place we agree on what is in flight, who owns it, what stage it is in, and the product leadership ensures its up to date ***always***.

## 2. POR PMap (Plan-of-Record Product Map)

Live at [doss-roadmap.lovable.app](http://doss-roadmap.lovable.app). Single source of truth for cross-functional status. Tracked across Platform, OS, and Applications. This is NOT a “roadmap” over a long period of time. It is the company-wide system that allows us to define “WTF is going on?” w.r.t product development.

**Stage sequence:** `Not Started` → `PRD` → `Design` → `EngDesign` → `Dev` → `QA` → `Shipped` → `Adoption` (plus `Paused`).

**Rules:**

- Every project lives on the map. If you are doing work that is not on it, raise it in the weekly sync so we add it (or kill it).
- Read access for everyone. Write access scoped to PMs and leads.
- Stage transitions only happen after the gate for that stage is met (defined in sections 4 through 9).

## 3. Listening Systems

[*Mike Clayville](https://www.linkedin.com/in/mikeclayville/) (a legendary CRO @ Stripe, AWS, VWmare) said to me: “When you grow a revenue and product org, you must institutionalize your listening systems.” How do we listen to our customers? Our sales team? Our own Engineers? Our founders?*

How we listen and which signals we act on is what lets us move faster with more product accuracy. Done well, every team knows how to push ideas into consideration and the most productive way to do so, and stops feeling misaligned between what they observe and what shows up in the POR PMap.

By team this means:

- **Applications** team will be doing A LOT of listening to AEs, marketing, SoCon, our customers, PMOs, and the SMEs on their own team.
- **AI and OS** will do a LOT of listening specifically from Applications, from Platform PMs, from PMO, and mostly from Wiley.
- **Platform** will do the least listening and direction will mostly come Wiley + Arnav + OS PMs.
- We do not support “wide-array listening” where we just take in unstructured asks. It is too noisy. If something matters - people will surface it through the defined medium (if they know to do it!).
- **Channel pattern:** Every listening channel follows `#<team>-product-listening`. One channel per source team. Low friction in, weekly triage out.

**Channels:**

- `#pmo-product-listening`
- `#gtm-product-listening`
- `#socon-product-listening`
- `#eng-product-listening`
- `#marketing-product-listening`

**Owner:** Joyce, Srujun, Luke W.

**Cadence:** 

1. PMs to triage items at the beginning of every week 
2. Bring them up during our weekly ProductOrg meetings

---

## 4. Intake

### **How do we kick-off new projects and decide what to work on?**

First off… how do I KNOW if I should intake something? Approach it by asking a simple question: am I deviating the intended behavior of the system? If yes - then it needs intake.

**No Intake**: bug fixes, resolution / fixes from incidents

**Yes Intake**: changes to existing features, new features, large projects (groups of features!)

[Project Intakes](https://app.notion.com/p/aa184adcb3a549858e658330e6bdbecd?pvs=21)

1. **Intake. Owner = anyone in product org.** Listening system surfaces a candidate or you have a “Shower Thought”. 
    1. PM to triage relevant channels at the beginning of every week
    2. PM writes a one-pager (problem, hypothesis, rough scope, why now). File it in the [Project Intakes database](https://www.notion.so/aa184adcb3a549858e658330e6bdbecd) (use the **Project Intake** template via **+ New**). Structure reference: [Project Intake Template](https://app.notion.com/p/Project-Intake-Template-362f16c5ee3680a58ebdca5f26567804?pvs=21) 
2. **Triage.** Brought to ProductOrg Staff Mtg, or escalated directly to Wiley/Arnav if urgent. Then, approved, deferred, or killed.
    1. **Resourcing.** ProductOrg Staff Mtg decides who staffs what w.r.t which ideas are converted into Projects. If we cannot staff it, it stays `Not Started` (or moves to `Paused`), openly communicated.
        1. Do we have the right owner?
        2. Do we have engineering and design capacity?
        3. What gets paused or cut to make room?
        4. We do not pretend to staff things we cannot staff. Visible `Not Started` is better than hidden over-commitment.
3. **POR PMap entry.** PM creates the project in POR PMap with name, team, owner, stage, status, target ship window.

---

## 5. PRD Writing

### **How do we produce product documents?**

#### Which document do I write?

- **Tier 1 (Vision):** The solution is still unknown and needs exploration before anyone can write a buildable spec. This is a problem space too big to build in one pass (e.g. Apps/Modules). A Vision sets the convictions that govern the space and breaks it down into the child PRDs that will actually get built. → [[Template for Tier 1: Vision]](https://app.notion.com/p/Template-for-Tier-1-Vision-Northstar-Concepts-37df16c5ee3680e0bb9cee72a39965f8?pvs=21)
- **Tier 2 (Standard PRD):** The solution is clear, and the build is meaty enough to need convictions, milestones, and cross-surface coordination. This is the default. → [Template for Tier 2: Standard PRDs](https://www.notion.so/Template-for-Tier-2-Standard-PRDs-31af16c5ee3680deb73df28c81734664?pvs=21)
- **Tier 3 (Feature one-pager):** A small, well-understood change where the only real risk is engineers guessing at intent and keeping the scope right. → [[Template for Tier 3: Feature One-Pager]](https://app.notion.com/p/Template-for-Tier-3-Feature-one-pager-37df16c5ee36808f9739f08b345937d6?pvs=21)

#### **Document Rules**

- These are **product documents**, not an engineering design doc. Therefore it should be readable by **cross-functional stakeholders**, but optimized for **engineering consumption.**
- Stay in **concept land** mostly except for detail required to define scope, sequencing, ownership, or technical architecture (especially for platform-heavy projects).
- If the team does not have conviction on **what** is being built and **why**, this should **not** be a PRD yet.
- Open questions should mostly be about **how**, not **what** or **why**.
- If a section substantially exceeds its sentence limit OR it is AI-slop, the PRD will be **rejected and rewritten.**
- No filler. If a section has nothing to say, leave it blank and identify, “No comments.” These need to be extremely legible and fast to review.
- Each PRD has a DRI and an Approver… they cftan’t be the same person!
- You must USE one of [**these templates](https://app.notion.com/p/PRDs-318f16c5ee3680dda1c4cd8191e827dd?pvs=21)** when writing a PRD

### Authoring Process

*(Why are there so many different steps in the status? So that at any point in time anyone can see where you are in the product process.)*

| Step | Description | PRD Status |
| --- | --- | --- |
| **[1] Draft** **PRD** | PM authors the draft in our PRD database → [**PRD database**](https://app.notion.com/p/318f16c5ee36806fa051ef7b592aa25a?pvs=21)  | *PM to set PRD status:  **Drafting PRD** → once complete switch to **PRD Draft: Ready for review*** |
| **[2] Async review** | Draft is sent out to Arnav/Wiley for review and comments.  | *Arnav/WileySwitch PRD status to:  **In-review*** |
| **[3] Address comments** | PM to review all comments from Arnav/Wiley async.

Ping Cedi to find time with you (PM) and Arnav & Wiley | *PM to set PRD status: **PRD draft: reviewing feedback** once complete switch to **Schedule live PRD review*** |
| **[4] Live review** | Reviewed with Wiley / Arnav (Approver). 

Runs ~30–60 min, with the first 15 min spent reading the document together as a group. | By the end of the meeting PM should switch the PRD status to ***Approved*** |

## 6. PRD Handoff

The owner of this handoff is the PM. There is **always** a PRD handoff from the PM to the Engineers and Designers at the same time.

- **Handoff is a live meeting that can only be facilitated by a PM / Arnav / Wiley.**
- PMs work with the Eng leaders (Arnav, etc) and the TLs to quickly schedule.
    - Make sure you put it on a calendar and RECORD IT for future reference / AI-notetakers!
- **Format:** It should last at least 30min and PMs **must have** participants pre-read the PRD. The convo should be focused on the risk surfaces and areas for clarification.

### Linear + dedicated Slack channel

The owner of creating the linear project and slack channel is the PM.

- Tech lead does the following: Linear project created with broken down tasks that are known (starting with the design doc creation). Project status and due date in Linear is the canonical position; it must be kept current.
- Tech lead does the following: Slack channel: `#eng-<project-name>`. Required, not optional.
- All project comms go in that channel, not DMs.
- Tech lead creates: Weekly Friday 15 min Linear review sessions run by Arnav or Tech Lead for project. At the end of these there will be an update posted on the Linear project to indicate if the project is on track, behind, or off track and why.
    - Updating overall project due dates **requires** approval from Arnav
    - This will be planned starting when Engineering design docs are kicked off
    - The meeting must include the engineers, PM, and designer

---

## 7. Product Design

### When design is involved

- Customer-facing UI: always
- PMO-facing tooling (ARP, AAA): always
- OS internal surfaces: sometimes (visual map or facade preferred over full design).
- Platform: Rare

This will be defined in PRD review process above if design is needed in this project.

### Cycle

1. Designer creates their tasks in Linear with milestones.
2. Designer produces prototype or facade (Figma, hosted prototype, or screenshot map).
3. Reviews with PM and engineering partner on completion of each milestone
4. **Wiley design review is required to mark complete.** No exceptions.
5. Product drives a “Design Handoff” with the designer and PM to the engineering team with the product designs
6. Status moves `Design → EngDesign`.
    1. Note: Eng Design Doc and spikes may start in parallel for tasks that are not explicitly blocked on design

### Tracking

- Figma / Prototype link in the PMap tracker
- Prototypes shared with PMO/SoCon when relevant

## 8. Engineering Design (DDoc)

### The Eng Design Doc (DDoc) covers

Architecture, Data model, API surfaces and contracts, Sequencing and rollout, Deviations from PRD (must go through product review), Risk and open questions.

Design docs are authored here: [ENG Design Docs](https://app.notion.com/p/3198ba17a0824349b12a478b8f626836?pvs=21) using the template that is created for all engineers. Clicking the blue “new” button will automatically use the design doc templates. 

### Review

1. Tech Lead and engineers on project author the design doc
2. Engineering leads a Design Doc Review with other engineers and PMs (*optionally Design)
    1. Engineering review is for correctness, directionality
    2. PM/Design review is to verify product/design requirements are met
3. Any deviations from PRD must go through a review with the originating PM during the Design Doc Review
4. Arnav or the Tech Lead must approve.
5. Status moves `EngDesign → Dev`.

<aside>
<img src="https://app.notion.com/icons/error_gray.svg" alt="https://app.notion.com/icons/error_gray.svg" width="40px" />

CRITICAL

**We will NOT always go back and update PRDs for minor changes** after DDocs are written even when there is a variation introduced. This is a waste of time. PRDs will only be updated for major concept changes that render the original PRD useless.

Instead, we will note in DDocs when deviations from a PRD are introduced so they can be understood.

</aside>

---

## 9. Development Tracking

### Linear update post cadence

Owned by owner of the Linear review: this is Arnav, TPM, or TL depending on the project. Must be designated upfront during creation of the event + linear project. Done / Doing / Next format, posted in `#eng-<project-name>`. Linear holds the canonical state; the post is the human read-out.

> **Done:** what landed since the last update.
> 

> **Doing:** what is active right now.
> 

> **Next:** what comes after this lands.
> 

> **Risks / blockers:** only if non-trivial.
> 
- **Daily:** quick async post when material progress, blockers, or scope changes happen. Skip the day if nothing changed.
- **Weekly (Fridays):** required On Track, Behind, Off Track, even on quiet weeks.

The point: anyone reading the channel can see the work-forward to completion without archaeology. Linear shows where we are; the post shows how it is moving.

## 10. QA / QC

Owned by the TL on the project. QA must be done as soon as code complete.

### Staging review

- Feature deploys to staging.
- PM + Design do a product review and run the QA plan from the design doc in staging before customer exposure.
- PMO looped in for tooling features.

### Perf testing and benchmarking

Required for Platform. Hypothesis-driven:

1. State the predicted change (example: "ZFlow eliminates execution instance contention; backlog goes to zero").
2. Capture baseline measurement before.
3. Capture actual measurement after.
4. Report in the project channel.

### Eng review gate

Tech Lead signs off. Status moves `QA → Shipped`.

## 11. Production Release

When something goes live that is x-functionally relevant:

1. **The PM posts release note** in slack in the `#product-releases` channel
2. Tagged stakeholders: PMO, Sales, SoCon, Marketing.
3. Includes: what shipped, who benefits, how to access, demo link or short Loom.
4. Roadmap status moves to `Shipped`.

The release note is short. One paragraph plus links. Detail lives in the PRD and project channel.

## 12. Adoption (Post-Ship)

Shipping is not the finish line. Adoption is.

**Owners:** @Luke Whiteman, @Joyce Guo, @Srujun 

**Marketing**

- Positions the feature externally.
- Updates changelog, blog where appropriate.
- Coordinates customer-facing comms with PM.

**SoCon**

- Demos the feature in new solution consulting calls.
- Adds reference design or demo flow to SoCon library.

**Sales**

- AEs trained on how to sell it.
- Battlecards and discovery questions updated.

**PMO**

- Trained on when and how to use it.
- Reference designs added to install workbook spec sheets.
- Enforced in implementations where appropriate (Luke owns enforcement standard).

**Engineering**

- Trained on functionality and how to maintain, use, and test future changes against it
- Layered into onboarding where needed

**Adoption Follow-Up**

- Reviewed at ProductOrg Staff Mtg one month post-ship.

**Feedback Loop**

- Post-ship learnings feed back to the listening channels.
- If we got it wrong, the next version starts as a new PRD entry on the map.

## 13. Roles & Responsibilities

**Legend:** **★** Accountable (owns the outcome, one per row) · **●** Responsible (does the work) · **◐** Consulted (input needed before moving on) · **·** Informed (kept in the loop). Stacked **★●** means the same role owns the outcome *and* does the work.

| Stage | PM | Eng | Design | PMO | Sales | SoCon | Marketing |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Listening | ★ | ◐ | ◐ | ● | ● | ● | ● |
| Project creation | ★ | ◐ | ◐ | ◐ | ◐ | ◐ | · |
| PRD | ★ | ◐ | ◐ | ◐ | · | · | · |
| Design | ◐ | ◐ | ★ | ◐ | · | · | · |
| Eng Design | ◐ | ★ | ◐ | · | · | · | · |
| Dev | ◐ | ★ | ◐ | · | · | · | · |
| QA | ★ | ● | ● | ◐ | ◐ | ◐ | · |
| Release | ★ | ◐ | ◐ | · | · | · | ◐ |
| Adoption | ★ | · | · | ● | ● | ● | ● |

## 14. Cadences

- **ProductOrg Staff Mtg** (Tuesdays 9:45 AM): roadmap review, resourcing, candidate triage.
- **Weekly status posts** in each `#eng-<project>` channel (Fridays).
    - Note: this should come from Linear’s project update from the weekly Friday Linear review
- **Quarterly POR PMap review** with SLT and broadly across the company

## 15. Tooling

| Purpose | Tool | Notes |
| --- | --- | --- |
| Roadmap | [doss-roadmap.lovable.app](http://doss-roadmap.lovable.app) | Single source of truth across all teams. |
| PRDs | [PRDs](https://app.notion.com/p/318f16c5ee36806fa051ef7b592aa25a?pvs=21)  | Single DB of all PRDs |
| Eng tickets | Linear | One Linear project per roadmap project. |
| Project comms | Slack `#eng-<project>` | Required for any active dev work. |
| Listening | Slack `#<team>-product-listening` | All channels for collecting org-wide feedback |
| Releases | Slack `#product-releases` | Stakeholder-facing release notes. |
| Design | Figma | Linked from Lovable project entry. |
| Customer intel | Tapestry | Adoption signal, customer feedback evidence. |
| Intake (template) | [Project Intake Template](https://app.notion.com/p/Project-Intake-Template-362f16c5ee3680a58ebdca5f26567804?pvs=21)  | One-pager template structure. |
| Intake (DB) | [Project Intakes](https://www.notion.so/aa184adcb3a549858e658330e6bdbecd) | File new intakes here. Status, Team, PM, Designer, Ship Window. Triage view feeds ProductOrg Staff Mtg. |

---

## Signal

- **The v1 strawman ([2026-07-07](../deepdive/2026-07-07-product-process-strawman.md)) materially under-modeled reality.** PRD tiers (Vision/Standard/Feature one-pager), the POR PMap stage-gate (`Not Started → PRD → Design → EngDesign → Dev → QA → Shipped → Adoption`), a full RACI matrix, structured per-team listening channels, and a **quarterly POR PMap review with SLT** all already exist. See [reconciliation deep dive](../deepdive/2026-07-08-roadmap-alignment-and-accountability-v2.md).
- **The weekly ProductOrg Staff Mtg and quarterly SLT review are the real cadence** — no new ritual needs inventing; recommendations should add content/fields to these, not propose parallel meetings.
- **The RACI table (§13) already assigns PM as Accountable (★) for PRD authorship** — "Wiley literally writing PRDs" is a deviation from the org's own documented process, not an ambiguous shaping/building boundary needing a new framework.
- **Gap 1 confirmed: no customer-evidence requirement in Intake.** The one-pager asks for "problem, hypothesis, rough scope, why now" but nothing requires citing named accounts, ARR at stake, or a VoC/Value-Stack-pillar link before a candidate is triaged.
- **Gap 2 confirmed: no end-to-end delivery accountability.** The RACI's "Accountable" owner changes per stage (PM for PRD/QA/Release/Adoption, Eng for Eng Design/Dev) — nobody owns the ship-date promise across the whole arc. "Updating overall project due dates requires approval from Arnav" exists only at the engineering-due-date level (§6), not at the roadmap-commitment level.
- **Gap 3 confirmed: no staged customer-rollout process.** §11 Production Release is a single-shot "shipped" announcement with no ring language (internal → design partners → high-priority cohort → GA) — independent of PRD tier, since even a small Tier 3 change can be customer-facing.
- **Gap 4 confirmed: no forward-looking field/customer communication vehicle.** §11 announces what already shipped; the quarterly POR PMap review with SLT is framed as an internal review, not an explicit field-facing commitment communication.
- **Still unresolved:** BIDEC, ZSL, Mission0, BYOFE, "bootloader" are not mentioned anywhere in this document — still open questions, not just absent from earlier notes.
