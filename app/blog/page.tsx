import type { Metadata } from "next";
import Header from "@/components/Header";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cleaning Blog & Home Care Guides | RedSky Cleaning Service",
  description:
    "Expert cleaning advice, eco-friendly product guides, and room-by-room maintenance checklists from RedSky Cleaning specialists.",
};

export default function BlogIndexPage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Blog Hero Header */}
      <BlogHero />

      {/* Filterable Blog Articles Grid */}
      <BlogGrid />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

