"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, ShieldCheck, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Residential House Cleaning",
    contactPref: "Email",
    city: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const coverageAreas = [
    "Boston Proper",
    "Cambridge",
    "Somerville",
    "Brookline",
    "Newton",
    "Quincy",
    "Watertown",
    "Medford",
  ];

  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-[#FBFBFB] relative z-10 border-t border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 lg:p-10 bg-white border border-slate-200/80 shadow-2xs">
              <div className="mb-6">
                <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
                  Send A Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#0E152B] leading-snug mb-2">
                  Tell us about your home or project
                </h2>
                <p className="text-xs sm:text-sm text-[#0E152B]/70 font-normal leading-relaxed">
                  Fill in your details below and our team will get back to you with an honest estimate or answers to your questions.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-[22px] bg-[#FFF8F8] border border-red-100 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-white text-[#DC2626] border border-red-100 flex items-center justify-center mx-auto shadow-2xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-normal font-serif text-[#0E152B]">
                    Message received, {formData.name || "friend"}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. A coordinator will review your request and get back to you at{" "}
                    <strong className="text-[#0E152B] font-medium">{formData.email || formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white text-xs font-medium transition-colors cursor-pointer mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] h-[46px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal"
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
                        className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] h-[46px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Town/City */}
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
                        className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] h-[46px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                        Neighborhood / City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Back Bay, Cambridge..."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] h-[46px] px-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Interest */}
                  <div>
                    <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                      Service You&apos;re Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] h-[46px] px-4 text-sm text-[#0E152B] focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs cursor-pointer font-normal"
                    >
                      <option value="Residential House Cleaning">Residential House Cleaning (Routine)</option>
                      <option value="Deep Cleaning & Disinfection">Deep Cleaning &amp; Disinfection</option>
                      <option value="Move-In / Move-Out Cleaning">Move-In / Move-Out Cleaning</option>
                      <option value="Office & Commercial Cleaning">Office &amp; Commercial Cleaning</option>
                      <option value="Carpet & Upholstery Steam Clean">Carpet &amp; Upholstery Steam Clean</option>
                      <option value="Other / General Question">Other / General Question</option>
                    </select>
                  </div>

                  {/* Row 4: Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#0E152B] mb-1.5">
                      How Can We Help? (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your home (bedrooms, bathrooms, any special requests or pet notes)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FBFBFB] border border-slate-200 rounded-[14px] p-4 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Send inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right Column: Support Details & Coverage (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Service Coverage Card */}
            <div className="rounded-[28px] p-6 sm:p-7 bg-white border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#DC2626]" />
                <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B]">
                  Service Area Coverage
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-[#0E152B]/70 leading-relaxed font-normal mb-4">
                Our technicians travel across Greater Boston and nearby municipalities with full mobile cleaning equipment.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {coverageAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-normal text-slate-700 bg-slate-50 border border-slate-200/70 px-3 py-1 rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 mt-3 font-normal">
                Don&apos;t see your town? Message us—we often serve neighboring communities.
              </p>
            </div>

            {/* What to Expect Next Card */}
            <div className="rounded-[28px] p-6 sm:p-7 bg-[#FFF8F8] border border-red-100 shadow-2xs">
              <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-3">
                What happens after you reach out?
              </h3>
              
              <ol className="space-y-3 text-xs sm:text-[13px] text-[#0E152B]/75 font-normal">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white border border-red-200 text-[#DC2626] flex items-center justify-center shrink-0 text-xs font-medium">
                    1
                  </span>
                  <span>We review your property size and requested scope.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white border border-red-200 text-[#DC2626] flex items-center justify-center shrink-0 text-xs font-medium">
                    2
                  </span>
                  <span>You receive a clear, flat-rate estimate with no hidden surcharges.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white border border-red-200 text-[#DC2626] flex items-center justify-center shrink-0 text-xs font-medium">
                    3
                  </span>
                  <span>We confirm your arrival slot. Zero payment taken until you are satisfied.</span>
                </li>
              </ol>
            </div>

            {/* Immediate Help Card */}
            <div className="rounded-[28px] p-6 bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 font-normal block mb-0.5">
                  Prefer speaking with someone now?
                </span>
                <span className="text-base font-normal font-serif text-[#0E152B]">
                  Direct Dispatch Hotline
                </span>
              </div>
              <a
                href="tel:+17189044450"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white text-xs font-medium transition-colors shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

