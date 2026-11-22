"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Clock,
  X,
} from "lucide-react";
import { site, mainNav, reviews, type NavItem } from "@/lib/site";
import Logo from "@/components/Logo";

/**
 * Which nav item is the current page.
 *
 * Only the path decides this — a hash or query string in the href is
 * stripped, because neither is available during server rendering. That is
 * why every nav item needs its own route: two items sharing a path (as
 * "Services" -> /services and "Industries" -> /services#industries once
 * did) are indistinguishable here, and both light up at once.
 */
function isActive(pathname: string, href: string) {
  const path = href.split(/[#?]/)[0];
  if (!path) return false;
  if (path === "/") return pathname === "/";
  // A child route keeps its parent highlighted: /services/office-cleaning
  // marks "Services" as current.
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Slim utility bar — compliance reassurance first, contact second. */
export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-accent-900 text-white text-[13px] on-dark">
      <div className="shell-wide h-10 flex items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-white/85">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-accent-300" aria-hidden />
            Fully insured · police-checked teams · documented SWMS
          </span>
          {reviews && (
            <span className="hidden xl:inline-flex items-center gap-1.5">
              {reviews.rating}/5 from {reviews.count} reviews on {reviews.source}
            </span>
          )}
          <span className="hidden lg:inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent-300" aria-hidden />
            {site.responsePromise}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={site.phone.href}
            className="inline-flex items-center gap-1.5 rounded hover:text-accent-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden />
            {site.phone.display}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden lg:inline-flex items-center gap-1.5 rounded hover:text-accent-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden />
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}

/** Desktop dropdown for a nav item that has children. */
function NavDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = isActive(pathname, item.href);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // A short delay stops the panel flickering shut as the pointer crosses the gap
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  // Escape closes and returns focus to the trigger
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape" && open) {
      setOpen(false);
      wrapRef.current?.querySelector("button")?.focus();
    }
  };

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onKeyDown={onKeyDown}
      // Closing on focus leaving the whole group keeps keyboard users in sync
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        // The trigger stands in for the section's own link, so it has to
        // announce the current page the way the plain nav links do.
        aria-current={active ? "page" : undefined}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[15px] font-medium transition-colors cursor-pointer ${
          active || open
            ? "text-brand-700 bg-brand-50"
            : "text-ink/80 hover:text-brand-700 hover:bg-surface"
        }`}
      >
        {item.label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <div
        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[430px] transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-1 invisible pointer-events-none"
        }`}
      >
        <ul className="rounded-3xl border border-line bg-white shadow-[var(--shadow-lift)] p-2.5">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 rounded-2xl px-3.5 py-3 hover:bg-surface transition-colors"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 shrink-0 transition-colors" aria-hidden />
                <span>
                  <span className="block text-[15px] font-medium text-ink group-hover:text-brand-700 transition-colors">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="block text-[13px] text-muted leading-snug mt-0.5">
                      {child.description}
                    </span>
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuTop, setMenuTop] = useState(76);
  const [expanded, setExpanded] = useState<string | null>("Services");
  const navRef = useRef<HTMLElement>(null);

  const toggleMenu = useCallback(() => {
    if (!open && navRef.current) {
      setMenuTop(navRef.current.getBoundingClientRect().bottom);
    }
    setOpen((v) => !v);
  }, [open]);

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
          ? "bg-white/92 backdrop-blur-md shadow-[0_6px_24px_-14px_rgb(17_47_53/0.3)] border-b border-line"
          : "bg-white border-b border-line/60"
      }`}
    >
      <div className="shell-wide h-[66px] sm:h-[76px] flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center shrink-0 rounded"
        >
          <Logo priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {mainNav.map((item) =>
            item.children ? (
              <NavDropdown key={item.href} item={item} pathname={pathname} />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={`block px-3.5 py-2 rounded-full text-[15px] font-medium transition-colors ${
                    isActive(pathname, item.href)
                      ? "text-brand-700 bg-brand-50"
                      : "text-ink/80 hover:text-brand-700 hover:bg-surface"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={site.phone.href}
            className="hidden xl:inline-flex items-center gap-2.5 pr-1 rounded text-ink hover:text-brand-700 transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center">
              <Phone className="w-4 h-4" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-[11px] uppercase tracking-wider text-muted">
                Speak to us
              </span>
              <span className="block text-sm font-semibold">{site.phone.display}</span>
            </span>
          </a>

          <Link href="/quote" className="btn btn-primary hidden sm:inline-flex">
            Request a quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>

          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden w-11 h-11 rounded-full border border-line bg-white text-ink hover:text-brand-700 hover:border-brand-200 flex items-center justify-center transition-colors cursor-pointer"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — portalled to <body>. Once scrolled, the nav uses
          backdrop-filter, which makes it the containing block for
          position:fixed children; rendered inside the nav this panel
          collapsed to zero height and never appeared. */}
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
              className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <div className="relative bg-white border-t border-line shadow-xl rounded-b-3xl px-4 sm:px-6 pt-4 pb-6 max-h-full overflow-y-auto overscroll-contain">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  const active = isActive(pathname, item.href);
                  const isExpanded = expanded === item.label;

                  if (!item.children) {
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors ${
                            active ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-surface"
                          }`}
                        >
                          {item.label}
                          {active && (
                            <span className="w-2 h-2 rounded-full bg-brand-600" aria-hidden />
                          )}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : item.label)}
                        aria-expanded={isExpanded}
                        aria-current={active ? "page" : undefined}
                        aria-controls={`m-sub-${item.label}`}
                        className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-medium transition-colors cursor-pointer ${
                          active ? "bg-brand-50 text-brand-700" : "text-ink hover:bg-surface"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          aria-hidden
                        />
                      </button>
                      <div
                        id={`m-sub-${item.label}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="overflow-hidden pl-3">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-[15px] text-body hover:bg-surface hover:text-brand-700 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-300 shrink-0" aria-hidden />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
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
                  Request a quote
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
    // On md+ the 40px utility bar scrolls away; only the nav stays pinned.
    <header id="header" className="w-full sticky top-0 md:-top-10 z-40">
      <TopBar />
      <Navbar />
    </header>
  );
}
