import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb trail between Home and the current page. */
  trail?: Crumb[];
  /** Optional action row rendered under the description. */
  children?: React.ReactNode;
  align?: "center" | "left";
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  trail = [],
  children,
  align = "center",
}: PageHeaderProps) {
  const centered = align === "center";

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface to-white border-b border-line/60">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[10%] w-[420px] h-[320px] rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-[8%] w-[360px] h-[260px] rounded-full bg-accent-100/60 blur-3xl"
      />

      <div
        className={`relative shell py-12 sm:py-16 lg:py-20 ${
          centered ? "max-w-3xl text-center" : "max-w-4xl"
        }`}
      >
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol
            className={`inline-flex flex-wrap items-center gap-1.5 text-[13px] text-muted bg-white/80 backdrop-blur border border-line rounded-full px-4 py-1.5 ${
              centered ? "justify-center" : ""
            }`}
          >
            <li>
              <Link href="/" className="rounded hover:text-brand-700 transition-colors">
                Home
              </Link>
            </li>
            {trail.map((c) => (
              <li key={c.href} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-line-strong" aria-hidden />
                <Link href={c.href} className="rounded hover:text-brand-700 transition-colors">
                  {c.label}
                </Link>
              </li>
            ))}
            <li
              aria-current="page"
              className="inline-flex items-center gap-1.5 text-ink font-medium"
            >
              <ChevronRight className="w-3.5 h-3.5 text-line-strong" aria-hidden />
              {title}
            </li>
          </ol>
        </nav>

        {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}

        <h1 className="text-[32px] sm:text-5xl lg:text-[54px] font-medium text-ink leading-[1.08] tracking-tight">
          {title}
        </h1>

        {description && (
          <p
            className={`mt-5 text-base sm:text-lg text-body/80 ${
              centered ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}

        {children && (
          <div
            className={`mt-7 flex flex-col sm:flex-row gap-3 ${
              centered ? "sm:justify-center" : ""
            }`}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
