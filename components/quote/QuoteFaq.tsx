"use client";

import React, { useState } from "react";
import { Plus, Minus, Phone, FileText } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is the estimated price guaranteed, or could it change on arrival?",
    answer:
      "The estimate is accurate based on the details you entered (rooms, square footage, and cleaning tier). As long as the property dimensions match, your rate is locked in. If a property requires unusual heavy restoration, our technician will discuss any options with you before starting work.",
  },
  {
    question: "Do I need to pay a deposit or prepay anything today?",
    answer:
      "No. We never charge upfront deposits for residential visits. Payment is processed only after your cleaning is finished and you have verified the results.",
  },
  {
    question: "How do the recurring frequency discounts work?",
    answer:
      "When you select weekly (20% off), bi-weekly (15% off), or monthly (10% off), your discount applies automatically to every scheduled visit. There are no lock-in contracts—you can pause or adjust your schedule at any time.",
  },
  {
    question: "What if I need to cancel or change my scheduled date?",
    answer:
      "Life happens. You can reschedule or cancel your appointment with zero fees up to 24 hours before your scheduled arrival window by phone or online.",
  },
];

export default function QuoteFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="quote-faq" className="py-10 sm:py-14 lg:py-16 bg-white relative z-10 overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start content-start">
          
          {/* Left Column: Heading & Contact Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col items-start self-start"
          >
            <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
              Pricing &amp; Estimation
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-4 sm:mb-6">
              Common Questions<br />About Estimates
            </h2>

            <p className="text-sm sm:text-base text-[#0E152B]/75 leading-relaxed mb-6 sm:mb-8 font-normal">
              Clear information on our flat-rate pricing, billing schedule, and scheduling flexibility.
            </p>

            {/* Pastel Contact Card */}
            <div className="w-full max-w-md rounded-[24px] sm:rounded-[32px] p-5 sm:p-7 lg:p-8 bg-[#FEF2F2] border border-red-100/80 shadow-xs">
              <h3 className="text-lg sm:text-xl font-normal text-[#0E152B] font-serif leading-[1.3] mb-2 sm:mb-3">
                Need a commercial walkthrough?
              </h3>
              <p className="text-xs sm:text-sm text-[#0E152B]/75 mb-5 leading-relaxed font-normal">
                For offices, medical practices, and spaces over 5,000 sq.ft, our operations director can conduct an on-site walkthrough.
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

                {/* Contact Us Link */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#0E152B]/80 hover:text-[#DC2626] transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#DC2626]" />
                  <span>Custom RFP</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Rounded Accordion Items (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-4 w-full self-start"
          >
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
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed border-t border-red-100/60 font-normal">
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
