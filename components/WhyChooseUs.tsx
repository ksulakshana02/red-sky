"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const [activeItem, setActiveItem] = useState(1);

  const pillars = [
    "Trusted & Vetted Cleaners",
    "Customizable Cleaning Plans",
    "Affordable & Transparent Pricing",
    "Satisfaction Guarantee",
  ];

  return (
    <section className="wpo-choose-section py-10 sm:py-14 lg:py-16 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1350px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Image & 50+ Team Member Box */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="wpo-choose-left-side relative">
                {/* Image */}
                <div className="wpo-choose-left-img rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg aspect-[4/3] relative">
                  <Image
                    src="/images/choose/choose.jpg"
                    alt="Cleaning Team Specialists"
                    fill
                    className="object-cover rounded-[24px] sm:rounded-[28px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Floating 50+ Team Member Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  className="wpo-choose-left-box absolute left-0 bottom-0 p-1.5 sm:p-2.5 bg-white rounded-tr-[16px] sm:rounded-tr-[20px]"
                >
                  <div className="wrap w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[179px] lg:h-[174px] bg-[#DC2626] text-white rounded-[12px] sm:rounded-[16px] flex flex-col items-center justify-center p-2.5 sm:p-5 text-center shadow-lg shadow-red-500/20">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-medium text-white leading-none font-sans">
                      50+
                    </h3>
                    <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-white/95 mt-1 sm:mt-2 leading-tight">
                      Team Members
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="wpo-choose-right-side">
                {/* Topic & Title */}
                <div className="text-left mb-6 sm:mb-8">
                  <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
                    Why Choose Us
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-3 sm:mb-4">
                    Your Space Deserves the Best, Here’s Why We’re It
                  </h2>
                  <p className="text-[14px] sm:text-[15px] lg:text-base text-[#0E152B]/75 leading-relaxed font-normal">
                    Our team of trained professionals takes pride in every detail, going above and beyond to exceed your expectations. Whether it’s routine housekeeping or deep disinfection.
                  </p>
                </div>

                {/* Pill Badges List */}
                <ul className="space-y-3 sm:space-y-3.5">
                  {pillars.map((pillar, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                      onClick={() => setActiveItem(idx)}
                      className="cursor-pointer"
                    >
                      <span
                        className={`inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-serif font-medium text-xs sm:text-sm md:text-base transition-all duration-200 shadow-xs border ${
                          activeItem === idx
                            ? "bg-[#DC2626] text-white border-[#DC2626]"
                            : "bg-white text-[#0E152B] border-slate-100 hover:border-[#DC2626]/40"
                        }`}
                      >
                        <span
                          className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs shrink-0 ${
                            activeItem === idx
                              ? "bg-white text-[#DC2626]"
                              : "bg-slate-100 text-[#DC2626]"
                          }`}
                        >
                          ✓
                        </span>
                        {pillar}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
