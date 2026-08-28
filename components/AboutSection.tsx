"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="lg:col-span-6 flex flex-col items-start max-w-xl">
            {/* Subtitle */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-2.5 sm:mb-3.5">
              <span>WHO WE ARE</span>
              <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
            </div>

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
                      className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left font-bold text-[#0E152B] text-[15px] sm:text-base lg:text-[17px] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                    >
                      <span>{item.title}</span>
                      <span
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 ml-3 transition-all duration-300 ${
                          isOpen ? "bg-[#DC2626] text-white rotate-180" : "bg-slate-100 text-slate-700 rotate-0"
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
                      </span>
                    </button>

                    {/* Smooth Collapsible Content Container */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 sm:px-5 lg:px-6 pb-5 sm:pb-6 pt-1 text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed border-t border-slate-100">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Learn More Button */}
            <div>
              <Link
                href="#booking"
                className="inline-flex items-center justify-center px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#DC2626] text-white font-bold text-sm tracking-wide shadow-md hover:bg-[#B91C1C] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Image with Stable Aspect Ratio (lg:col-span-6) */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full aspect-[4/3.2] sm:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
              <Image
                src="https://clanyeco.vamtam.com/wp-content/uploads/2025/01/gettyimages-931846502-2048x2048-2-1024x814.jpg"
                alt="Transform Your Space Into a Sanctuary"
                fill
                className="object-cover rounded-[24px] sm:rounded-[32px] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
