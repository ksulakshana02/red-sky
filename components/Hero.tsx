"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Phone, ShieldCheck, UserRound } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const trust = [
  { icon: ShieldCheck, label: "Insured & police-checked" },
  { icon: BadgeCheck, label: "Audited to a written scope" },
  { icon: UserRound, label: "One named manager" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-white to-white">
      {/* Drifting brand glows — decorative, paused under prefers-reduced-motion */}
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-40 -right-32 w-[620px] h-[620px] rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob-slow pointer-events-none absolute top-48 -left-40 w-[480px] h-[480px] rounded-full bg-accent-100/60 blur-3xl"
      />

      <div className="relative shell-wide pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease }}
              className="eyebrow mb-6"
            >
              Facility services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="text-[38px] leading-[1.05] sm:text-[52px] lg:text-[64px] font-medium tracking-tight text-ink mb-6"
            >
              One partner for{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                every site
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute left-0 -bottom-2 w-full h-3 text-brand-300"
                  preserveAspectRatio="none"
                >
                  <path
                    className="animate-draw"
                    d="M2 9 C 80 2, 220 2, 298 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              you run
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="text-lg sm:text-xl text-body/80 leading-relaxed mb-9 max-w-lg"
            >
              Commercial cleaning, industrial cleaning and full facility management —
              under one contract, across Australia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25, ease }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link href="/quote" className="btn btn-primary h-[56px] px-8 text-[15px]">
                Book a site walkthrough
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <a href={site.phone.href} className="btn btn-secondary h-[56px] px-8 text-[15px]">
                <Phone className="w-4 h-4 text-brand-600" aria-hidden />
                {site.phone.display}
              </a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-2.5 pt-7 border-t border-line"
            >
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-muted">
                  <Icon className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] lg:aspect-[5/4.6] shadow-[0_40px_90px_-40px_rgb(17_47_53/0.55)] ring-1 ring-line">
              <Image
                src="/images/slider/bg-img.jpg"
                alt="A RedSky team member servicing a commercial building"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-accent-950/40 via-transparent to-transparent"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease }}
              className="absolute left-4 sm:-left-6 -bottom-6 card px-5 py-4 flex items-center gap-3.5"
            >
              <span className="w-11 h-11 rounded-2xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                <UserRound className="w-5 h-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-wider text-muted">
                  Single point of contact
                </span>
                <span className="block text-[15px] font-semibold text-ink">
                  A named account manager
                </span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
