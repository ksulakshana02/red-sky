"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Check, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sqft: "",
    service: "House Cleaning",
    date: "",
    addons: [] as string[],
    notes: "",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const availableAddons = [
    { id: "oven", label: "Inside Oven (+$35)" },
    { id: "fridge", label: "Inside Refrigerator (+$30)" },
    { id: "windows", label: "Interior Windows (+$45)" },
    { id: "carpet", label: "Carpet Steam Clean (+$75)" },
  ];

  const handleAddonToggle = (addonLabel: string) => {
    if (formData.addons.includes(addonLabel)) {
      setFormData({
        ...formData,
        addons: formData.addons.filter((item) => item !== addonLabel),
      });
    } else {
      setFormData({
        ...formData,
        addons: [...formData.addons, addonLabel],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="service-booking" className="py-12 sm:py-16 lg:py-20 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Booking Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="h-full rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-12 bg-gradient-to-br from-[#FFE8E8] via-[#FFF3F3] to-[#FFF9F9] border border-red-200/80 shadow-xs flex flex-col justify-between">
              <div>
                
                {/* Header */}
                <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
                  Online Reservation
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-2">
                  Book Your Cleaning Appointment
                </h2>
                <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed mb-6 sm:mb-8 font-normal">
                  Select your service, choose preferred arrival details, and get an immediate confirmation. Zero cancellation fees up to 24h prior.
                </p>

                {submitted ? (
                  <div className="bg-white/95 backdrop-blur-xs p-6 sm:p-10 rounded-[24px] text-center space-y-4 border border-red-200 shadow-md animate-in fade-in duration-300 my-auto">
                    <div className="w-14 h-14 rounded-full bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-normal text-[#0E152B]">Booking Request Received</h3>
                    <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed max-w-md mx-auto font-normal">
                      Thank you, <span className="text-[#0E152B] font-medium">{formData.name || "Valued Customer"}</span>! Our dispatch coordinator is reserving your spot for{" "}
                      <span className="text-[#DC2626] font-medium">{formData.service}</span> and will confirm your appointment at{" "}
                      <span className="text-[#0E152B] font-medium">{formData.phone || formData.email}</span> within 15 minutes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer mt-2"
                    >
                      Book Another Clean
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (718) 904-4450"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Area sq.ft */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Approx. Area (sq. ft)
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 1,800"
                          value={formData.sqft}
                          onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                        />
                      </div>
                    </div>

                    {/* Row 3: Service Selection & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Select Service Package *
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs cursor-pointer"
                        >
                          <option value="House Cleaning">House Cleaning</option>
                          <option value="Office & Commercial Cleaning">Office &amp; Commercial Cleaning</option>
                          <option value="Deep Cleaning & Disinfection">Deep Cleaning &amp; Disinfection</option>
                          <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                          <option value="Carpet & Upholstery Steam Clean">Carpet &amp; Upholstery Steam Clean</option>
                          <option value="Post-Construction Detailed Cleaning">Post-Construction Detailed Cleaning</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                          Preferred Cleaning Date
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                        />
                      </div>
                    </div>

                    {/* Row 4: Optional Add-Ons Pills */}
                    <div>
                      <label className="block text-xs font-medium text-[#0E152B] mb-2">
                        Add-On Upgrades (Optional)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {availableAddons.map((addon) => {
                          const isSelected = formData.addons.includes(addon.label);
                          return (
                            <button
                              key={addon.id}
                              type="button"
                              onClick={() => handleAddonToggle(addon.label)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-normal border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-[#DC2626] text-white border-[#DC2626] shadow-2xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-red-300"
                              }`}
                            >
                              <span>{isSelected ? "✓ " : "+ "}{addon.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 5: Notes */}
                    <div>
                      <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                        Special Instructions or Access Notes (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lockbox code #4567, parking in driveway..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-white border border-slate-200 rounded-[14px] h-[48px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] shadow-2xs font-normal"
                      />
                    </div>

                    {/* Row 6: Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="form-consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#DC2626] focus:ring-[#DC2626] border-slate-300 cursor-pointer accent-[#DC2626]"
                        required
                      />
                      <label htmlFor="form-consent" className="text-xs text-[#0E152B]/75 leading-relaxed cursor-pointer select-none font-normal">
                        I agree to RedSky Cleaning’s Privacy Policy. Payment is processed only after your satisfaction walkthrough.
                      </label>
                    </div>

                    {/* Row 7: Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white font-medium text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        Confirm Booking Request
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Trust & Guarantee Cards (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            
            {/* Top Photo */}
            <div className="relative w-full aspect-[16/10.5] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-lg border border-slate-100 bg-slate-100 flex-1 min-h-[220px]">
              <Image
                src="/images/service-single/img-1.jpg"
                alt="RedSky Cleaning Team Specialists"
                fill
                className="object-cover rounded-[28px] sm:rounded-[36px]"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-full text-xs font-medium text-[#0E152B] shadow-2xs flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#DC2626]" />
                <span>Fully Vetted &amp; Insured</span>
              </div>
            </div>

            {/* Bottom Guarantee Box */}
            <div className="rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 bg-[#F6F7F5] border border-slate-200/80 relative overflow-hidden flex flex-col justify-center">
              <div className="relative z-10 max-w-sm">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[#0E152B]">
                    100% Satisfaction Guarantee
                  </h3>
                </div>

                <p className="text-xs sm:text-[13.5px] text-[#0E152B]/75 leading-relaxed pl-10 mb-4 font-normal">
                  If any corner doesn&apos;t meet your expectations, let us know within 24 hours. A supervisor will return to re-clean the area free of charge.
                </p>

                <div className="pl-10 flex items-center gap-2 text-xs font-medium text-[#DC2626]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Hotline: +1 718-904-4450</span>
                </div>
              </div>

              {/* Decorative Botanical Leaves */}
              <div className="absolute -right-3 -bottom-3 w-32 h-32 pointer-events-none opacity-80 hidden sm:block">
                <svg viewBox="0 0 120 120" fill="none" className="w-full h-full">
                  <path d="M90 20C75 25 65 40 70 60C85 55 95 40 90 20Z" fill="#DC2626" opacity="0.9" />
                  <path d="M105 45C90 48 82 62 85 80C100 77 108 63 105 45Z" fill="#EF4444" />
                </svg>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

