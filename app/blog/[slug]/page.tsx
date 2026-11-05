import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, BlogPost } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | RedSky Cleaning Service",
    };
  }

  return {
    title: `${post.title} | RedSky Cleaning Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find 2 related articles (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="page-wrapper bg-white text-ink font-sans antialiased min-h-screen flex flex-col selection:bg-brand-500 selection:text-white font-[family-name:var(--font-parkinsans)]">
      {/* Global Header */}
      <Header />

      <main className="flex-1 py-6 sm:py-10">
        <article className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Link */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 hover:text-brand-600 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all guides</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-medium">
                {post.category}
              </span>
            </div>

            {/* Main Title - Elegant, Not Bold */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-normal font-serif text-ink leading-[1.2] tracking-tight mb-4 sm:mb-6">
              {post.title}
            </h1>

            {/* Author Byline & Date */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm text-slate-500 font-normal">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-ink font-medium">{post.author.name}</span>
                <span className="text-slate-400">({post.author.role})</span>
              </div>

              <span>•</span>

              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>

              <span>•</span>

              <span className="flex items-center gap-1 text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto text-ink/80 font-normal leading-relaxed text-sm sm:text-base space-y-6">
            
            {/* Intro Lead */}
            <p className="text-base sm:text-lg text-ink/85 font-normal leading-relaxed pb-2 border-b border-slate-100">
              {post.content.intro}
            </p>

            {/* Content Sections */}
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="pt-2">
                <h2 className="text-xl sm:text-2xl font-normal font-serif text-ink leading-snug mb-3">
                  {section.heading}
                </h2>

                <div className="space-y-3 mb-4">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-ink/75 leading-relaxed font-normal">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Optional Checklist */}
                {section.checklist && section.checklist.length > 0 && (
                  <div className="bg-surface rounded-[20px] p-5 sm:p-6 border border-slate-200/80 my-4 space-y-2.5">
                    <span className="text-xs uppercase tracking-wider font-medium text-slate-500 block mb-2">
                      Key Steps to Follow
                    </span>
                    <ul className="space-y-2">
                      {section.checklist.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/80">
                          <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Pro Tip Callout Box */}
            <div className="rounded-[22px] p-5 sm:p-7 bg-brand-50 border-l-3 border-brand-600 border-y border-r border-brand-100 my-8">
              <span className="text-xs uppercase tracking-wider font-medium text-brand-600 block mb-1.5">
                Pro Tip from Our Technicians
              </span>
              <p className="text-xs sm:text-[14.5px] text-ink/85 font-normal leading-relaxed">
                {post.content.proTip}
              </p>
            </div>

            {/* Conclusion */}
            <div className="pt-2">
              <h3 className="text-lg sm:text-xl font-normal font-serif text-ink mb-2">
                Wrapping Up
              </h3>
              <p className="text-sm sm:text-base text-ink/75 font-normal leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Author Bio Card */}
            <div className="rounded-[24px] p-6 sm:p-7 bg-surface border border-slate-200/80 my-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium block mb-0.5">
                  Written by
                </span>
                <h4 className="text-base sm:text-lg font-normal font-serif text-ink mb-1">
                  {post.author.name}
                </h4>
                <p className="text-xs text-brand-600 font-medium mb-2">
                  {post.author.role}
                </p>
                <p className="text-xs sm:text-[13px] text-ink/70 font-normal leading-relaxed">
                  Sharing practical, eco-friendly cleaning advice developed through years of residential and commercial sanitation experience.
                </p>
              </div>
            </div>

          </div>

          {/* Related Articles Section */}
          <div className="max-w-4xl mx-auto pt-10 sm:pt-14 border-t border-slate-200/80 mt-10">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  More from our journal
                </span>
                <h3 className="text-xl sm:text-2xl font-normal font-serif text-ink">
                  Related Articles
                </h3>
              </div>
              <Link
                href="/blog"
                className="text-xs sm:text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.slug}
                  className="group bg-white rounded-[22px] p-4 border border-slate-200/70 hover:border-brand-200 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="relative block w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-3 bg-slate-100"
                    >
                      <Image
                        src={rPost.image}
                        alt={rPost.title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </Link>

                    <span className="text-[11px] font-medium text-brand-600 block mb-1">
                      {rPost.category}
                    </span>

                    <h4 className="text-sm font-normal font-serif text-ink leading-snug mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                      <Link href={`/blog/${rPost.slug}`}>{rPost.title}</Link>
                    </h4>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                    <span>{rPost.date}</span>
                    <span className="text-brand-600 font-medium group-hover:translate-x-0.5 transition-transform">
                      Read →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Helpful Service Box */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16 rounded-[24px] sm:rounded-[32px] p-6 sm:p-9 bg-brand-50 border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h3 className="text-lg sm:text-xl font-normal font-serif text-ink mb-1">
                Need help putting these cleaning tips to work?
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 font-normal leading-relaxed">
                Book our certified technicians to deep clean your home or office using non-toxic botanical supplies.
              </p>
            </div>

            <Link
              href="/quote"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs sm:text-sm transition-colors shadow-xs"
            >
              <span>Schedule a cleaning</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </article>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

