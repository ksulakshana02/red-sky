import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import EmergencyCta from "@/components/EmergencyCta";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#032532] flex flex-col font-sans">
      {/* Unified Header (TopBar + Navbar) */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Company Section */}
      <AboutSection />

      <HowItWorks />

      {/* Services Showcase */}
      <ServicesSection />

      {/* Interactive Draggable Before & After Comparison */}
      {/* <BeforeAfterSlider /> */}

      {/* Why Choose Us & Guarantees */}
      <WhyChooseUs />

      {/* How It Works 3-Step Process */}


      {/* Live Milestones & Statistics */}
      {/* <StatsSection /> */}

      {/* Emergency Hotline & Fleet Capacity */}
      <EmergencyCta />

      {/* Verified Client Testimonials Carousel */}
      <TestimonialsSection />

      <BookingSection />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Blog & Cleaning Tips from Pros */}
      <BlogSection />

      {/* Booking & Appointment Reservation Form */}


      {/* Site Footer */}
      <Footer />

      {/* Floating Call & Book Actions */}
    </main>
  );
}
