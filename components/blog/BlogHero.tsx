"use client";

import React from "react";

export default function BlogHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#FFF5F5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm p-6 sm:p-12 lg:p-16">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Subtle Category Tag */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500 mb-2 sm:mb-3">
            <span>Cleaning journal</span>
            <span className="text-[#DC2626] font-normal">//</span>
            <span className="text-[#DC2626]">Tips &amp; Advice</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[50px] font-normal text-[#0E152B] leading-[1.18] tracking-tight mb-3 sm:mb-4 font-serif">
            Practical Guides for a Fresh, Healthy Home
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#0E152B]/75 font-normal leading-relaxed max-w-xl mx-auto">
            Room-by-room methods, non-toxic product tips, and daily maintenance habits shared directly by our cleaning specialists.
          </p>

        </div>
      </section>
    </div>
  );
}

