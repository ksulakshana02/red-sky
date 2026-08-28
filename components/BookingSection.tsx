"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Check } from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sqft: "",
    service: "",
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-10 sm:py-14 lg:py-16 bg-white relative z-10 overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Get a Quote Form Card (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="h-full rounded-[24px] sm:rounded-[36px] p-5 sm:p-8 lg:p-12 bg-gradient-to-br from-[#FFE2E2] via-[#FFF1F1] to-[#FFF9F9] border border-red-200/60 shadow-sm flex flex-col justify-between">
              
              <div>
                {/* Subtitle */}
                <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-2.5 sm:mb-3.5">
                  <span>GET YOUR FREE ESTIMATE</span>
                  <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight mb-5 sm:mb-8">
                  Get a Quote
                </h2>

                {submitted ? (
                  <div className="bg-white/90 backdrop-blur-xs p-6 sm:p-8 rounded-[24px] text-center space-y-4 border border-red-200 shadow-sm animate-in fade-in duration-300 my-auto">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FEF2F2] text-[#DC2626] flex items-center justify-center mx-auto shadow-xs">
                      <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#0E152B]">Quote Request Received!</h3>
                    <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed max-w-sm mx-auto">
                      Thank you, <strong className="text-[#0E152B]">{formData.name || "Valued Customer"}</strong>! Our dispatch team will send your customized estimate and contact you at{" "}
                      <strong className="text-[#0E152B]">{formData.phone || formData.email}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center justify-center px-7 py-2.5 sm:px-8 sm:py-3 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-bold transition-colors"
                    >
                      Request Another Quote
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0E152B] mb-1.5">
                          Your name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white border border-slate-200/80 rounded-[14px] h-[46px] sm:h-[50px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0E152B] mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. john@youremail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-slate-200/80 rounded-[14px] h-[46px] sm:h-[50px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Square Footage */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0E152B] mb-1.5">
                          Phone
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. (1) 23 4567 891"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white border border-slate-200/80 rounded-[14px] h-[46px] sm:h-[50px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all shadow-2xs"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0E152B] mb-1.5">
                          Total square footage
                        </label>
                        <input
                          type="number"
                          required
                          placeholder="e.g. 120"
                          value={formData.sqft}
                          onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                          className="w-full bg-white border border-slate-200/80 rounded-[14px] h-[46px] sm:h-[50px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 3: Choose Service */}
                    <div>
                      <label className="block text-xs font-semibold text-[#0E152B] mb-1.5">
                        Choose a service
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-slate-200/80 rounded-[14px] h-[46px] sm:h-[50px] px-4 text-sm text-[#0E152B] focus:outline-none focus:border-[#DC2626] focus:ring-1 focus:ring-[#DC2626] transition-all shadow-2xs cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="House cleaning">House cleaning</option>
                        <option value="Office cleaning">Office cleaning</option>
                        <option value="Deep cleaning">Deep cleaning</option>
                        <option value="Move in out cleaning">Move in out cleaning</option>
                        <option value="Post Construction Cleaning">Post Construction Cleaning</option>
                        <option value="Recurring Cleaning">Recurring Cleaning</option>
                      </select>
                    </div>

                    {/* Row 4: GDPR/Privacy Consent Checkbox */}
                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#DC2626] focus:ring-[#DC2626] border-slate-300 cursor-pointer accent-[#DC2626]"
                        required
                      />
                      <label htmlFor="consent" className="text-xs text-[#0E152B]/75 leading-relaxed cursor-pointer select-none">
                        By submitting this form, you agree to the processing of your personal data in accordance with the General Data Protection Regulation and our Privacy Policy.
                      </label>
                    </div>

                    {/* Row 5: Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      >
                        I’d Like a Quote
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>

          {/* Right Column: Top Image & Bottom 100% Satisfaction Guarantee Card (lg:col-span-6) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Top Featured Image Box */}
            <div className="relative w-full aspect-[16/10.5] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-lg border border-slate-100 bg-slate-100 flex-1 min-h-[240px]">
              <Image
                src="https://clanyeco.vamtam.com/wp-content/uploads/2025/01/GettyImages-931846460.jpg"
                alt="Professional Cleaning Team"
                fill
                className="object-cover rounded-[24px] sm:rounded-[32px] hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bottom 100% Satisfaction Guarantee Box */}
            <div className="rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 bg-[#F6F7F5] border border-slate-200/60 relative overflow-hidden flex flex-col justify-center">
              
              <div className="relative z-10 max-w-md">
                {/* Title with Checkmark Badge (RedSky Red) */}
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0E152B] leading-tight">
                    100% Satisfaction Guarantee
                  </h3>
                </div>

                {/* Guarantee Copy */}
                <p className="text-[13.5px] sm:text-[14.5px] text-[#0E152B]/75 leading-relaxed pl-8 sm:pl-10">
                  Your satisfaction is our top priority! We proudly offer a 100% Happiness Guarantee on all our cleanings.
                </p>
              </div>

              {/* Decorative Floating Botanical Leaves Artwork in RedSky Red on the Right */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 sm:w-36 sm:h-36 pointer-events-none opacity-90 hidden sm:block">
                <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path
                    d="M90 20C75 25 65 40 70 60C85 55 95 40 90 20Z"
                    fill="#DC2626"
                    opacity="0.9"
                  />
                  <path
                    d="M105 45C90 48 82 62 85 80C100 77 108 63 105 45Z"
                    fill="#EF4444"
                  />
                  <path
                    d="M60 65C48 70 42 82 48 98C62 92 68 80 60 65Z"
                    fill="#B91C1C"
                    opacity="0.8"
                  />
                </svg>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
