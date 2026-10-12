"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2, Lock, Sparkles } from "lucide-react";

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
      icon: Sparkles,
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
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
            <span>Standards &amp; coverage</span>
            <span className="text-[#DC2626] font-normal">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            Certified standards &amp; full insurance
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            Every clean is backed by recognized environmental certifications and comprehensive insurance protection.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {certifications.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBFBFB] rounded-[24px] p-6 border border-slate-200/70 flex flex-col justify-between"
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
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
