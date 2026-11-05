import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutTeam from "@/components/about/AboutTeam";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | RedSky Cleaning Service",
  description:
    "Learn about RedSky Cleaning Service. A local team delivering family-safe, non-toxic cleaning with honest pricing and fully insured, background-checked cleaners.",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col">
      <Header />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </div>
  );
}
