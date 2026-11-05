"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div className="w-full px-3 sm:px-6 lg:px-8 py-3 sm:py-5 font-[family-name:var(--font-parkinsans)]">
      <section className="relative w-full max-w-[1691px] mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50 border border-brand-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 xs:px-6 sm:px-10 lg:px-12 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-7"
            >
              <span className="eyebrow mb-2 sm:mb-3">
                Local Dispatch &amp; Support
              </span>

              <h1 className="text-[28px] xs:text-[34px] sm:text-4xl lg:text-[46px] font-normal text-ink leading-[1.16] tracking-tight font-serif mb-3 sm:mb-4">
                We’re Here to Help with Your Cleaning Needs
              </h1>

              {/* Mobile Framed Photo */}
              <div className="lg:hidden my-4 rounded-[16px] overflow-hidden border border-line relative w-full aspect-[16/10]">
                <Image
                  src="/images/contact.jpg"
                  alt="RedSky Cleaning Client Support"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

              <p className="text-[14px] xs:text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed mb-6 max-w-lg">
                Reach our local team directly. Real supervisors answer our phones for service inquiries, commercial walkthroughs, and schedule updates.
              </p>

              {/* Direct Contact Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a
                  href="tel:+17189044450"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+1 718-904-4450</span>
                </a>

                <a
                  href="mailto:support@redskycleaning.com"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-ink hover:text-brand-600 border border-line-strong font-medium text-xs sm:text-sm transition-colors shadow-2xs"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-600" />
                  <span>support@redskycleaning.com</span>
                </a>
              </div>

              {/* Hours note */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-line">
                <Clock className="w-3.5 h-3.5 text-brand-600" />
                <span>Mon – Sat: 7:30 AM – 7:00 PM • Sunday: Closed</span>
              </div>
            </motion.div>

            {/* Right Desktop Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="hidden lg:block lg:col-span-5"
            >
              <div className="rounded-[20px] overflow-hidden border border-line relative w-full aspect-[4/3] shadow-xs">
                <Image
                  src="/images/contact.jpg"
                  alt="RedSky Cleaning Client Support"
                  fill
                  priority
                  sizes="(max-width: 1280px) 45vw, 520px"
                  className="object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
