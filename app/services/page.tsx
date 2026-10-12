import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import ServiceComparison from "@/components/services/ServiceComparison";
import ServiceAddons from "@/components/services/ServiceAddons";
import ServiceStandards from "@/components/services/ServiceStandards";
import ServiceBookingForm from "@/components/services/ServiceBookingForm";
import ServicesFaq from "@/components/services/ServicesFaq";
import EmergencyCta from "@/components/EmergencyCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Professional Cleaning Services | RedSky Cleaning Service",
  description:
    "Explore our complete range of certified cleaning services: Residential Housekeeping, Commercial Office Cleaning, Deep Sanitization, Move-In/Out turnovers, and Carpet Steam Extraction. 100% bonded & insured.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Navigation Header */}
      <Header />

      {/* Dedicated Services Hero Section */}
      <ServicesHero />

      {/* Filterable Service Catalog & Room-by-Room Checklists */}
      <ServicesExplorer />

      {/* Residential Package Comparison Matrix */}
      <ServiceComparison />

      {/* Fixed-Price Specialized Add-Ons */}
      <ServiceAddons />

      {/* Operational Hygiene & Equipment Standards */}
      <ServiceStandards />

      {/* Direct Service Reservation Form */}
      <ServiceBookingForm />

      {/* Cleaning Specific Frequently Asked Questions */}
      <ServicesFaq />

      {/* 24/7 Emergency Dispatch Banner */}
      <EmergencyCta />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

