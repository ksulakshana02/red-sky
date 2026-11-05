import type { Metadata } from "next";
import Header from "@/components/Header";
import QuoteHero from "@/components/quote/QuoteHero";
import InteractiveQuoteEstimator from "@/components/quote/InteractiveQuoteEstimator";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import { getService } from "@/lib/services";

export const metadata: Metadata = {
  title: "Get an Instant Free Quote | RedSky Cleaning Service",
  description:
    "Calculate your transparent, flat-rate cleaning price in 30 seconds. All eco-friendly supplies and insurance included with no upfront prepayment.",
};

export default async function FreeQuotePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { service } = await searchParams;
  const selected = getService(typeof service === "string" ? service : undefined);

  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <QuoteHero />
      <InteractiveQuoteEstimator preset={selected?.quote} presetLabel={selected?.title} />
      <FaqPreview
        ids={["pr-5", "pr-3", "pr-6", "g-6"]}
        eyebrow="Pricing FAQ"
        title="About your estimate"
        description="Clear, flat-rate pricing with no surprises."
        tinted
      />
      <Footer />
    </div>
  );
}
