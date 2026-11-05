import type { Metadata } from "next";
import Header from "@/components/Header";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | RedSky Cleaning Service",
  description:
    "Get in touch with RedSky Cleaning Service in Boston. Reach out for custom residential or commercial cleaning estimates, scheduling inquiries, or questions about our non-toxic methods.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col">
      <Header />
      {/* Hero already carries phone, email and hours — no separate "methods" grid */}
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
      <FaqPreview
        ids={["g-2", "g-3", "g-7", "g-6"]}
        eyebrow="Before you get in touch"
        title="You might be asking"
      />
      <Footer />
    </div>
  );
}
