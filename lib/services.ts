/**
 * Facility services catalogue — the single source for /services,
 * /services/[id], the header mega-menu and the enquiry form.
 *
 * No prices are published here. Facility services are scoped and
 * contract-priced per site, so the site sells a scope of works and a
 * response time rather than a dollar figure.
 */

/** Keys map to lucide icons in components/ServiceIcon.tsx. */
export type ServiceIconKey =
  | "building"
  | "briefcase"
  | "factory"
  | "settings"
  | "layers"
  | "shoppingCart"
  | "graduation"
  | "heartPulse";

export interface ScopeGroup {
  heading: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  /** Full title — page H1 and card heading. */
  title: string;
  /** Short form for menus, breadcrumbs and the enquiry form. */
  navLabel: string;
  icon: ServiceIconKey;
  badge?: string;
  image: string;
  /** Card summary — one sentence, benefit first. */
  summary: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  /** Exactly three card bullets. */
  keyPoints: string[];
  /** Detailed scope of works, grouped for scannability. */
  scope: ScopeGroup[];
  /** What the client gets contractually — not invented metrics. */
  assurances: string[];
  /** Typical scheduling pattern. */
  cadence: string;
  /** Industry ids from lib/industries.ts. */
  industries: string[];
  /** Related service ids shown at the foot of the detail page. */
  related: string[];
  /** FAQ ids from lib/faqData.ts surfaced on the detail page. */
  faqIds: string[];
}

export const quoteHref = (id?: string) => (id ? `/quote?service=${id}` : "/quote");
export const getService = (id?: string) => servicesList.find((s) => s.id === id);
export const serviceIds = () => servicesList.map((s) => s.id);

