"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost, blogPosts } from "@/lib/blogData";

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Organizing",
    "Eco Cleaning",
    "Moving Tips",
    "Bathroom Care",
    "Air Quality",
    "Commercial Care",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    if (activeCategory === "All") return true;
    return post.category === activeCategory;
  });

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <section className="py-8 sm:py-14 lg:py-16 bg-white relative z-10 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap justify-start sm:justify-center mb-8 sm:mb-12">
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
                {cat === "All" ? "All Articles" : cat}
              </button>
            );
          })}
        </div>

        {/* Featured Post Card (When "All" or if posts exist) */}
        {featuredPost && (
          <div className="mb-10 sm:mb-14">
            <div className="group rounded-[28px] sm:rounded-[36px] bg-[#FFF8F8] border border-red-100/90 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center p-5 sm:p-8 lg:p-10">
                
                {/* Photo (7 cols on lg) */}
                <div className="lg:col-span-7">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="relative block w-full aspect-[16/10] sm:aspect-[16/9] rounded-[22px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-2xs"
                  >
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500 rounded-[22px] sm:rounded-[28px]"
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </Link>
                </div>

                {/* Content (5 cols on lg) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-3">
                      <span className="px-3 py-1 rounded-full bg-white border border-red-100 text-[#DC2626] font-medium text-[11px]">
                        {featuredPost.category}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl lg:text-[28px] font-normal font-serif text-[#0E152B] leading-[1.25] mb-3 group-hover:text-[#DC2626] transition-colors">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[#0E152B]/75 leading-relaxed font-normal mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Author Byline & Read Link */}
                  <div className="pt-4 border-t border-red-100/70 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-xs">
                        <span className="font-medium text-[#0E152B] block leading-tight">
                          {featuredPost.author.name}
                        </span>
                        <span className="text-slate-500 text-[11px]">
                          {featuredPost.author.role}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                    >
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col justify-between bg-white rounded-[26px] p-4 sm:p-5 border border-slate-200/80 hover:border-red-200 hover:shadow-md transition-all duration-300"
              >
                <div>
                  {/* Photo */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block w-full aspect-[16/10] rounded-[20px] overflow-hidden mb-4 bg-slate-100 shadow-2xs"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500 rounded-[20px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                    <span className="font-medium text-[#DC2626] text-[11px] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400 text-[11px]">
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400 text-[11px]">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] leading-snug mb-2 group-hover:text-[#DC2626] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-[13px] text-[#0E152B]/70 leading-relaxed font-normal mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer with Author & Read More */}
                <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-[#0E152B]/80 font-normal">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#DC2626] hover:text-[#B91C1C] transition-colors"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          filteredPosts.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No articles found in this category.
            </div>
          )
        )}

        {/* Clean Service Booking Help Card */}
        <div className="mt-12 sm:mt-16 rounded-[24px] sm:rounded-[32px] p-6 sm:p-9 bg-[#FFF8F8] border border-red-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left max-w-xl">
            <h3 className="text-lg sm:text-xl font-normal font-serif text-[#0E152B] mb-1">
              Prefer professional hands to handle the cleaning?
            </h3>
            <p className="text-xs sm:text-sm text-[#0E152B]/70 font-normal leading-relaxed">
              Book our vetted, non-toxic cleaning specialists for your home or office in under 60 seconds.
            </p>
          </div>

          <Link
            href="/services#service-booking"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
          >
            <span>Book a cleaning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

