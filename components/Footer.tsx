"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-white relative z-10 p-3 sm:p-6 lg:p-8 pt-4">
      <div className="max-w-[1691px] mx-auto">
        
        {/* Main Soft Card Container (Warm red-touching tone rounded-[40px]) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[24px] sm:rounded-[40px] p-5 sm:p-10 lg:p-14 bg-gradient-to-br from-[#FEF2F2] via-[#FFF5F5] to-[#FDF2F2] border border-red-100/80 relative overflow-hidden font-[family-name:var(--font-parkinsans)] shadow-xs"
        >
          
          {/* Top Row: Heading + CTA Button (Left) & Newsletter Subscription (Right moved down to align) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 pb-6 sm:pb-10 border-b border-red-100/80">
            
            {/* Left Box: Title & "Get a Free Quote" Button */}
            <div className="max-w-xl">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
                  Our Goal is to Wow<br />You With Every Clean
                </h2>
              </div>

              {/* RedSky Red Pill Button: Get a Free Quote */}
              <div>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm tracking-wide shadow-xs transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Right Box: Subscribe to Our Newsletter (Moved down to align seamlessly) */}
            <div className="w-full lg:max-w-md pb-1">
              <h6 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-2.5 sm:mb-3">
                SUBSCRIBE TO OUR NEWSLETTER
              </h6>

              {subscribed ? (
                <div className="p-3.5 sm:p-4 rounded-full bg-white text-[#DC2626] text-xs sm:text-sm font-semibold shadow-xs text-center border border-red-200">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white rounded-full h-[46px] sm:h-[50px] px-5 sm:px-6 text-sm text-[#0E152B] placeholder:text-slate-400 shadow-2xs border border-red-100/60 focus:outline-none focus:ring-2 focus:ring-[#DC2626] transition-all"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-7 sm:px-8 h-[46px] sm:h-[50px] rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-colors cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Middle Row: 4 Column Navigation & Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 sm:pt-12 pb-10 sm:pb-12 border-b border-red-100/80">
            
            {/* Services Columns (lg:col-span-6: split into 2 sub-columns) */}
            <div className="sm:col-span-2 lg:col-span-6">
              <h6 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-4">
                SERVICES
              </h6>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm sm:text-[15px]">
                <ul className="space-y-2.5">
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      House cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Office cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Apartment cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Airbnb cleaning
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-2.5">
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Deep cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Move in out cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Post construction cleaning
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-[#0E152B]/75 hover:text-[#DC2626] transition-colors">
                      Recurring cleaning
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info (lg:col-span-3) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h6 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-4">
                CONTACT INFO
              </h6>
              <p className="text-sm text-[#0E152B]/75 leading-relaxed">
                72 Kneeland St, Suite 305,<br />New York, MA 02111
              </p>
              
              {/* Phone Pill Button with Red Badge */}
              <div>
                <a
                  href="tel:+11805678990"
                  className="inline-flex items-center gap-2.5 bg-white rounded-full p-2 pr-5 shadow-2xs hover:shadow-xs transition-shadow border border-red-100"
                >
                  <span className="w-8 h-8 rounded-full bg-[#DC2626] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#0E152B]">
                    + 1 (180) 567-8990
                  </span>
                </a>
              </div>

              <div>
                <a
                  href="mailto:contact@redskycleaning.com"
                  className="text-xs sm:text-sm font-medium text-[#0E152B] hover:text-[#DC2626] underline transition-colors"
                >
                  contact@redskycleaning.com
                </a>
              </div>
            </div>

            {/* Working Hours (lg:col-span-3) - Tabular 2-Column Grid Alignment */}
            <div className="lg:col-span-3">
              <h6 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-4">
                WORKING HOURS
              </h6>
              <div className="grid grid-cols-[85px_1fr] sm:grid-cols-[90px_1fr] gap-x-2 gap-y-2 text-sm text-[#0E152B]/75 leading-relaxed">
                <span className="text-[#0E152B]/75">Mon – Fri:</span>
                <span className="font-semibold text-[#0E152B]">9.00am – 8.00pm</span>

                <span className="text-[#0E152B]/75">Saturday:</span>
                <span className="font-semibold text-[#0E152B]">10.00am – 8.00pm</span>

                <span className="text-[#0E152B]/75">Sunday:</span>
                <span className="font-semibold text-[#0E152B]">10.00am – 4.00pm</span>
              </div>
            </div>

          </div>

          {/* Bottom Row: Copyright & Nav Links (Left) & Social Media Icons (Right) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#0E152B]/60">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span>© 2026 RedSky. All Rights Reserved</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <Link href="/about" className="hover:text-[#DC2626] font-medium transition-colors">
                About Us
              </Link>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <Link href="/services" className="hover:text-[#DC2626] font-medium transition-colors">
                Services
              </Link>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <Link href="/blog" className="hover:text-[#DC2626] font-medium transition-colors">
                Blog
              </Link>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <Link href="/contact" className="hover:text-[#DC2626] font-medium transition-colors">
                Contact
              </Link>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <Link href="/faq" className="hover:text-[#DC2626] font-medium transition-colors">
                FAQ
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#0E152B]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-2xs border border-red-50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-2xs border border-red-50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-2xs border border-red-50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-2xs border border-red-50"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}
