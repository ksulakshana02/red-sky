import Link from "next/link";
import { ArrowRight, BadgeCheck, FileCheck2 } from "lucide-react";
import { accreditations, stats } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

/**
 * Stats and compliance in one band instead of two sections.
 *
 * Honesty rule: an entry in `accreditations` is only presented as a held
 * accreditation when `verified: true`. Otherwise it reads "Operating to
 * ISO 9001", because publishing an unheld certification is a false claim,
 * not a design choice. Flip the flag in lib/site.ts once it's in hand.
 */
export default function ComplianceSection() {
  return (
    <section
      id="compliance"
      className="on-dark relative overflow-hidden bg-accent-900 py-20 sm:py-24 scroll-mt-24"
    >
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-brand-600/15 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob-slow pointer-events-none absolute -bottom-48 -left-24 w-[440px] h-[440px] rounded-full bg-white/[0.06] blur-3xl"
      />

      <div className="relative shell">
        {/* Figures */}
        <Reveal>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 pb-14 sm:pb-16 mb-14 sm:mb-16 border-b border-white/15">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse text-center lg:text-left">
                <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
                <dd className="text-[40px] sm:text-[52px] font-medium text-white tracking-tight leading-none">
                  <CountUp value={s.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal from="left" className="lg:col-span-5">
            <span className="eyebrow eyebrow-light mb-4">Compliance</span>
            <h2 className="text-white text-[30px] sm:text-4xl font-medium tracking-tight leading-[1.15] mb-4">
              The paperwork, handled before day one
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-7">
              Certificates, screening records and site-specific method statements are
              supplied before mobilisation — not assembled the week your auditor calls.
            </p>
            <Link href="/contact" className="btn btn-light">
              Request our compliance pack
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </Reveal>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {accreditations.map((a, i) => (
              <Reveal
                as="li"
                key={a.code}
                delay={Math.min(i, 3) * 0.06}
                className="flex items-center gap-3.5 rounded-2xl bg-white/[0.07] border border-white/15 px-4 py-4 transition-colors hover:bg-white/[0.11]"
              >
                <span className="w-10 h-10 shrink-0 rounded-xl bg-white text-accent-900 flex items-center justify-center">
                  {a.verified ? (
                    <BadgeCheck className="w-5 h-5" aria-hidden />
                  ) : (
                    <FileCheck2 className="w-5 h-5" aria-hidden />
                  )}
                </span>
                <span className="leading-tight">
                  <span className="block text-white text-[15px] font-medium">
                    {a.verified ? a.code : `Operating to ${a.code}`}
                  </span>
                  <span className="block text-[13px] text-white/55 mt-0.5">
                    {a.name}
                    {a.verified && a.ref ? ` · ${a.ref}` : ""}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
