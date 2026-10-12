import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutValues from "@/components/about/AboutValues";
import AboutMilestones from "@/components/about/AboutMilestones";
import AboutTeam from "@/components/about/AboutTeam";
import AboutCertifications from "@/components/about/AboutCertifications";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | RedSky Cleaning Service - Ethical, Non-Toxic & Professional Cleaning",
  description:
    "Learn about RedSky Cleaning Service. Founded in Boston, we combine hospital-grade botanical science, fair living wages for technicians, and $2M bonded protection for thousands of happy homes.",
};

export default function AboutPage() {
  return (
    <div className="page-wrapper bg-white text-[#0E152B] font-sans antialiased min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      {/* Global Header */}
      <Header />

      {/* Dedicated About Hero Section */}
      <AboutHero />

      {/* Our Mission, Origin Story & 3 Pillars */}
      <AboutStory />

      {/* 4 Foundational Principles & Core Values */}
      <AboutValues />

      {/* Company Timeline & Milestones */}
      <AboutMilestones />

      {/* Leadership & Field Quality Supervisors */}
      <AboutTeam />

      {/* Accreditations, ISSA & Green Seal Certifications */}
      <AboutCertifications />

      {/* Bottom Call to Action */}
      <AboutCta />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

