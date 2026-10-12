"use client";

import React from "react";
import Image from "next/image";
import { Star, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#FFF5F5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm">
        
        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 text-left max-w-2xl">
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-3">
                <span>Our Cleaning Solutions</span>
                <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#0E152B] leading-[1.15] tracking-tight mb-4 font-serif">
                Specialized Cleaning Services for Every Home &amp; Office
              </h1>

              {/* Lead Paragraph */}
              <p className="text-sm sm:text-base text-[#0E152B]/80 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
                From routine home housekeeping to medical-grade commercial disinfection, explore our certified, eco-friendly cleaning programs delivered by vetted, background-checked professionals.
              </p>

              {/* Category Quick-Jump Pills */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <a
                  href="#services-explorer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#service-comparison"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Compare Packages</span>
                </a>
                <a
                  href="#service-addons"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <span>Custom Add-Ons</span>
                </a>
              </div>

              {/* Trust Metrics Strip */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 pt-2 border-t border-red-200/60 text-xs sm:text-sm text-[#0E152B]">
                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <div className="flex items-center text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium text-[#0E152B]">4.9/5</span>
                  <span className="text-[#0E152B]/60 text-xs font-normal">(1,200+ Reviews)</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-medium text-[#0E152B]">$2M Bonded &amp; Insured</span>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#DC2626]" />
                  <span className="font-medium text-[#0E152B]">24h Happiness Guarantee</span>
                </div>
              </div>

            </div>

            {/* Right Visual Composition Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-red-100 bg-white">
                <Image
                  src="https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1456829834.jpg"
                  alt="Professional RedSky Cleaning Technician"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                
                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-4 py-2 rounded-full text-xs font-medium text-[#0E152B] shadow-sm flex items-center gap-2 border border-slate-100">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626]" />
                  <span>100% Eco-Friendly &amp; Non-Toxic</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs text-[#0E152B] px-4 py-2 rounded-full text-xs font-medium shadow-sm border border-slate-100">
                  <span>Hospital-Grade Sanitization</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

