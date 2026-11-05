import type { Metadata, Viewport } from "next";
import { Nunito, Parkinsans } from "next/font/google";
import "./globals.css";
import FloatingCta from "@/components/FloatingCta";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  // Next.js has no pre-computed fallback metrics for Parkinsans. Turbopack only
  // skips that lookup (and its "Failed to find font override values" warning)
  // when an explicit fallback stack is given — adjustFontFallback alone isn't enough.
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "RedSky Cleaning Service | Expert Residential & Commercial Cleaning",
  description:
    "Expert cleaning for homes and offices by RedSky Cleaning Service. We deliver reliable, spotless, and glowing results making every space fresh, clean, and welcoming.",
  keywords: [
    "RedSky cleaning",
    "cleaning services",
    "house cleaning",
    "commercial cleaning",
    "deep cleaning",
    "office cleaning",
    "sanitization",
  ],
  authors: [{ name: "RedSky Cleaning Service" }],
  icons: {
    icon: [
      { url: "/redsky-icon.svg", type: "image/svg+xml" },
      { url: "/redsky-icon.png", type: "image/png" },
    ],
    shortcut: "/redsky-icon.png",
    apple: "/redsky-apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0068c9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${parkinsans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-body">
        {children}
        <FloatingCta />
      </body>
    </html>
  );
}
