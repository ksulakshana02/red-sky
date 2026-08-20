"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="w-full px-3 sm:px-4 lg:px-6 py-4">
      {/* Outer Hero Box matching .static-hero.box-style */}
      <section className="relative w-full max-w-[1691px] mx-auto min-h-[620px] sm:min-h-[700px] lg:h-[759px] rounded-[24px] overflow-hidden flex items-center bg-slate-100 shadow-sm">
        {/* Background Image of Professional Cleaner on Right Side */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
          style={{
            backgroundImage: "url('/images/slider/bg-img.jpg')",
            backgroundPosition: "center right",
          }}
        />

        {/* Left Curved Gradient Shape Overlay (#FFE5B5 to #D6E2EA) */}
        <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 948 759"
            fill="none"
            className="h-full w-full sm:w-auto max-w-none lg:w-[60%] xl:w-[56%] object-cover sm:object-fill opacity-95 sm:opacity-100"
            preserveAspectRatio="none"
          >
            <path
              d="M0 14C0 6.26801 6.26801 0 14 0H878.445C884.831 0 890.436 4.4205 892.011 10.609C967.074 305.618 966.222 470.707 892.098 748.562C890.468 754.672 884.902 759 878.578 759H14C6.26801 759 0 752.732 0 745V14Z"
              fill="url(#paint0_linear_hero)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_hero"
                x1="9.04278"
                y1="-31.8863"
                x2="665.174"
                y2="255.481"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#FFE4DC" />
                <stop offset="55%" stopColor="#FEE2E2" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Subtle Sweeping White Decorative Swirl Line */}
        <div className="absolute inset-0 w-full h-full z-[2] pointer-events-none overflow-hidden">
          <svg
            viewBox="0 0 1600 759"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M-50 520 C 350 480, 500 760, 680 500 C 820 300, 1050 220, 1650 250"
              stroke="#FFFFFF"
              strokeWidth="45"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M-30 530 C 370 490, 510 740, 670 510 C 800 320, 1030 230, 1620 260"
              stroke="#FFFFFF"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-20 py-10 sm:py-16 flex items-center">
          <div className="max-w-xl lg:max-w-2xl text-left bg-white/70 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-5 sm:p-0 rounded-[20px] sm:rounded-none">
            {/* Tagline Badge */}
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-3.5 sm:px-4 py-1.5 rounded-full bg-red-100/90 border border-red-200 text-[#DC2626] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs">
                Because Clean Feels Better
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-extrabold text-[#032532] leading-[1.14] tracking-tight mb-4 sm:mb-6 font-serif">
              Glowing Residential<br />
              Commercial Cleaning
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-[17px] text-[#032532]/85 font-normal leading-[1.65] max-w-lg mb-6 sm:mb-10">
              Expert cleaning for homes and offices. We deliver reliable, spotless, and glowing results making every space fresh, clean, and welcoming.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              {/* Red Book Now Button with Arrow */}
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-200 text-center"
              >
                <span>Book Now</span>
                <span className="text-lg leading-none">→</span>
              </a>

              {/* About Us Link with Arrow */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-[#032532] hover:text-[#DC2626] font-extrabold text-sm sm:text-base transition-colors duration-200 py-2 sm:py-0"
              >
                <span>About Us</span>
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
