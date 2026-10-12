"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ContactFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly can you schedule a cleaning appointment?",
      a: "Most clients book 2 to 4 days ahead. For urgent needs or time-sensitive move-outs, we maintain on-call emergency dispatch slots and can often accommodate same-day or next-day visits.",
    },
    {
      q: "Do I need to be present while the cleaning team works?",
      a: "Not necessarily. Many clients provide a secure lockbox code, smart lock guest PIN, or leave keys with their concierge. We send arrival notifications and photo confirmations when finished.",
    },
    {
      q: "Are you fully bonded and insured in case of accidental damage?",
      a: "Yes, completely. RedSky carries $2,000,000 in comprehensive commercial liability coverage and bonding. Every cleaner is a fully background-checked, W-2 employed technician.",
    },
    {
      q: "What is your rescheduling or cancellation policy?",
      a: "We understand schedules shift. You can reschedule or cancel your visit with zero fees up to 24 hours prior to your scheduled arrival window by phone, email, or online.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#FBFBFB] relative z-10 border-t border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Title (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
              <span>Helpful information</span>
              <span className="text-[#DC2626] font-normal">//</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#0E152B] leading-snug mb-3">
              Common questions before reaching out
            </h2>
            <p className="text-xs sm:text-sm text-[#0E152B]/70 font-normal leading-relaxed mb-6">
              A quick look at our scheduling, access policies, and service protections.
            </p>

            <div className="p-5 rounded-[22px] bg-white border border-slate-200/80">
              <span className="text-xs font-medium text-[#0E152B] block mb-1">
                Have a specialized commercial inquiry?
              </span>
              <p className="text-xs text-[#0E152B]/70 font-normal leading-relaxed mb-3">
                We also provide customized ongoing sanitization contracts for offices, gyms, and medical clinics.
              </p>
              <a
                href="mailto:support@redskycleaning.com"
                className="text-xs font-medium text-[#DC2626] hover:underline"
              >
                Inquire about commercial cleaning →
              </a>
            </div>
          </div>

          {/* Right Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] overflow-hidden bg-white border border-slate-200/80 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-[15px] font-normal font-serif text-[#0E152B] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-[13.5px] text-[#0E152B]/75 leading-relaxed font-normal border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

