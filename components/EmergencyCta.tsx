"use client";

import React from "react";
import { PhoneCall } from "lucide-react";

export default function EmergencyCta() {
  const features = [
    "30 Experienced Cleaners",
    "45 Trained Sanitation Experts",
    "120 Rapid Response Vehicles",
    "345 Dedicated Support Staff",
  ];

  return (
    <section className="wpo-cta-section py-10 sm:py-14 lg:py-16 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="wpo-cta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Box: Emergency Call */}
            <div className="wpo-cta-box bg-[#F9FAFB] p-5 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs">
              <div className="text-left mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2.5 sm:mb-3.5">
                  <span>24/7 Emergency Dispatch</span>
                  <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal text-[#0E152B] leading-[1.2] font-serif tracking-tight">
                  Need Help Fast? We’re Just One Call Away
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#0E152B]/75 mt-3 sm:mt-4 leading-relaxed font-normal">
                  Fast, dependable, emergency sanitization and deep restoration available 24/7 across the metropolitan area.
                </p>
              </div>

              <div className="mt-2 sm:mt-4">
                <a
                  href="tel:+17189044450"
                  className="call inline-flex items-center gap-2.5 sm:gap-3 text-[#DC2626] hover:text-[#B91C1C] text-lg sm:text-xl lg:text-2xl font-medium tracking-tight transition-colors mb-2"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DC2626]/15 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#DC2626]" />
                  </div>
                  <span>+1 718-904-4450</span>
                </a>
                <p className="text-xs sm:text-sm text-[#0E152B]/70 mt-1 sm:mt-2 font-normal">
                  Need an instant quote?{" "}
                  <a href="#booking" className="text-[#DC2626] font-medium underline hover:opacity-80">
                    Book Online Now
                  </a>
                </p>
              </div>
            </div>

            {/* Right Box: Features / Workforce Stats */}
            <div className="wpo-cta-box bg-[#F9FAFB] p-5 sm:p-8 lg:p-10 rounded-[24px] sm:rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-slate-100 shadow-xs">
              <div className="text-left mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2.5 sm:mb-3.5">
                  <span>Key Advantages</span>
                  <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal text-[#0E152B] leading-[1.2] font-serif tracking-tight">
                  Your Space Deserves the Best Here’s Why We’re It
                </h2>
              </div>

              {/* Features List */}
              <ul className="space-y-2.5 sm:space-y-3 mt-2 sm:mt-4">
                {features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 sm:gap-3 text-[13.5px] sm:text-[15px] font-serif font-normal text-[#0E152B]"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-[10px] sm:text-xs font-medium shrink-0">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
