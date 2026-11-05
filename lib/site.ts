// Single source of truth for brand + contact details.
// TODO(client): replace the contact values below with the real Australian
// phone number, email, address and service area before launch.

export const site = {
  name: "RedSky Cleaning Service",
  shortName: "RedSky",
  tagline: "Fresh, healthy spaces — cleaned by people you can trust.",
  logo: "/redsky-logo-blue.svg",
  icon: "/redsky-icon.svg",

  phone: {
    display: "+1 718-904-4450",
    href: "tel:+17189044450",
  },
  email: "support@redskycleaning.com",
  address: "72 Kneeland St, Suite 305",

  hours: [
    { days: "Mon – Fri", time: "9:00am – 8:00pm" },
    { days: "Saturday", time: "10:00am – 8:00pm" },
    { days: "Sunday", time: "10:00am – 4:00pm" },
  ],

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    x: "https://x.com",
    youtube: "https://youtube.com",
  },
} as const;

// Fill in with real, verifiable figures (e.g. from Google Reviews) to show
// star ratings in the header and hero. Left null so nothing is invented.
export const reviews: { rating: string; count: string } | null = null;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerServices = [
  "House cleaning",
  "Office cleaning",
  "Apartment cleaning",
  "Airbnb cleaning",
  "Deep cleaning",
  "End of lease cleaning",
  "Post construction cleaning",
  "Recurring cleaning",
] as const;
