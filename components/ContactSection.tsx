"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Office",
    date: "",
    time: "13:00",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="wpo-contact-section py-10 sm:py-14 lg:py-16 relative z-10 bg-white font-[family-name:var(--font-parkinsans)]">
      <div className="wpo-contact-section-wrapper box-style max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Side: Contact Image with Bottom Logos & Curved Cutouts */}
          <div className="lg:col-span-6">
            <div className="wpo-contact-img relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/images/contact.jpg"
                alt="Cleanar Contact Team"
                fill
                className="object-cover rounded-[24px] sm:rounded-[28px]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Bottom Logos Overlay Card */}
              <div className="bottom-logos absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-t-[14px] shadow-md flex items-center justify-center gap-3 sm:gap-4 z-10 border border-slate-100">
                <div className="b-logo relative w-7 h-7 sm:w-8 sm:h-8 rounded-md overflow-hidden shrink-0">
                  <Image src="/Group.png" alt="RedSky Cleaning Emblem" fill className="object-contain" />
                </div>
                <div className="flex flex-col text-left border-l pl-2.5 sm:pl-3 border-slate-200">
                  <span className="text-xs font-extrabold text-[#DC2626] leading-tight">RedSky Certified</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">5-Star Sanitation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact / Booking Form */}
          <div className="lg:col-span-6">
            <div className="wpo-contact-form-area relative rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-12 overflow-hidden border border-red-100 bg-gradient-to-br from-[#FFF5F5] via-[#FFF8F8] to-[#FFF0F0] shadow-sm">
              {/* Title */}
              <div className="wpo-section-title text-left mb-6 sm:mb-8">
                <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2.5 sm:mb-3.5">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
                  Reach Out for a Sparkling Space Today
                </h2>
              </div>

              {submitted ? (
                <div className="bg-white p-6 sm:p-8 rounded-[20px] text-center space-y-4 border border-[#DC2626] shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-[#DC2626] mx-auto flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0E152B]">Thank You!</h3>
                  <p className="text-xs sm:text-sm text-[#032532]/80">
                    Your appointment request has been submitted successfully. We will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0E152B] hover:bg-[#DC2626] text-white text-xs sm:text-sm font-bold transition-colors mt-2 cursor-pointer"
                  >
                    <span>Book Another Service</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white h-[46px] sm:h-[50px] px-4 rounded-[12px] text-sm text-[#0E152B] border border-red-100 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-2xs"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white h-[46px] sm:h-[50px] px-4 rounded-[12px] text-sm text-[#0E152B] border border-red-100 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-2xs"
                    />
                  </div>

                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white h-[46px] sm:h-[50px] px-4 rounded-[12px] text-sm text-[#0E152B] border border-red-100 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-2xs cursor-pointer"
                    >
                      <option disabled value="">Service catagories</option>
                      <option value="Office">Office Cleaning</option>
                      <option value="Home">Home Cleaning</option>
                      <option value="Residential">Residential Cleaning</option>
                      <option value="Commercial">Commercial Cleaning</option>
                      <option value="Deep">Deep Sanitization</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white h-[46px] sm:h-[50px] px-4 rounded-[12px] text-sm text-[#0E152B] border border-red-100 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-2xs"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-white h-[46px] sm:h-[50px] px-4 rounded-[12px] text-sm text-[#0E152B] border border-red-100 focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-2xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all cursor-pointer w-full sm:w-auto"
                    >
                      <span>Book Now</span>
                      <span className="text-base leading-none">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
