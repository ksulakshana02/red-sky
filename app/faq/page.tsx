import type { Metadata } from "next";
import Header from "@/components/Header";
import FaqHero from "@/components/faq/FaqHero";
import FaqExplorer from "@/components/faq/FaqExplorer";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RedSky Cleaning Service",
  description:
    "Find answers to common questions about our non-toxic botanical cleaning methods, pricing, home access protocols, supplies provided, and satisfaction guarantee.",
};

export default function FaqPage() {
  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <FaqHero />
      <FaqExplorer />
      <Footer />
    </div>
  );
}
