import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/industries";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";

/**
 * Two modes:
 *
 *  • compact (home) — just the eight sector names, so a visitor can spot
 *    their own in one glance and move on.
 *  • full (/industries) — adds each sector's specific compliance
 *    considerations, for the people who came looking for exactly that.
 *
 * `showHeading={false}` drops the section heading for /industries, where
 * the page header already states the same thing — two of them stacked
 * read as a mistake.
 */
export default function IndustriesSection({
  variant = "compact",
  tinted = true,
  showHeading = true,
}: {
  variant?: "compact" | "full";
  tinted?: boolean;
  showHeading?: boolean;
}) {
  const full = variant === "full";

  return (
    <section
      id="industries"
      className={`py-20 sm:py-24 scroll-mt-24 ${tinted ? "bg-surface" : "bg-white"}`}
    >
      <div className="shell">
        {showHeading && (
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-xl">
            <span className="eyebrow eyebrow-accent mb-4">Industries</span>
            <h2 className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15] mb-3">
              {full ? "Every sector has its own rules" : "Sectors we work in"}
            </h2>
            <p className="text-body/75 text-base sm:text-lg">
              {full
                ? "Clearances, chemistry, access hours and reporting all change with the setting. Here's what we account for before anyone sets foot on your site."
                : "Clearances, chemistry and access hours change with the setting. We work to yours."}
            </p>
          </div>
          {!full && (
            <Link href="/industries" className="btn btn-secondary shrink-0">
              What that means
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          )}
        </Reveal>
        )}

        {full ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <Reveal
                as="li"
                key={ind.id}
                delay={Math.min(i, 7) * 0.05}
                className="group card card-hover p-6 flex flex-col h-full"
              >
                <span className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon name={ind.icon} className="w-5 h-5" />
                </span>
                <h3 className="text-[17px] font-medium text-ink mb-4 leading-snug">
                  {ind.name}
                </h3>
                {/* Summary is dropped here on purpose — on this page the
                    sector-specific obligations are the useful part, and
                    repeating a one-line description above them is padding. */}
                <ul className="mt-auto space-y-2 pt-4 border-t border-line">
                  {ind.considerations.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-[13.5px] text-body/70">
                      <span
                        className="mt-[6px] w-1 h-1 rounded-full bg-brand-400 shrink-0"
                        aria-hidden
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {industries.map((ind, i) => (
              <Reveal
                as="li"
                key={ind.id}
                delay={Math.min(i, 7) * 0.04}
                className="group flex items-center gap-3.5 rounded-2xl bg-white border border-line px-4 py-4 transition-all duration-300 hover:border-brand-200 hover:shadow-[var(--shadow-soft)] hover:-translate-y-0.5"
              >
                <span className="w-10 h-10 rounded-xl bg-surface text-accent-900 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon name={ind.icon} className="w-[18px] h-[18px]" />
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-ink leading-tight">
                  {ind.name}
                </span>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
