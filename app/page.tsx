import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";

export default function Home() {
  // Section order follows the visitor's decision path:
  // what you offer -> how easy it is -> why trust us -> proof -> objections.
  // Booking lives in one place (/quote); the footer band and header CTA lead there.
  return (
    <main className="min-h-screen bg-white text-body flex flex-col font-sans">
      <Header />
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <FaqPreview ids={["g-1", "pr-1", "p-1", "g-5"]} tinted />
      <BlogSection />
      <Footer />
    </main>
  );
}
