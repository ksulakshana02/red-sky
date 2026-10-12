"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";

export default function QuoteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is the estimated price guaranteed, or could it change on arrival?",
      a: "The estimate is accurate based on the details you entered (rooms, square footage, and cleaning tier). As long as the property dimensions match, your rate is locked in. If a property requires unusual heavy restoration, our technician will discuss any options with you before starting work.",
    },
    {
      q: "Do I need to pay a deposit or prepay anything today?",
      a: "No. We never charge upfront deposits for residential visits. Payment is processed only after your cleaning is finished and you have verified the results.",
    },
    {
      q: "How do the recurring frequency discounts work?",
      a: "When you select weekly (20% off), bi-weekly (15% off), or monthly (10% off), your discount applies automatically to every scheduled visit. There are no lock-in contracts—you can pause or adjust your schedule at any time.",
    },
    {
      q: "What if I need to cancel or change my scheduled date?",
      a: "Life happens. You can reschedule or cancel your appointment with zero fees up to 24 hours before your scheduled arrival window by phone or online.",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#FBFBFB] relative z-10 border-t border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Title Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
              <span>Pricing details</span>
              <span className="text-[#DC2626] font-normal">//</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#0E152B] leading-snug mb-3">
              Common questions about estimates
            </h2>
            <p className="text-xs sm:text-sm text-[#0E152B]/70 font-normal leading-relaxed mb-6">
              Clear information on our flat-rate pricing, billing schedule, and scheduling flexibility.
            </p>

            <div className="p-5 rounded-[22px] bg-white border border-slate-200/80">
              <span className="text-xs font-medium text-[#0E152B] block mb-1">
                Need a customized commercial estimate?
              </span>
              <p className="text-xs text-[#0E152B]/70 font-normal leading-relaxed mb-3">
                For offices, medical practices, and retail spaces over 5,000 sq.ft, our operations director can conduct a brief walkthrough.
              </p>
              <a
                href="tel:+17189044450"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DC2626] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +1 718-904-4450</span>
              </a>
            </div>
          </div>

          {/* Right Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] overflow-hidden bg-white border border-slate-200/80 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
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