export const servicesList: ServiceItem[] = [
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    navLabel: "Commercial cleaning",
    icon: "building",
    badge: "Core service",
    image: "/images/service/service-2.jpg",
    summary:
      "Offices and corporate buildings, cleaned around your opening hours.",
    intro:
      "Your building is the first thing a client, tenant or candidate judges you on. We build a cleaning programme around how your site is actually used — peak foot traffic, meeting room turnover, after-hours access — then hold the team to a written scope that your facilities manager can audit at any time.",
    keyPoints: [
      "After-hours and weekend scheduling",
      "Documented scope with periodic audits",
      "Inducted, police-checked cleaners",
    ],
    scope: [
      {
        heading: "Daily service",
        items: [
          "Reception, lobbies and lift cars presented for open of business",
          "Workstations, meeting rooms and breakout areas reset",
          "Kitchens and tea points cleaned, dishwashers run and emptied",
          "Washrooms cleaned, sanitised and consumables restocked",
          "Hard floors vacuumed, dust-mopped and spot-mopped",
          "Waste and recycling collected and taken to the bin store",
        ],
      },
      {
        heading: "Periodic service",
        items: [
          "Carpet hot-water extraction and spot treatment",
          "Hard-floor strip, seal and polish",
          "Internal glass, partitions and high-level dusting",
          "External and internal window cleaning",
          "Kitchen deep cleans including appliance interiors",
        ],
      },
      {
        heading: "Reporting",
        items: [
          "Digital sign-in and sign-out per cleaner, per site",
          "Scheduled supervisor inspections with photo evidence",
          "Defect and maintenance issues logged and escalated",
          "Monthly service report against the agreed scope",
        ],
      },
    ],
    assurances: [
      "A named account manager, not a call centre",
      "Agreed rectification window for anything missed",
      "Certificates of currency supplied with every contract",
    ],
    cadence: "Daily, weekday or periodic — scheduled around your access hours",
    industries: ["corporate", "government", "hospitality", "strata"],
    related: ["office-cleaning", "facility-management", "strata-cleaning"],
    faqIds: ["c-1", "c-2", "s-1", "p-2"],
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    navLabel: "Office cleaning",
    icon: "briefcase",
    image: "/images/service/service-1.jpg",
    summary:
      "Desks, kitchens and washrooms kept right by a stable, assigned crew.",
    intro:
      "Office cleaning is judged on consistency, not on one good clean. We assign a stable crew to your floor so the same people learn your layout, your quiet hours and the corners that matter — and we supervise them so standards do not drift in month four.",
    keyPoints: [
      "Same crew each visit, not rotating casuals",
      "Washroom consumables managed for you",
      "Daily, three-day or weekly schedules",
    ],
    scope: [
      {
        heading: "Workspace",
        items: [
          "Desks, benches and high-touch surfaces wiped and sanitised",
          "Meeting rooms reset — chairs, whiteboards, cabling tidied",
          "Phones, keyboards and shared touchpoints disinfected",
          "Internal glass and partition smudges removed",
        ],
      },
      {
        heading: "Amenities",
        items: [
          "Kitchen benches, sinks, microwaves and fridges (scheduled interiors)",
          "Washrooms cleaned and sanitised, mirrors and chrome polished",
          "Soap, paper and sanitiser restocked and reported when low",
          "Sanitary and nappy disposal units serviced",
        ],
      },
      {
        heading: "Floors & waste",
        items: [
          "Carpet vacuumed with HEPA-filtered machines",
          "Hard floors dust-mopped and damp-mopped",
          "Entrance matting cleaned to keep soil out of the building",
          "General, co-mingled and paper waste separated and removed",
        ],
      },
    ],
    assurances: [
      "Cleaners inducted to your building before the first shift",
      "Consumables either supplied by us or ordered on your account",
      "Scope reviewed with you every quarter",
    ],
    cadence: "Nightly, alternate days or weekly",
    industries: ["corporate", "government", "healthcare"],
    related: ["commercial-cleaning", "facility-management", "retail-cleaning"],
    faqIds: ["c-1", "s-2", "p-1", "g-3"],
  },
  {
    id: "industrial-cleaning",
    title: "Industrial Cleaning",
    navLabel: "Industrial cleaning",
    icon: "factory",
    badge: "High-risk capable",
    image: "/images/service/service-6.jpg",
    summary:
      "Warehouses and production floors, cleaned safely around live operations.",
    intro:
      "Industrial sites punish generic cleaning crews. Ours work to a site-specific SWMS, hold the tickets the task requires, and plan around forklift traffic, shutdown windows and exclusion zones so production is never the thing that gives way.",
    keyPoints: [
      "Site-specific SWMS and risk assessment",
      "Scissor lift, EWP and confined-space capable",
      "Shutdown and night-shift scheduling",
    ],
    scope: [
      {
        heading: "Production & warehouse",
        items: [
          "Ride-on and walk-behind scrubbing of concrete floors",
          "Racking, mezzanine and structural steel dust removal",
          "Line marking kept visible, spill response and degreasing",
          "Loading docks, roller doors and hardstand pressure washing",
        ],
      },
      {
        heading: "Plant & high level",
        items: [
          "High-level dusting from EWP or scissor lift",
          "Extraction hoods, ducting and plant room housekeeping",
          "Machine guard and equipment exterior cleaning to your lockout procedure",
          "Bund, sump and drain clearing",
        ],
      },
      {
        heading: "Amenities & compliance",
        items: [
          "Crib rooms, locker rooms and site amenities",
          "Washroom and shower sanitisation",
          "Waste streams separated to your EPA obligations",
          "Chemical register and SDS held on site",
        ],
      },
    ],
    assurances: [
      "Inductions, tickets and insurances verified before mobilisation",
      "Incidents and near misses reported inside 24 hours",
      "Work method agreed with your HSE lead before the first shift",
    ],
    cadence: "Scheduled shifts, shutdown blocks or periodic deep cleans",
    industries: ["industrial", "retail", "government"],
    related: ["facility-management", "commercial-cleaning", "strata-cleaning"],
    faqIds: ["s-1", "s-3", "c-3", "p-2"],
  },
  {
    id: "facility-management",
    title: "Facility Management",
    navLabel: "Facility management",
    icon: "settings",
    badge: "One contract",
    image: "/images/choose/choose.jpg",
    summary:
      "Every soft service under one contract, one invoice, one manager.",
    intro:
      "Most sites run four or five separate suppliers and absorb the coordination cost themselves. Integrated facility management hands that back to us: one scope, one point of contact, one monthly report covering every service line on your site — and one person who cannot pass the blame sideways.",
    keyPoints: [
      "Soft services consolidated under one agreement",
      "Planned and reactive maintenance coordinated",
      "Single monthly report across every service line",
    ],
    scope: [
      {
        heading: "Soft services",
        items: [
          "Daily and periodic cleaning across all areas",
          "Washroom hygiene and consumables management",
          "Waste management, recycling and bin room presentation",
          "Grounds, car parks and external presentation",
        ],
      },
      {
        heading: "Maintenance coordination",
        items: [
          "Planned preventative maintenance calendar",
          "Reactive callouts triaged and dispatched",
          "Trade coordination and attendance supervision",
          "Asset condition noted and reported at inspection",
        ],
      },
      {
        heading: "Governance",
        items: [
          "One account manager across every service line",
          "Consolidated monthly reporting and KPI review",
          "Single consolidated invoice",
          "Annual scope and budget review",
        ],
      },
    ],
    assurances: [
      "Transparent pass-through pricing on coordinated trades",
      "Agreed response times for urgent, standard and planned work",
      "Quarterly performance review against written KPIs",
    ],
    cadence: "Ongoing contract with planned and reactive components",
    industries: ["corporate", "strata", "industrial", "government", "healthcare", "education"],
    related: ["commercial-cleaning", "strata-cleaning", "industrial-cleaning"],
    faqIds: ["c-2", "c-4", "p-1", "p-3"],
  },
  {
    id: "strata-cleaning",
    title: "Strata & Common Area Cleaning",
    navLabel: "Strata & common areas",
    icon: "layers",
    image: "/images/service/service-4.jpg",
    summary:
      "Lobbies, car parks, lifts and bin rooms, on a published schedule.",
    intro:
      "Common property is the part of a building every resident sees and nobody owns. We work to a fixed, published schedule so the committee knows exactly what is done and when, and so a strata manager can answer a complaint with a record instead of a guess.",
    keyPoints: [
      "Published schedule residents can see",
      "Bin room and waste presentation managed",
      "Reporting a committee can table at a meeting",
    ],
    scope: [
      {
        heading: "Internal common areas",
        items: [
          "Entry, lobby and mailroom cleaned and presented",
          "Corridors, stairwells and fire stairs vacuumed and mopped",
          "Lift cars, tracks and mirrors cleaned daily",
          "Gyms, pool surrounds and shared amenities serviced",
        ],
      },
      {
        heading: "External & car park",
        items: [
          "Car park sweeping and periodic pressure washing",
          "Entry glass, intercoms and signage cleaned",
          "Garden beds, paths and courtyards tidied",
          "Cobwebs, litter and graffiti removal",
        ],
      },
      {
        heading: "Waste & reporting",
        items: [
          "Bin rooms washed, deodorised and presented",
          "Bins moved out and returned on collection days",
          "Hard rubbish and illegal dumping reported with photos",
          "Monthly condition report to the committee or strata manager",
        ],
      },
    ],
    assurances: [
      "Fixed schedule published in the building",
      "Direct line for the committee, not a generic inbox",
      "Defects photographed and reported, not quietly ignored",
    ],
    cadence: "Weekly, multi-weekly or daily depending on building size",
    industries: ["strata", "corporate", "hospitality"],
    related: ["facility-management", "commercial-cleaning", "office-cleaning"],
    faqIds: ["c-4", "c-1", "s-2", "p-3"],
  },
  {
    id: "retail-cleaning",
    title: "Retail & Supermarket Cleaning",
    navLabel: "Retail & supermarket",
    icon: "shoppingCart",
    image: "/images/service/service-5.jpg",
    summary:
      "Trading floors and back of house, ready before the doors open.",
    intro:
      "Retail cleaning runs to the clock. We work the hours either side of trade so the floor is presentation-ready at open, and we build food-safety requirements into the scope rather than treating them as an extra.",
    keyPoints: [
      "Pre-open and post-close shifts",
      "Food-safety aware scope and chemistry",
      "Spill and slip response procedures",
    ],
    scope: [
      {
        heading: "Trading floor",
        items: [
          "Hard-floor scrubbing, burnishing and polishing",
          "Entry matting, glass doors and shopfront cleaned",
          "Shelving, fixture and fitting dusting",
          "Trolley bays and checkout areas presented",
        ],
      },
      {
        heading: "Food & fresh areas",
        items: [
          "Deli, bakery and fresh produce areas cleaned to food-safety standards",
          "Cool room and freezer floors cleaned on schedule",
          "Food-safe chemistry, colour-coded equipment, no cross-contamination",
          "Grease trap surrounds and kitchen floors degreased",
        ],
      },
      {
        heading: "Back of house",
        items: [
          "Stockrooms, receiving docks and compactor areas",
          "Staff rooms, lockers and amenities",
          "Washrooms sanitised and restocked",
          "Waste and cardboard streams managed",
        ],
      },
    ],
    assurances: [
      "Shifts timed to your trading hours, including public holidays",
      "Cleaners briefed on your food-safety and incident procedures",
      "Escalation path for urgent spills during trade",
    ],
    cadence: "Daily pre-open or post-close, seven days where required",
    industries: ["retail", "hospitality", "industrial"],
    related: ["commercial-cleaning", "facility-management", "industrial-cleaning"],
    faqIds: ["c-1", "s-3", "g-3", "p-2"],
  },
  {
    id: "education-cleaning",
    title: "Education & Childcare Cleaning",
    navLabel: "Education & childcare",
    icon: "graduation",
    image: "/images/service/service-3.jpg",
    summary:
      "Schools and early learning centres, by WWCC-cleared staff.",
    intro:
      "Cleaning around children carries obligations that go well past the mop. Every person we place on an education site holds a current Working with Children Check, works to a documented infection-control routine on high-touch surfaces, and uses chemistry chosen so it is safe to walk into a room the moment we finish.",
    keyPoints: [
      "Working with Children Checks on every cleaner",
      "High-touch disinfection routine, documented",
      "Term-break deep clean programmes",
    ],
    scope: [
      {
        heading: "Learning spaces",
        items: [
          "Classrooms, studios and libraries cleaned daily",
          "Desks, chairs, door furniture and light switches disinfected",
          "Floors vacuumed and mopped, soft furnishings spot-cleaned",
          "Play equipment and mats sanitised in early learning rooms",
        ],
      },
      {
        heading: "Amenities & food areas",
        items: [
          "Student and staff washrooms cleaned and restocked",
          "Nappy change and bathroom areas sanitised to ratio",
          "Canteens, kitchens and bottle prep areas cleaned",
          "Sick bays and first aid rooms disinfected",
        ],
      },
      {
        heading: "Periodic & holiday works",
        items: [
          "Term-break carpet extraction and hard-floor restoration",
          "High-level dusting, vents and light diffusers",
          "Window cleaning inside and out",
          "Gastro and outbreak response deep cleans on call",
        ],
      },
    ],
    assurances: [
      "WWCC and police check records held and auditable",
      "Chemicals selected for low odour and rapid re-entry",
      "Outbreak response available outside the standard scope",
    ],
    cadence: "Daily during term, deep-clean blocks in holidays",
    industries: ["education", "healthcare", "government"],
    related: ["aged-care-cleaning", "commercial-cleaning", "facility-management"],
    faqIds: ["s-2", "s-4", "c-3", "g-3"],
  },
  {
    id: "aged-care-cleaning",
    title: "Aged Care & Medical Cleaning",
    navLabel: "Aged care & medical",
    icon: "heartPulse",
    badge: "Infection control",
    image: "/images/about/about-img-2.jpg",
    summary:
      "Infection-control cleaning for aged care, clinics and consulting suites.",
    intro:
      "In clinical and aged care settings the cleaning standard is a patient safety control. We work to colour-coded, zoned routines with correct dwell times on disinfectants, keep a clear separation between clinical and general waste, and brief every cleaner on how to work respectfully around residents and families.",
    keyPoints: [
      "Colour-coded, zoned cleaning routines",
      "Correct disinfectant contact times, documented",
      "Clinical and general waste kept separate",
    ],
    scope: [
      {
        heading: "Resident & clinical areas",
        items: [
          "Resident rooms and ensuites cleaned on a documented routine",
          "Treatment rooms and consulting suites disinfected between use",
          "High-touch points — rails, call buttons, door furniture — disinfected",
          "Discharge and terminal cleans to your protocol",
        ],
      },
      {
        heading: "Shared areas",
        items: [
          "Dining rooms, lounges and activity spaces",
          "Corridors, nurse stations and reception",
          "Visitor washrooms and family rooms",
          "Laundry and utility room housekeeping",
        ],
      },
      {
        heading: "Compliance",
        items: [
          "Colour-coded microfibre, laundered between sites",
          "Disinfectant dwell times recorded, not assumed",
          "Clinical waste handled to your licensed contractor's requirements",
          "Audit-ready cleaning records for accreditation visits",
        ],
      },
    ],
    assurances: [
      "Police checks and immunisation records held for every cleaner",
      "Records formatted for accreditation and audit",
      "Outbreak response team available outside the standard roster",
    ],
    cadence: "Daily, seven days, with outbreak response on call",
    industries: ["healthcare", "education", "strata"],
    related: ["education-cleaning", "facility-management", "commercial-cleaning"],
    faqIds: ["s-4", "s-2", "c-3", "p-2"],
  },
];

