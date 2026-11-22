/**
 * Sectors we service. Drives the compact strip on the home page, the
 * detailed grid at /industries, and the sector selector in the
 * enquiry form.
 *
 * `considerations` is the substance: it answers the only question a
 * facilities manager actually has — "do you understand what a site like
 * mine has to comply with?" Keep them to three, and keep them specific.
 */

/** Keys map to lucide icons in components/ServiceIcon.tsx. */
export type IndustryIconKey =
  | "building2"
  | "stethoscope"
  | "bookOpen"
  | "store"
  | "warehouse"
  | "home"
  | "landmark"
  | "utensils";

export interface Industry {
  id: string;
  name: string;
  icon: IndustryIconKey;
  /** The sector-specific obligations we work to. */
  considerations: string[];
  /** Service ids most relevant to this sector. */
  services: string[];
}

export const industries: Industry[] = [
  {
    id: "corporate",
    name: "Corporate & Commercial",
    icon: "building2",
    considerations: [
      "After-hours access and security protocols",
      "Tenant and base-building scope boundaries",
      "Meeting room and end-of-trip facility turnover",
    ],
    services: ["commercial-cleaning", "office-cleaning", "facility-management"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Aged Care",
    icon: "stethoscope",
    considerations: [
      "Colour-coded zoning and correct disinfectant dwell times",
      "Clinical waste separation and handling",
      "Audit-ready records for accreditation visits",
    ],
    services: ["aged-care-cleaning", "facility-management", "commercial-cleaning"],
  },
  {
    id: "education",
    name: "Education & Childcare",
    icon: "bookOpen",
    considerations: [
      "Working with Children Checks on every person on site",
      "High-touch disinfection and outbreak response",
      "Deep-clean programmes scheduled into term breaks",
    ],
    services: ["education-cleaning", "facility-management", "commercial-cleaning"],
  },
  {
    id: "retail",
    name: "Retail & Supermarkets",
    icon: "store",
    considerations: [
      "Pre-open and post-close shifts, seven days",
      "Food-safety standards in fresh and deli areas",
      "Spill and slip response during trade",
    ],
    services: ["retail-cleaning", "commercial-cleaning", "facility-management"],
  },
  {
    id: "industrial",
    name: "Industrial & Logistics",
    icon: "warehouse",
    considerations: [
      "Site-specific SWMS and plant interaction controls",
      "Working at height, EWP and confined-space tickets",
      "Shutdown windows and night-shift scheduling",
    ],
    services: ["industrial-cleaning", "facility-management", "commercial-cleaning"],
  },
  {
    id: "strata",
    name: "Strata & Residential",
    icon: "home",
    considerations: [
      "A published schedule residents and committees can see",
      "Bin room presentation and collection-day handling",
      "Reporting a committee can table at a meeting",
    ],
    services: ["strata-cleaning", "facility-management", "commercial-cleaning"],
  },
  {
    id: "government",
    name: "Government & Public",
    icon: "landmark",
    considerations: [
      "Procurement, insurance and probity documentation",
      "Public-facing amenities cleaned on a high frequency",
      "Transparent reporting against contracted KPIs",
    ],
    services: ["commercial-cleaning", "facility-management", "industrial-cleaning"],
  },
  {
    id: "hospitality",
    name: "Hospitality & Venues",
    icon: "utensils",
    considerations: [
      "Turnaround cleaning between functions",
      "Kitchen and back-of-house food-safety standards",
      "Surge crews for events and seasonal peaks",
    ],
    services: ["commercial-cleaning", "retail-cleaning", "facility-management"],
  },
];

export const getIndustry = (id?: string) => industries.find((i) => i.id === id);
