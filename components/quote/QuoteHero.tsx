"use client";

import React from "react";

export default function QuoteHero() {
  const estimationSteps = [
    { num: "01", title: "Select Property" },
    { num: "02", title: "Choose Program" },
    { num: "03", title: "Instant Total" },
  ];

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#FAF8F5] border border-[#EBE3DC] px-5 xs:px-7 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-14 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            Instant Online Estimator
          </span>

          <h1 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[46px] font-normal text-[#0E152B] leading-[1.16] tracking-tight font-serif mb-3 sm:mb-4">
            Calculate Your Cleaning Estimate
          </h1>

          <p className="text-[14px] xs:text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mx-auto mb-6">
            Select your property layout, cleaning program, and visit frequency below to view an immediate, itemized estimate.
          </p>

          {/* Clean 3-Step Indicators */}
          <div className="flex items-center justify-center gap-2 xs:gap-3 max-w-md mx-auto">
            {estimationSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#DDD3C9] text-xs text-[#0E152B]"
              >
                <span className="w-4 h-4 rounded-full bg-[#DC2626] text-white flex items-center justify-center text-[10px] font-medium shrink-0">
                  {step.num}
                </span>
                <span className="font-medium whitespace-nowrap">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
