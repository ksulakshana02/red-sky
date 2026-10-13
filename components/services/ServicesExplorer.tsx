"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock, ArrowRight, ChevronDown, ChevronUp, Check } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: "residential" | "commercial" | "specialty";
  badge?: string;
  image: string;
  price: string;
  duration: string;
  summary: string;
  keyPoints: string[];
  checklist: {
    room: string;
    items: string;
  }[];
}

export const servicesList: ServiceItem[] = [
  {
    id: "house-cleaning",
    title: "Residential Housekeeping",
    category: "residential",
    badge: "Most Popular",
    image: "/images/service/service-1.jpg",
    price: "From $89",
    duration: "2.5 - 3.5 hrs",
    summary: "Routine upkeep for busy homes. We sanitize high-touch surfaces, scrub kitchens and baths, and steam-mop hard floors.",
    keyPoints: [
      "High-touch surface sanitization & dusting",
      "Kitchen counter, stove & sink detailing",
      "Full bathroom descaling & chrome polishing",
    ],
    checklist: [
      { room: "Kitchen", items: "Counters, stovetop, sinks, backsplash & appliance exteriors" },
      { room: "Bathrooms", items: "Toilets, showers, bathtubs, vanity mirrors & chrome fixtures" },
      { room: "Living & Beds", items: "Dusting surfaces, making beds, HEPA vacuuming & steam mopping" },
    ],
  },
  {
    id: "office-cleaning",
    title: "Office & Commercial Cleaning",
    category: "commercial",
    badge: "Commercial Grade",
    image: "/images/service/service-2.jpg",
    price: "From $149",
    duration: "3.0 - 5.0 hrs",
    summary: "Hospital-grade sanitization for corporate offices, retail spaces, and studios. Available after-hours or on weekends.",
    keyPoints: [
      "Workstation, desktop & phone touchpoint disinfection",
      "Conference room detailing & breakroom sanitization",
      "Commercial restroom sterilization & restock",
    ],
    checklist: [
      { room: "Workstations", items: "Desktops, keyboards, monitors, phones & touchpoint disinfection" },
      { room: "Restrooms", items: "Urinals, stalls, mirrors, sinks & hospital-grade floor sanitization" },
      { room: "Common Areas", items: "Breakroom appliances, conference tables, waste sorting & vacuuming" },
    ],
  },
  {
    id: "deep-cleaning",
    title: "Deep Botanical Sanitization",
    category: "residential",
    badge: "Intensive Care",
    image: "/images/service/service-3.jpg",
    price: "From $179",
    duration: "4.0 - 6.0 hrs",
    summary: "Comprehensive seasonal overhaul targeting built-up grime, inside doorframes, baseboards, and neglected corners.",
    keyPoints: [
      "Hand-washing baseboards, trims & doorframes",
      "Grout scrubbing, descaling & tile restoration",
      "Under-furniture HEPA extraction & vent dusting",
    ],
    checklist: [
      { room: "Kitchen", items: "Degreasing range hoods, scrubbing tile grout & appliance detailing" },
      { room: "Bathrooms", items: "Limescale removal, deep grout scrub & clinical fixture sanitization" },
      { room: "All Rooms", items: "Hand-wiping baseboards, trims, light fixtures & high-reach air vents" },
    ],
  },
  {
    id: "move-in-out-cleaning",
    title: "Move-In / Move-Out Turnover",
    category: "specialty",
    badge: "Deposit Guarantee",
    image: "/images/service/service-4.jpg",
    price: "From $199",
    duration: "4.5 - 7.0 hrs",
    summary: "Full vacant property turnover designed for lease handoffs, property managers, and new homeowner move-ins.",
    keyPoints: [
      "Inside & outside of all kitchen cabinets & drawers",
      "Deep oven, refrigerator & interior appliance detailing",
      "Closet shelving, baseboards & interior glass wiped",
    ],
    checklist: [
      { room: "Cabinetry", items: "Wiping interior and exterior of all kitchen & vanity cabinets" },
      { room: "Appliances", items: "Interior degreasing of oven, refrigerator, freezer & microwave" },
      { room: "Turnover", items: "Complete wash of baseboards, closet shelving, window sills & tracks" },
    ],
  },
  {
    id: "carpet-cleaning",
    title: "Carpet & Upholstery Steam",
    category: "specialty",
    image: "/images/service/service-5.jpg",
    price: "From $99",
    duration: "1.5 - 3.0 hrs",
    summary: "Hot-water soil extraction to eliminate stubborn stains, pet dander, and allergens without caustic shampoos.",
    keyPoints: [
      "Pre-treatment of high-traffic lanes & spot stains",
      "220°F botanical steam extraction with fast drying",
      "Natural fiber grooming safe for pets & infants",
    ],
    checklist: [
      { room: "Pre-Treat", items: "Botanical enzyme spray on heavy traffic areas, pet spots & spills" },
      { room: "Extraction", items: "Deep hot-water soil rinse pulling out dust mites and trapped allergens" },
      { room: "Finishing", items: "Neutral pH fiber balance with high-velocity air drying" },
    ],
  },
  {
    id: "post-construction-cleaning",
    title: "Post-Construction Detailing",
    category: "specialty",
    image: "/images/service/service-6.jpg",
    price: "From $249",
    duration: "5.0 - 8.0 hrs",
    summary: "Multi-stage fine dust removal following home renovations, painting, or contractor commercial builds.",
    keyPoints: [
      "Drywall dust capture with commercial HEPA vacuums",
      "Paint overspray, adhesive & sticker removal on glass",
      "Multi-pass wet wiping of walls, fixtures & floors",
    ],
    checklist: [
      { room: "Dust Capture", items: "HEPA air filtration & dry vacuuming of ceilings, walls and vents" },
      { room: "Glass & Trim", items: "Removing contractor stickers, paint splatter & silicone residues" },
      { room: "Final Polish", items: "Double damp-mop of flooring and polishing all hardware fixtures" },
    ],
  },
];

