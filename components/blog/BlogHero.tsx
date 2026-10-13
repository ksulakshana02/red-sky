"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogHero() {
  const topics = [
    "All Guides",
    "Botanical Protocols",
    "Deep Detailing",
    "Move-In Checklists",
    "Indoor Air Quality",
  ];

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#FAF8F5] border border-[#EBE3DC] px-5 xs:px-7 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-14 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            The RedSky Journal
          </span>

          <h1 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[46px] font-normal text-[#0E152B] leading-[1.16] tracking-tight font-serif mb-3 sm:mb-4">
            Practical Guides for a Fresh, Healthy Home
          </h1>

          <p className="text-[14px] xs:text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mx-auto mb-6">
            Room-by-room methods, non-toxic formulation tips, and daily habits shared directly by our cleaning specialists.
          </p>

          {/* Clean Topic Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {topics.map((topic, i) => (
              <span
                key={i}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  i === 0
                    ? "bg-[#DC2626] text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-[#DDD3C9]"
                }`}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
