/**
 * Insights articles — written for facilities, operations and strata managers.
 *
 * Author avatars are deliberately omitted: initials are rendered instead, so
 * no stock headshot is ever passed off as a member of staff.
 * TODO(client): replace author names and roles with real people.
 */

export const blogCategories = [
  "All",
  "Facility Management",
  "Compliance",
  "Cleaning Standards",
  "Sustainability",
  "Industry Insights",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogPost {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "All">;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      checklist?: string[];
    }[];
    proTip: string;
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "writing-a-cleaning-scope-of-works",
    title: "How to Write a Cleaning Scope of Works That Actually Holds Up",
    category: "Facility Management",
    date: "Oct 14, 2026",
    readTime: "7 min read",
    image: "/images/service/service-2.jpg",
    excerpt:
      "Most cleaning disputes are scope disputes. A specification that names the area, the task and the frequency removes the argument before it starts.",
    author: { name: "Operations Team", role: "RedSky Facility Services" },
    content: {
      intro:
        "Almost every dispute between a site and its cleaning contractor comes down to the same thing: two parties remembering the agreement differently. A well-written scope of works ends that. It is not a legal document so much as an operational one — a list specific enough that a cleaner, a supervisor and a facilities manager would all mark the same site the same way.",
      sections: [
        {
          heading: "1. Describe areas, not buildings",
          paragraphs: [
            "A scope that says 'Level 3' is unenforceable. A scope that lists reception, open-plan workstations, four meeting rooms, two kitchens, two washrooms, the lift lobby and the fire stair is something you can inspect against.",
            "Break the site into the areas people actually talk about when they complain. If a space generates its own complaints, it deserves its own line.",
          ],
          checklist: [
            "List every area by the name your staff use for it",
            "Record approximate floor area and surface type per area",
            "Note access constraints — swipe cards, alarm codes, restricted hours",
            "Flag any area explicitly excluded from the scope",
          ],
        },
        {
          heading: "2. Separate daily, periodic and on-request work",
          paragraphs: [
            "Daily tasks are what keeps the site functioning. Periodic tasks — carpet extraction, high-level dusting, hard-floor restoration — are what stops it degrading over a two-year contract. Confusing the two is how sites end up paying for a daily service and quietly losing their floors.",
            "Give every periodic task a frequency and a nominated month. 'Twice yearly' invites drift; 'March and September' does not.",
          ],
        },
        {
          heading: "3. Define the standard, not just the activity",
          paragraphs: [
            "'Clean washrooms' means nothing. 'Washrooms cleaned and sanitised, mirrors and chrome polished, consumables restocked, no visible soiling at the start of business' is a standard someone can fail.",
            "Where an outcome is hard to word, photograph the acceptable condition at handover and attach it to the specification as the reference state.",
          ],
          checklist: [
            "State the condition expected, with a time it must be met by",
            "Attach reference photographs for ambiguous areas",
            "Name the rectification window for a failed inspection",
            "Say who signs off that rectification is complete",
          ],
        },
        {
          heading: "4. Write the reporting into the scope",
          paragraphs: [
            "If inspection frequency, report format and escalation path are not in the specification, they are optional — and the first busy month is when they stop happening.",
            "Specify how often supervisors inspect, what evidence accompanies an inspection, when the monthly report lands, and who it goes to.",
          ],
        },
      ],
      proTip:
        "Before you issue a specification to tender, hand it to someone who has never seen the site and ask them to mark it. Every question they ask you is a gap a contractor could later price around.",
      conclusion:
        "A good scope protects both sides. It gives the contractor a fixed, priceable commitment and gives the site a document it can inspect against. If you are retendering, rewriting the specification is worth more than changing suppliers.",
    },
  },
  {
    slug: "contractor-compliance-documents-checklist",
    title: "The Compliance Documents to Demand Before a Contractor Starts",
    category: "Compliance",
    date: "Sep 29, 2026",
    readTime: "6 min read",
    image: "/images/service/service-6.jpg",
    excerpt:
      "Insurance certificates, SWMS, SDS, police checks and inductions. What to ask for, what each one actually proves, and how often to re-check it.",
    author: { name: "HSEQ Team", role: "RedSky Facility Services" },
    content: {
      intro:
        "Engaging a contractor transfers work, not liability. If someone is injured on your site or a chemical is misused, the question asked afterwards is what you verified before they started. These are the documents worth holding, and what each one is actually evidence of.",
      sections: [
        {
          heading: "Certificates of currency",
          paragraphs: [
            "Public liability and workers compensation certificates are the baseline. The detail that matters is the expiry date and the named insured — a certificate in the name of a related entity is not cover for the company on your site.",
            "Set a calendar reminder for thirty days before expiry rather than filing it and forgetting. An expired certificate discovered after an incident is worth nothing.",
          ],
          checklist: [
            "Public liability — check the insured entity name and the sum insured",
            "Workers compensation — current for the state the work is performed in",
            "Motor vehicle cover where vehicles come on site",
            "Diary the earliest expiry date across all certificates",
          ],
        },
        {
          heading: "Safe Work Method Statements",
          paragraphs: [
            "A SWMS should be written for your site, not downloaded. If it does not mention your access arrangements, your plant, or the specific heights and chemicals involved, it is a template and it will not help anyone.",
            "Read the control measures. Generic entries like 'take care' indicate the risk assessment was never really done.",
          ],
        },
        {
          heading: "Safety Data Sheets and the chemical register",
          paragraphs: [
            "Every chemical brought onto your site needs a current SDS, and the register needs to match what is actually in the cleaner's trolley. Ask to see the trolley at an inspection; mismatches are common and revealing.",
            "Check decanted bottles are labelled. Unlabelled decanted chemicals are one of the most frequent findings in a WHS audit.",
          ],
        },
        {
          heading: "Personnel screening and inductions",
          paragraphs: [
            "National Police Checks for all staff; Working with Children Checks for anyone on an education or childcare site; sector-specific screening and immunisation records for clinical and aged care settings.",
            "Screening is only useful if it is current. Ask how the contractor tracks expiry across a workforce, and what stops an expired check from being rostered.",
          ],
          checklist: [
            "Police checks held centrally and produceable on request",
            "WWCC current for every person on an education site",
            "Site induction completed before the first shift, not after",
            "A named process for removing someone whose clearance lapses",
          ],
        },
      ],
      proTip:
        "Ask for the documents at tender stage, not at mobilisation. A contractor who cannot produce them inside a week during a competitive tender will not produce them faster once they have the contract.",
      conclusion:
        "None of this is onerous for a contractor who runs properly — it is a morning's work from a system they already maintain. How quickly and completely a bidder responds is itself the most useful piece of due diligence you will do.",
    },
  },
  {
    slug: "true-cost-of-switching-cleaning-contractors",
    title: "The Real Cost of Switching Cleaning Contractors (and When It's Worth It)",
    category: "Industry Insights",
    date: "Sep 8, 2026",
    readTime: "6 min read",
    image: "/images/choose/choose.jpg",
    excerpt:
      "Switching is less disruptive than most managers fear and more expensive than the headline rate suggests. Here is how to work out whether to move.",
    author: { name: "Account Management", role: "RedSky Facility Services" },
    content: {
      intro:
        "Facilities managers tend to tolerate a declining cleaning contract far longer than they would tolerate the same decline from any other supplier, because switching feels risky. It is worth separating the real costs of a transition from the imagined ones.",
      sections: [
        {
          heading: "What switching actually costs",
          paragraphs: [
            "The genuine costs are mobilisation time, a short period of inconsistency while a new crew learns the site, and your own time spent on the tender and handover. For a single site that is typically two to four weeks and a handful of hours of your attention.",
            "The costs people fear — a gap in service, a site left dirty, lost keys and access cards — are handover failures, and they are avoidable with an overlap period written into the transition plan.",
          ],
        },
        {
          heading: "What a declining contract costs",
          paragraphs: [
            "Periodic works quietly skipped are the expensive part. Carpets that should have been extracted twice a year and were not will need replacing years early. Hard floors that lost their seal cost several times a restoration to bring back.",
            "Add the complaints your team fields, the time you spend chasing, and the slow erosion of how the building presents to visitors.",
          ],
          checklist: [
            "Check whether every periodic task in the last 12 months was actually done",
            "Price the asset replacement you are bringing forward",
            "Count the hours per month you spend managing the incumbent",
            "Ask whether the last three complaints were ever closed out",
          ],
        },
        {
          heading: "Fix first, switch second",
          paragraphs: [
            "Before going to market, put the specification and the inspection regime in writing and give the incumbent a defined period to meet it. Some suppliers are under-performing because nobody ever told them precisely what good looked like.",
            "If performance does not move inside a quarter with a clear written standard and a named escalation, it is not going to.",
          ],
        },
        {
          heading: "Running a transition that does not hurt",
          paragraphs: [
            "Overlap the last week of the outgoing contract with the first week of the new one where your notice period allows. Take a full photographic condition record on day one so pre-existing damage is not attributed to the incoming supplier.",
            "Agree what catch-up work is included in mobilisation, in writing, before the start date.",
          ],
        },
      ],
      proTip:
        "Ask any prospective supplier to describe their last transition in detail — who did what, in what order, and what went wrong. Vague answers mean they have not run many.",
      conclusion:
        "Switching is a manageable, bounded project. Staying with a contract that is quietly deferring periodic work is an open-ended one. Price both before you decide.",
    },
  },
  {
    slug: "high-touch-surface-disinfection-that-works",
    title: "High-Touch Surface Disinfection: What Actually Reduces Transmission",
    category: "Cleaning Standards",
    date: "Aug 19, 2026",
    readTime: "5 min read",
    image: "/images/service/service-3.jpg",
    excerpt:
      "Contact time, cleaning before disinfecting, and colour-coded zoning do more than any product claim on a label.",
    author: { name: "Technical Services", role: "RedSky Facility Services" },
    content: {
      intro:
        "Disinfection programmes often fail for procedural reasons rather than chemical ones. The product on the label is rarely the problem; how long it stays wet, and what was on the surface before it was applied, usually is.",
      sections: [
        {
          heading: "Clean before you disinfect",
          paragraphs: [
            "Disinfectants are deactivated by organic soil. Applying one to a visibly dirty surface wastes the chemical and leaves the surface contaminated. Cleaning and disinfection are two steps, in that order.",
            "On high-traffic surfaces this means a detergent pass followed by a disinfectant pass, not a single wipe with a combined product applied to grime.",
          ],
        },
        {
          heading: "Respect the contact time",
          paragraphs: [
            "Every disinfectant has a required dwell time on the label — commonly somewhere between thirty seconds and ten minutes. If the surface is wiped dry before that time elapses, the claimed kill rate does not apply.",
            "Build the routine so dwell time happens naturally: spray a run of surfaces, move on, come back. Anything that depends on a cleaner standing and waiting will not survive a busy shift.",
          ],
          checklist: [
            "Confirm the required contact time for each product in use",
            "Sequence the route so dwell time elapses without anyone waiting",
            "Record the frequency, not just the fact, of disinfection",
            "Re-check dilution rates if dispensers are refilled manually",
          ],
        },
        {
          heading: "Zone with colour, and mean it",
          paragraphs: [
            "Colour-coded microfibre only prevents cross-contamination if the cloths are genuinely separated, laundered between sites and retired when they stop performing. A colour system that shares a single bucket is decoration.",
            "Audit it by looking in the trolley unannounced rather than asking whether the system is followed.",
          ],
        },
        {
          heading: "Target the surfaces that matter",
          paragraphs: [
            "Door furniture, light switches, lift buttons, handrails, shared keyboards, kitchen taps, printer panels and bathroom locks carry far more transfer than large horizontal areas.",
            "Frequency on those points matters more than broad coverage. A daily wipe of every desk is worth less than treating the twenty touchpoints the whole floor shares.",
          ],
        },
      ],
      proTip:
        "Walk your site and list every surface touched by more than ten people a day. If a point on that list is not named in your cleaning specification, your specification has a hole in it.",
      conclusion:
        "Effective disinfection is mostly discipline: clean first, let the product dwell, keep the zones separate, and concentrate effort on shared touchpoints. None of it requires a premium chemical.",
    },
  },
  {
    slug: "cutting-waste-and-chemicals-without-cutting-standards",
    title: "Cutting Waste and Chemical Use Without Dropping Your Standards",
    category: "Sustainability",
    date: "Jul 30, 2026",
    readTime: "6 min read",
    image: "/images/service/service-5.jpg",
    excerpt:
      "Metered dilution, microfibre and honest waste separation reduce both environmental impact and cost — and give you numbers you can report.",
    author: { name: "Operations Team", role: "RedSky Facility Services" },
    content: {
      intro:
        "Sustainability in cleaning is usually sold as a product swap. The larger gains are operational: using less chemical, less water and less single-use plastic to reach the same standard, and being able to evidence it when your organisation reports.",
      sections: [
        {
          heading: "Fix dilution before you change products",
          paragraphs: [
            "Hand-mixed chemicals are routinely over-concentrated, which wastes product, leaves residue that attracts soil, and can damage surfaces. Metered dispensers remove the guesswork and typically cut concentrate use substantially.",
            "The side benefit is consistency: every bottle on every site performs the same way, so a standard is reproducible rather than dependent on who mixed it.",
          ],
          checklist: [
            "Install metered dispensers at each chemical store",
            "Remove manual decanting from the routine entirely",
            "Label every secondary container, without exception",
            "Track concentrate purchased per square metre as your baseline",
          ],
        },
        {
          heading: "Microfibre, laundered properly",
          paragraphs: [
            "A microfibre system cuts both water and chemical use and outperforms cotton on soil capture. It only works if cloths are laundered correctly, without fabric softener, and retired once the fibres glaze.",
            "Track cloth lifecycle. A microfibre programme where nobody retires worn stock drifts back to the performance of a cotton rag within a year.",
          ],
        },
        {
          heading: "Separate waste honestly",
          paragraphs: [
            "Most sites have recycling bins; far fewer have recycling that survives the bin room. If streams are combined at consolidation, the separation upstairs is theatre.",
            "Audit the bin room, not the office. Ask your waste contractor for contamination rates and act on them — a high contamination rate sends the whole load to landfill.",
          ],
        },
        {
          heading: "Measure what you will be asked about",
          paragraphs: [
            "If your organisation reports on environmental performance, decide early which numbers you need: chemical concentrate per square metre, waste diverted from landfill, and water used in floor care are the three most often requested.",
            "Build them into the monthly service report rather than reconstructing them at year end.",
          ],
        },
      ],
      proTip:
        "Ask your contractor what they purchased in concentrate last year, in litres. If nobody can answer, there is no baseline, and any reduction claim being made is guesswork.",
      conclusion:
        "Lower impact and lower cost usually point the same direction in cleaning. Both come from using the right amount of the right product, and being able to prove it.",
    },
  },
  {
    slug: "strata-common-area-cleaning-complaints",
    title: "Why Strata Common-Area Complaints Keep Coming Back",
    category: "Facility Management",
    date: "Jul 11, 2026",
    readTime: "5 min read",
    image: "/images/service/service-4.jpg",
    excerpt:
      "In most buildings the cleaning is adequate and the communication is not. A published schedule fixes more complaints than an extra visit.",
    author: { name: "Account Management", role: "RedSky Facility Services" },
    content: {
      intro:
        "Committees frequently respond to common-area complaints by increasing the cleaning frequency, and are surprised when the complaints continue. In most buildings the underlying issue is that residents have no idea what is supposed to happen or when.",
      sections: [
        {
          heading: "Publish the schedule where residents can see it",
          paragraphs: [
            "A single notice in the lobby listing what is cleaned, on which days, resolves a large share of complaints immediately. Most people are not objecting to the standard; they are objecting to not knowing whether anyone came.",
            "It also redirects legitimate complaints to the right target. If the schedule says bin rooms are washed Tuesdays and it is Thursday, the complaint is specific and actionable.",
          ],
          checklist: [
            "Post the schedule in the lobby and in the building's resident portal",
            "List the contractor's attendance days, not just the task list",
            "Name who to contact and what information to include",
            "Date the notice so residents know it is current",
          ],
        },
        {
          heading: "Separate cleaning problems from behaviour problems",
          paragraphs: [
            "Overflowing bin rooms, items dumped in corridors and odour in car parks are frequently resident behaviour, not cleaning failure. Treating them as cleaning failures increases cost and changes nothing.",
            "Ask the contractor to photograph and report these rather than quietly resolving them. A record is what lets the committee act on the actual cause.",
          ],
        },
        {
          heading: "Get reporting a committee can use",
          paragraphs: [
            "A monthly report should be something a committee can table at a meeting without rewriting: attendance, tasks completed, exceptions, defects observed, and photographs.",
            "That record also protects the building at handover, at insurance claim time and in any dispute about whether contracted work was performed.",
          ],
        },
        {
          heading: "Walk the building with your contractor quarterly",
          paragraphs: [
            "Twenty minutes on site with the account manager surfaces more than a quarter of emails. It is also when scope gaps become obvious — the courtyard nobody listed, the second bin room added after a refit.",
            "Document any change as a scope variation so it is funded rather than absorbed and eventually dropped.",
          ],
        },
      ],
      proTip:
        "Before approving extra cleaning hours, check whether the complaints cluster on particular days. A clustering pattern usually points to a scheduling fix rather than a volume one.",
      conclusion:
        "Common-area satisfaction is mostly a communication problem wearing a cleaning problem's clothes. Publish the schedule, report honestly, and walk the building — then adjust frequency if complaints persist.",
    },
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
