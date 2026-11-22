import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ServicesExplorer from "@/components/services/ServicesExplorer";
import ServiceComparison from "@/components/services/ServiceComparison";
import ServiceStandards from "@/components/services/ServiceStandards";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facility Services",
  description:
    "Commercial and industrial cleaning, facility management, strata, retail, education and aged care services — each with a written scope of works, scheduled audits and a named account manager.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="Facility services"
          title="Everything your buildings need, from one supplier"
          description="Eight contracted service lines plus specialist works, delivered across Australia to a written scope you can audit."
        >
          <Link href="/quote" className="btn btn-primary h-[52px] px-7">
            Request a quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <a href={site.phone.href} className="btn btn-secondary h-[52px] px-7">
            <Phone className="w-4 h-4 text-brand-600" aria-hidden />
            {site.phone.display}
          </a>
        </PageHeader>

        {/* 1. Pick a service line (specialist works sit at the foot of it) */}
        <ServicesExplorer />
        {/* 2. Reassurance that applies whatever they choose */}
        <ServiceStandards />
        {/* 3. Decide how much of the site we carry */}
        <ServiceComparison />
        {/* 4. Last objections before the footer CTA.
            Sector fit lives on /industries — it is its own nav item, so it
            needs its own page for the active state to mean anything. */}
        <FaqPreview
          ids={["c-1", "p-1", "g-2"]}
          eyebrow="Service FAQ"
          title="Before you shortlist us"
          tinted
        />
      </main>
      <Footer />
    </div>
  );
}
