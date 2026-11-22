import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import QuoteRequestForm from "@/components/quote/QuoteRequestForm";
import HowItWorks from "@/components/HowItWorks";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import { getService } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Tell us about your site and we'll arrange a walkthrough, then come back with a written scope of works and a fixed monthly price. No obligation.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { service } = await searchParams;
  const selected = getService(typeof service === "string" ? service : undefined);

  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="No-obligation quote"
          title={selected ? `Quote for ${selected.title}` : "Request a quote"}
          description={
            selected
              ? `Three short steps. We'll walk the site, write the scope and come back with a fixed monthly price. ${site.responsePromise}`
              : `Three short steps. We'll walk the site, write the scope and come back with a fixed monthly price — not an hourly guess. ${site.responsePromise}`
          }
        />
        <QuoteRequestForm presetService={selected?.id} />
        <HowItWorks />
        <FaqPreview
          ids={["p-1", "p-2", "g-3"]}
          eyebrow="Before you send"
          title="How pricing and mobilisation work"
          description="The questions that come up most once someone is ready to talk numbers."
        />
      </main>
      <Footer />
    </div>
  );
}
