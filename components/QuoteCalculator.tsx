"use client";

import React, { useState } from "react";
import {
  Calculator,
  Home,
  Building,
  Sparkles,
  Check,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  Tag,
} from "lucide-react";

export default function QuoteCalculator() {
  const [propertyType, setPropertyType] = useState<"apartment" | "house" | "office">("house");
  const [bedrooms, setBedrooms] = useState<number>(3);
  const [bathrooms, setBathrooms] = useState<number>(2);
  const [sqft, setSqft] = useState<number>(1800);
  const [cleaningType, setCleaningType] = useState<"standard" | "deep" | "move">("standard");
  const [frequency, setFrequency] = useState<"onetime" | "monthly" | "biweekly" | "weekly">("biweekly");

  const [addons, setAddons] = useState<{ [key: string]: boolean }>({
    oven: false,
    fridge: false,
    windows: false,
    carpet: false,
    pet: false,
  });

  const addonPrices: { [key: string]: { label: string; price: number } } = {
    oven: { label: "Inside Oven Deep Clean", price: 35 },
    fridge: { label: "Inside Refrigerator", price: 30 },
    windows: { label: "Interior Window Panels", price: 45 },
    carpet: { label: "Carpet Steam Shampoo", price: 75 },
    pet: { label: "Pet Hair & Dander Treatment", price: 25 },
  };

  const toggleAddon = (key: string) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Base Calculation
  let baseRate = 80;
  if (propertyType === "apartment") baseRate = 70;
  if (propertyType === "house") baseRate = 95;
  if (propertyType === "office") baseRate = 140;

  const roomMultiplier = bedrooms * 25 + bathrooms * 35;
  const sqftMultiplier = Math.max(0, (sqft - 1000) * 0.04);
  let subtotal = baseRate + roomMultiplier + sqftMultiplier;

  // Cleaning tier modifier
  if (cleaningType === "deep") subtotal *= 1.35;
  if (cleaningType === "move") subtotal *= 1.45;

  // Add-ons total
  let addonTotal = 0;
  Object.keys(addons).forEach((key) => {
    if (addons[key]) {
      addonTotal += addonPrices[key].price;
    }
  });

  const totalBeforeDiscount = subtotal + addonTotal;

  // Frequency discounts
  let discountPercent = 0;
  if (frequency === "monthly") discountPercent = 0.1;
  if (frequency === "biweekly") discountPercent = 0.15;
  if (frequency === "weekly") discountPercent = 0.2;

  const discountAmount = totalBeforeDiscount * discountPercent;
  const finalPrice = Math.round(totalBeforeDiscount - discountAmount);

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#DC2626] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#DC2626]" />
            <span>Instant Price Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Calculate Your Customized Cleaning Quote
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Transparent, zero-surprise pricing. Configure your space parameters below to view an
            immediate estimate.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive Controls (8 cols) */}
          <div className="lg:col-span-8 bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                1. Property Type
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "apartment", label: "Apartment", icon: Home },
                  { id: "house", label: "House / Villa", icon: Home },
                  { id: "office", label: "Office / Studio", icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as any)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
                        active
                          ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-500/20 scale-[1.02]"
                          : "bg-white text-slate-700 border-slate-200 hover:border-red-300"
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1.5 ${active ? "text-white" : "text-[#DC2626]"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Size & Rooms */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                2. Space Dimensions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Bedrooms */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Bedrooms</span>
                    <span className="text-lg font-black text-slate-900">{bedrooms} Rooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setBedrooms(Math.min(8, bedrooms + 1))}
                      className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center font-bold text-[#DC2626]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Bathrooms */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Bathrooms</span>
                    <span className="text-lg font-black text-slate-900">{bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                      className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center font-bold text-slate-700"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setBathrooms(Math.min(6, bathrooms + 1))}
                      className="w-8 h-8 rounded-lg bg-red-50 hover:bg-red-100 flex items-center justify-center font-bold text-[#DC2626]"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Approx Sq Ft Slider */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-slate-500">Area</span>
                    <span className="text-xs font-black text-[#DC2626]">{sqft} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626] mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Cleaning Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. Cleaning Service Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "standard", label: "Standard Maintenance", desc: "Routine dusting, mop & sanitize" },
                  { id: "deep", label: "Deep Scrub & Disinfect", desc: "+35% extra detail & baseboards" },
                  { id: "move", label: "Move-In / Move-Out", desc: "+45% 100% bond back clean" },
                ].map((tier) => {
                  const active = cleaningType === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCleaningType(tier.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        active
                          ? "bg-red-50/80 border-[#DC2626] ring-2 ring-red-500/20"
                          : "bg-white border-slate-200 hover:border-red-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm text-slate-900">{tier.label}</span>
                        {active && <Check className="w-4 h-4 text-[#DC2626]" />}
                      </div>
                      <p className="text-[11px] text-slate-500">{tier.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Recurring Frequency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                4. Frequency &amp; Discounts
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "onetime", label: "One-Time", tag: "Standard" },
                  { id: "monthly", label: "Monthly", tag: "Save 10%" },
                  { id: "biweekly", label: "Bi-Weekly", tag: "Save 15%" },
                  { id: "weekly", label: "Weekly", tag: "Save 20%" },
                ].map((freq) => {
                  const active = frequency === freq.id;
                  return (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id as any)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        active
                          ? "bg-[#DC2626] text-white border-[#DC2626] shadow-md shadow-red-500/20"
                          : "bg-white text-slate-700 border-slate-200 hover:border-red-300"
                      }`}
                    >
                      <span className="block font-bold text-xs sm:text-sm">{freq.label}</span>
                      <span
                        className={`text-[10px] font-semibold mt-0.5 inline-block px-2 py-0.5 rounded-full ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-red-50 text-[#DC2626]"
                        }`}
                      >
                        {freq.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                5. Popular Add-On Upgrades (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key];
                  const selected = addons[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleAddon(key)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        selected
                          ? "bg-red-50 border-[#DC2626] text-slate-900"
                          : "bg-white border-slate-200 text-slate-700 hover:border-red-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div>
                          <p className="font-bold text-xs">{item.label}</p>
                          <p className="text-[11px] text-slate-500">+${item.price}</p>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          selected
                            ? "bg-[#DC2626] border-[#DC2626] text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {selected && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Live Quote Summary Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-3xl bg-slate-900 text-white p-7 shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">
                  Estimated Total
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-full border border-red-500/30">
                  <Tag className="w-3 h-3" />
                  Instant Live Rate
                </span>
              </div>

              {/* Huge Price Number */}
              <div className="my-6 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-slate-400">$</span>
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    {finalPrice}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {frequency === "onetime" ? "Per single clean" : `Per visit (${frequency})`}
                </p>

                {discountAmount > 0 && (
                  <div className="mt-3 inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold px-3 py-1 rounded-full">
                    Special: You save ${Math.round(discountAmount)} on this recurring plan
                  </div>
                )}
              </div>

              {/* Breakdown List */}
              <div className="space-y-2.5 text-xs text-slate-300 py-4 border-y border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Space Type:</span>
                  <span className="font-semibold text-white capitalize">{propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Layout:</span>
                  <span className="font-semibold text-white">
                    {bedrooms} Bed / {bathrooms} Bath (~{sqft} sq.ft)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cleaning Level:</span>
                  <span className="font-semibold text-red-300 capitalize">
                    {cleaningType === "standard"
                      ? "Standard Clean"
                      : cleaningType === "deep"
                      ? "Deep Disinfection"
                      : "Move In / Out"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Frequency:</span>
                  <span className="font-semibold text-white capitalize">{frequency}</span>
                </div>
                {addonTotal > 0 && (
                  <div className="flex justify-between text-amber-300">
                    <span>Add-ons Total:</span>
                    <span>+${addonTotal}</span>
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="py-4 space-y-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                  <span>All supplies &amp; eco-solutions included</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                  <span>100% Satisfaction or free re-clean</span>
                </div>
              </div>

              {/* Instant Book Button */}
              <a
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-black py-4 px-6 rounded-2xl shadow-xl shadow-red-500/25 transition-all text-sm group"
              >
                <span>Book This Estimate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
