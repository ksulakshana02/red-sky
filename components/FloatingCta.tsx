"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ArrowUp, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile: sticky bottom action bar (call + quote) — the two things
 * visitors most want, always one tap away.
 * Desktop: a quiet back-to-top button once the user has scrolled.
 */
export default function FloatingCta() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop back-to-top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`hidden md:flex fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white border border-line text-brand-700 shadow-[var(--shadow-lift)] items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Mobile action bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 bg-white/95 backdrop-blur-md border-t border-line shadow-[0_-8px_24px_-12px_rgb(11_27_51/0.2)] transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="grid grid-cols-2 gap-2.5">
          <a href={site.phone.href} className="btn btn-secondary w-full">
            <Phone className="w-4 h-4 text-brand-600" aria-hidden />
            Call now
          </a>
          <Link href="/quote" className="btn btn-primary w-full">
            Free quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
