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
    <section className="wpo-cta-section py-8 sm:py-10 lg:py-12 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="wpo-cta-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Box: Emergency Call */}
            <div className="wpo-cta-box bg-[#F9FAFB] p-8 sm:p-12 rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-slate-100">
              <div className="text-left mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-3">
                  <span>24/7 EMERGENCY DISPATCH</span>
                  <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#0E152B] leading-[1.2] font-serif tracking-tight">
                  Need Help Fast? We’re Just One Call Away
                </h2>
                <p className="text-sm sm:text-base text-[#0E152B]/75 mt-4 leading-relaxed">
                  Fast, dependable, emergency sanitization and deep restoration available 24/7 across the metropolitan area.
                </p>
              </div>

              <div className="mt-4">
                <a
                  href="tel:+17189044450"
                  className="call inline-flex items-center gap-3 text-[#DC2626] hover:text-[#B91C1C] text-xl sm:text-2xl font-bold uppercase tracking-tight transition-colors mb-2"
                >
                  <div className="w-10 h-10 rounded-full bg-[#DC2626]/15 flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-[#DC2626]" />
                  </div>
                  <span>+1 718-904-4450</span>
                </a>
                <p className="text-xs sm:text-sm text-[#0E152B]/70 mt-2 font-medium">
                  Need an instant quote?{" "}
                  <a href="#booking" className="text-[#DC2626] font-bold underline hover:opacity-80">
                    Book Online Now
                  </a>
                </p>
              </div>
            </div>

            {/* Right Box: Features / Workforce Stats */}
            <div className="wpo-cta-box bg-[#F9FAFB] p-8 sm:p-12 rounded-[32px] relative overflow-hidden flex flex-col justify-between border border-slate-100">
              <div className="text-left mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-3">
                  <span>KEY ADVANTAGES</span>
                  <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#0E152B] leading-[1.2] font-serif tracking-tight">
                  Your Space Deserves the Best Here’s Why We’re It
                </h2>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mt-4">
                {features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-base font-serif font-medium text-[#0E152B]"
                  >
                    <span className="w-6 h-6 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center text-xs font-bold">
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
