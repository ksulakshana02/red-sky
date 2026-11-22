import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import ComplianceSection from "@/components/ComplianceSection";
import AboutTeam from "@/components/about/AboutTeam";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "RedSky Facility Services delivers integrated cleaning, hygiene, waste, grounds and maintenance coordination across Australia — with written scopes, scheduled audits and a named account manager on every contract.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="About RedSky"
          title="One supplier, held to a written standard"
          description={site.tagline}
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

        <AboutStory />
        <AboutValues />
        <ComplianceSection />
        <AboutTeam />
        <FaqPreview
          ids={["t-1", "t-2", "t-3", "t-4"]}
          eyebrow="Working with us"
          title="How the relationship runs"
          tinted
        />
      </main>
      <Footer />
    </div>
  );
}
