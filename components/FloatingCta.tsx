"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, ArrowUp } from "lucide-react";

export default function FloatingCta() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-slate-900 text-white shadow-xl flex items-center justify-center hover:bg-[#DC2626] transition-all hover:scale-105 border border-slate-700"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Action Pill */}
      <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 backdrop-blur-md text-white p-1.5 rounded-full shadow-2xl border border-slate-700">
        <a
          href="tel:+887869587496"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full hover:bg-slate-800 text-xs font-bold transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-red-400" />
          <span>Call Us</span>
        </a>
        <a
          href="#booking"
          className="flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Online</span>
        </a>
      </div>
    </div>
  );
}
