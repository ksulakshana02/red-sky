# RedSky Facility Services

Marketing site for RedSky Facility Services — commercial cleaning, industrial
cleaning and integrated facility management across Australia.

Built with Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 and
TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

---

## Before this site goes live

Everything below is a deliberate placeholder. Each one is marked in the source
with `TODO(client)` or the literal word `PLACEHOLDER`, so you can find them all
with:

```bash
grep -rn "TODO(client)\|PLACEHOLDER" app components lib
```

### 1. Contact and legal details — `lib/site.ts`

Phone, after-hours number, email, careers email, street address, ABN, legal
entity name, service areas, trading hours, social profile URLs and `siteUrl`.

### 2. Compliance claims — `lib/site.ts` → `accreditations`

**Do not publish these as held certifications until they actually are.**

Each entry has a `verified` flag. While `verified: false`, the compliance band
renders the item as an operating commitment ("Operating to ISO 9001"). Set
`verified: true` and add the certificate number in `ref` only once the
certificate is in hand — the UI then presents it as an accreditation.

### 3. Figures — `lib/site.ts` → `stats`

Years operating, sites serviced, team size and renewal rate. Replace with
numbers you can evidence, or delete the ones you cannot.

### 4. Testimonials — `lib/testimonials.ts`

Placeholder quotes attributed to roles and anonymised sites, not to named
people at named companies. Replace with real quotes you have written
permission to publish, or empty the array — the section then renders nothing
rather than showing invented praise.

### 5. Team — `components/about/AboutTeam.tsx`

Currently four roles rendered as monograms. Add real names, and a `photo`
field if you have portraits. Stock headshots are intentionally not used.

### 6. Office map — `lib/site.ts` → `mapEmbedUrl`

`null` by default, so no map pinned to a placeholder address is published.
Paste the Google Maps "Embed a map" `src` URL here and the map replaces the
address panel on `/contact`.

### 7. Enquiry delivery — environment variable

Both forms (`/quote` and `/contact`) POST to `app/api/enquiry/route.ts`. Until
you set a destination, that route returns **501** rather than a fake success,
and the forms show the visitor a prefilled email plus the phone number — so no
enquiry is ever silently dropped.

```bash
# .env.local
ENQUIRY_WEBHOOK_URL=https://...   # CRM intake, Zapier/Make hook, Formspree, mail service
```

The route posts JSON (all form fields plus `source` and `receivedAt`). It also
validates required fields, strips control characters, enforces a body-size cap
and silently absorbs honeypot submissions.

The footer newsletter form is **not** wired to anything yet — see the
`TODO(client)` in `components/Footer.tsx`.

---

## Project structure

```
app/
  layout.tsx            Root layout, metadata, Organisation JSON-LD, skip link
  page.tsx              Home
  services/             Index + /services/[id] detail pages (SSG from lib/services.ts)
  industries/           Sector grid with per-sector compliance considerations
  about/ contact/ faq/ blog/ quote/
  blog/[slug]/          Article pages (SSG from lib/blogData.ts)
  api/enquiry/          Form endpoint
  sitemap.ts robots.ts not-found.tsx

components/
  Header Footer Hero ServicesSection IndustriesSection ComplianceSection
  WhyChooseUs HowItWorks TestimonialsSection BlogSection FaqPreview
  ServiceIcon           Icon registry — lib/ files store icon *keys*, not JSX
  Reveal                One scroll-reveal wrapper, used site-wide
  CountUp               Animates the stat figures once, on scroll
  services/ about/ contact/ faq/ blog/ quote/

lib/
  site.ts          Brand, contact, nav, accreditations, stats   ← edit this first
  services.ts      8 service lines, specialist works, contract models, process
  industries.ts    8 sectors with their compliance considerations
  faqData.ts       23 questions across 5 categories
  blogData.ts      6 articles
  testimonials.ts  Client quotes
```

