/**
 * Single source of truth for brand, contact and navigation.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * TODO(client) — EVERY value marked `PLACEHOLDER` must be replaced before
 * launch. They are obviously fake on purpose so nothing invented ships by
 * accident. Do not publish the compliance claims in `accreditations` or the
 * figures in `stats` until someone has confirmed each one in writing.
 * ──────────────────────────────────────────────────────────────────────────
 */

/**
 * Live domain. TODO(client): point this at the real domain so canonical
 * links, Open Graph URLs and JSON-LD resolve absolutely.
 */
export const siteUrl = "https://www.redskyfacility.com.au"; // PLACEHOLDER

export const site = {
  name: "RedSky Facility Services",
  shortName: "RedSky",
  legalName: "RedSky Facility Services Pty Ltd", // PLACEHOLDER
  tagline:
    "One accountable partner for cleaning, maintenance and facility management across your whole property portfolio.",
  descriptor: "Commercial cleaning & integrated facility services",

  /** Full lockup for light backgrounds (red mark + teal wordmark). */
  logo: "/rs-new.svg",
  /** Same lockup with the teal switched to white, for dark bands. */
  logoLight: "/rs-logo-white.svg",
  /** Monogram only — favicons, app icons, tight spaces. */
  icon: "/rs-icon-new.svg",

  phone: {
    display: "1300 000 000", // PLACEHOLDER
    href: "tel:1300000000",
  },
  /** Shown for urgent / after-hours callouts. */
  afterHours: {
    display: "0400 000 000", // PLACEHOLDER
    href: "tel:0400000000",
  },
  email: "info@redskyfacility.com.au", // PLACEHOLDER
  careersEmail: "careers@redskyfacility.com.au", // PLACEHOLDER

  address: {
    street: "Unit 0, 00 Example Road", // PLACEHOLDER
    suburb: "Melbourne",
    state: "VIC",
    postcode: "3000",
    country: "Australia",
  },

  abn: "00 000 000 000", // PLACEHOLDER

  /**
   * Google Maps embed URL for the office. Left null so no map of a
   * placeholder address is published — the contact page shows an address
   * card instead until a real embed URL is pasted in here.
   * TODO(client): paste the "Embed a map" iframe src from Google Maps.
   */
  mapEmbedUrl: null as string | null,

  /** States / regions serviced — drives the footer and the enquiry form. */
  serviceAreas: ["Victoria", "New South Wales", "Queensland", "South Australia"],

  hours: [
    { days: "Mon – Fri", time: "7:00am – 6:00pm" },
    { days: "Saturday", time: "8:00am – 2:00pm" },
    { days: "Sunday", time: "Closed (on-call only)" },
  ],

  /** Response-time promise used across CTAs. Keep it to something you can meet. */
  responsePromise: "We respond to every enquiry within one business day.",

  social: {
    linkedin: "https://linkedin.com", // PLACEHOLDER
    facebook: "https://facebook.com", // PLACEHOLDER
    instagram: "https://instagram.com", // PLACEHOLDER
    youtube: "https://youtube.com", // PLACEHOLDER
  },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`;

/**
 * Verified star rating, if you have one (e.g. the Google Business profile).
 * Left `null` so no rating is invented — the UI simply hides the block.
 */
export const reviews: { rating: string; count: string; source: string } | null = null;

/**
 * TODO(client) — DO NOT PUBLISH UNVERIFIED. Each entry is a compliance claim.
 * Set `verified: true` only once you hold the certificate / policy, and put the
 * certificate number in `ref`. Anything left `verified: false` is rendered as a
 * working commitment ("we operate to…") rather than as an accreditation.
 */
export interface Accreditation {
  code: string;
  name: string;
  detail: string;
  verified: boolean;
  ref?: string;
}

export const accreditations: Accreditation[] = [
  {
    code: "ISO 9001",
    name: "Quality Management",
    detail: "Documented scopes of work, scheduled audits and a closed-loop corrective action process.",
    verified: false,
  },
  {
    code: "ISO 14001",
    name: "Environmental Management",
    detail: "Low-VOC chemistry, measured water use and waste separated for recycling on every site.",
    verified: false,
  },
  {
    code: "ISO 45001",
    name: "Work Health & Safety",
    detail: "SWMS for every task, documented inductions and incident reporting inside 24 hours.",
    verified: false,
  },
  {
    code: "Public liability",
    name: "$20m cover",
    detail: "Certificates of currency for public liability and workers compensation on request.",
    verified: false,
  },
];

/**
 * TODO(client) — replace with real, defensible figures before launch.
 * Anything you cannot evidence should be deleted rather than rounded up.
 */
export const stats: { value: string; label: string }[] = [
  { value: "2017", label: "Operating since" },
  { value: "200+", label: "Sites serviced weekly" },
  { value: "350+", label: "Trained team members" },
  { value: "98%", label: "Contract renewal rate" },
];

/* ─────────────────────────── Navigation ─────────────────────────── */

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  children?: readonly NavItem[];
}

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All services", href: "/services", description: "The full facility services catalogue" },
      { label: "Commercial cleaning", href: "/services/commercial-cleaning", description: "Offices, corporate and mixed-use buildings" },
      { label: "Industrial cleaning", href: "/services/industrial-cleaning", description: "Warehouses, plants and high-risk environments" },
      { label: "Facility management", href: "/services/facility-management", description: "One contract across cleaning, maintenance and hygiene" },
      { label: "Strata & common areas", href: "/services/strata-cleaning", description: "Lobbies, car parks, lifts and shared amenities" },
      { label: "Aged care & medical", href: "/services/aged-care-cleaning", description: "Infection-control cleaning for clinical settings" },
      { label: "Education & childcare", href: "/services/education-cleaning", description: "Schools, campuses and early learning centres" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

/** Footer service column — kept short and linked to real pages. */
export const footerServices = [
  { label: "Commercial cleaning", href: "/services/commercial-cleaning" },
  { label: "Industrial cleaning", href: "/services/industrial-cleaning" },
  { label: "Facility management", href: "/services/facility-management" },
  { label: "Strata & common areas", href: "/services/strata-cleaning" },
  { label: "Office cleaning", href: "/services/office-cleaning" },
  { label: "Retail & supermarket", href: "/services/retail-cleaning" },
  { label: "Education & childcare", href: "/services/education-cleaning" },
  { label: "Aged care & medical", href: "/services/aged-care-cleaning" },
] as const;

export const footerCompany = [
  { label: "About us", href: "/about" },
  { label: "All services", href: "/services" },
  { label: "Industries we serve", href: "/industries" },
  { label: "Insights", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Request a quote", href: "/quote" },
] as const;
