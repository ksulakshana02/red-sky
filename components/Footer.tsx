"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { site, mainNav, footerServices } from "@/lib/site";
import Logo from "@/components/Logo";

const socials = [
  { label: "Facebook", href: site.social.facebook, d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { label: "Instagram", href: site.social.instagram, d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "X (Twitter)", href: site.social.x, d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "YouTube", href: site.social.youtube, d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

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
    <footer className="w-full mt-auto">
      {/* CTA band */}
      <div className="px-4 sm:px-6 lg:px-10 relative z-10 pt-10 -mb-20 sm:-mb-24">
        <div className="relative overflow-hidden max-w-[1360px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 px-6 sm:px-12 lg:px-16 py-10 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-[0_30px_60px_-30px_rgb(0_83_163/0.6)]">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-24 w-80 h-80 rounded-full bg-white/10" />
          <div aria-hidden className="pointer-events-none absolute right-40 -bottom-28 w-56 h-56 rounded-full bg-accent-300/20" />
          <div className="relative max-w-xl">
            <h2 className="text-white text-[28px] sm:text-4xl lg:text-[44px] leading-tight font-medium tracking-tight mb-3">
              Ready for a fresher, healthier space?
            </h2>
            <p className="text-white/80 text-base sm:text-lg">
              Get an instant, no-obligation quote in under a minute.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/quote" className="btn btn-light h-[54px] px-7 text-[15px]">
              Get a free quote
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <a href={site.phone.href} className="btn btn-ghost-light h-[54px] px-7 text-[15px]">
              <Phone className="w-4 h-4" aria-hidden />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-brand-950 text-white/70 pt-32 sm:pt-40 pb-24 md:pb-8">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
            {/* Brand + newsletter */}
            <div className="sm:col-span-2 lg:col-span-4">
              <Link href="/" aria-label={`${site.name} — home`} className="inline-block mb-5">
                <Logo variant="light" />
              </Link>
              <p className="text-[15px] text-white/70 leading-relaxed mb-6 max-w-sm">{site.tagline}</p>

              <p className="text-sm font-semibold text-white mb-3">Cleaning tips &amp; offers, monthly</p>
              {subscribed ? (
                <p className="inline-flex items-center gap-2 text-sm text-accent-300" role="status">
                  <CheckCircle2 className="w-4 h-4" aria-hidden />
                  Thanks — you&apos;re subscribed!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                  <label htmlFor="footer-email" className="sr-only">Email address</label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-0 h-12 rounded-full bg-white/10 border border-white/15 px-5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-300 focus:bg-white/15 transition-colors"
                  />
                  <button type="submit" className="btn btn-primary h-12 px-5 shadow-none">
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Services */}
            <div className="lg:col-span-3">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
              <ul className="grid grid-cols-1 gap-2.5 text-[15px]">
                {footerServices.map((s) => (
                  <li key={s}>
                    <Link href="/services" className="hover:text-white transition-colors">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="lg:col-span-2">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="grid gap-2.5 text-[15px]">
                {mainNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="hover:text-white transition-colors">
                      {n.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/quote" className="hover:text-white transition-colors">
                    Instant quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Get in touch</h3>
              <ul className="space-y-3.5 text-[15px]">
                <li>
                  <a href={site.phone.href} className="flex items-start gap-3 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 mt-1 text-brand-300 shrink-0" aria-hidden />
                    {site.phone.display}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-start gap-3 hover:text-white transition-colors break-all">
                    <Mail className="w-4 h-4 mt-1 text-brand-300 shrink-0" aria-hidden />
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-brand-300 shrink-0" aria-hidden />
                  {site.address}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-brand-300 shrink-0" aria-hidden />
                  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                    {site.hours.map((h) => (
                      <React.Fragment key={h.days}>
                        <dt>{h.days}</dt>
                        <dd className="text-white/90">{h.time}</dd>
                      </React.Fragment>
                    ))}
                  </dl>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-5 text-sm">
            <p className="text-white/50">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <ul className="flex items-center gap-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden>
                      <path d={s.d} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
