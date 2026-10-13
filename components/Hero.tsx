"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Leaf, Clock } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#FAF8F5] border border-[#EBE3DC]">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Column: Clean & Breathable */}
            <div className="lg:col-span-7">
              <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
                Health-First Cleaning • Greater Boston
              </span>

              <h1 className="text-[30px] xs:text-[36px] sm:text-5xl lg:text-[54px] font-normal text-[#0E152B] leading-[1.14] tracking-tight font-serif mb-3 sm:mb-4">
                A Healthier Standard of Clean for Modern Living
              </h1>

              {/* Mobile Framed Photo */}
              <div className="lg:hidden my-4 rounded-[16px] overflow-hidden border border-[#E8DFD7] relative w-full aspect-[16/10]">
                <Image
                  src="/images/slider/bg-img.jpg"
                  alt="RedSky Professional Cleaning Service"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <p className="text-[14px] xs:text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                Hospital-grade botanical sanitization delivered by vetted career technicians. Spotless living and workspaces without caustic bleaches or artificial perfumes.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <span>Book a Clean</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-[#DDD3C9] font-medium text-xs sm:text-sm transition-colors"
                >
                  <span>Instant Estimate</span>
                </Link>
              </div>

              {/* Subtle Single-Line Reassurance Strip */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-slate-500 pt-4 border-t border-[#E8DFD7]">
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>EPA Botanical Protocols</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>$2M Bonded &amp; Insured</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>24h Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Desktop Photo */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="rounded-[20px] overflow-hidden border border-[#E8DFD7] relative w-full aspect-[4/3] shadow-xs">
                <Image
                  src="/images/slider/bg-img.jpg"
                  alt="RedSky Professional Cleaning Service"
                  fill
                  priority
                  sizes="(max-width: 1280px) 45vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
