"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import Reveal from "@/components/Reveal";

/**
 * Renders nothing when there are no testimonials, so an empty list is a
 * valid state rather than a broken section.
 */
export default function TestimonialsSection({ limit = 3 }: { limit?: number }) {
  const items = testimonials.slice(0, limit);
  const [current, setCurrent] = useState(0);

  if (items.length === 0) return null;

  const prev = () => setCurrent((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 sm:py-24 bg-surface"
    >
      <div className="shell">
        <Reveal className="max-w-xl mb-12">
          <span className="eyebrow eyebrow-accent mb-4">Client feedback</span>
          <h2
            id="testimonials-heading"
            className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15]"
          >
            What they say after the first quarter
          </h2>
        </Reveal>

        {/* Desktop: all visible */}
        <ul className="hidden md:grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <Reveal
              as="li"
              key={t.quote}
              delay={i * 0.08}
              className="card p-7 flex flex-col h-full"
            >
              <Quote className="w-8 h-8 text-brand-200 rotate-180 mb-5" aria-hidden />
              <blockquote className="text-[15px] text-body/85 leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <footer className="pt-6 mt-6 border-t border-line">
                <p className="text-[15px] font-medium text-ink">{t.role}</p>
                <p className="text-[13px] text-muted">{t.context}</p>
              </footer>
            </Reveal>
          ))}
        </ul>

        {/* Mobile: one at a time */}
        <div className="md:hidden">
          <div className="card p-6 flex flex-col min-h-[260px]">
            <Quote className="w-7 h-7 text-brand-200 rotate-180 mb-4" aria-hidden />
            <blockquote
              className="text-[15px] text-body/85 leading-relaxed flex-1"
              aria-live="polite"
            >
              {items[current].quote}
            </blockquote>
            <footer className="pt-5 mt-5 border-t border-line">
              <p className="text-[15px] font-medium text-ink">{items[current].role}</p>
              <p className="text-[13px] text-muted">{items[current].context}</p>
            </footer>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center gap-2">
              {items.map((t, i) => (
                <button
                  key={t.quote}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Show testimonial ${i + 1} of ${items.length}`}
                  aria-current={current === i}
                  className="py-2 cursor-pointer"
                >
                  <span
                    className={`block h-2 rounded-full transition-all ${
                      current === i ? "w-6 bg-brand-600" : "w-2 bg-line-strong"
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white border border-line text-ink flex items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-white border border-line text-ink flex items-center justify-center hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
