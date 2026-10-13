"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutMilestones() {
  const journeySteps = [
    {
      year: "2018",
      title: "The early days in Boston",
      desc: "Started with a small crew of four technicians and one van. Our goal was simple: leave homes clean and fresh without using harsh bleach or synthetic fragrances that linger for days.",
    },
    {
      year: "2021",
      title: "Investing in a career team",
      desc: "As client recommendations grew, we decided against the gig-contractor model. We hired full-time technicians with living wages, health coverage, and thorough training in gentle, effective sanitation.",
    },
    {
      year: "Today",
      title: "Trusted across the region",
      desc: "We look after recurring households and local business offices across the metropolitan area, still guided by the same personal attention and green cleaning standards we started with.",
    },
  ];

  return (
    <section id="about-milestones" className="py-12 sm:py-16 lg:py-18 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            How RedSky grew over the years
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            A look back at how a small neighborhood service grew into a trusted home and office cleaning team.
          </p>
        </motion.div>

        {/* Clean, Non-Bold 3-Column Progression */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="bg-[#FBFBFB] rounded-[24px] p-6 sm:p-7 border border-slate-200/70 hover:border-red-200 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-lg sm:text-xl font-normal font-serif text-[#DC2626] mb-3">
                  {step.year}
                </div>

                <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-[13.5px] text-[#0E152B]/70 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-200/50 text-[11px] text-slate-500 font-normal">
                Step 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
