"use client";

import React from "react";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";

export default function ContactMethods() {
  const methods = [
    {
      title: "Direct Phone Dispatch",
      action: "+1 718-904-4450",
      href: "tel:+17189044450",
      desc: "Call or text our local team directly for instant quotes, arrival updates, or schedule adjustments.",
      detail: "Mon – Sat, 8:00 AM – 7:00 PM",
      icon: Phone,
    },
    {
      title: "Email Inquiries",
      action: "support@redskycleaning.com",
      href: "mailto:support@redskycleaning.com",
      desc: "Send floor plans, photos, or specialized service requests. We reply with itemized quotes.",
      detail: "Average reply within 1 hour",
      icon: Mail,
    },
    {
      title: "Regional Office",
      action: "72 Kneeland St, Suite 305",
      href: "#contact-map",
      desc: "Boston, MA 02111. Our regional administrative center and technician supplies headquarters.",
      detail: "In-person visits by appointment",
      icon: MapPin,
    },
    {
      title: "24/7 Rapid Response",
      action: "+1 718-904-4450",
      href: "tel:+17189044450",
      desc: "Emergency deep disinfection, urgent move-out turnovers, or unexpected property spills.",
      detail: "Available 24/7 on-call dispatch",
      icon: ShieldAlert,
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-14 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            Ways To Connect
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            Direct channels to reach our team
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            Choose the method that works best for you. No automated call routing—you will speak directly with a local coordinator.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FBFBFB] rounded-[24px] p-6 border border-slate-200/70 hover:border-red-200 hover:bg-[#FFF9F9] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-red-100 text-[#DC2626] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <a
                    href={item.href}
                    className="text-xs sm:text-sm font-medium text-[#DC2626] hover:underline block mb-2"
                  >
                    {item.action}
                  </a>

                  <p className="text-xs text-[#0E152B]/70 leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/50 text-[11px] text-slate-500 font-normal">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

