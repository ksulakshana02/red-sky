import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import EmergencyCta from "@/components/EmergencyCta";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | RedSky Cleaning Service",
  description:
    "Explore our professional cleaning services: Residential, Commercial, Deep Cleaning, Office Cleaning, Home Cleaning, and Carpet Cleaning.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper bg-white text-[#032532] font-sans antialiased min-h-screen flex flex-col">
      {/* Unified Header (TopBar + Navbar) */}
      <Header />

      {/* Breadcrumb Page Title */}
      <PageHeader subtitle="Because Clean Feels Better" title="Services" />

      {/* Services Section with 6 Services */}
      <ServicesSection showAll={true} />

      {/* Emergency CTA Section */}
      <EmergencyCta />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
