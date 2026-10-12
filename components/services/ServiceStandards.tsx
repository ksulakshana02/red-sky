"use client";

import React from "react";
import { ShieldCheck, Sparkles, Award, HeartHandshake } from "lucide-react";

export default function ServiceStandards() {
  const standards = [
    {
      title: "Color-Coded Microfiber Protocol",
      desc: "We enforce strict color coding: red cloths for toilets, yellow for kitchen prep surfaces, blue for living areas. Zero cross-contamination between rooms.",
      icon: Award,
    },
    {
      title: "Hospital-Grade Botanical Sanitizers",
      desc: "Our non-toxic EPA-registered formulas kill 99.9% of bacteria without dangerous bleaches, synthetic fragrances, or harsh fumes. Safe for babies and pets.",
      icon: Sparkles,
    },
    {
      title: "4-Stage HEPA Air Filtration",
      desc: "Commercial dual-motor vacuums trap 99.97% of airborne allergens, pet dander, and fine dust down to 0.3 microns, leaving indoor air fresh and purified.",
      icon: ShieldCheck,
    },
    {
      title: "24-Hour Happiness Re-Clean Guarantee",
      desc: "If any corner doesn't meet our strict 50-point inspection, notify us within 24 hours. A supervisor will return to re-clean the area free of charge.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFF5F5] via-[#FFF9F9] to-white relative z-10 border-t border-red-100/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2 sm:mb-3">
            <span>Our Quality Standards</span>
            <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
            The RedSky Standard in Every Clean
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/75 mt-2.5 leading-relaxed">
            Every technician is trained on hospital-grade sanitization protocols so you can relax with complete confidence.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-red-100/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-normal font-serif text-[#0E152B] mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#0E152B]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-medium text-[#DC2626]">
                  <span>✓ Standard on all cleans</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

