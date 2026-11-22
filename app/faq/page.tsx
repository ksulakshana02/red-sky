import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import FaqExplorer from "@/components/faq/FaqExplorer";
import Footer from "@/components/Footer";
import { faqData } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on contracts and scope, compliance documentation, pricing and invoicing, mobilisation timeframes and how our teams are screened and supervised.",
};

/** FAQPage structured data so answers can surface directly in search results. */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="Help & answers"
          title="Frequently asked questions"
          description="What contracts cover, which compliance documents we supply, how pricing works, and what switching suppliers actually involves."
        />
        <FaqExplorer />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
