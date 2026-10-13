"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "The Deep Cleaning and Organizing",
    category: "Organizing",
    date: "Jan 15, 2025",
    image: "/images/image-gallery/1.jpg",
    excerpt: "Practical tips and room-by-room strategies to declutter, deep clean, and keep your living spaces organized all year round.",
    link: "/blog/the-deep-cleaning-and-organizing",
  },
  {
    title: "Eco Friendly Products for Cleaning",
    category: "Cleaning",
    date: "Jan 15, 2025",
    image: "/images/image-gallery/2.jpg",
    excerpt: "Discover the best non-toxic, plant-based cleaning solutions that keep your home sparkling without harsh chemical residues.",
    link: "/blog/eco-friendly-products-for-cleaning",
  },
  {
    title: "House Cleaning Services Before Moving in",
    category: "Tips",
    date: "Jan 15, 2025",
    image: "/images/image-gallery/3.jpg",
    excerpt: "Why a thorough pre-move-in deep sanitization is essential before settling into your new residence.",
    link: "/blog/house-cleaning-services-before-moving-in",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-10 sm:py-14 lg:py-16 bg-white relative z-10 overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-medium text-[#DC2626] mb-2 sm:mb-3">
            From Our Blog
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal text-[#0E152B] leading-[1.18] font-serif tracking-tight">
            Cleaning Tips From Pros
          </h2>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              className="group flex flex-col items-start bg-white rounded-[24px] sm:rounded-[32px] transition-all duration-300"
            >
              {/* Featured Image Container */}
              <Link
                href={post.link}
                className="relative w-full aspect-[16/10] rounded-[20px] sm:rounded-[28px] overflow-hidden mb-4 sm:mb-5 bg-slate-100 shadow-xs block"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 rounded-[20px] sm:rounded-[28px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Meta: Category & Date */}
              <div className="flex items-center gap-2.5 sm:gap-3 px-1 mb-2.5 sm:mb-3 text-xs sm:text-sm">
                <span className="font-medium uppercase tracking-wider text-[#DC2626]">
                  {post.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>

              {/* Post Title */}
              <h3 className="text-lg sm:text-xl md:text-[22px] font-normal text-[#0E152B] font-serif leading-snug px-1 mb-2 sm:mb-3 group-hover:text-[#DC2626] transition-colors">
                <Link href={post.link}>{post.title}</Link>
              </h3>

              {/* Post Excerpt */}
              <p className="text-[13.5px] sm:text-[14.5px] text-[#0E152B]/70 leading-relaxed px-1 mb-4 sm:mb-5 line-clamp-2 font-normal">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <Link
                href={post.link}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#0E152B] group-hover:text-[#DC2626] transition-colors px-1 mt-auto"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* Center Bottom "More Tips" Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-medium text-xs sm:text-sm tracking-wide shadow-md transition-all duration-200"
          >
            More Tips
          </Link>
        </div>
      </div>
    </section>
  );
}
