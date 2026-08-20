"use client";

import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "25", label: "Years of Experience" },
    { value: "75k", label: "Satisfied Clients" },
    { value: "134", label: "Team Members" },
    { value: "85%", label: "Customer Retention Rate" },
  ];

  return (
    <section className="fanfuct-section relative z-20 py-8 sm:py-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
      {/* White floating card */}
      <div className="funfact-wrap bg-white rounded-[30px] shadow-lg p-6 sm:p-12 border border-slate-100 border-t-4 border-t-[#DC2626]">
        {/* Top Quote */}
        <div className="top-content text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#0E152B]">
            “Customer satisfaction is at the heart of everything we do at <span className="text-[#DC2626] font-bold">RedSky</span>.”
          </h3>
        </div>

        {/* 4 Stats Items */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((item, idx) => (
            <div key={idx} className="item relative text-center flex flex-col items-center justify-center min-h-[110px]">
              {/* Background Watermark Number */}
              <span className="text-6xl sm:text-7xl lg:text-[85px] font-serif font-medium text-slate-900/[0.07] leading-none select-none">
                {item.value}
              </span>

              {/* Foreground Label */}
              <h4 className="absolute text-sm sm:text-base lg:text-lg font-bold text-[#0E152B] leading-tight px-2">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
