"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronUp, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  category: "residential" | "commercial" | "specialty";
  badge?: string;
  isPopular?: boolean;
  image: string;
  price: string;
  duration: string;
  summary: string;
  keyPoints: string[];
  tasks: {
    kitchen: string[];
    bathrooms: string[];
    livingBedrooms: string[];
  };
}

export const servicesList: ServiceItem[] = [
  {
    id: "house-cleaning",
    title: "House Cleaning",
    category: "residential",
    badge: "Most Popular",
    isPopular: true,
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1456829834.jpg",
    price: "From $89",
    duration: "2.5 - 3.5 hrs",
    summary:
      "Routine maintenance cleaning for busy homes. We sanitize high-touch surfaces, scrub sinks, vacuum carpets, and steam-mop hard floors.",
    keyPoints: [
      "Dusting all furniture, shelves & light decor",
      "Sanitizing kitchen counters, stove & sink",
      "Scrubbing toilets, bathtubs & chrome fixtures",
      "HEPA vacuuming & hard floor steam mopping",
    ],
    tasks: {
      kitchen: [
        "Wipe countertops, backsplash & cabinet faces",
        "Scrub stovetop and burner grates",
        "Sanitize sink, faucets & polish chrome",
        "Wipe exterior of refrigerator & microwave",
        "Empty trash bins & replace liners",
      ],
      bathrooms: [
        "Deep scrub and sanitize toilet inside & out",
        "Wash shower tile walls, tub & glass doors",
        "Polish mirrors, vanity sinks & chrome faucets",
        "Disinfect door handles and light switches",
        "Mop bathroom floor with botanical sanitizer",
      ],
      livingBedrooms: [
        "Dust tables, mantels & window sills",
        "Make beds and straighten linens",
        "Vacuum carpets, area rugs & under furniture",
        "Damp mop hardwood, laminate & tile surfaces",
        "Empty wastebaskets in all rooms",
      ],
    },
  },
  {
    id: "office-cleaning",
    title: "Office & Commercial Cleaning",
    category: "commercial",
    badge: "Commercial Grade",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1350786822-1.jpg",
    price: "From $149",
    duration: "3.0 - 5.0 hrs",
    summary:
      "Hospital-grade sanitation for corporate offices, retail stores, and creative studios. Available after-hours or on weekends.",
    keyPoints: [
      "Workstation & desktop touchpoint disinfection",
      "Boardroom detailing & whiteboard prep",
      "Staff kitchenette & breakroom sanitization",
      "Commercial restroom sterilization & restock",
    ],
    tasks: {
      kitchen: [
        "Clean staff breakroom refrigerator & microwave",
        "Sanitize coffee stations, sink & counters",
        "Wipe dining tables & chair armrests",
        "Empty recycling & compost sorting bins",
      ],
      bathrooms: [
        "Hospital-grade toilet & urinal sterilization",
        "Disinfect stall partitions, handles & dispensers",
        "Scrub sinks, mirrors & touchless faucets",
        "Mop floors with anti-slip hospital disinfectant",
      ],
      livingBedrooms: [
        "Dust computer monitors, keyboards & desk phones",
        "Sanitize conference room tables & remote controls",
        "Vacuum commercial carpets & high-traffic hallways",
        "Clean glass entrance doors & partition glass",
      ],
    },
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning & Disinfection",
    category: "specialty",
    badge: "Intensive Detail",
    isPopular: true,
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1724689200.jpg",
    price: "From $179",
    duration: "4.0 - 6.0 hrs",
    summary:
      "An intensive top-to-bottom detail scrub targeting built-up grime, baseboards, grout lines, vents, and behind furniture.",
    keyPoints: [
      "Hand-scrubbing all baseboards & door frames",
      "Tile grout descaling & calcium stain removal",
      "Intensive stove grease & range hood degreasing",
      "Air vent covers, ceiling fans & light fixtures dusted",
    ],
    tasks: {
      kitchen: [
        "Hand-wash exterior of all cabinets & drawers",
        "Deep degrease stovetop, knobs & burner pans",
        "Scrub tile backsplash & remove sink aerator scale",
        "Clean behind easily movable appliances",
        "Disinfect kitchen trash cans inside and out",
      ],
      bathrooms: [
        "Detailed grout scrubbing with mold inhibitors",
        "Heavy scale removal from glass shower doors",
        "Scrub behind toilet tanks and plumbing lines",
        "Hand-wash floor corners and tile grout lines",
      ],
      livingBedrooms: [
        "Hand-wipe baseboards, door frames & trim throughout",
        "Detailed wet-wipe of window sills & tracks",
        "Dust blinds, ceiling fans and hanging fixtures",
        "Vacuum sofa cushions and under heavy furniture",
      ],
    },
  },
  {
    id: "move-in-out-cleaning",
    title: "Move-In / Move-Out Cleaning",
    category: "specialty",
    badge: "100% Bond Back",
    image: "https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-1226346559-1.jpg",
    price: "From $199",
    duration: "4.5 - 7.0 hrs",
    summary:
      "Turn empty homes into move-in ready sanctuaries. Guaranteed to pass landlord bond inspections with full cabinet interiors cleaned.",
    keyPoints: [
      "Inside & outside of all kitchen cabinets & pantries",
      "Inside oven, broiler & refrigerator deep scrub",
      "Closet shelves, baseboards & door jambs wiped",
      "100% Deposit / Bond-Back Pass Guarantee",
    ],
    tasks: {
      kitchen: [
        "Vacuum and sanitize inside empty cabinets & drawers",
        "Deep clean inside oven, racks, glass & broiler",
        "Deep clean inside refrigerator, drawers & rubber seals",
        "Scrub range hood filters and backsplash tiles",
      ],
      bathrooms: [
        "Complete descaling of tub, shower, tile & vanity",
        "Clean inside medicine cabinets & under-sink storage",
        "Deep sanitize toilet, tank, base and surround",
        "Remove hard water deposits and hair traps",
      ],
      livingBedrooms: [
        "Wipe inside closet shelving and clothes racks",
        "Hand-wash all baseboards, doors & switch plates",
        "Clean window sills, tracks & interior panes",
        "Vacuum and mop all closet corners and floors",
      ],
    },
  },
  {
    id: "carpet-cleaning",
    title: "Carpet & Upholstery Steam Clean",
    category: "specialty",
    badge: "Hot Water Extraction",
    image: "/images/service/service-5.jpg",
    price: "From $99",
    duration: "1.5 - 3.0 hrs",
    summary:
      "High-temperature 210°F steam soil extraction lifts embedded allergens, stubborn pet stains, and lingering odors with zero residue.",
    keyPoints: [
      "Pre-treatment stain breakdown & enzyme spray",
      "High-temperature 210°F steam soil extraction",
      "Pet urine odor & dander neutralization",
      "Fast-dry technology (walk-on in ~2 hours)",
    ],
    tasks: {
      kitchen: [
        "High-traffic runner rugs steam extraction",
        "Pre-treatment on kitchen floor mats",
      ],
      bathrooms: [
        "Sanitize bath rugs & fabric floor coverings",
      ],
      livingBedrooms: [
        "Fiber inspection & enzyme spot treatment",
        "Deep hot water extraction of carpet fibers",
        "Neutralization of pet urine and organic odors",
        "Pile grooming for a clean, uniform finish",
      ],
    },
  },
  {
    id: "commercial-sanitization",
    title: "Post-Construction Detailed Cleaning",
    category: "commercial",
    badge: "Heavy Dust Removal",
    image: "/images/service/service-6.jpg",
    price: "From $249",
    duration: "5.0 - 8.0 hrs",
    summary:
      "Multi-phase removal of fine drywall dust, paint splatters, caulking residue, and protective stickers after property renovations.",
    keyPoints: [
      "Fine drywall dust extraction with Class-M HEPA vacuums",
      "Removal of paint splatters, silicone & tape adhesive",
      "High-reach ledge, ceiling fixture & vent wiping",
      "Multi-pass surface detailing for move-in readiness",
    ],
    tasks: {
      kitchen: [
        "Clean drywall dust inside new cabinets & drawers",
        "Peel protective films & remove adhesive residue",
        "Polish new stone countertops & stainless fixtures",
        "Remove paint specks from tiles and trim",
      ],
      bathrooms: [
        "Remove grout haze from new tile installations",
        "Clean construction dust from tubs, sinks & vanities",
        "Polish plumbing chrome and mirror glass",
      ],
      livingBedrooms: [
        "Multi-pass HEPA vacuuming of all surfaces & trim",
        "Clean stickers and paint droplets from windows",
        "Wipe light switches, door hardware & outlet covers",
        "Clean HVAC vent registers & vacuum return grilles",
      ],
    },
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2 sm:mb-3">
              <span>All Cleaning Services</span>
              <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
              Detailed Service Scope &amp; Pricing
            </h2>
            <p className="text-sm sm:text-base text-[#0E152B]/75 mt-2.5 leading-relaxed">
              Transparent packages tailored to your property. Click any card to inspect the room-by-room task checklist before booking.
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
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedCard === service.id;
            return (
              <div
                key={service.id}
                className="group rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 pb-5 sm:pb-6 flex flex-col justify-between transition-all duration-300 bg-gradient-to-b from-[#FFF5F5] via-[#FFF9F9] to-white border-t-4 border-[#DC2626] border-x border-b border-red-100/70 shadow-xs hover:shadow-lg"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden mb-4 sm:mb-5 bg-slate-100 shadow-2xs">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[22px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Badge */}
                    {service.badge && (
                      <div className="absolute top-3 left-3 bg-[#DC2626] text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-xs">
                        {service.badge}
                      </div>
                    )}

                    {/* Bottom Metadata inside photo */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="bg-white/95 backdrop-blur-xs text-[#0E152B] px-2.5 py-1 rounded-full flex items-center gap-1 font-normal shadow-2xs border border-slate-100">
                        <Clock className="w-3 h-3 text-[#DC2626]" />
                        <span>{service.duration}</span>
                      </span>
                      <span className="bg-[#DC2626] text-white font-medium px-3 py-1 rounded-full shadow-2xs">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-normal text-[#0E152B] font-serif mb-2 leading-snug group-hover:text-[#DC2626] transition-colors">
                    {service.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-[13.5px] text-[#0E152B]/75 leading-relaxed mb-4">
                    {service.summary}
                  </p>

                  {/* 4 Feature Points */}
                  <ul className="space-y-2 mb-4">
                    {service.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#0E152B]/85 font-normal leading-snug">
                        <span className="w-4 h-4 rounded-full bg-red-100 text-[#DC2626] flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-medium">
                          ✓
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expandable Task Checklist Toggle */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(service.id)}
                    className="w-full text-left py-2 px-3 rounded-xl bg-white/80 border border-red-100 text-[#0E152B] hover:text-[#DC2626] text-xs font-medium flex items-center justify-between transition-colors mb-3 cursor-pointer"
                  >
                    <span>{isExpanded ? "Hide Task Details" : "View Included Checklist"}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  {/* Collapsible Task Checklist Content */}
                  {isExpanded && (
                    <div className="p-3.5 bg-white rounded-2xl border border-red-100 space-y-3 mb-4 animate-in fade-in duration-200 text-xs">
                      <div>
                        <span className="text-[#0E152B] font-medium block mb-1">Kitchen Tasks:</span>
                        <ul className="space-y-1 text-slate-600 pl-2">
                          {service.tasks.kitchen.map((t, i) => (
                            <li key={i} className="list-disc list-inside">{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[#0E152B] font-medium block mb-1">Bathroom Tasks:</span>
                        <ul className="space-y-1 text-slate-600 pl-2">
                          {service.tasks.bathrooms.map((t, i) => (
                            <li key={i} className="list-disc list-inside">{t}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-[#0E152B] font-medium block mb-1">Living &amp; Bedroom Tasks:</span>
                        <ul className="space-y-1 text-slate-600 pl-2">
                          {service.tasks.livingBedrooms.map((t, i) => (
                            <li key={i} className="list-disc list-inside">{t}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>

                {/* Bottom Direct CTA */}
                <a
                  href="#service-booking"
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full py-3 px-5 flex items-center justify-between text-xs sm:text-sm font-medium shadow-xs transition-colors mt-2"
                >
                  <span>Book {service.title}</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

