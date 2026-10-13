"use client";

import React, { useState } from "react";
import {
  Home,
  Building,
  Check,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveQuoteEstimator() {
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

  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote-estimator" className="py-8 sm:py-14 lg:py-16 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Controls (8 cols), Right Light Summary (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Parameters (8 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 bg-[#FBFBFB] rounded-[24px] sm:rounded-[36px] p-4 xs:p-6 sm:p-9 border border-slate-200/80 shadow-2xs space-y-6 sm:space-y-8"
          >
            
            {/* Step 1: Property Type */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-3">
                1. Select Property Type
              </span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: "apartment", label: "Apartment", icon: Home },
                  { id: "house", label: "House / Town", icon: Home },
                  { id: "office", label: "Office / Studio", icon: Building },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = propertyType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPropertyType(item.id as any)}
                      className={`flex flex-col items-center justify-center p-2.5 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-[11px] xs:text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        active
                          ? "bg-[#DC2626] text-white border-[#DC2626] shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-red-200"
                      }`}
                    >
                      <Icon className={`w-4 h-4 xs:w-5 xs:h-5 mb-1 sm:mb-1.5 ${active ? "text-white" : "text-[#DC2626]"}`} />
                      <span className="text-center leading-tight">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Room Dimensions & Size */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-3">
                2. Space Layout &amp; Size
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Bedrooms Counter */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-normal block">Bedrooms</span>
                    <span className="text-base font-normal font-serif text-[#0E152B]">{bedrooms} Rooms</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                      className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setBedrooms(Math.min(7, bedrooms + 1))}
                      className="w-8 h-8 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center text-[#DC2626] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Bathrooms Counter */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-normal block">Bathrooms</span>
                    <span className="text-base font-normal font-serif text-[#0E152B]">{bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                      className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setBathrooms(Math.min(6, bathrooms + 1))}
                      className="w-8 h-8 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center text-[#DC2626] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Approx Sq Ft Slider */}
                <div className="bg-white p-4 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-500 font-normal">Approx. Area</span>
                    <span className="text-xs font-medium text-[#DC2626]">{sqft} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="4500"
                    step="100"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626] mt-2"
                  />
                </div>

              </div>
            </div>

            {/* Step 3: Cleaning Level Tier */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-3">
                3. Desired Cleaning Detail
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "standard", label: "Standard Maintenance", desc: "Routine dusting, kitchen, baths & mopping" },
                  { id: "deep", label: "Deep Scrub & Disinfect", desc: "+35% baseboards, grout & detailed scrubbing" },
                  { id: "move", label: "Move-In / Move-Out", desc: "+45% inside cabinets, oven & move turnover" },
                ].map((tier) => {
                  const active = cleaningType === tier.id;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCleaningType(tier.id as any)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        active
                          ? "bg-[#FFF8F8] border-[#DC2626] shadow-2xs"
                          : "bg-white border-slate-200/80 hover:border-red-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-normal font-serif text-sm text-[#0E152B]">{tier.label}</span>
                        {active && <Check className="w-4 h-4 text-[#DC2626]" />}
                      </div>
                      <p className="text-[11px] text-slate-500 font-normal">{tier.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Recurring Frequency & Discounts */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-3">
                4. Visit Schedule &amp; Savings
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "onetime", label: "One-Time", tag: "Standard Rate" },
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
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        active
                          ? "bg-[#DC2626] text-white border-[#DC2626] shadow-xs"
                          : "bg-white text-slate-700 border-slate-200/80 hover:border-red-200"
                      }`}
                    >
                      <span className="block font-medium text-xs sm:text-sm">{freq.label}</span>
                      <span
                        className={`text-[10px] font-normal mt-0.5 inline-block px-2 py-0.5 rounded-full ${
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

            {/* Step 5: Optional Add-on Upgrades */}
            <div>
              <span className="text-xs uppercase tracking-wider text-slate-500 font-medium block mb-3">
                5. Popular Add-On Services (Optional)
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key];
                  const selected = addons[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => toggleAddon(key)}
                      className={`p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                        selected
                          ? "bg-[#FFF8F8] border-[#DC2626] text-[#0E152B]"
                          : "bg-white border-slate-200/80 text-slate-700 hover:border-red-200"
                      }`}
                    >
                      <div>
                        <p className="font-normal text-xs text-[#0E152B]">{item.label}</p>
                        <p className="text-[11px] text-[#DC2626] font-medium">+${item.price}</p>
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

          </motion.div>

          {/* Right Column: Light Live Quote Summary & Booking Card (4 cols) - NOT DARK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 sticky top-20"
          >
            <div className="rounded-[28px] sm:rounded-[36px] bg-[#FFF8F8] text-[#0E152B] p-6 sm:p-7 border border-red-200 shadow-sm space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-red-100">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                  Instant Estimate
                </span>
                <span className="text-[11px] font-medium text-[#DC2626] bg-white px-2.5 py-0.5 rounded-full border border-red-100 shadow-2xs">
                  Live Rate
                </span>
              </div>

              {/* Price Display - Clean, Non-Black Font */}
              <div className="text-center py-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-xl font-normal text-slate-400 font-serif">$</span>
                  <motion.span
                    key={finalPrice}
                    initial={{ opacity: 0, y: -3, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-4xl sm:text-5xl font-normal font-serif text-[#0E152B]"
                  >
                    {finalPrice}
                  </motion.span>
                </div>
                <p className="text-xs text-slate-500 mt-1 font-normal">
                  {frequency === "onetime" ? "Estimated single clean" : `Estimated per visit (${frequency})`}
                </p>

                {discountAmount > 0 && (
                  <div className="mt-2 text-[11px] text-[#DC2626] font-medium bg-white px-3 py-1 rounded-full inline-block border border-red-100">
                    Recurring savings: -${Math.round(discountAmount)} / clean
                  </div>
                )}
              </div>

              {/* Itemized Details */}
              <div className="space-y-2 text-xs text-slate-600 py-3 border-y border-red-100/80 font-normal">
                <div className="flex justify-between">
                  <span className="text-slate-400">Property:</span>
                  <span className="text-[#0E152B] capitalize">{propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Layout:</span>
                  <span className="text-[#0E152B]">{bedrooms} Bed / {bathrooms} Bath (~{sqft} sq.ft)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Clean Level:</span>
                  <span className="text-[#DC2626] capitalize">
                    {cleaningType === "standard"
                      ? "Standard Clean"
                      : cleaningType === "deep"
                      ? "Deep Scrub"
                      : "Move-In / Out"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Schedule:</span>
                  <span className="text-[#0E152B] capitalize">{frequency}</span>
                </div>
                {addonTotal > 0 && (
                  <div className="flex justify-between text-[#DC2626]">
                    <span>Add-ons:</span>
                    <span>+${addonTotal}</span>
                  </div>
                )}
              </div>

              {/* Reservation Form Inside Summary */}
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 rounded-2xl bg-white border border-red-100 text-center space-y-2"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#FFF5F5] text-[#DC2626] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-normal font-serif text-[#0E152B]">
                      Estimate Saved
                    </h4>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      Thank you, {bookingForm.name || "friend"}. Our dispatch coordinator will confirm your spot at {bookingForm.phone || bookingForm.email} within 15 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#DC2626] hover:underline cursor-pointer block mx-auto pt-1"
                    >
                      Modify details
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleBookingSubmit}
                    className="space-y-3 pt-1"
                  >
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-[12px] h-[40px] px-3.5 text-xs text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] shadow-2xs font-normal"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="tel"
                        required
                        placeholder="Phone *"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-[12px] h-[40px] px-3.5 text-xs text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] shadow-2xs font-normal"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-[12px] h-[40px] px-3.5 text-xs text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] shadow-2xs font-normal"
                      />
                    </div>

                    <div>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-[12px] h-[40px] px-3.5 text-xs text-[#0E152B] focus:outline-none focus:border-[#DC2626] shadow-2xs font-normal"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs cursor-pointer mt-1"
                    >
                      <span>Reserve this estimate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Peace of mind note */}
              <div className="pt-2 text-[11px] text-slate-400 space-y-1.5 font-normal">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>No prepayment required today</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span>Zero cancellation fees up to 24h prior</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

