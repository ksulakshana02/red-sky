import type { Metadata } from "next";
import { Nunito, Parkinsans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    icon: "/Group.png",
    shortcut: "/Group.png",
    apple: "/Group.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${parkinsans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#032532]">
        {children}
      </body>
    </html>
  );
}
