import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  /** Optional middle breadcrumb (defaults to Services) */
  parent?: { label: string; href: string } | null;
}

export default function PageHeader({
  subtitle = "Professional Cleaning Services",
  title = "Service Details",
  description,
  parent = { label: "Services", href: "/services" },
}: PageHeaderProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-50 to-white border-b border-line/60">
      <div aria-hidden className="pointer-events-none absolute -top-24 right-[10%] w-[420px] h-[320px] rounded-full bg-brand-200/45 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 left-[8%] w-[360px] h-[260px] rounded-full bg-accent-100/60 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="inline-flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-muted bg-white/80 backdrop-blur border border-line rounded-full px-4 py-1.5">
            <li>
              <Link href="/" className="hover:text-brand-700 transition-colors">Home</Link>
            </li>
            {parent && (
              <li className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-line-strong" aria-hidden />
                <Link href={parent.href} className="hover:text-brand-700 transition-colors">{parent.label}</Link>
              </li>
            )}
            <li aria-current="page" className="inline-flex items-center gap-1.5 text-ink font-medium">
              <ChevronRight className="w-3.5 h-3.5 text-line-strong" aria-hidden />
              {title}
            </li>
          </ol>
        </nav>

        <span className="eyebrow mb-4">{subtitle}</span>

        <h1 className="text-[32px] sm:text-5xl lg:text-[56px] font-medium text-ink leading-[1.1] tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-5 text-base sm:text-lg text-body/80 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </section>
  );
}
