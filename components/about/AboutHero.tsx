import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

const stats = [
  { value: "2018", label: "Cleaning since" },
  { value: "15,000+", label: "Spaces cleaned" },
  { value: "100%", label: "Vetted, insured cleaners" },
  { value: "0", label: "Harsh chemicals used" },
];

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-brand-200/50 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-48 -left-32 w-[380px] h-[380px] rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow mb-5">
              About RedSky
            </span>
            <h1 className="text-[34px] leading-[1.1] sm:text-5xl lg:text-[56px] font-medium tracking-tight text-ink mb-5">
              Cleaning that&apos;s kind to your home{" "}
              <span className="text-brand-600">and the people in it</span>
            </h1>
            <p className="text-base sm:text-lg text-body/80 leading-relaxed mb-8 max-w-lg">
              We&apos;re a local team that believes a truly clean space should be safe for your
              family, honest on price, and done by cleaners who are treated well.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/quote" className="btn btn-primary h-[54px] px-7 text-[15px]">
                Get a free quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link href="/services" className="btn btn-secondary h-[54px] px-7 text-[15px]">
                Our services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/3] shadow-[0_30px_80px_-30px_rgb(0_83_163/0.45)] ring-1 ring-brand-100">
              <Image
                src="/images/about/about-img-1.jpg"
                alt="RedSky cleaner wiping a kitchen window"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-3 sm:-left-6 -bottom-6 card px-4 py-3.5 flex items-center gap-3 whitespace-nowrap">
              <span className="w-11 h-11 rounded-2xl bg-accent-50 text-accent-600 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] uppercase tracking-wider text-muted">Our promise</span>
                <span className="block text-sm font-semibold text-ink">Not happy? We re-clean free</span>
              </span>
            </div>
          </div>
        </div>

        {/* Stats strip — 1px gaps over a line-coloured background form the dividers */}
        <dl className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-3xl overflow-hidden border border-line shadow-[var(--shadow-soft)]">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-6 sm:py-7 text-center flex flex-col-reverse">
              <dt className="mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl sm:text-4xl font-medium text-brand-600 tracking-tight">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
