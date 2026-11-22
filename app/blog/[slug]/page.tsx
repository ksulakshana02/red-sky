import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getPost } from "@/lib/blogData";
import { site, siteUrl } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

/** Monogram avatar — no stock headshots standing in for real people. */
function AuthorMark({ name, size = "sm" }: { name: string; size?: "sm" | "lg" }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className={`rounded-full bg-accent-900 text-white flex items-center justify-center font-semibold shrink-0 ${
        size === "lg" ? "w-14 h-14 text-base" : "w-9 h-9 text-xs"
      }`}
    >
      {initials}
    </span>
  );
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${siteUrl}${site.logo}` },
    },
  };

  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />

      <main id="main" className="flex-1 py-8 sm:py-12">
        <article className="shell">
          {/* Back link */}
          <div className="max-w-3xl mx-auto mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-brand-700 font-medium transition-colors rounded"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden />
              All insights
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="eyebrow mb-4">{post.category}</span>
            <h1 className="text-[30px] sm:text-[42px] lg:text-[48px] font-medium text-ink leading-[1.12] tracking-tight mb-5">
              {post.title}
            </h1>
            <p className="text-lg text-body/80 leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted pt-5 border-t border-line">
              <span className="flex items-center gap-2.5">
                <AuthorMark name={post.author.name} />
                <span className="text-ink font-medium">{post.author.name}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden />
                <time>{post.date}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Hero image */}
          <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="relative w-full aspect-[16/9] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-surface ring-1 ring-line">
              <Image
                src={post.image}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>

          {/* Body */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[17px] sm:text-lg text-ink/90 leading-relaxed mb-10">
              {post.content.intro}
            </p>

            {post.content.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="text-[22px] sm:text-[28px] font-medium text-ink leading-snug tracking-tight mb-4">
                  {section.heading}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)} className="text-base text-body/85 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {section.checklist && section.checklist.length > 0 && (
                  <div className="mt-6 rounded-[22px] bg-surface border border-line p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-wider font-semibold text-muted mb-3">
                      Checklist
                    </p>
                    <ul className="space-y-2.5">
                      {section.checklist.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[15px] text-body">
                          <Check
                            className="w-4 h-4 mt-1 text-brand-600 shrink-0"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}

            {/* Pro tip */}
            <aside className="rounded-[22px] bg-brand-50 border border-brand-100 border-l-4 border-l-brand-600 p-5 sm:p-7 my-10">
              <p className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-brand-700 mb-2">
                <Lightbulb className="w-4 h-4" aria-hidden />
                From the field
              </p>
              <p className="text-[15px] sm:text-base text-ink/90 leading-relaxed">
                {post.content.proTip}
              </p>
            </aside>

            <section className="mb-10">
              <h2 className="text-[20px] sm:text-[24px] font-medium text-ink mb-3">
                In short
              </h2>
              <p className="text-base text-body/85 leading-relaxed">
                {post.content.conclusion}
              </p>
            </section>

            {/* Author */}
            <div className="rounded-[24px] bg-surface border border-line p-6 flex items-start gap-5 mb-12">
              <AuthorMark name={post.author.name} size="lg" />
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted mb-1">
                  Written by
                </p>
                <p className="text-[17px] font-medium text-ink">{post.author.name}</p>
                <p className="text-sm text-brand-700 mb-2">{post.author.role}</p>
                <p className="text-[14px] text-body/75 leading-relaxed">
                  Written from the day-to-day of running facility contracts across
                  commercial, industrial, education, healthcare and strata sites.
                </p>
              </div>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="max-w-4xl mx-auto pt-10 border-t border-line">
              <div className="flex items-end justify-between gap-4 mb-7">
                <h2 className="text-[22px] sm:text-[26px] font-medium text-ink tracking-tight">
                  More insights
                </h2>
                <Link
                  href="/blog"
                  className="text-sm font-semibold text-brand-700 hover:text-brand-800 rounded whitespace-nowrap"
                >
                  View all
                </Link>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <li key={r.slug} className="group relative flex flex-col">
                    <div className="relative w-full aspect-[16/10] rounded-[18px] overflow-hidden mb-3.5 bg-surface ring-1 ring-line">
                      <Image
                        src={r.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 mb-1.5">
                      {r.category}
                    </span>
                    <h3 className="text-[15px] font-medium text-ink leading-snug">
                      <Link
                        href={`/blog/${r.slug}`}
                        className="before:absolute before:inset-0 outline-none group-hover:text-brand-700 transition-colors"
                      >
                        {r.title}
                      </Link>
                    </h3>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16 rounded-[24px] sm:rounded-[32px] p-6 sm:p-9 bg-surface border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-xl font-medium text-ink mb-1.5">
                Want a second opinion on your current scope?
              </h2>
              <p className="text-[15px] text-body/75 leading-relaxed">
                Send it over. We&apos;ll tell you plainly where it is light — whether or not
                you end up switching.
              </p>
            </div>
            <Link href="/quote" className="btn btn-primary shrink-0">
              Request a review
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </div>
  );
}
