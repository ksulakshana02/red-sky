"use client";

import React from "react";
import Image from "next/image";
import { Check, Sparkles, Users, ShieldAlert, Heart } from "lucide-react";

export default function AboutStory() {
  const pillars = [
    {
      title: "Clinical Hygiene, Zero Toxins",
      desc: "We eliminated chlorine bleach and synthetic fragrances entirely. Our EPA-registered botanical sanitizers destroy 99.9% of pathogens while maintaining pristine indoor air quality safe for infants and pets.",
      icon: Sparkles,
    },
    {
      title: "Empowered, Career Professionals",
      desc: "No outsourced gig-labor. Every technician is a full-time W-2 employee receiving living wages, medical benefits, and 80+ hours of clinical infection-prevention training.",
      icon: Users,
    },
    {
      title: "Uncompromising 50-Point Inspection",
      desc: "From baseboards to high-reach air vents, every clean follows a strict scientific protocol. If anything falls short, our supervisors return within 24 hours to re-clean at no charge.",
      icon: Heart,
    },
  ];

  return (
    <section id="about-story" className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          
          {/* Left Text Narrative (6 cols) */}
          <div className="lg:col-span-6 text-left max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500 mb-2 sm:mb-3">
              <span>Our Origin &amp; Purpose</span>
              <span className="text-[#DC2626] font-sans font-normal">//</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-4">
              Why We Built a Better Kind of Cleaning Company
            </h2>

            <p className="text-sm sm:text-base text-[#0E152B]/75 leading-relaxed mb-4 font-normal">
              In 2018, RedSky Cleaning began with a simple realization: the residential and commercial cleaning sector had normalized cutting corners. Chemical companies pushed caustic bleaches and volatile sprays that irritated respiratory tracts, while agencies treated technicians as disposable gig workers.
            </p>

            <p className="text-sm sm:text-base text-[#0E152B]/75 leading-relaxed mb-6 font-normal">
              We asked a foundational question: Can a cleaning service deliver hospital-grade cleanliness while being completely non-toxic and deeply human? That question sparked RedSky. Today, we proudly serve thousands of families and businesses with clinical precision and heartfelt care.
            </p>

            {/* Quote Callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF5F5] border-l-3 border-[#DC2626] text-xs sm:text-sm text-[#0E152B]/85 italic leading-relaxed">
              &ldquo;When a company treats its technicians with dignity and living wages, they treat every client&apos;s home with the deepest pride and respect.&rdquo;
              <span className="block mt-2 font-medium not-italic text-slate-700 text-xs">
                — Elena Vance, Founder &amp; CEO
              </span>
            </div>
          </div>

          {/* Right Visual Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[4/3.2] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-lg border border-slate-100 bg-slate-100">
              <Image
                src="/images/about/about-img-2.jpg"
                alt="RedSky Cleaning team in action"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Floating Stat Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-xs p-4 sm:p-5 rounded-[22px] border border-red-100 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center shrink-0 font-bold text-sm">
                    98%
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0E152B] font-serif">Client Retention</h4>
                    <p className="text-xs text-slate-500">Long-term residential and office relationships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-[28px] p-6 sm:p-8 border border-slate-200/80 hover:border-red-200 hover:bg-[#FEF2F2]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-100 text-[#DC2626] flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-serif text-[#0E152B] mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-[#0E152B]/75 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#DC2626]">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>Guaranteed in every appointment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

