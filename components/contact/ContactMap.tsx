"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section id="contact-map" className="py-8 sm:py-12 lg:py-16 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
              <span>Our location</span>
              <span className="text-[#DC2626] font-normal">//</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#0E152B] leading-snug">
              Boston Dispatch Center
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#0E152B]/75 font-normal">
            <MapPin className="w-4 h-4 text-[#DC2626]" />
            <span>72 Kneeland St, Suite 305, Boston, MA 02111</span>
          </div>
        </div>

        {/* Responsive Map Container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-2xs bg-slate-100">
          <iframe
            title="RedSky Cleaning Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.7774783307613!2d-71.06346292348559!3d42.34990997119426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a78377755b9%3A0xb355153ca265d66d!2s72%20Kneeland%20St%20%23305%2C%20Boston%2C%20MA%2002111!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Address Card */}
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs p-4 rounded-[18px] border border-slate-200 shadow-md hidden sm:block max-w-xs">
            <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block mb-1">
              Main Office
            </span>
            <p className="text-xs font-normal text-[#0E152B] leading-relaxed">
              72 Kneeland St, Suite 305<br />Boston, MA 02111
            </p>
            <a
              href="https://maps.google.com/?q=72+Kneeland+St+Boston+MA+02111"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#DC2626] font-medium hover:underline mt-2"
            >
              <Navigation className="w-3 h-3" />
              <span>Get directions</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

