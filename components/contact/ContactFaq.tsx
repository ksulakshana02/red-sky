"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone, Mail } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How quickly can you schedule a cleaning appointment?",
    answer:
      "Most clients book 2 to 4 days ahead. For urgent needs or time-sensitive move-outs, we maintain on-call emergency dispatch slots and can often accommodate same-day or next-day visits.",
  },
  {
    question: "Do I need to be present while the cleaning team works?",
    answer:
      "Not necessarily. Many clients provide a secure lockbox code, smart lock guest PIN, or leave keys with their concierge. We send arrival notifications and photo confirmations when finished.",
  },
  {
    question: "Are you fully bonded and insured in case of accidental damage?",
    answer:
      "Yes, completely. RedSky carries $2,000,000 in comprehensive commercial liability coverage and bonding. Every cleaner is a fully background-checked, W-2 employed technician.",
  },
  {
    question: "What is your rescheduling or cancellation policy?",
    answer:
      "We understand schedules shift. You can reschedule or cancel your visit with zero fees up to 24 hours prior to your scheduled arrival window by phone, email, or online.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="contact-faq" className="py-10 sm:py-14 lg:py-16 bg-white relative z-10 overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start content-start">
          
          {/* Left Column: Heading & Contact Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start self-start">
            <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
              Frequently Asked Questions
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-4 sm:mb-6">
              Common Questions<br />Before Reaching Out
            </h2>

            <p className="text-sm sm:text-base text-[#0E152B]/75 leading-relaxed mb-6 sm:mb-8 font-normal">
              A quick look at our scheduling, access policies, and protections before connecting with dispatch.
            </p>

            {/* Pastel Contact Card */}
            <div className="w-full max-w-md rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 bg-[#FEF2F2] border border-red-100/80 shadow-xs">
              <h3 className="text-lg sm:text-xl font-normal text-[#0E152B] font-serif leading-[1.3] mb-2 sm:mb-3">
                Have a specialized or commercial inquiry?
              </h3>
              <p className="text-xs sm:text-sm text-[#0E152B]/75 mb-5 leading-relaxed font-normal">
                We also provide customized ongoing sanitization contracts for offices, gyms, and clinics.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Call Pill Button */}
                <a
                  href="tel:+17189044450"
                  className="inline-flex items-center gap-2.5 sm:gap-3 bg-white rounded-full p-1.5 sm:p-2 pr-5 sm:pr-6 shadow-xs hover:shadow-md transition-all duration-200 group border border-red-50"
                >
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4 fill-white" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#0E152B] tracking-tight">
                    +1 718-904-4450
                  </span>
                </a>

                {/* Email Link */}
                <a
                  href="mailto:support@redskycleaning.com"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#0E152B]/80 hover:text-[#DC2626] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#DC2626]" />
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Accordion Items (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 w-full self-start">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[20px] sm:rounded-[28px] overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FEF2F2]/60 border border-red-200/80 shadow-xs"
                      : "bg-[#F6F7F5] hover:bg-[#F0F2EE] border border-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left font-normal text-[#0E152B] text-[15px] sm:text-base lg:text-[17px] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                  >
                    <span className="font-medium pr-4 leading-snug">{faq.question}</span>
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#DC2626] text-white rotate-180"
                          : "bg-white text-slate-800 shadow-2xs rotate-0"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </span>
                  </button>

                  {/* Smooth Animated Collapsible Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed border-t border-red-100/60 font-normal">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
