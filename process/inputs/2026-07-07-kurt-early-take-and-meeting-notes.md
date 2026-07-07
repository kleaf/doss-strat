# Kurt's early take + raw notes + staff meeting log — product process

**Source:** Kurt, 2026-07-07 (pasted verbatim as part of [iteration 13](../../history/2026-07-07-iteration-13-product-process-track.md)). Preserved as-is; internal jargon (BIDEC, ZSL, Mission0, PFMs) is not expanded here — see Signal section for what could and couldn't be resolved.

---

## My early take

My initial thoughts after a few conversations today. DOS has a very capable engineering team that really understands the core fundamentals of ERP and has been working hard on building that out for the last three to four years. They are now just moving into the application area and starting to roll this out to customers and sell it to customers. It's a very small sales team that's going to be ramping quickly, and my concern is that they do not have a well-defined process for locking down a road map with specific capabilities that are going to be delivered and delivering it to customers at a fixed time. See some references to this in the notes below that there isn't a lot of time and delivery pressure right now. And there's also not a lot of communication out to the field about what specifically is going to be delivered. It feels like some sort of planning cadence, monthly or perhaps quarterly, where the team agrees to specific themes that are going to be shipped out and then is measured against them from an accountability standpoint. Would be a good way to move forward. I'd like you to look at best practice for a company of this size to, on the one hand, not go too crazy on heavy-weight, big-room planning style planning, which I think is too much and is not the way that modern AI organizations like Anthropic and OpenAI work. But come up with a strong product management engineering strawman process that will allow us to build out the core layers of the system, platform, OS, applications wrapped with AI in a way that delivers real value to customers in the field on a predictable road map.

## Random notes

"Been 3 weeks still discussing ARP V2"

Planning

Engineering running the process

-> Say/do ratio

Document/commit, enable

Wiley literally writing PRDs

Product managers not customer facing

Product managers getting feedback from customers

Arnav/Corey/Wiley…

Corey - head of customer success

Good person to figure out current state of live customers

Implementation is a bottleneck. Product goal

PFMs - portfolio managers

They are the ones seeing it from SOW to go-live

Scoping, re-scoping, figuring out what customer wants and what we can dliver

Don't have a notion of commitment or accountability measure

If August comes around

3-5 reps

5-10 reps

Calendar quarters

Who's in charge of ARP v2

- What's the definition of done?

Sprints - no sprints

When the feature is done, continuous deployment

Slow rollout –

Internal instances, safe customers, etc.

High-priority customers

No process - writing a PRD - not defining will this feature require a customer rollout, if yes, follow this process.

Luke Whitman - senior, PM @ Amazon - joined as chief of staff, applications team

Ramana

Sarah - finance

PMing those applications

Engineer - bootloader

Shrugen - PM of platform team

Only recently become a PM

First time being a PM

OS - Joyce

More open ended - trying to translate what's in Wiley's head into execution work

Wiley driving it, Joyce has to execute.

What's bootloader? Implementing an install. Base configuration to get things started faster.

1. Definition of done
2. Attaching to KPIs
3. Committing to a timeline

What is the product and what are we working on?

- What are we building
- When am I delivering it
- Why is it important

## Staff meeting notes

