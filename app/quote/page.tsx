import type { Metadata } from "next";
import Header from "@/components/Header";
import QuoteHero from "@/components/quote/QuoteHero";
import InteractiveQuoteEstimator from "@/components/quote/InteractiveQuoteEstimator";
import QuoteFaq from "@/components/quote/QuoteFaq";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get an Instant Free Quote | RedSky Cleaning Service",
  description:
    "Calculate your transparent, flat-rate cleaning price in 30 seconds. All eco-friendly supplies and insurance included with no upfront prepayment.",
};

export default function FreeQuotePage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Dedicated Quote Hero */}
      <QuoteHero />

      {/* Interactive Light-Themed Quote Estimator */}
      <InteractiveQuoteEstimator />

      {/* Pricing & Estimation FAQs */}
      <QuoteFaq />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

