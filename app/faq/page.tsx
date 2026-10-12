import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqHero from "@/components/faq/FaqHero";
import FaqExplorer from "@/components/faq/FaqExplorer";
import FaqSupportCta from "@/components/faq/FaqSupportCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RedSky Cleaning Service",
  description:
    "Find answers to common questions about our non-toxic botanical cleaning methods, pricing, home access protocols, supplies provided, and satisfaction guarantee.",
};

export default function FaqPage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Dedicated FAQ Hero */}
      <FaqHero />

      {/* Categorized Interactive FAQ Accordion */}
      <FaqExplorer />

      {/* Still Have Questions CTA */}
      <FaqSupportCta />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

