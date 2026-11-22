import type { Metadata, Viewport } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import FloatingCta from "@/components/FloatingCta";
import { site, siteUrl } from "@/lib/site";

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  // Next.js has no pre-computed fallback metrics for Parkinsans. Turbopack only
  // skips that lookup (and its "Failed to find font override values" warning)
  // when an explicit fallback stack is given — adjustFontFallback alone isn't enough.
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Commercial Cleaning & Facility Management`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "RedSky Facility Services delivers commercial cleaning, industrial cleaning and integrated facility management across offices, healthcare, education, retail, industrial and strata properties in Australia.",
  keywords: [
    "facility services",
    "facility management",
    "commercial cleaning",
    "industrial cleaning",
    "strata cleaning",
    "office cleaning",
    "aged care cleaning",
    "school cleaning",
    "contract cleaning Australia",
  ],
  authors: [{ name: site.name }],
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: site.name,
    title: `${site.name} | Commercial Cleaning & Facility Management`,
    description:
      "One accountable partner for cleaning, maintenance and facility management across your whole property portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Commercial Cleaning & Facility Management`,
    description:
      "One accountable partner for cleaning, maintenance and facility management across your whole property portfolio.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/rs-icon-new.svg", type: "image/svg+xml" },
      { url: "/rs-favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/rs-favicon-32.png",
    apple: "/rs-apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#d83a3f",
  colorScheme: "light",
};

/** Organisation markup so search engines read the brand, contact and areas served. */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  legalName: site.legalName,
  description: site.tagline,
  url: siteUrl,
  telephone: site.phone.display,
  email: site.email,
  image: `${siteUrl}${site.logo}`,
  logo: `${siteUrl}${site.logo}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.suburb,
    addressRegion: site.address.state,
    postalCode: site.address.postcode,
    addressCountry: "AU",
  },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "State", name: a })),
  sameAs: Object.values(site.social),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${parkinsans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-body">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <FloatingCta />
        <script
          type="application/ld+json"
          // Values come from lib/site.ts, not from user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
