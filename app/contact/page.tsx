import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Talk to RedSky Facility Services about cleaning, facility management or an existing site. ${site.responsePromise}`,
};

export default function ContactPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="Get in touch"
          title="Talk to someone who knows the work"
          description={`Quotes, existing contracts, urgent callouts or tenders — all handled by the same team. ${site.responsePromise}`}
        />
        <ContactMethods />
        <ContactFormSection />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
