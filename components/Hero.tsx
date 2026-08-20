"use client";

import React from "react";
import Link from "next/link";
import { Phone, Star, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-4 font-[family-name:var(--font-parkinsans)]">
      {/* Outer Hero Box matching theme rounded-[32px] sm:rounded-[40px] */}
      <section className="relative w-full max-w-[1691px] mx-auto min-h-[580px] sm:min-h-[660px] lg:h-[730px] rounded-[32px] sm:rounded-[40px] overflow-hidden flex items-center bg-gradient-to-r from-[#FEE5E5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm">

        {/* Background Image of Professional Cleaner on Right Side */}
        <div
          className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0"
          style={{
            backgroundImage: "url('/images/slider/bg-img.jpg')",
            backgroundPosition: "center right",
          }}
        />

        {/* Left Curved Gradient Shape Overlay (Rich Warm RedSky Tones) */}
        <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 948 759"
            fill="none"
            className="h-full w-full sm:w-auto max-w-none lg:w-[62%] xl:w-[58%] object-cover sm:object-fill opacity-98"
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
                <stop offset="0%" stopColor="#FED7D7" />
                <stop offset="45%" stopColor="#FEE2E2" />
                <stop offset="85%" stopColor="#FCE7E7" />
                <stop offset="100%" stopColor="#FBD5D5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 py-10 sm:py-16 flex items-center">
          <div className="max-w-xl lg:max-w-2xl text-left bg-[#FFF0ED]/90 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none p-6 sm:p-0 rounded-[28px] sm:rounded-none">

            {/* Standardized Theme Topic Subtitle Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-3 sm:mb-4">
              <span>BECAUSE CLEAN FEELS BETTER</span>
              <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-normal text-[#0E152B] leading-[1.12] tracking-tight mb-4 sm:mb-6 font-serif">
              Glowing Residential &amp;<br />
              Commercial Cleaning
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-[17px] text-[#0E152B]/80 font-normal leading-[1.7] max-w-lg mb-8 sm:mb-10">
              Expert cleaning for homes and offices. We deliver reliable, spotless, and glowing results making every space fresh, clean, and welcoming.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4 sm:mb-6">
              {/* Primary RedSky Red Pill Button */}
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg shadow-red-500/20 hover:shadow-red-500/35 transition-all duration-200 text-center group cursor-pointer"
              >
                <span>Book a Clean</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* About Us Link */}
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 text-[#0E152B] hover:text-[#DC2626] font-bold text-sm sm:text-base transition-colors duration-200 py-2 sm:py-0 px-4"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Highlights Badges (No horizontal line) */}
            {/* <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#0E152B]/85 font-medium">
              <div className="flex items-center gap-1.5">
                <div className="flex items-center text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-[#0E152B]">4.9/5</span>
                <span className="text-[#0E152B]/60">(1,200+ Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-[#0E152B]">
                <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                <span>100% Eco-Friendly &amp; Insured</span>
              </div>
            </div> */}

          </div>
        </div>

      </section>
    </div>
  );
}
