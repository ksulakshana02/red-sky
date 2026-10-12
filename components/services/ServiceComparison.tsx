"use client";

import React from "react";
import { Check, Minus, ArrowRight, ShieldCheck } from "lucide-react";

export default function ServiceComparison() {
  const tiers = [
    {
      id: "standard",
      name: "Standard Maintenance",
      desc: "Weekly or bi-weekly housekeeping",
      price: "$89+",
      isPopular: false,
      features: [
        true,  // Surface Dusting & Wiping
        true,  // HEPA Vacuum & Steam Mop
        true,  // Bathrooms Descaling
        true,  // Kitchen Counters & Sink
        false, // Baseboards & Trims by Hand
        false, // Inside Kitchen Cabinets
        false, // Inside Oven & Refrigerator
        true,  // 24h Satisfaction Guarantee
      ],
    },
    {
      id: "deep",
      name: "Deep Sanitization",
      desc: "Comprehensive seasonal overhaul",
      price: "$179+",
      isPopular: true,
      features: [
        true,  // Surface Dusting & Wiping
        true,  // HEPA Vacuum & Steam Mop
        true,  // Bathrooms Descaling
        true,  // Kitchen Counters & Sink
        true,  // Baseboards & Trims by Hand
        false, // Inside Kitchen Cabinets
        false, // Inside Oven & Refrigerator
        true,  // 24h Satisfaction Guarantee
      ],
    },
    {
      id: "move",
      name: "Move-In / Move-Out",
      desc: "100% Bond-back turnover for vacant spaces",
      price: "$199+",
      isPopular: false,
      features: [
        true,  // Surface Dusting & Wiping
        true,  // HEPA Vacuum & Steam Mop
        true,  // Bathrooms Descaling
        true,  // Kitchen Counters & Sink
        true,  // Baseboards & Trims by Hand
        true,  // Inside Kitchen Cabinets
        true,  // Inside Oven & Refrigerator
        true,  // 24h Satisfaction Guarantee
      ],
    },
  ];

  const featureLabels = [
    "Surface Dusting, Tables & Mantels",
    "HEPA Vacuuming & Hard Floor Steam Mopping",
    "Toilets, Showers, Tubs & Chrome Fixtures Sanitized",
    "Kitchen Countertops, Stovetop & Sink Disinfection",
    "Hand-Scrubbing All Baseboards & Door Frames",
    "Inside All Empty Kitchen Cabinets & Drawers",
    "Inside Oven & Refrigerator Deep Scrub",
    "24-Hour Happiness Re-Clean Guarantee",
  ];

  return (
    <section id="service-comparison" className="py-12 sm:py-16 lg:py-20 bg-[#F9FAFB]/90 relative z-10 border-y border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-slate-600 mb-2 sm:mb-3">
            <span>Package Comparison</span>
            <span className="text-[#DC2626] font-sans font-normal text-sm">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
            Compare Residential Tiers
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/75 mt-2.5 leading-relaxed">
            Choose the level of detail that fits your schedule and home condition. All packages include non-toxic, eco-safe supplies.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] border border-slate-200 shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200">
            <table className="w-full min-w-[680px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-5 sm:p-7 w-2/5 bg-slate-50/60 align-bottom">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block mb-1">
                      Checklist Inclusions
                    </span>
                    <span className="text-base sm:text-lg font-serif font-normal text-[#0E152B]">
                      Service Scope
                    </span>
                  </th>

                  {tiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`p-5 sm:p-7 text-center w-1/5 align-bottom relative ${
                        tier.isPopular ? "bg-[#FEF2F2]/60" : "bg-white"
                      }`}
                    >
                      {tier.isPopular && (
                        <span className="inline-block bg-[#DC2626] text-white text-[10px] font-medium px-3 py-0.5 rounded-full mb-2 uppercase tracking-wide">
                          Recommended
                        </span>
                      )}
                      <h4 className="text-sm sm:text-base font-serif font-normal text-[#0E152B] leading-tight">
                        {tier.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5 mb-2">
                        {tier.desc}
                      </p>
                      <div className="text-2xl font-normal font-serif text-[#DC2626]">
                        {tier.price}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {featureLabels.map((label, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-slate-100 transition-colors hover:bg-red-50/20 ${
                      idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"
                    }`}
                  >
                    <td className="p-4 sm:p-5 px-5 sm:px-7 text-xs sm:text-sm text-[#0E152B] font-normal">
                      {label}
                    </td>

                    {tiers.map((tier) => {
                      const isChecked = tier.features[idx];
                      return (
                        <td
                          key={tier.id}
                          className={`p-4 sm:p-5 text-center ${
                            tier.isPopular ? "bg-[#FEF2F2]/40" : ""
                          }`}
                        >
                          {isChecked ? (
                            <div className="w-6 h-6 rounded-full bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mx-auto shadow-2xs">
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                              <Minus className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Bottom Row Action */}
                <tr className="bg-slate-50/80">
                  <td className="p-5 sm:p-6 px-5 sm:px-7">
                    <div className="flex items-center gap-2 text-xs font-normal text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                      <span>Zero cancellation fees up to 24h prior</span>
                    </div>
                  </td>
                  {tiers.map((tier) => (
                    <td
                      key={tier.id}
                      className={`p-5 sm:p-6 text-center ${
                        tier.isPopular ? "bg-[#FEF2F2]/60" : ""
                      }`}
                    >
                      <a
                        href="#service-booking"
                        className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-full text-xs font-medium transition-all shadow-xs ${
                          tier.isPopular
                            ? "bg-[#DC2626] hover:bg-[#B91C1C] text-white shadow-red-500/20"
                            : "bg-white hover:bg-red-50 text-[#0E152B] hover:text-[#DC2626] border border-slate-300"
                        }`}
                      >
                        <span>Select Tier</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

