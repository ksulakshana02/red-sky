"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Plus } from "lucide-react";
import { faqData } from "@/lib/faqData";
import { site } from "@/lib/site";

interface FaqPreviewProps {
  /** Question ids from lib/faqData.ts — keep it to 3–5 so the section stays short. */
  ids: string[];
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Use a soft tinted background (alternate with neighbouring sections). */
  tinted?: boolean;
}

/**
 * Compact, page-specific FAQ. Every page shows only the few questions that
 * matter at that step and links to /faq for the rest. All answers live in
 * lib/faqData.ts, so there is one place to edit them.
 */
export default function FaqPreview({
  ids,
  eyebrow = "FAQ",
  title = "Quick answers",
  description = "The questions we hear most. Can't find yours? We're happy to help.",
  tinted = false,
}: FaqPreviewProps) {
  const items = ids
    .map((id) => faqData.find((f) => f.id === id))
    .filter((f): f is (typeof faqData)[number] => Boolean(f));
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={`py-16 sm:py-20 ${tinted ? "bg-surface" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Intro + escape hatches */}
        <div className="lg:col-span-4">
          <span className="eyebrow mb-4">{eyebrow}</span>
          <h2 className="text-[28px] sm:text-4xl font-medium tracking-tight text-ink leading-tight mb-3">{title}</h2>
          <p className="text-body/80 mb-6">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/faq" className="btn btn-secondary">
              All FAQs
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <a href={site.phone.href} className="btn text-brand-700 hover:bg-brand-50 px-4">
              <Phone className="w-4 h-4" aria-hidden />
              Ask us
            </a>
          </div>
        </div>

        {/* Accordion */}
        <ul className="lg:col-span-8 flex flex-col gap-3">
          {items.map((item, idx) => {
            const isOpen = open === idx;
            const panelId = `${baseId}-panel-${idx}`;
            const btnId = `${baseId}-btn-${idx}`;
            return (
              <li
                key={item.id}
                className={`rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-brand-200 shadow-[var(--shadow-soft)]" : "border-line hover:border-brand-200"
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 text-[15px] sm:text-base font-medium text-ink cursor-pointer"
                  >
                    {item.question}
                    <span
                      className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? "bg-brand-600 text-white rotate-45" : "bg-brand-50 text-brand-700"
                      }`}
                      aria-hidden
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>
                </h3>
                {/* grid-rows trick gives a smooth height animation without JS measuring */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-[15px] text-body/80 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
