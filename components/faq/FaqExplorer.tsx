"use client";

import React, { useId, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Minus, Phone, Plus, Search } from "lucide-react";
import { faqData, faqCategories } from "@/lib/faqData";
import { site } from "@/lib/site";

const ALL = "All questions";

export default function FaqExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);
  const baseId = useId();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqData.filter((item) => {
      const matchesCategory = activeCategory === ALL || item.category === activeCategory;
      const matchesSearch =
        q === "" ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const categories = [ALL, ...faqCategories];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="shell max-w-[1000px]">
        {/* Search */}
        <div className="max-w-xl mx-auto mb-7">
          <label htmlFor="faq-search" className="sr-only">
            Search frequently asked questions
          </label>
          <div className="relative">
            <Search
              className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden
            />
            <input
              id="faq-search"
              type="search"
              placeholder="Search — pricing, compliance, switching…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="field pl-11 rounded-full"
            />
          </div>
        </div>

        {/* Category filters */}
        <div
          role="group"
          aria-label="Filter questions by category"
          className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center mb-9 sm:mb-12"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={isActive}
                className={`min-h-11 px-4 sm:px-5 rounded-full text-[13px] sm:text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-brand-600 text-white"
                    : "bg-surface text-ink/80 hover:bg-surface-2 border border-line"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results */}
        <p className="sr-only" role="status">
          {filtered.length} {filtered.length === 1 ? "question" : "questions"} shown
        </p>

        {filtered.length > 0 ? (
          <ul className="space-y-3">
            {filtered.map((faq) => {
              const isOpen = openId === faq.id;
              const panelId = `${baseId}-${faq.id}-panel`;
              const btnId = `${baseId}-${faq.id}-btn`;
              return (
                <li
                  key={faq.id}
                  className={`rounded-[20px] border transition-colors ${
                    isOpen
                      ? "border-brand-200 bg-white shadow-[var(--shadow-soft)]"
                      : "border-line bg-surface hover:border-brand-200"
                  }`}
                >
                  <h2 className="m-0">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      className="w-full flex items-start justify-between gap-4 text-left p-5 sm:p-6 cursor-pointer"
                    >
                      <span>
                        <span className="block text-[11px] uppercase tracking-wider text-muted mb-1">
                          {faq.category}
                        </span>
                        <span className="block text-[15px] sm:text-[17px] font-medium text-ink leading-snug">
                          {faq.question}
                        </span>
                      </span>
                      <span
                        className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                          isOpen ? "bg-brand-600 text-white" : "bg-white text-ink border border-line"
                        }`}
                        aria-hidden
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 sm:px-6 pb-6 text-[15px] text-body/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="text-center py-14 max-w-md mx-auto">
            <p className="text-ink font-medium mb-2">
              Nothing matches &ldquo;{query}&rdquo;.
            </p>
            <p className="text-sm text-muted mb-5">
              Try a different word, or just ask us — we answer faster than this page does.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActiveCategory(ALL);
              }}
              className="btn btn-secondary"
            >
              Reset search
            </button>
          </div>
        )}

        {/* Still stuck */}
        <div className="mt-12 rounded-[24px] border border-line bg-surface p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="flex-1">
            <h2 className="text-xl font-medium text-ink mb-1.5">Didn&apos;t find it?</h2>
            <p className="text-[15px] text-body/75">
              Ask us directly — {site.responsePromise.toLowerCase()}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={site.phone.href} className="btn btn-secondary">
              <Phone className="w-4 h-4 text-brand-600" aria-hidden />
              {site.phone.display}
            </a>
            <Link href="/contact" className="btn btn-primary">
              Send a message
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
