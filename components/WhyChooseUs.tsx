"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [activeItem, setActiveItem] = useState(1);

  const pillars = [
    "Trusted & Vetted Cleaners",
    "Customizable Cleaning Plans",
    "Affordable & Transparent Pricing",
    "Satisfaction Guarantee",
  ];

  return (
    <section className="wpo-choose-section py-8 sm:py-10 lg:py-12 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image & 50+ Team Member Box */}
            <div className="lg:col-span-6">
              <div className="wpo-choose-left-side relative">
                {/* Image */}
                <div className="wpo-choose-left-img rounded-[28px] overflow-hidden shadow-lg aspect-[4/3] relative">
                  <Image
                    src="/images/choose/choose.jpg"
                    alt="Cleaning Team Specialists"
                    fill
                    className="object-cover rounded-[28px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Floating 50+ Team Member Box */}
                <div className="wpo-choose-left-box absolute left-0 bottom-0 p-1.5 sm:p-2.5 bg-white rounded-tr-[16px] sm:rounded-tr-[20px]">
                  <div className="wrap w-[120px] h-[120px] sm:w-[179px] sm:h-[174px] bg-[#DC2626] text-white rounded-[12px] sm:rounded-[16px] flex flex-col items-center justify-center p-3 sm:p-5 text-center shadow-lg shadow-red-500/20">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-none font-sans">
                      50+
                    </h3>
                    <p className="text-[11px] sm:text-sm font-bold text-white/95 mt-1 sm:mt-2 leading-tight">
                      Team Members
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-6">
              <div className="wpo-choose-right-side">
                {/* Topic & Title */}
                <div className="text-left mb-6">
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-3">
                    <span>WHY CHOOSE US</span>
                    <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#0E152B] leading-[1.15] font-serif tracking-tight">
                    Your Space Deserves the Best, Here’s Why We’re It
                  </h2>
                  <p className="text-base text-[#0E152B]/75 mt-4 leading-relaxed font-normal">
                    Our team of trained professionals takes pride in every detail, going above and beyond to exceed your expectations. Whether it’s routine housekeeping or deep disinfection.
                  </p>
                </div>

                {/* Pill Badges List */}
                <ul className="space-y-4">
                  {pillars.map((pillar, idx) => (
                    <li
                      key={idx}
                      onClick={() => setActiveItem(idx)}
                      className="cursor-pointer"
                    >
                      <span
                        className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full font-serif font-medium text-sm sm:text-base transition-all duration-200 shadow-xs border ${
                          activeItem === idx
                            ? "bg-[#DC2626] text-white border-[#DC2626]"
                            : "bg-white text-[#0E152B] border-slate-100 hover:border-[#DC2626]/40"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            activeItem === idx
                              ? "bg-white text-[#DC2626]"
                              : "bg-slate-100 text-[#DC2626]"
                          }`}
                        >
                          ✓
                        </span>
                        {pillar}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
