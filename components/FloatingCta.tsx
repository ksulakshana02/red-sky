"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUp, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile: a sticky bottom bar with the only two actions that matter — call,
 * or start a quote. Desktop: a quiet back-to-top button once scrolled.
 *
 * The bar is why every page's footer carries `pb-24 md:pb-8`: without that
 * padding the bar would cover the last row of footer links on a phone.
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
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        aria-hidden={!scrolled}
        tabIndex={scrolled ? 0 : -1}
        className={`hidden md:flex fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white border border-line text-accent-900 shadow-[var(--shadow-lift)] items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all duration-300 cursor-pointer ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" aria-hidden />
      </button>

      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 bg-white/95 backdrop-blur-md border-t border-line shadow-[0_-8px_24px_-12px_rgb(17_47_53/0.25)] transition-transform duration-300 ${
          scrolled ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!scrolled}
      >
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={site.phone.href}
            tabIndex={scrolled ? 0 : -1}
            className="btn btn-secondary w-full"
          >
            <Phone className="w-4 h-4 text-brand-600" aria-hidden />
            Call us
          </a>
          <Link
            href="/quote"
            tabIndex={scrolled ? 0 : -1}
            className="btn btn-primary w-full"
          >
            Get a quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}
