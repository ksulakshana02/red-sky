import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ComplianceSection from "@/components/ComplianceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";

export default function Home() {
  /*
   * One question per section, in the order a facilities manager asks them:
   *   what do you do -> do you know my sector -> why switch -> can you
   *   prove it -> who says so -> is there depth here -> anything else.
   *
   * Detail deliberately lives one click away: scope of works on the
   * service pages, sector obligations on /industries, process on
   * /quote. The home page's job is to get someone to the right page fast,
   * not to answer everything on one scroll.
   *
   * Backgrounds alternate white / surface / dark so no two neighbours match.
   */
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <ServicesSection />
        <IndustriesSection variant="compact" />
        <WhyChooseUs />
        <ComplianceSection />
        <TestimonialsSection limit={3} />
        <BlogSection />
        <FaqPreview ids={["p-1", "g-3", "c-2"]} title="Before you get in touch" tinted />
      </main>
      <Footer />
    </div>
  );
}
