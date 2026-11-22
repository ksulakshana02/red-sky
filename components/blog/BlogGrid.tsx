"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blogData";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? blogPosts
        : blogPosts.filter((p) => p.category === activeCategory),
    [activeCategory],
  );

  const [featured, ...rest] = filtered;

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <div className="shell">
        {/* Category filter */}
        <div
          role="group"
          aria-label="Filter articles by topic"
          className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-center mb-9 sm:mb-12"
        >
          {blogCategories.map((cat) => {
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
                {cat === "All" ? "All articles" : cat}
              </button>
            );
          })}
        </div>

        <p className="sr-only" role="status">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"} shown
        </p>

        {/* Featured */}
        {featured && (
          <article className="group relative rounded-[28px] sm:rounded-[36px] bg-surface border border-line overflow-hidden mb-10 sm:mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-5 sm:p-8 lg:p-10">
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-surface-2">
                  <Image
                    src={featured.image}
                    alt=""
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="flex items-center gap-2.5 mb-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-brand-600 text-white font-semibold uppercase tracking-wide text-[11px]">
                    {featured.category}
                  </span>
                  <span className="text-muted inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    {featured.date}
                  </span>
                </div>

                <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-medium text-ink leading-tight tracking-tight mb-3">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="before:absolute before:inset-0 outline-none hover:text-brand-700 transition-colors"
                  >
                    {featured.title}
                  </Link>
                </h2>

                <p className="text-[15px] text-body/75 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <span className="inline-flex items-center gap-4 text-[13px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" aria-hidden />
                    {featured.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-brand-700">
                    Read article
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rest.map((post) => (
              <li key={post.slug} className="group relative flex flex-col">
                <div className="relative w-full aspect-[16/10] rounded-[22px] overflow-hidden mb-5 bg-surface ring-1 ring-line">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>

                <div className="flex items-center gap-2.5 mb-2.5 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-brand-700">
                    {post.category}
                  </span>
                  <span className="text-line-strong" aria-hidden>
                    •
                  </span>
                  <span className="text-muted inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" aria-hidden />
                    {post.date}
                  </span>
                </div>

                <h2 className="text-lg sm:text-xl font-medium text-ink leading-snug mb-2.5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="before:absolute before:inset-0 outline-none group-hover:text-brand-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-[14.5px] text-body/75 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted">
                  <Clock className="w-3.5 h-3.5" aria-hidden />
                  {post.readTime}
                </span>
              </li>
            ))}
          </ul>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-14">
            <p className="text-ink font-medium mb-2">No articles in this topic yet.</p>
            <button
              type="button"
              onClick={() => setActiveCategory("All")}
              className="btn btn-secondary mt-3"
            >
              Show all articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
