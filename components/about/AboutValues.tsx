"use client";

import React from "react";
import { ShieldCheck, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      title: "Safe, non-toxic products",
      subtitle: "Gentle on your home & family",
      desc: "We exclusively clean with biodegradable botanical formulas. No heavy bleaches, no volatile chemical fumes, and no residues left on floors where children or pets play.",
      icon: Sparkles,
    },
    {
      title: "Honest, upfront pricing",
      subtitle: "Clear quotes, no hidden fees",
      desc: "What we quote is what you pay. We share room-by-room checklists beforehand and confirm arrival times so you're always in the loop.",
      icon: Eye,
    },
    {
      title: "Full-time, respected cleaners",
      subtitle: "Caring for our team",
      desc: "We believe good service starts with treating people right. Our technicians are full-time employees with living wages, health benefits, and ongoing training.",
      icon: HeartHandshake,
    },
    {
      title: "Full insurance & background checks",
      subtitle: "Peace of mind every visit",
      desc: "Every technician is background-checked and vetted. We carry full $2,000,000 liability insurance and back our work with a 24-hour supervisor re-clean guarantee.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about-values" className="py-12 sm:py-16 lg:py-18 bg-gradient-to-b from-[#FFF5F5] via-[#FFF9F9] to-white relative z-10 border-t border-red-100/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
            <span>Our principles</span>
            <span className="text-[#DC2626] font-normal">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            The principles behind how we work
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            Good cleaning comes down to the products we bring into your home and how we treat the people doing the work.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-6 sm:p-7 border border-red-100/70 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-1 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs font-medium text-[#DC2626] mb-2.5">
                    {val.subtitle}
                  </p>

                  <p className="text-xs sm:text-[13px] text-[#0E152B]/70 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
