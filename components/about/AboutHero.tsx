"use client";

import React from "react";
import Image from "next/image";

export default function AboutHero() {
  const narrativeMetrics = [
    { value: "2018", label: "Founded in Boston" },
    { value: "15,000+", label: "Clean Spaces" },
    { value: "100%", label: "W-2 Career Staff" },
    { value: "0%", label: "Caustic Chemicals" },
  ];

  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#FAF8F5] border border-[#EBE3DC]">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
                Our Story &amp; Philosophy
              </span>

              <h1 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[46px] font-normal text-[#0E152B] leading-[1.16] tracking-tight font-serif mb-3 sm:mb-4">
                Pioneering Health-First, Eco-Conscious Cleaning
              </h1>

              {/* Mobile Framed Photo */}
              <div className="lg:hidden my-4 rounded-[16px] overflow-hidden border border-[#E8DFD7] relative w-full aspect-[16/10]">
                <Image
                  src="/images/about/about-img-1.jpg"
                  alt="RedSky Cleaning Team"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <p className="text-[14px] xs:text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                Founded with a simple conviction: clean living shouldn&apos;t come at the cost of caustic chemicals, polluted indoor air, or mistreated workers. We combine hospital-grade botanical science with fairly compensated career technicians.
              </p>

              {/* Founding Metrics in a Clean Row */}
              <div className="pt-4 border-t border-[#E8DFD7] grid grid-cols-2 sm:grid-cols-4 gap-4">
                {narrativeMetrics.map((item, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-xl sm:text-2xl font-serif text-[#0E152B] mb-0.5">
                      {item.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-500 font-normal">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Desktop Visual */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden border border-[#E8DFD7] relative w-full aspect-[4/3] shadow-xs">
                <Image
                  src="/images/about/about-img-1.jpg"
                  alt="RedSky Cleaning Team"
                  fill
                  priority
                  sizes="(max-width: 1280px) 45vw, 520px"
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
