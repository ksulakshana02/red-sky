"use client";

import React, { useState } from "react";
import { Phone, Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What's included in a clean?",
    answer:
      "Our standard clean covers dusting, sanitizing all surfaces, vacuuming and mopping floors, deep scrubbing bathrooms (toilets, showers, sinks), and wiping down kitchen countertops, stovetops, and exterior appliances.",
  },
  {
    question: "How much does it cost to clean my home?",
    answer:
      "Pricing is transparent and customized to your home’s size and layout (number of bedrooms & bathrooms). You can get an instant, exact price in under 60 seconds using our online booking form.",
  },
  {
    question: "Are the cleaning supplies included?",
    answer:
      "Yes! Our cleaning technicians arrive fully equipped with all necessary hospital-grade, eco-friendly, non-toxic cleaning solutions, HEPA filtration vacuums, and clean microfiber cloths.",
  },
  {
    question: "What time do you offer cleaning services?",
    answer:
      "We offer flexible cleaning appointments Monday through Saturday from 7:30 AM to 7:00 PM, with dedicated morning, midday, and afternoon arrival windows to suit your daily routine.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-14 lg:py-16 bg-white relative z-10 overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start content-start">
          
          {/* Left Column: Heading & Contact Card (Pinned to top with self-start so it never moves) */}
          <div className="lg:col-span-5 flex flex-col items-start self-start">
            {/* Subtitle */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-2.5 sm:mb-3.5">
              <span>FAQS</span>
              <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
            </div>

            {/* Main Heading (2 Lines) */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-6 sm:mb-8">
              Frequently Asked<br />Questions
            </h2>

            {/* Pastel Contact Card */}
            <div className="w-full max-w-md rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 bg-[#FEF2F2] border border-red-100/80 shadow-xs">
              <h3 className="text-lg sm:text-xl font-normal text-[#0E152B] font-serif leading-[1.3] mb-4 sm:mb-6">
                Looking for the cleaning service in New York? Contact us now!
              </h3>

              {/* Call Pill Button */}
              <a
                href="tel:+11805678990"
                className="inline-flex items-center gap-2.5 sm:gap-3 bg-white rounded-full p-1.5 sm:p-2 pr-5 sm:pr-6 shadow-xs hover:shadow-md transition-all duration-200 group border border-red-50"
              >
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-white" />
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0E152B] tracking-tight">
                  + 1 (180) 567-8990
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Rounded Accordion Items (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 w-full self-start">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[20px] sm:rounded-[28px] overflow-hidden transition-all duration-300 ${isOpen
                      ? "bg-[#FEF2F2]/60 border border-red-200/80 shadow-xs"
                      : "bg-[#F6F7F5] hover:bg-[#F0F2EE] border border-transparent"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left font-normal text-[#0E152B] text-[15px] sm:text-base lg:text-[17px] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
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
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed border-t border-red-100/60">
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
