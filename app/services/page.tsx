import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import ServiceComparison from "@/components/services/ServiceComparison";
import ServiceStandards from "@/components/services/ServiceStandards";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Cleaning Services | RedSky Cleaning Service",
  description:
    "House, office, deep, end of lease, carpet and after-builders cleaning with upfront prices, all supplies included and a free re-clean guarantee.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <ServicesHero />
      {/* 1. Pick a service */}
      <ServicesExplorer />
      {/* 2. Reassurance in one glance */}
      <ServiceStandards />
      {/* 3. Compare home packages (cards — works on mobile too) */}
      <ServiceComparison />
      {/* 4. Last objections, then the footer CTA takes them to /quote */}
      <FaqPreview
        ids={["p-1", "g-1", "g-3", "p-2"]}
        eyebrow="Service FAQ"
        title="Before you book"
      />
      <Footer />
    </div>
  );
}
