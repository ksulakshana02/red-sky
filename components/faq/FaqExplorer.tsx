"use client";

import React, { useState } from "react";
import { Search, Plus, Minus } from "lucide-react";
import { faqData, FaqItem } from "@/lib/faqData";

export default function FaqExplorer() {
  const [activeCategory, setActiveCategory] = useState<string>("All Questions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndex, setOpenIndex] = useState<string | null>("g-1");

  const categories = [
    "All Questions",
    "General & Booking",
    "Eco Products & Safety",
    "Pricing & Payments",
    "Home Access & Keys",
    "Guarantees & Insurance",
  ];

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "All Questions" || item.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar Container */}
        <div className="max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search questions (e.g. pets, pricing, keys, supplies)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FBFBFB] border border-slate-200/80 rounded-full h-[48px] pl-11 pr-5 text-sm text-[#0E152B] placeholder:text-slate-400 focus:outline-none focus:border-[#DC2626] focus:bg-white transition-all shadow-2xs font-normal"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center mb-8 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#DC2626] text-white shadow-xs"
                    : "bg-[#F8FAFC] text-[#0E152B]/80 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-3 sm:space-y-3.5 max-w-4xl mx-auto">
            {filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-[22px] overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "bg-[#FFF8F8] border border-red-200 shadow-2xs"
                      : "bg-[#FBFBFB] border border-slate-200/70 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left text-sm sm:text-base font-normal font-serif text-[#0E152B] hover:text-[#DC2626] transition-colors cursor-pointer select-none"
                  >
                    <div className="pr-4">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500 font-sans block mb-1">
                        {faq.category}
                      </span>
                      <span className="leading-snug">{faq.question}</span>
                    </div>

                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isOpen
                          ? "bg-[#DC2626] text-white rotate-180"
                          : "bg-white text-slate-600 border border-slate-200/70 shadow-2xs rotate-0"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-[14px] text-[#0E152B]/75 leading-relaxed font-normal border-t border-red-100/70 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 max-w-md mx-auto">
            <p className="text-sm font-normal mb-2">No matching questions found for &ldquo;{searchQuery}&rdquo;.</p>
            <p className="text-xs text-slate-400 mb-4">
              Try searching a different word or select &ldquo;All Questions&rdquo; to browse all topics.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All Questions");
              }}
              className="text-xs font-medium text-[#DC2626] hover:underline"
            >
              Reset search &amp; filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

