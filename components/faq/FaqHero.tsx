"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, Clock, Sparkles } from "lucide-react";

export default function FaqHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#FFF5F5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm p-6 sm:p-12 lg:p-16">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Subtle Category Kicker */}
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-500 mb-2 sm:mb-3">
            <span>Help &amp; Support</span>
            <span className="text-[#DC2626] font-normal">//</span>
            <span className="text-[#DC2626]">Frequently Asked Questions</span>
          </div>

          {/* Headline - Non-bold, refined serif */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[50px] font-normal text-[#0E152B] leading-[1.18] tracking-tight mb-3 sm:mb-4 font-serif">
            Clear Answers About Our Cleaning Services
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base text-[#0E152B]/75 font-normal leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
            Find details on our botanical non-toxic supplies, upfront pricing, home access protocols, and our 24-hour satisfaction guarantee.
          </p>

          {/* Trust Highlights Strip */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#0E152B]/85">
            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="font-normal text-[#0E152B]">Pet &amp; Baby Safe</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="font-normal text-[#0E152B]">$2M Bonded Coverage</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="font-normal text-[#0E152B]">24h Re-Clean Guarantee</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-red-100 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="font-normal text-[#0E152B]">Zero Hidden Fees</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

