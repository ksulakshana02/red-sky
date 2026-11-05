import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";
import { servicesList, quoteHref } from "@/lib/services";

export default function ServicesExplorer() {
  return (
    <section id="services-explorer" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="eyebrow mb-4">Choose a service</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-3">
            What would you like cleaned?
          </h2>
          <p className="text-body/80">
            Starting prices shown. Your exact price depends on size and extras — the quote takes about a minute.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s) => (
            <li key={s.id} id={s.id} className="group card card-hover flex flex-col overflow-hidden scroll-mt-28">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {s.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-brand-700 text-xs font-semibold shadow-sm">
                    {s.badge}
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-medium text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[15px] text-body/75 leading-relaxed">{s.summary}</p>

                {/* Price + time: the two things people compare */}
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-surface px-4 py-3">
                  <span className="leading-tight">
                    <span className="block text-xs text-muted">Starting from</span>
                    <span className="block text-2xl font-semibold text-ink">{s.price}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm text-body/80">
                    <Clock className="w-4 h-4 text-brand-600" aria-hidden />
                    {s.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5" aria-label={`${s.title} includes`}>
                  {s.keyPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-body">
                      <Check className="w-4 h-4 mt-0.5 text-brand-600 shrink-0" strokeWidth={2.5} aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <Link
                    href={quoteHref(s.id)}
                    aria-label={`Get a quote for ${s.title}`}
                    className="btn btn-primary w-full shadow-none"
                  >
                    Get a quote
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
