import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import IndustriesSection from "@/components/IndustriesSection";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Facility services for corporate, healthcare and aged care, education and childcare, retail, industrial, strata, government and hospitality sites — each with its own clearances, chemistry and access requirements.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="Industries"
          title="Every sector has its own rules"
          description="Clearances, chemistry, access hours and reporting all change with the setting. Here's what we account for before anyone sets foot on your site."
        >
          <Link href="/quote" className="btn btn-primary h-[52px] px-7">
            Discuss your sector
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <a href={site.phone.href} className="btn btn-secondary h-[52px] px-7">
            <Phone className="w-4 h-4 text-brand-600" aria-hidden />
            {site.phone.display}
          </a>
        </PageHeader>

        <IndustriesSection variant="full" tinted={false} showHeading={false} />

        <FaqPreview
          ids={["s-2", "s-4", "c-1"]}
          eyebrow="Sector questions"
          title="What we're asked most"
          tinted
        />
      </main>
      <Footer />
    </div>
  );
}
