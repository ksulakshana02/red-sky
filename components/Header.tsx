"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  Menu,
  X,
  ShieldCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { site, mainNav, reviews } from "@/lib/site";
import Logo from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

/** Slim trust bar — reassurance first, contact second. */
export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-brand-700 text-white text-[13px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-white/90">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-300" aria-hidden />
            Fully insured &amp; police-checked cleaners
          </span>
          {reviews ? (
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-star text-star" aria-hidden />
              {reviews.rating}/5 from {reviews.count} reviews
            </span>
          ) : (
            <span className="hidden lg:inline-flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-star text-star" aria-hidden />
              Not happy? We&apos;ll re-clean for free
            </span>
          )}
        </div>
        <div className="flex items-center gap-5">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-1.5 hover:text-accent-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            {site.phone.display}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 hover:text-accent-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuTop, setMenuTop] = useState(76);
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    if (!open && navRef.current)
      setMenuTop(navRef.current.getBoundingClientRect().bottom);
    setOpen((v) => !v);
  };

  // Shadow + stronger background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when the route changes
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className={`w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_6px_24px_-12px_rgb(11_27_51/0.18)] border-b border-line"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[68px] sm:h-[76px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center shrink-0"
        >
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 rounded-full text-[15px] font-medium transition-colors ${
                    active
                      ? "text-brand-700 bg-brand-50"
                      : "text-ink/80 hover:text-brand-700 hover:bg-surface"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={site.phone.href}
            className="hidden xl:inline-flex items-center gap-2.5 pr-2 text-ink hover:text-brand-700 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
              <Phone className="w-4 h-4" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-wider text-muted">
                Call us
              </span>
              <span className="block text-sm font-semibold">
                {site.phone.display}
              </span>
            </span>
          </a>

          <Link href="/quote" className="btn btn-primary hidden sm:inline-flex">
            Free Quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden w-11 h-11 rounded-full border border-line bg-white text-ink hover:text-brand-700 hover:border-brand-200 flex items-center justify-center transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — portalled to <body>. When scrolled, the nav uses backdrop-filter,
          which makes it the containing block for position:fixed children; rendered inside
          the nav, this panel collapsed to zero height and never appeared. */}
      {open &&
        createPortal(
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 bottom-0 z-50"
            style={{ top: menuTop }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-ink/30 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <div className="relative bg-white border-t border-line shadow-xl rounded-b-3xl px-4 sm:px-6 pt-4 pb-6 max-h-full overflow-y-auto">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                          active
                            ? "bg-brand-50 text-brand-700"
                            : "text-ink hover:bg-surface"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <span
                            className="w-2 h-2 rounded-full bg-brand-500"
                            aria-hidden
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 pt-4 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link
                  href="/quote"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <a href={site.phone.href} className="btn btn-secondary w-full">
                  <Phone className="w-4 h-4" aria-hidden />
                  Call {site.phone.display}
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
}

export default function Header() {
  return (
    // On md+ the 40px trust bar scrolls away; only the nav stays pinned.
    <header id="header" className="w-full sticky top-0 md:-top-10 z-40">
      <TopBar />
      <Navbar />
    </header>
  );
}
