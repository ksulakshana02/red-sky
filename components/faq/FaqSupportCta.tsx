"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function FaqSupportCta() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-8 sm:py-14 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1440px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#FFF8F8] border border-red-100 p-6 sm:p-10 lg:p-12 shadow-2xs">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Clean Kicker */}
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2.5">
            Still have questions?
          </span>

          {/* Simple, Non-Bold Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal font-serif text-[#0E152B] leading-[1.25] tracking-tight mb-3">
            Can’t find the specific answer you need?
          </h2>

          {/* Natural Explanation */}
          <p className="text-sm sm:text-base text-[#0E152B]/75 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto">
            Our local dispatch team is happy to answer any questions about your home layout, specialized surfaces, or custom cleaning requests.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6">
            <Link
              href="/services#service-booking"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
            >
              <span>Book a cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-3 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-slate-200 font-medium text-xs sm:text-sm transition-colors shadow-2xs"
            >
              <span>Contact our team</span>
            </Link>
          </div>

          {/* Direct Communication Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-red-100 text-xs sm:text-sm text-[#0E152B]/70 font-normal">
            <a
              href="tel:+17189044450"
              className="inline-flex items-center gap-1.5 hover:text-[#DC2626] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>Call +1 718-904-4450</span>
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a
              href="mailto:support@redskycleaning.com"
              className="inline-flex items-center gap-1.5 hover:text-[#DC2626] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
              <span>support@redskycleaning.com</span>
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span>Mon – Sat, 8:00 AM – 7:00 PM</span>
          </div>

        </div>
      </section>
    </div>
  );
}

