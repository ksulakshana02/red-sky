"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const serviceFaqs: FaqItem[] = [
  {
    question: "Do I need to provide any cleaning products, vacuums, or supplies?",
    answer:
      "No. Our cleaning technicians arrive fully equipped with all commercial-grade tools, 4-stage HEPA filtration vacuums, clean color-coded microfiber towels, and Green Seal certified hospital disinfectants. You do not need to provide anything.",
  },
  {
    question: "What is the main difference between standard cleaning and deep cleaning?",
    answer:
      "Standard cleaning is routine housekeeping: surface dusting, sanitizing kitchen counters, scrubbing toilets and showers, vacuuming, and steam-mopping floors. Deep cleaning adds intensive detail tasks: hand-washing all baseboards, scrubbing door frames, tile grout descaling, window track detailing, and range hood degreasing.",
  },
  {
    question: "Do I need to be home while the cleaning team works?",
    answer:
      "Not at all. Many of our clients leave a lockbox code, smart lock guest code, or key with building management. We send an arrival text when we start and a completion notification with photos when finished.",
  },
  {
    question: "Are your cleaning formulas safe for pets and infants?",
    answer:
      "Yes, 100%. We avoid bleach, synthetic fragrances, and corrosive chemicals. All our formulas are plant-based, non-toxic, biodegradable, and hypoallergenic. They kill 99.9% of bacteria without leaving sticky residues or harmful fumes.",
  },
  {
    question: "What happens if I need to reschedule or cancel my appointment?",
    answer:
      "We offer flexible scheduling. You can reschedule or cancel with zero penalty up to 24 hours prior to your scheduled arrival window by phone or online.",
  },
];

export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="service-faq" className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Title & Support Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start self-start"
          >
            <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
              Service Questions
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-sm sm:text-base text-[#0E152B]/75 leading-relaxed mb-6 sm:mb-8 font-normal">
              Everything you need to know about preparing for your clean, our access protocols, and our guarantees.
            </p>

            {/* Quick Contact Card */}
            <div className="w-full rounded-[24px] sm:rounded-[32px] p-6 sm:p-7 bg-[#FEF2F2] border border-red-100 shadow-xs">
              <h3 className="text-lg sm:text-xl font-normal text-[#0E152B] font-serif mb-2">
                Have a specialized request?
              </h3>
              <p className="text-xs sm:text-sm text-[#0E152B]/75 mb-5 leading-relaxed font-normal">
                Our client dispatch team is available 7 days a week to help customize your cleaning plan.
              </p>

              <a
                href="tel:+17189044450"
                className="inline-flex items-center gap-3 bg-white rounded-full p-2 pr-6 shadow-xs hover:shadow-md transition-all duration-200 group border border-red-100"
              >
                <span className="w-9 h-9 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-white" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#0E152B]">
                  +1 718-904-4450
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 5 Accordion Items (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-4 w-full self-start"
          >
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-[22px] sm:rounded-[26px] overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-[#FEF2F2]/60 border border-red-200/80 shadow-xs"
                      : "bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-slate-100"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed border-t border-red-100/60 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

