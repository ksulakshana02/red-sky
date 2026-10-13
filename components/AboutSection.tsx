"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionItems = [
    {
      title: "Experienced & friendly maids",
      content:
        "Our professional maids bring years of experience and a friendly attitude to every cleaning job. Trained to deliver top-quality service with a smile, they go above and beyond to make your home shine—while making your experience stress-free and enjoyable.",
    },
    {
      title: "Vetted & screened professionals",
      content:
        "We understand that letting someone into your home or business requires trust. That’s why all our cleaning professionals are carefully vetted, background-checked, and rigorously screened to ensure reliability, professionalism, and top-quality service.",
    },
  ];

  return (
    <section id="about" className="about-section relative py-10 sm:py-14 lg:py-16 bg-white overflow-hidden z-[1]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Text & Smooth Animated Accordion (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col items-start max-w-xl"
          >
            {/* Subtitle */}
            <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
              Who We Are
            </span>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-3.5 sm:mb-5">
              Transform Your Space Into a Sanctuary
            </h2>

            {/* Description */}
            <p className="text-[14px] sm:text-[15px] lg:text-base text-[#0E152B]/75 leading-relaxed mb-6 sm:mb-8">
              We strive to create a fair, low-stress, and empowering workplace for our technicians while championing sustainability by reducing carbon emissions through advanced green technology and eco-friendly practices.
            </p>

            {/* Smooth Animated Accordion Component */}
            <div className="w-full space-y-3.5 sm:space-y-4 mb-6 sm:mb-8">
              {accordionItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-[18px] sm:rounded-[22px] overflow-hidden bg-white shadow-xs transition-colors duration-300 ${
                      isOpen ? "border-slate-300" : "border-slate-200"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left font-medium text-[#0E152B] text-[15px] sm:text-base lg:text-[17px] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                    >
                      <span>{item.title}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ml-3 ${
                          isOpen ? "bg-[#DC2626] text-white" : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {isOpen ? (
                          <svg width="12" height="2" viewBox="0 0 14 2" fill="currentColor">
                            <rect width="14" height="2" rx="1" />
                          </svg>
                        ) : (
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
                            <path d="M6 0h2v14H6z" />
                            <path d="M0 6h14v2H0z" />
                          </svg>
                        )}
                      </motion.span>
                    </button>

                    {/* Smooth Collapsible Content Container */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-slate-100"
                        >
                          <div className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-3 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Learn More Button */}
            <div>
              <Link
                href="#booking"
                className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#DC2626] text-white font-medium text-sm tracking-wide shadow-md hover:bg-[#B91C1C] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Featured Image with Stable Aspect Ratio (lg:col-span-6) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 w-full"
          >
            <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <Image
                src="/images/about/about-img-2.jpg"
                alt="Transform Your Space Into a Sanctuary"
                fill
                className="object-cover rounded-[24px] sm:rounded-[32px] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
