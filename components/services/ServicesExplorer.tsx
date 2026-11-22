import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { servicesList } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";
import SpecialistWorks from "@/components/services/SpecialistWorks";
import Reveal from "@/components/Reveal";

/**
 * Full catalogue. One card, one destination — the detail page carries the
 * scope of works, so the card only needs to say what the service is and
 * roughly when we'd be on site.
 */
export default function ServicesExplorer() {
  return (
    <section id="service-lines" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
      <div className="shell">
        <Reveal className="max-w-xl mb-10 sm:mb-14">
          <span className="eyebrow mb-4">Service lines</span>
          <h2 className="text-[30px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-[1.15] mb-3">
            Pick a service, or hand us the whole site
          </h2>
          <p className="text-body/75 text-base sm:text-lg">
            Each comes with a written scope, a fixed roster and scheduled inspections.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s, i) => (
            <Reveal
              as="li"
              key={s.id}
              delay={Math.min(i, 5) * 0.05}
              id={s.id}
              className="group relative card card-hover flex flex-col overflow-hidden scroll-mt-28"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-surface">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/95 text-brand-600 flex items-center justify-center shadow-sm backdrop-blur">
                  <ServiceIcon name={s.icon} className="w-5 h-5" />
                </span>
                {s.badge && (
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-900/90 text-white text-[11px] font-semibold uppercase tracking-wide backdrop-blur">
                    {s.badge}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-medium text-ink transition-colors group-hover:text-brand-700">
                  <Link
                    href={`/services/${s.id}`}
                    className="before:absolute before:inset-0 outline-none"
                  >
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-2 text-[15px] text-body/75 leading-relaxed">{s.summary}</p>

                <p className="mt-auto pt-6 flex items-center justify-between gap-3 text-[13px] text-muted">
                  <span className="flex items-start gap-2">
                    <CalendarClock
                      className="w-4 h-4 text-accent-600 shrink-0 mt-px"
                      aria-hidden
                    />
                    {s.cadence}
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="w-4 h-4 shrink-0 text-line-strong transition-all duration-300 group-hover:text-brand-600 group-hover:translate-x-1"
                  />
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-12 sm:mt-16">
          <SpecialistWorks />
        </div>
      </div>
    </section>
  );
}