/**
 * Specialist works quoted alongside a contract or as standalone jobs.
 * These do not get their own pages — they are listed on /services and
 * offered as add-ons in the enquiry form.
 */
export interface SpecialistService {
  id: string;
  title: string;
  desc: string;
}

export const specialistServices: SpecialistService[] = [
  {
    id: "window-facade",
    title: "Window & façade cleaning",
    desc: "Internal and external glass at ground level, plus rope and EWP access for high-rise façades.",
  },
  {
    id: "pressure-washing",
    title: "Pressure washing",
    desc: "Car parks, hardstand, loading docks, awnings and building exteriors, with water capture where required.",
  },
  {
    id: "floor-care",
    title: "Carpet & hard floor restoration",
    desc: "Hot-water extraction, encapsulation, strip and seal, burnishing and grout restoration.",
  },
  {
    id: "waste-management",
    title: "Waste & recycling management",
    desc: "Bin room presentation, stream separation, collection liaison and reporting on diversion rates.",
  },
  {
    id: "washroom-hygiene",
    title: "Washroom hygiene & consumables",
    desc: "Sanitary and nappy units, air care, and managed supply of paper, soap and sanitiser.",
  },
  {
    id: "grounds",
    title: "Grounds & external presentation",
    desc: "Garden maintenance, mowing, edging, sweeping, litter runs and seasonal pruning.",
  },
  {
    id: "test-and-tag",
    title: "Test & tag",
    desc: "Electrical testing and tagging of portable appliances with a maintained asset register.",
  },
  {
    id: "outbreak-response",
    title: "Deep clean & outbreak response",
    desc: "Periodic deep cleans, post-incident decontamination and gastro or influenza outbreak response.",
  },
];