- Slack channel [here](https://doss-com.slack.com/archives/C0B3RBM3KGC)
- Product Roadmap [here](https://doss-roadmap.lovable.app/dashboard?tab=timeline&stage=all&team=%5B%22Platform%22%5D&compact=false&people=%5B%5D&sort=%5B%7B%22field%22%3A%22ship%22%2C%22dir%22%3A%22asc%22%7D%2C%7B%22field%22%3A%22stage%22%2C%22dir%22%3A%22desc%22%7D%5D&view=b47d4628-8417-4e78-947d-cbde597ae200)
- PRD Library [here](https://www.notion.so/doss-com/PRDs-318f16c5ee3680dda1c4cd8191e827dd)
- Product org [here](https://tapestry.doss.com/a/822d9cbd633341ca--doss-epd-drill-down-diagram-4-of-4)
- Product development lifecycle [here](https://tapestry.doss.com/a/9aea2906165d4b15--doss-epd-product-development-lifecycle)

### 7/1

Agenda
- Srujun: maintenance and downtime comms
  - Next steps: prd reviewed by Wiley, Cory, & Arnav
- Joyce: Added a new section to Tier 1 PRDs template
- Cancelling product enablement meeting this week
- WJ:
  - Cory → discuss thru Mission0 framing in transition period
  - What does it mean for this team?
    - [1] BYOFE - pressure release value for complexity + ergonomics in UX
    - [2] Actions-as-Code - make PMO feel more like Engineers
    - [3] ….. Make primitives, blocks, tooling (Semgraph/Tracing/Explorer), OS foundations all better…
  - ZSL timeline for Apps team next steps post IMS

### 6/25

Agenda
- Completion rate of eod updates is very low at the moment
- Headcount H2 planning decisions
  - 2 PMs for Apps
  - 1 PM for OS

Action items
- (none recorded)

### 6/17

Agenda
- Reminder: PMs to post eod update.
- We now have tiers for PRDs. Outlined [here](https://app.notion.com/p/doss-com/Product-Development-Lifecycle-DOSS-362f16c5ee3681b287e9f733ead8c453?source=copy_link&assetsVersion=23.13.20260616.1537#37df16c5ee3680cf957ff73877a7733f)
- Suggestions on process for fielding "urgent product questions" cross-functionally?
  - Should listening channels serve this purpose, or should it be a separate channel?
  - Do we need to set an SLA for responding to these kinds of questions?
  - How might we enable our cross-functional stakeholders to know the right people to reach out to for a specific topic?
  - Do we have a product owner for integrations relating to ongoing partnerships? If so, have we communicated this to other teams?

Notes
- Applications: bootloader rollout; approve OMS PRD & IMS & P2P before Luke is out; prototyping
  - Note: We should share the prototype out with the broader org because it's super exciting! All hands? Team roadshow meetings?
- Centari: Reviewing what we're presenting to Sagar for onboarding; product intake for MCP CLI
- Platform: ongoing ZSL work; product intake for customer installs (suggestion from corey)
- OS: finalising concepts for phase 1a of the dependency explorer.
- Design: Design system in-progress; moving onto component patterns

Action items
- Apps will be the highlight for the cross-functional enablement meeting tomorrow
- Matteo to send all conversations for gtm enablement to Wiley
- Matteo to send structure for Sagar onboarding by eod (notion doc)
- Wiley to review finacc bridge (sarah is blocked on review)
- Wiley & Joyce to meet live to review phase 1a early next week
- Wiley & AB to sync to pull in dates for ongoing OS product work
- Josh to share first 10 patterns with Wiley eod today.

### 6/10

Agenda
- Slack Channel: Eng Product Listening (Joyce)

### 6/3 (FF [here](https://app.fireflies.ai/view/ProductOrg-Staff-Mtg::01KSKBT7P9Y9E6N4Q0GF7RJS5Y))

Agenda
- Welcome, Aishwarya!
- Platform, OS, Applications round the room of WIP (Team)
- Applications release planning check in (Wiley)
- Update on ARP V2 and ZSL product work / timeline for Eng BIDEC (Srujun, Joyce)
- Josh/Design capacity for mockups and prototyping (Josh)
- API/MCP and Sandbox product ownership

Notes
- Applications work being built around ARP V2 and ZSL
- Applications team needs a design system they can easily build a prototype without Josh's help and the SoCons can use to demo
- Wiley, Luke, Alex to follow up re reference design offline

### 5/27 (FF [here](https://app.fireflies.ai/view/ProductOrg-Staff-Mtg::01KS6M7WDBYP56QHMTDWBCSQWE))

Agenda
- Review work in progress
- [Product home](https://www.notion.so/doss-com/Product-Team-Home-8f4db83bf4f04d2e9341677e1de3564e) updates (resources and tracking for stakeholder/XFN buildout)

Applications team
- Items and Values–how will we move data around platform and workflows (Srujun deep dive)
- Dependency on modularity and composability in application and apps
- Expect we will have clarity on pseudocode by EOW
- Will own validating Apps, Modules and interfaces against applications team PRDs

### 5/20 (FF [here](https://app.fireflies.ai/view/ProductOrg-Staff-Mtg::01KRFSXF2N3Q4DZKA3A31ZPXNS))

Agenda
- How we go from idea to formal project
- How we take a formal project through its "listening", Product, Design, Eng, reviews
- How we drive it to close with a simple "sequence"
- How we deliver it and communicate for the purpose of adoption
  - App, OS, Platform feature deployment and rollout technology and process (LW)

### 5/13 (FF [here](https://app.fireflies.ai/view/ProductOrg-Staff-Mtg::01KRFSXF2N3Q4DZKA3A31ZPXNS))

Agenda
- Product Development lifecycle
  - PRDs
  - BIDEC
  - How to get to clarity, go-and-see
  - Obsess over details

---

## Signal

- **The core gap, in Kurt's words:** no defined process for locking a roadmap of specific capabilities to a fixed delivery date, and weak communication of what's coming to the field/sales org → this is the central problem the strawman must solve
- **Explicit tension to resolve:** lightweight/modern (Anthropic/OpenAI-style, not big-room planning) vs. robust (real commitment + accountability) — Kurt names this tension directly, it's the design constraint for the whole process
- **Symptom of the gap:** "been 3 weeks still discussing ARP V2" — planning without convergence; no one clearly owned "who's in charge of ARP V2" or its definition of done
- **Kurt's own three pillars** (independently arrived at, worth validating against best practice rather than reinventing): (1) definition of done, (2) attaching to KPIs, (3) committing to a timeline
- **Accountability mechanism named but not implemented:** "say/do ratio" — flagged as a concept, not yet a working metric
- **Engineering is running product process today** ("engineering running the process") rather than PM driving it — a maturity signal, not necessarily wrong at this stage, but worth naming explicitly
- **PMs are not customer-facing today**; feedback instead flows through Corey (CS) and PFMs (portfolio managers, who own SOW→go-live and see real scoping/re-scoping friction firsthand) — this is the customer-learning-loop gap the strawman must close
- **Implementation is called out explicitly as "a bottleneck. Product goal"** — i.e., the applications team's product goal may need to include *reducing implementation friction*, not just shipping features
- **DOSS already has more infrastructure than a green-field process would assume:** a public roadmap tool (Lovable-hosted), a PRD library (Notion) with tiers already introduced (Tier 1/2/3, referenced 6/17 and 7/1), an org diagram and a "Product Development Lifecycle" doc (Tapestry) — this is an adoption/rigor problem layered on partial infrastructure, not a from-scratch build
- **Named gap:** no defined trigger for "does this feature require a customer rollout process" inside PRD-writing — some features clearly do (need staged rollout), others don't, and there's no rule for which
- **Staged rollout already happens informally:** "internal instances, safe customers... high-priority customers" — a real progressive-rollout pattern exists in practice but isn't formalized or tied to PRD tiers
- **No sprints; continuous deployment is the norm** — cadence questions should work with this reality, not reintroduce sprint theater
- **Team structure and maturity varies sharply by group:**
  - *Applications* (customer-facing, revenue-adjacent): Luke Whitman (ex-Amazon senior PM, now chief of staff for Applications), plus Ramana, Sarah (finance) — the most PM-experienced team
  - *Platform*: Shrujan, first-time PM — process needs to be more scaffolded here
  - *OS*: Joyce, executing/translating Wiley's (a technical/product leader) vision rather than driving her own roadmap — Wiley himself is "literally writing PRDs," a working-leader/thin-PM-bench signal
  - H2 headcount plan (as of 6/25): 2 PMs added for Apps, 1 for OS — Platform's PM depth is not being reinforced in this round
- **Low EOD-update completion rate** flagged twice (6/17, 6/25) as its own problem — a lightweight accountability ritual that isn't sticking, worth diagnosing why before adding more rituals
- **Open cross-functional gaps named directly in the notes:** no defined SLA/owner-routing for "urgent product questions," no clear product owner for integration/partnership work, no clarity on how XFN stakeholders find the right product contact
- **Internal jargon not resolvable from context, flagged rather than guessed at:** BIDEC (a named planning/decision ritual — possibly "Big Decision" review), ZSL, Mission0, BYOFE, "Actions-as-Code," Centari, IMS/OMS/P2P (likely product/module codenames). Treat as open questions for Kurt, not inferred meanings.
- **Existing internal docs referenced but not fetchable from here** (Tapestry org diagram + lifecycle doc, Notion PRD library, Lovable roadmap, Slack channel) — all behind auth; strawman should be designed to reconcile with these if Kurt exports/pastes them, not assumed to already match them
