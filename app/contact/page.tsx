import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import ContactFaq from "@/components/contact/ContactFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | RedSky Cleaning Service",
  description:
    "Get in touch with RedSky Cleaning Service in Boston. Reach out for custom residential or commercial cleaning estimates, scheduling inquiries, or questions about our non-toxic methods.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Dedicated Contact Hero */}
      <ContactHero />

      {/* 4 Direct Contact Methods */}
      <ContactMethods />

      {/* Interactive Form & Coverage Area Info */}
      <ContactFormSection />

      {/* Boston Headquarters Location & Map */}
      <ContactMap />

      {/* Common Pre-Contact Questions */}
      <ContactFaq />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

