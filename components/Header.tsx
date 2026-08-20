"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

export function TopBar() {
  const [langDropdown, setLangDropdown] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="topbar bg-[#FFD700] rounded-b-[10px] px-4 sm:px-8 py-2 text-black text-xs sm:text-[14px] font-semibold">
      <div className="container-fluid max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2.5">
          {/* Left Contact Info */}
          <div className="w-full lg:w-auto">
            <ul className="contact-info flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <li>
                <a
                  href="tel:+887869587496"
                  className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                >
                  <Phone className="w-3.5 h-3.5 fill-current text-black" />
                  <span>+88 7869 5874 96</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@redskycleaning.com"
                  className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5 text-black" />
                  <span>support@redskycleaning.com</span>
                </a>
              </li>
              <li className="hidden md:inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>54 Berrick St Boston MA 02115</span>
              </li>
            </ul>
          </div>

          {/* Right Dropdowns & Social Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="inline-flex items-center gap-1 text-black font-semibold text-xs sm:text-sm hover:opacity-80 transition-opacity"
              >
                <span>{language}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg py-1 z-50 min-w-[100px] text-slate-800 text-xs">
                  <button
                    onClick={() => {
                      setLanguage("English");
                      setLangDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-100 font-medium"
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("Spanish");
                      setLangDropdown(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-slate-100 font-medium"
                  >
                    Spanish
                  </button>
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="pryment-selector">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-black font-semibold text-xs sm:text-sm border-0 cursor-pointer focus:outline-none"
              >
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
              </select>
            </div>

            {/* Social Links */}
            <ul className="social-media flex items-center gap-3 text-black">
              <li>
                <a href="#" className="hover:opacity-75" aria-label="Facebook">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75" aria-label="LinkedIn">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-75" aria-label="Vimeo">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22.84 8.272c-.08 1.824-1.344 4.312-3.8 7.472-2.544 3.28-4.712 4.92-6.504 4.92-1.12 0-2.072-1.04-2.856-3.12-.56-2.08-1.12-4.16-1.68-6.24-.64-2.32-1.32-3.48-2.04-3.48-.16 0-.72.336-1.68 1.008l-1.008-1.296c1.08-.96 2.16-1.92 3.24-2.88 1.52-1.32 2.64-2.024 3.36-2.112 1.68-.208 2.72.848 3.12 3.16.48 2.76.8 4.48.96 5.16.48 2.08 1.04 3.12 1.68 3.12.48 0 1.16-.696 2.04-2.088.88-1.392 1.344-2.432 1.392-3.12.112-1.168-.328-1.752-1.32-1.752-.48 0-.96.104-1.44.312 1-.32 1.92-.84 2.76-1.56.96-.8 1.44-1.648 1.44-2.544 0-.112-.04-.208-.12-.288-.4-.4-1.28-.6-2.64-.6-1.84 0-3.32.744-4.44 2.232-.32.416-.56.92-.72 1.512z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="wpo-site-header font-[family-name:var(--font-parkinsans)]">
      <nav className="navigation navbar bg-white py-3.5 px-4 sm:px-8 border-b border-slate-100">
        <div className="container-fluid max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 bg-[#DC2626] text-white flex items-center justify-center rounded-md hover:bg-[#B91C1C] transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* RedSky Cleaning Service Brand Logo */}
          <div className="navbar-header flex items-center">
            <Link href="/" className="navbar-brand flex items-center group py-1">
              <div className="relative w-36 sm:w-48 lg:w-52 h-10 sm:h-12 shrink-0 group-hover:scale-[1.02] transition-transform">
                <Image
                  src="/redsky-horizontal.svg"
                  alt="RedSky Cleaning Service"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Clean Desktop Navigation Links (Pages, Projects, Shop removed) */}
          <div className="hidden lg:flex items-center gap-8 font-medium text-[16px] text-[#0E152B]">
            <Link href="/" className="hover:text-[#DC2626] transition-colors py-2">
              Home
            </Link>
            <Link href="/#about" className="hover:text-[#DC2626] transition-colors py-2">
              About
            </Link>
            <Link href="#services" className="hover:text-[#DC2626] transition-colors py-2">
              Services
            </Link>
            <Link href="/#faq" className="hover:text-[#DC2626] transition-colors py-2">
              FAQ
            </Link>
            <Link href="/#blog" className="hover:text-[#DC2626] transition-colors py-2">
              Blog
            </Link>
            <Link href="#contact" className="hover:text-[#DC2626] transition-colors py-2">
              Contact
            </Link>
          </div>

          {/* Header Right Actions (Search & Cart removed, Free Quote retained) */}
          <div className="header-right flex items-center gap-3 sm:gap-4">
            {/* Free Quote Button */}
            <div className="close-form">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-sm tracking-wide shadow-xs transition-all duration-200"
              >
                <span>Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex">
          <div className="w-[290px] bg-gradient-to-b from-[#8B0000] via-[#991B1B] to-[#450A0A] h-full p-6 flex flex-col justify-between text-white shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/20">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9 rounded-md overflow-hidden bg-white p-0.5">
                    <Image
                      src="/Group.png"
                      alt="RedSky Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold leading-none text-white tracking-wide">
                      RED<span className="text-amber-300">SKY</span>
                    </span>
                    <span className="text-[8px] font-bold tracking-[0.2em] text-white/80 uppercase">
                      Cleaning Service
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 border border-white/40 rounded-sm flex items-center justify-center text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6 text-sm font-semibold text-white">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Home</Link>
                <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">About</Link>
                <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Services</Link>
                <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">FAQ</Link>
                <Link href="/#blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Blog</Link>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-300 transition-colors">Contact</Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20">
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 bg-white text-[#DC2626] font-bold rounded-lg text-sm shadow-md hover:bg-slate-100 transition-colors"
              >
                Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header id="header" className="box-style max-w-[1691px] mx-auto">
      {/* <TopBar /> */}
      <Navbar />
    </header>
  );
}
