"use client";

import React from "react";
import { motion } from "framer-motion";

export default function QuoteHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50 border border-brand-100 px-4 xs:px-6 sm:px-12 lg:px-16 py-8 sm:py-12 lg:py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mx-auto"
        >
          <span className="eyebrow mb-2 sm:mb-3">
            Instant Online Estimator
          </span>

          <h1 className="text-[26px] xs:text-[32px] sm:text-4xl lg:text-[46px] font-normal text-ink leading-[1.18] tracking-tight font-serif mb-3 sm:mb-4">
            Calculate Your Cleaning Estimate
          </h1>

          <p className="text-[13.5px] xs:text-[14.5px] sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mx-auto">
            Select your property layout, cleaning program, and visit frequency below to view an immediate, itemized estimate.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
