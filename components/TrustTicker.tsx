"use client";

import React from "react";
import { Building2, Home, Shield, Hotel, Sparkles, Award } from "lucide-react";

export default function TrustTicker() {
  const partners = [
    { name: "Apex Facilities", icon: Building2, tag: "Corporate Partner" },
    { name: "UrbanEstates Realty", icon: Home, tag: "Property Partner" },
    { name: "BioClean Certified", icon: Shield, tag: "Sanitation Standard" },
    { name: "Horizon Boutique Hotels", icon: Hotel, tag: "Hospitality" },
    { name: "TechCorp Global", icon: Building2, tag: "Office Provider" },
    { name: "Prime Properties", icon: Home, tag: "Real Estate" },
    { name: "SparkleStandard", icon: Sparkles, tag: "Quality Certified" },
    { name: "EcoGreen Cleaners", icon: Award, tag: "Eco Partner" },
  ];

  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400">
          Featured &amp; Trusted by 500+ Top Organizations &amp; Property Managers
        </p>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden">
        {/* Fade gradient overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-8 items-center py-2">
          {[...partners, ...partners].map((partner, idx) => {
            const Icon = partner.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 px-6 py-3 rounded-2xl shrink-0 transition-colors cursor-default group"
              >
                <div className="w-8 h-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                    {partner.name}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400">{partner.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
