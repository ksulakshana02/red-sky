"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2, Lock, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutCertifications() {
  const certifications = [
    {
      title: "ISSA Member",
      org: "Worldwide Cleaning Association",
      desc: "Adherence to professional international standards for sanitation, safe handling, and hygiene procedures.",
      icon: Award,
    },
    {
      title: "Green Seal Certified",
      org: "Standard GS-37",
      desc: "Formulations verified to protect indoor air quality without harsh carcinogens or volatile organic compounds.",
      icon: Leaf,
    },
    {
      title: "EPA Safer Choice",
      org: "U.S. EPA Standards",
      desc: "Cleaning ingredients evaluated for safety around children, pets, and local waterways.",
      icon: CheckCircle2,
    },
    {
      title: "$2M Bonded & Insured",
      org: "Full Commercial Coverage",
      desc: "Comprehensive liability coverage protecting your home, key holding, and property during every clean.",
      icon: Lock,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-18 bg-white relative z-10 border-t border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            Standards &amp; Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            Certified standards &amp; full insurance
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            Every clean is backed by recognized environmental certifications and comprehensive insurance protection.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="bg-[#FBFBFB] rounded-[24px] p-6 border border-slate-200/70 hover:border-red-200 hover:shadow-xs transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-red-100 text-[#DC2626] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500 block mb-1">
                    {item.org}
                  </span>

                  <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#0E152B]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
