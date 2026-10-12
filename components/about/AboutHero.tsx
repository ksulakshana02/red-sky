"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, Award, HeartHandshake } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#FFF5F5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm">
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 text-left max-w-2xl">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-3">
                <span>Who We Are</span>
                <span className="text-[#DC2626] font-sans font-normal">//</span>
                <span className="text-[#DC2626]">About RedSky Cleaning</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:5xl lg:text-[50px] font-normal text-[#0E152B] leading-[1.18] tracking-tight mb-4 font-serif">
                Pioneering Health-First, Eco-Conscious Cleaning
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-[#0E152B]/75 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Founded with an uncompromising conviction: clean living shouldn&apos;t come at the cost of caustic chemicals, polluted indoor air, or mistreated workers. We pair hospital-grade botanical science with fully vetted, fairly compensated career technicians.
              </p>

              {/* Section Quick-Jump Anchor Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <a
                  href="#about-story"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm shadow-xs transition-all cursor-pointer"
                >
                  <span>Our Story &amp; Purpose</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#about-values"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Core Principles</span>
                </a>
                <a
                  href="#about-milestones"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Our Journey</span>
                </a>
                <a
                  href="#about-team"
                  className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Leadership Team</span>
                </a>
              </div>

              {/* Trust Metrics Strip */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 border-t border-red-200/60 text-xs sm:text-sm text-[#0E152B]/85">
                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <Award className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-semibold text-[#0E152B]">15,000+</span>
                  <span className="text-[#0E152B]/60 text-xs">Cleaned</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-medium text-[#0E152B]">$2M Bonded</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <HeartHandshake className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-medium text-[#0E152B]">Living-Wage Staff</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-medium text-[#0E152B]">Zero Toxins</span>
                </div>
              </div>

            </div>

            {/* Right Visual Composition Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-red-100 bg-white">
                <Image
                  src="/images/about/about-img-1.jpg"
                  alt="RedSky Cleaning Founders and Professional Technicians"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-medium text-[#0E152B] shadow-2xs flex items-center gap-2 border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  <span>Green Seal &amp; ISSA Certified</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 right-4 bg-[#0E152B]/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-xs font-normal shadow-sm">
                  <span>Vetted &amp; Background Checked</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

