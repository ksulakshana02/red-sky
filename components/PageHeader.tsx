"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
}

export default function PageHeader({
  subtitle = "Professional Cleaning Services",
  title = "Service Details",
}: PageHeaderProps) {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#FAF8F5] border border-[#EBE3DC] shadow-xs px-5 xs:px-7 sm:px-12 lg:px-16 py-8 xs:py-10 sm:py-14 lg:py-16 text-center">
        
        {/* Ambient Subtle Glow */}
        <div className="absolute top-0 right-1/4 w-[420px] h-[300px] bg-rose-100/35 rounded-full blur-3xl pointer-events-none -mt-20" />
        <div className="absolute bottom-0 left-1/4 w-[360px] h-[260px] bg-amber-50/70 rounded-full blur-2xl pointer-events-none -mb-20" />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-[13px] text-slate-500 mb-4 sm:mb-6">
            <Link href="/" className="hover:text-[#DC2626] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/services" className="hover:text-[#DC2626] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0E152B] font-medium">{title}</span>
          </div>

          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            {subtitle}
          </span>

          <h1 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[48px] xl:text-[52px] font-normal text-[#0E152B] leading-[1.16] tracking-tight font-serif">
            {title}
          </h1>
        </div>
      </section>
    </div>
  );
}
