"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeBullet, setActiveBullet] = useState(1);

  const bullets = [
    "Deep & Detailed Cleaning",
    "Eco-Friendly Products",
    "Flexible Scheduling",
  ];

  return (
    <section id="transforming" className="transforming-section py-12 sm:py-16 lg:py-20 relative z-10 bg-[#F9FAFB]/80 border-y border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="transforming-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Interactive Draggable Slider */}
            <div className="lg:col-span-6">
              <div className="wpo-transforming-left-side relative z-10 shadow-lg p-2.5 rounded-[15px] bg-white border border-slate-100">
                {/* Image Comparison Box */}
                <div
                  className="wpo-transforming-left-img relative aspect-[4/3] rounded-[10px] overflow-hidden select-none"
                  style={{ "--position": `${sliderPosition}%` } as React.CSSProperties}
                >
                  {/* After Clean Image */}
                  <Image
                    src="/images/before-after/after-img.jpg"
                    alt="After Cleaning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Before Messy Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <div className="relative w-full h-full min-w-[300px] sm:min-w-[500px]">
                      <Image
                        src="/images/before-after/before-img.jpg"
                        alt="Before Cleaning"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    aria-label="Percentage of before photo shown"
                    className="absolute inset-0 cursor-ew-resize opacity-0 w-full h-full z-30"
                  />

                  {/* Divider Line */}
                  <div
                    className="absolute inset-y-0 w-0.5 bg-white pointer-events-none z-20 shadow-md"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                  />

                  {/* Center Circle Button "Drag" */}
                  <div
                    className="absolute top-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white text-[#0E152B] rounded-full flex items-center justify-center font-serif text-sm sm:text-base font-medium shadow-xl pointer-events-none z-20 border-2 border-slate-200"
                    style={{
                      left: `${sliderPosition}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    Drag
                  </div>
                </div>

                {/* Top Badges: After & Before */}
                <div className="after absolute left-6 top-6 bg-[#DC2626] text-white px-4 py-1 rounded-[6px] font-serif text-lg font-normal z-20 shadow-xs pointer-events-none">
                  <span>after</span>
                </div>
                <div className="before absolute right-6 top-6 bg-white text-[#0E152B] px-4 py-1 rounded-[6px] font-serif text-lg font-normal z-20 shadow-xs pointer-events-none border border-slate-200">
                  <span>before</span>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-6 lg:pl-8">
              <div className="wpo-transforming-right-side">
                {/* Title */}
                <div className="wpo-section-title-s2 text-left mb-6">
                  <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs sm:text-sm uppercase tracking-wider border border-red-200 mb-2">
                    Before &amp; After Results
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-[#0E152B] leading-[1.2] mt-2 font-serif tracking-tight">
                    Transforming Spaces, One Clean at a Time
                  </h2>
                  <p className="text-base text-[#032532]/85 mt-4 leading-relaxed font-normal">
                    Let us take the stress out of cleaning, so you can focus on what matters most.
                  </p>
                </div>

                {/* Bullets */}
                <ul className="space-y-4 mb-8">
                  {bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      onClick={() => setActiveBullet(idx)}
                      className="cursor-pointer"
                    >
                      <span
                        className={`inline-flex items-center gap-3 px-6 py-2.5 rounded-full font-serif font-medium text-sm sm:text-base transition-all duration-200 shadow-xs border ${
                          activeBullet === idx
                            ? "bg-[#DC2626] text-white border-[#DC2626]"
                            : "bg-white text-[#0E152B] border-slate-100 hover:border-[#DC2626]/40"
                        }`}
                      >
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            activeBullet === idx
                              ? "bg-white text-[#DC2626]"
                              : "bg-slate-100 text-[#DC2626]"
                          }`}
                        >
                          ✓
                        </span>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Dual Action Buttons */}
                <div className="transforming-btns flex items-center gap-4 flex-wrap">
                  <a href="#booking" className="theme-btn-s2">
                    <span>Try yours now</span>
                    <span className="text-lg leading-none">→</span>
                  </a>

                  <a href="#about" className="theme-btn-s3">
                    <span className="rolling-text" data-text="About us">
                      <span className="text-wrapper">
                        <span className="text-line">About us →</span>
                        <span className="text-line">About us →</span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
