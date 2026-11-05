// Service catalogue — single source for the Services page.

export interface QuotePreset {
  type?: "apartment" | "house" | "office";
  clean?: "standard" | "deep" | "move";
  addon?: "oven" | "fridge" | "windows" | "carpet" | "pet";
  /** One-off jobs (vacate, deep, carpet, builders) shouldn't default to a recurring schedule */
  frequency?: "onetime" | "monthly" | "biweekly" | "weekly";
}

export interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  image: string;
  price: string;
  duration: string;
  summary: string;
  keyPoints: string[];
  /** Pre-fills the /quote estimator so visitors don't choose twice */
  quote: QuotePreset;
}

export const quoteHref = (id: string) => `/quote?service=${id}`;
export const getService = (id?: string) => servicesList.find((s) => s.id === id);

export const servicesList: ServiceItem[] = [
  {
    id: "house-cleaning",
    title: "Regular House Cleaning",
    badge: "Most popular",
    image: "/images/service/service-1.jpg",
    price: "$89",
    duration: "2.5–3.5 hrs",
    summary: "Routine upkeep that keeps your home fresh week after week.",
    keyPoints: [
      "Dusting & high-touch surfaces sanitised",
      "Kitchen benches, stovetop & sink",
      "Bathrooms scrubbed & polished",
    ],
    quote: { type: "house", clean: "standard" },
  },
  {
    id: "office-cleaning",
    title: "Office & Commercial",
    image: "/images/service/service-2.jpg",
    price: "$149",
    duration: "3–5 hrs",
    summary: "Healthy, tidy workplaces — after hours or on weekends.",
    keyPoints: [
      "Desks, keyboards & phones disinfected",
      "Meeting rooms & kitchenette cleaned",
      "Restrooms sanitised & restocked",
    ],
    quote: { type: "office", clean: "standard" },
  },
  {
    id: "deep-cleaning",
    title: "Deep Clean",
    badge: "Seasonal reset",
    image: "/images/service/service-3.jpg",
    price: "$179",
    duration: "4–6 hrs",
    summary: "A top-to-bottom reset for built-up grime and forgotten corners.",
    keyPoints: [
      "Skirting boards, doors & frames by hand",
      "Grout scrubbing & limescale removal",
      "Under furniture & vents dusted",
    ],
    quote: { type: "house", clean: "deep", frequency: "onetime" },
  },
  {
    id: "end-of-lease-cleaning",
    title: "End of Lease / Move Out",
    badge: "Bond-back focused",
    image: "/images/service/service-4.jpg",
    price: "$199",
    duration: "4.5–7 hrs",
    summary: "A thorough vacate clean for tenants, landlords and new owners.",
    keyPoints: [
      "Inside all cupboards & drawers",
      "Oven, fridge & appliances inside",
      "Wardrobes, skirting & windows wiped",
    ],
    quote: { type: "house", clean: "move", frequency: "onetime" },
  },
  {
    id: "carpet-cleaning",
    title: "Carpet & Upholstery",
    image: "/images/service/service-5.jpg",
    price: "$99",
    duration: "1.5–3 hrs",
    summary: "Hot-water extraction that lifts stains, dust mites and pet allergens.",
    keyPoints: [
      "Stains & high-traffic areas pre-treated",
      "Deep steam extraction, fast drying",
      "Safe for kids & pets",
    ],
    quote: { type: "house", clean: "standard", addon: "carpet", frequency: "onetime" },
  },
  {
    id: "post-construction-cleaning",
    title: "After Builders Clean",
    image: "/images/service/service-6.jpg",
    price: "$249",
    duration: "5–8 hrs",
    summary: "Fine dust and residue removal after renovations or a new build.",
    keyPoints: [
      "Plaster dust captured with HEPA vacuums",
      "Paint, stickers & adhesive off glass",
      "Walls, fittings & floors wiped twice",
    ],
    quote: { type: "house", clean: "deep", frequency: "onetime" },
  },
];

// Package comparison
export const packageFeatures = [
  "Dusting & surfaces wiped",
  "Vacuuming & mopping",
  "Bathrooms cleaned & sanitised",
  "Kitchen benches, stovetop & sink",
  "Skirting boards & door frames by hand",
  "Inside cupboards & drawers",
  "Inside oven & fridge",
  "Free re-clean guarantee",
];

export const packages = [
  {
    id: "standard",
    name: "Standard",
    desc: "Weekly or fortnightly upkeep",
    price: "$89",
    popular: false,
    included: [true, true, true, true, false, false, false, true],
  },
  {
    id: "deep",
    name: "Deep Clean",
    desc: "A seasonal top-to-bottom reset",
    price: "$179",
    popular: true,
    included: [true, true, true, true, true, false, false, true],
  },
  {
    id: "move",
    name: "End of Lease",
    desc: "Empty-home vacate clean",
    price: "$199",
    popular: false,
    included: [true, true, true, true, true, true, true, true],
  },
];
