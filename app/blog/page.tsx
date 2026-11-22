import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guidance for facilities, operations and strata managers — writing a cleaning scope, contractor compliance, switching suppliers, infection control and sustainability reporting.",
};

export default function BlogIndexPage() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow="Insights"
          title="Practical reading for facilities teams"
          description="Written for the people who scope, tender and manage facility contracts — not for search engines."
        />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