/**
 * How a contract gets stood up. Used on the home page and /services.
 */
export const engagementSteps = [
  {
    step: "01",
    title: "Site walkthrough",
    desc: "We walk the site with you, measure it, and note what the last supplier was getting wrong.",
  },
  {
    step: "02",
    title: "Written scope & proposal",
    desc: "A scope of works area by area, a frequency schedule, and a fixed monthly price.",
  },
  {
    step: "03",
    title: "Mobilisation",
    desc: "Crew assigned, inducted and equipped before day one. Handovers overlap, so there's no gap.",
  },
  {
    step: "04",
    title: "Audit & review",
    desc: "Scheduled inspections, a monthly report against the scope, and a KPI review each quarter.",
  },
] as const;

/**
 * Why a facilities manager should switch. Benefit-led, no invented numbers.
 */
export const differentiators = [
  {
    icon: "userCheck",
    title: "One accountable manager",
    desc: "A named person who knows your site, answers their phone, and owns the fix.",
  },
  {
    icon: "clipboardCheck",
    title: "A scope you can audit",
    desc: "Every task, area and frequency written down, then inspected on a schedule.",
  },
  {
    icon: "shieldCheck",
    title: "Compliance handled",
    desc: "Screening, inductions, SWMS and certificates maintained and produced on request.",
  },
  {
    icon: "clock",
    title: "Hours that suit the site",
    desc: "Before open, after close, overnight or through a shutdown. Your operation sets the roster.",
  },
] as const;

/**
 * Contract models. Replaces the old consumer price tiers: facility services
 * are scoped, not packaged, so these compare *what is covered* rather than
 * what it costs.
 */
export const contractFeatures = [
  "Cleaning to a written, audited scope",
  "Periodic works programmed by month",
  "Monthly report & supervisor inspections",
  "Washroom hygiene & consumables",
  "Waste, recycling & grounds",
  "Maintenance coordination",
];

export const contractModels = [
  {
    id: "scheduled",
    name: "Scheduled Cleaning",
    desc: "A single cleaning contract, written down and audited.",
    best: "Best for a single site with a clear, stable scope.",
    popular: false,
    included: [true, true, true, false, false, false],
  },
  {
    id: "managed",
    name: "Managed Soft Services",
    desc: "Cleaning plus the hygiene and waste services around it.",
    best: "Best for sites tired of coordinating three suppliers.",
    popular: true,
    included: [true, true, true, true, true, false],
  },
  {
    id: "integrated",
    name: "Integrated Facility Management",
    desc: "Every soft service plus maintenance coordination, under one manager.",
    best: "Best for multi-site portfolios and lean property teams.",
    popular: false,
    included: [true, true, true, true, true, true],
  },
];