Content lives in `lib/`; components only render it. Adding a service line to
`lib/services.ts` automatically creates its detail page, adds it to the
services grid, the enquiry form and the sitemap. Only the header mega-menu
(`mainNav` in `lib/site.ts`) and the footer list are curated by hand.

## Content density

The home page answers one question per section and sends people elsewhere
for detail — scope of works on the service pages, sector obligations on
`/industries`, the mobilisation process on `/quote`. If you add a section,
take one out.

`IndustriesSection` has two modes: `variant="compact"` (names only, home)
and `variant="full"` (plus each sector's compliance considerations, on
`/industries`). `TestimonialsSection` takes a `limit`.

Every nav item needs its own route. `isActive` in `Header.tsx` matches on
pathname only — a hash is not sent to the server — so two items sharing a
path would both highlight at once.

## Motion

Effects are additive only — nothing is hidden until an animation runs, so
the site is complete with JavaScript off.

| Effect | Where |
| --- | --- |
| `.animate-blob` / `.animate-blob-slow` | Drifting glows behind the hero and compliance band |
| `.animate-draw` | Hero underline draws itself in once |
| `.btn-primary::after` | Light sweeps across the primary button on hover |
| `<Reveal>` | Fade + slide as sections scroll in, staggered across lists |
| `<CountUp>` | Stat figures tick up, starting ~160px before they're visible |

The `prefers-reduced-motion` block in `globals.css` flattens every
animation to 0.01ms, and `CountUp` checks the same query and renders its
figure immediately.

## Design system

All colour, shadow, button, card and form-control tokens live at the top of
`app/globals.css`, taken from the brand mark:

| Token | Value | Use |
| --- | --- | --- |
| `brand-600` | `#D83A3F` | Primary actions, highlights (4.57:1 on white) |
| `brand-700` | `#B32A2F` | Small red text (6.68:1) |
| `accent-900` | `#123F46` | Dark bands, icon chips (11.5:1) |
| `ink` | `#112F35` | Headings |
| `body` | `#3F5760` | Body copy (7.66:1) |
| `muted` | `#5C7279` | Labels (5.08:1) |

Logo assets in `public/`:

| File | Use |
| --- | --- |
| `rs-new.svg` | Full lockup, light backgrounds |
| `rs-logo-white.svg` | Same lockup with the teal switched to white, for dark bands |
| `rs-icon-new.svg` | Monogram — favicon, tight spaces |
| `rs-apple-icon.png` | 180×180 apple touch icon |
| `rs-favicon-32.png` | PNG favicon fallback |

`rs-logo-white.svg`, `rs-apple-icon.png` and `rs-favicon-32.png` are generated
from the supplied artwork:

```bash
cd public
sed 's/#123F46/#FFFFFF/g' rs-new.svg > rs-logo-white.svg
rsvg-convert -w 32 -h 33 rs-icon-new.svg -o rs-favicon-32.png
```

## Accessibility and mobile

- Skip link to `#main` on every page; every page wraps content in `<main id="main">`.
- Minimum 46px touch targets on buttons, chips and filters (WCAG 2.5.5).
- 16px font size on form inputs, so iOS Safari does not zoom on focus.
- Visible focus rings everywhere, with a white variant inside `.on-dark` sections.
- Accordions, dropdowns and the mobile menu use `aria-expanded` / `aria-controls`;
  Escape closes, and focus moves to the new step heading in the quote form.
- Forms have an error summary that receives focus, per-field `aria-invalid` and
  `aria-describedby`.
- `prefers-reduced-motion` disables animation, smooth scrolling and the marquee.
- Decorative images use `alt=""`; no image carries meaning that isn't also in text.

## Legacy URLs

The old cleaning-site URLs (`/about-us`, `/contact-us`, `/faqs`, `/free-quote`,
`/service`, `/service-single` and the retired consumer service ids) are handled
as permanent redirects in `next.config.ts`, rather than as duplicate pages.
