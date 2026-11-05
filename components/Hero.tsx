"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { reviews } from "@/lib/site";
import {
  ArrowRight,
  ShieldCheck,
  Leaf,
  BadgeCheck,
  Star,
  CalendarCheck,
  Check,
} from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const trustPoints = [
  { icon: ShieldCheck, label: "Fully insured & police-checked" },
  { icon: Leaf, label: "Eco-friendly, family-safe products" },
  { icon: BadgeCheck, label: "100% satisfaction re-clean guarantee" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      {/* Soft water-light glows */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full bg-brand-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="lg:col-span-6 xl:col-span-6"
          >
            <span className="eyebrow mb-5">
              Trusted local cleaners
            </span>

            <h1 className="text-[34px] leading-[1.1] sm:text-5xl lg:text-[56px] xl:text-[62px] font-medium tracking-tight text-ink mb-5">
              A spotless home,{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                without the effort
                <svg aria-hidden viewBox="0 0 300 12" className="absolute left-0 -bottom-1.5 w-full h-3 text-accent-400" preserveAspectRatio="none">
                  <path d="M2 9 C 80 2, 220 2, 298 8" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-body/80 leading-relaxed mb-8 max-w-xl">
              Professional home and office cleaning by vetted, friendly cleaners. Book online in
              60 seconds, get an upfront price, and come home to a fresh, healthy space.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/quote" className="btn btn-primary h-[54px] px-7 text-[15px]">
                Get my instant quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn btn-secondary h-[54px] px-7 text-[15px]">
                Browse services
              </Link>
            </div>

            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2.5 mb-8">
              {trustPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-body">
                  <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* Social proof — only shown with real review data */}
            {reviews && (
              <div className="flex items-center gap-3 pt-6 border-t border-line">
                <div className="flex items-center gap-1" aria-label={`Rated ${reviews.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-star text-star" aria-hidden />
                  ))}
                </div>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-ink">{reviews.rating}/5</span> from {reviews.count} verified reviews
                </p>
              </div>
            )}
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3.4] sm:aspect-[4/3] lg:aspect-[5/5.4] shadow-[0_30px_80px_-30px_rgb(0_83_163/0.45)] ring-1 ring-brand-100">
              <Image
                src="/images/slider/bg-img.jpg"
                alt="RedSky cleaner wiping down a bright, tidy kitchen"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent" />
            </div>

            {/* Floating card: availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease }}
              className="absolute left-3 sm:-left-6 bottom-6 sm:bottom-10 card px-4 py-3.5 flex items-center gap-3 whitespace-nowrap"
            >
              <span className="w-11 h-11 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-5 h-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-wider text-muted">Flexible booking</span>
                <span className="block text-sm font-semibold text-ink">Open 7 days a week</span>
              </span>
            </motion.div>

            {/* Floating card: checklist */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease }}
              className="hidden sm:block absolute right-3 sm:-right-4 top-6 sm:top-10 card px-5 py-4 w-[230px]"
            >
              <p className="text-xs font-semibold text-ink mb-2.5">Today&apos;s clean</p>
              <ul className="space-y-2">
                {["Kitchen sanitised", "Bathrooms polished", "Floors mopped"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-[13px] text-body">
                    <span className="w-4 h-4 rounded-full bg-brand-600 text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} aria-hidden />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
