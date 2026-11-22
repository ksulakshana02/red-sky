/**
 * Client testimonials.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * TODO(client) — THESE ARE PLACEHOLDERS. Replace every entry with a real
 * quote you have written permission to publish, or empty the array (the
 * section then renders nothing rather than showing invented praise).
 *
 * They are attributed to a role and an anonymised site rather than to a
 * named person at a named company, so nothing here misrepresents a real
 * organisation while the copy is being reviewed.
 * ──────────────────────────────────────────────────────────────────────────
 */

export interface Testimonial {
  quote: string;
  role: string;
  context: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The difference is the reporting. When something is missed it comes back with a date for the fix, not an apology.",
    role: "Facilities Manager",
    context: "14-floor commercial tower, Melbourne",
    rating: 5,
  },
  {
    quote:
      "We moved three sites across in one weekend and our teams barely noticed. The handover was the easy part.",
    role: "Head of Property",
    context: "National retail group, 42 stores",
    rating: 5,
  },
  {
    quote:
      "Every compliance document produced within a day when we were audited. Our last contractor took three weeks.",
    role: "Business Manager",
    context: "Independent school, VIC",
    rating: 5,
  },
  {
    quote:
      "One contract across cleaning, waste and grounds. One invoice, one phone number — that alone paid for the change.",
    role: "Operations Manager",
    context: "Distribution centre, 18,000m²",
    rating: 5,
  },
];
