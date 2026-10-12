"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-gradient-to-b lg:bg-gradient-to-r from-[#FFF5F5] via-[#FFF0F0] to-[#FDE8E8] border border-red-200/80 shadow-sm">
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-14 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 text-left max-w-2xl">
              
              {/* Category Kicker */}
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-3">
                <span>Get in touch</span>
                <span className="text-[#DC2626] font-normal">//</span>
                <span className="text-[#DC2626]">Contact RedSky</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[50px] font-normal text-[#0E152B] leading-[1.18] tracking-tight mb-4 font-serif">
                We’re Here to Help with Your Cleaning Needs
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-[#0E152B]/75 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
                Have a question about our non-toxic botanical products, need a custom estimate for your property, or want to schedule service? Reach out by phone, email, or message—our local dispatch team is ready to assist.
              </p>

              {/* Quick Contact Links */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                <a
                  href="tel:+17189044450"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call +1 718-904-4450</span>
                </a>

                <a
                  href="mailto:support@redskycleaning.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0E152B] hover:text-[#DC2626] border border-red-200/80 font-medium text-xs sm:text-sm shadow-2xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>support@redskycleaning.com</span>
                </a>
              </div>

              {/* Response Time & Operating Hours Note */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#0E152B]/70 pt-2 border-t border-red-200/60 font-normal">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>Average response under 15 minutes</span>
              </div>

            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border border-red-100 bg-white">
                <Image
                  src="/images/contact.jpg"
                  alt="RedSky Cleaning Client Support"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-medium text-[#0E152B] shadow-2xs flex items-center gap-1.5 border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  <span>Direct Local Dispatch</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 right-4 bg-[#0E152B]/85 backdrop-blur-xs text-white px-3.5 py-1.5 rounded-full text-xs font-normal shadow-sm">
                  <span>Zero Automated Phone Menus</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

