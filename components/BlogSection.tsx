import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import Reveal from "@/components/Reveal";

/** Latest three insights. Reads lib/blogData so it can never drift from /blog. */
export default function BlogSection() {
  const posts = blogPosts.slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="insights" className="py-20 sm:py-24 bg-white scroll-mt-24">
      <div className="shell">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">Insights</span>
            <h2 className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15]">
              Reading for facilities teams
            </h2>
          </div>
          <Link href="/blog" className="btn btn-secondary shrink-0">
            All insights
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, i) => (
            <Reveal
              as="li"
              key={post.slug}
              delay={i * 0.08}
              className="group relative flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] rounded-[22px] overflow-hidden mb-5 bg-surface ring-1 ring-line">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-700 mb-2.5">
                {post.category}
              </span>

              <h3 className="text-lg sm:text-xl font-medium text-ink leading-snug mb-2.5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="before:absolute before:inset-0 outline-none group-hover:text-brand-700 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-[14.5px] text-body/70 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
