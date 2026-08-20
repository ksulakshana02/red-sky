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
    <section id="contact" className="wpo-contact-section py-20 lg:py-28 relative z-10 bg-white">
      <div className="wpo-contact-section-wrapper box-style max-w-[1691px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Contact Image with Bottom Logos & Curved Cutouts */}
          <div className="lg:col-span-6">
            <div className="wpo-contact-img relative rounded-[18px] overflow-hidden shadow-lg aspect-[4/3]">
              <Image
                src="/images/contact.jpg"
                alt="Cleanar Contact Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Bottom Logos Overlay Card */}
              <div className="bottom-logos absolute bottom-0 left-1/2 -translate-x-1/2 bg-white px-6 py-2.5 rounded-t-[14px] shadow-md flex items-center justify-center gap-4 z-10 border border-slate-100">
                <div className="b-logo relative w-8 h-8 rounded-md overflow-hidden">
                  <Image src="/Group.png" alt="RedSky Cleaning Emblem" fill className="object-contain" />
                </div>
                <div className="flex flex-col text-left border-l pl-3 border-slate-200">
                  <span className="text-xs font-extrabold text-[#DC2626] leading-tight">RedSky Certified</span>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">5-Star Sanitation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact / Booking Form */}
          <div className="lg:col-span-6">
            <div className="wpo-contact-form-area relative rounded-[17px] p-8 sm:p-14 overflow-hidden border border-red-100">
              {/* Form Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFE4DC]/60 to-[#E2E8F0]/60 opacity-60 -z-10 rounded-[17px]" />

              {/* Title */}
              <div className="wpo-section-title text-left mb-8">
                <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 text-[#DC2626] font-bold text-xs sm:text-sm uppercase tracking-wider border border-red-200 mb-3">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-normal text-[#0E152B] leading-[1.2] font-serif tracking-tight">
                  Reach Out for a Sparkling Space Today
                </h2>
              </div>

              {submitted ? (
                <div className="bg-white p-8 rounded-xl text-center space-y-4 border border-[#DC2626]">
                  <div className="w-12 h-12 rounded-full bg-red-100 text-[#DC2626] mx-auto flex items-center justify-center font-bold text-2xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif text-[#0E152B]">Thank You!</h3>
                  <p className="text-sm text-[#032532]/80">
                    Your appointment request has been submitted successfully. We will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="theme-btn-s2 mt-2"
                  >
                    <span>Book Another Service</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white h-[60px] px-5 rounded-[9px] text-sm text-[#0E152B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-xs"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white h-[60px] px-5 rounded-[9px] text-sm text-[#0E152B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-xs"
                    />
                  </div>

                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white h-[60px] px-5 rounded-[9px] text-sm text-[#0E152B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-xs cursor-pointer"
                    >
                      <option disabled value="">Service catagories</option>
                      <option value="Office">Office Cleaning</option>
                      <option value="Home">Home Cleaning</option>
                      <option value="Residential">Residential Cleaning</option>
                      <option value="Commercial">Commercial Cleaning</option>
                      <option value="Deep">Deep Sanitization</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white h-[60px] px-5 rounded-[9px] text-sm text-[#0E152B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-xs"
                    />
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-white h-[60px] px-5 rounded-[9px] text-sm text-[#0E152B] focus:outline-none focus:ring-2 focus:ring-[#DC2626] shadow-xs"
                    />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="theme-btn-s2 w-full sm:w-auto">
                      <span>Book Now</span>
                      <span className="text-lg leading-none">→</span>
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