export default function ServicesExplorer() {
  const [activeCategory, setActiveCategory] = useState<"all" | "residential" | "commercial" | "specialty">("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const filteredServices = servicesList.filter((service) => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="services-explorer" className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="text-left max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
              All Cleaning Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
              Detailed Service Scope &amp; Pricing
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed font-normal">
              Transparent packages tailored to your property. Click any card to inspect the task checklist before booking.
            </p>
          </div>

          {/* Clean Text-Only Category Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: "all", label: "All Services" },
              { id: "residential", label: "Residential" },
              { id: "commercial", label: "Commercial" },
              { id: "specialty", label: "Specialty & Move-Out" },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#DC2626] text-white shadow-xs"
                      : "bg-[#F8FAFC] text-[#0E152B] hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid: items-start prevents neighboring cards in the row from stretching when one expands */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredServices.map((service) => {
            const isExpanded = expandedCard === service.id;
            return (
              <div
                key={service.id}
                className="group rounded-[24px] sm:rounded-[28px] p-4 sm:p-5 flex flex-col transition-all duration-200 bg-[#FAF8F5] border border-[#EBE3DC] hover:border-[#DC2626]/40 hover:shadow-sm"
              >
                {/* Photo Container */}
                <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden mb-4 bg-slate-100 shadow-2xs">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[18px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute top-2.5 left-2.5 bg-[#DC2626] text-white text-[10px] font-medium px-2.5 py-0.5 rounded-full shadow-xs">
                      {service.badge}
                    </div>
                  )}

                  {/* Bottom Duration & Price Meta */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs">
                    <span className="bg-white/95 backdrop-blur-xs text-slate-700 px-2 py-0.5 rounded-full flex items-center gap-1 text-[11px] font-normal shadow-2xs border border-slate-100">
                      <Clock className="w-3 h-3 text-[#DC2626]" />
                      <span>{service.duration}</span>
                    </span>
                    <span className="bg-[#DC2626] text-white font-medium text-[11px] px-2.5 py-0.5 rounded-full shadow-2xs">
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-normal text-[#0E152B] font-serif mb-1.5 leading-snug group-hover:text-[#DC2626] transition-colors">
                  {service.title}
                </h3>

                {/* Concise Summary */}
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-3.5 font-normal">
                  {service.summary}
                </p>

                {/* 3 Key Points */}
                <ul className="space-y-1.5 mb-4">
                  {service.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-normal leading-snug">
                      <Check className="w-3.5 h-3.5 text-[#DC2626] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Expandable Task Checklist Toggle */}
                <button
                  type="button"
                  onClick={() => toggleExpand(service.id)}
                  className="w-full text-left py-2 px-3 rounded-[12px] bg-white border border-[#E8DFD7] text-slate-700 hover:text-[#DC2626] text-xs font-medium flex items-center justify-between transition-colors mb-3 cursor-pointer"
                >
                  <span>{isExpanded ? "Hide Scope Details" : "View Included Checklist"}</span>
                  {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                {/* Collapsible Scope Details (Only this card expands; neighbors remain unaffected thanks to items-start) */}
                {isExpanded && (
                  <div className="p-3 bg-white rounded-[14px] border border-[#E8DFD7] space-y-2 mb-3 text-xs animate-in fade-in duration-200">
                    {service.checklist.map((item, i) => (
                      <div key={i} className="pb-1.5 last:pb-0 border-b last:border-0 border-slate-100">
                        <span className="text-[#0E152B] font-medium block text-[11px]">
                          {item.room}:
                        </span>
                        <p className="text-slate-600 text-[11px] leading-relaxed font-normal">
                          {item.items}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bottom Direct CTA */}
                <a
                  href="#service-booking"
                  className="w-full mt-auto bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full py-2.5 px-4 flex items-center justify-between text-xs sm:text-[13px] font-medium transition-colors"
                >
                  <span>Book {service.title.split(" ")[0]} Clean</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
