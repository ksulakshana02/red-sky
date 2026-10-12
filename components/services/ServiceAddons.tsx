"use client";

import React from "react";
import { Sparkles, Wind, Layers, Plus } from "lucide-react";

export default function ServiceAddons() {
  const addons = [
    {
      title: "Inside Oven Deep Clean",
      price: "+$35",
      time: "+45 mins",
      desc: "Removal of baked-on grease, carbon buildup, oven rack scrubbing, and glass door detailing.",
    },
    {
      title: "Inside Refrigerator Detail",
      price: "+$30",
      time: "+35 mins",
      desc: "Removal of food stains, washing removable shelves and crisper bins, and sanitizing rubber seals.",
    },
    {
      title: "Interior Window Panes & Tracks",
      price: "+$45",
      time: "+40 mins",
      desc: "Streak-free rubber squeegee wash of interior glass, vacuuming slider tracks, and wiping sills.",
    },
    {
      title: "Carpet & Rug Steam Extraction",
      price: "+$75",
      time: "+60 mins",
      desc: "Hot-water soil extraction targeting high-traffic corridors, pet stains, and trapped allergens.",
    },
    {
      title: "Inside Kitchen Cabinets & Drawers",
      price: "+$40",
      time: "+45 mins",
      desc: "Vacuuming crumbs, wiping interior shelf liners, and disinfecting cabinet door perimeters.",
    },
    {
      title: "Pet Dander & Odor Treatment",
      price: "+$25",
      time: "+30 mins",
      desc: "Specialized HEPA vacuum brush for pet fur on upholstery and natural citrus enzyme deodorizer.",
    },
  ];

  return (
    <section id="service-addons" className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2 sm:mb-3">
            <span>Appointment Add-Ons</span>
            <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
            Popular Service Add-Ons
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/75 mt-2.5 leading-relaxed">
            Need extra attention on specific appliances or rooms? Easily add any of these fixed-price options to your booking.
          </p>
        </div>

        {/* 6 Add-On Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-6xl mx-auto">
          {addons.map((addon, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-[24px] p-6 border border-slate-200/80 hover:border-red-200 hover:bg-[#FEF2F2]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    {addon.time}
                  </span>
                  <span className="text-base sm:text-lg font-normal font-serif text-[#DC2626] bg-white px-3 py-1 rounded-full border border-red-100 shadow-2xs">
                    {addon.price}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-2 leading-snug">
                  {addon.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#0E152B]/70 leading-relaxed font-normal">
                  {addon.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-[#DC2626]">
                <span>Selectable during booking</span>
                <Plus className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

