import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { servicesList } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";

/**
 * The eight service lines, as light cards: icon, name, one line.
 *
 * Deliberately shallow — the job here is to let someone find their service
 * in a couple of seconds, not to sell it. Scope of works, assurances and
 * sector notes live on the detail page, one click away.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-28 bg-white scroll-mt-24">
      <div className="shell">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">What we do</span>
            <h2 className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15]">
              Eight service lines, one contract
            </h2>
          </div>
          <Link href="/services" className="btn btn-secondary shrink-0">
            All services
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesList.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={Math.min(i, 7) * 0.05}
              className="group relative card card-hover p-6 flex flex-col"
            >
              <span className="w-12 h-12 rounded-2xl bg-surface text-accent-900 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <ServiceIcon name={s.icon} className="w-[22px] h-[22px]" />
              </span>

              <h3 className="text-[17px] font-medium text-ink leading-snug mb-2">
                <Link
                  href={`/services/${s.id}`}
                  className="before:absolute before:inset-0 outline-none transition-colors group-hover:text-brand-700"
                >
                  {s.title}
                </Link>
              </h3>

              <p className="text-[14px] text-body/70 leading-relaxed">{s.summary}</p>

              <ArrowUpRight
                aria-hidden
                className="w-4 h-4 mt-5 text-line-strong transition-all duration-300 group-hover:text-brand-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
