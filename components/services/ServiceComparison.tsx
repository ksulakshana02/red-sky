import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { packages, packageFeatures } from "@/lib/services";

export default function ServiceComparison() {
  return (
    <section id="packages" className="py-16 sm:py-24 bg-surface scroll-mt-24">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-4">Home cleaning packages</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-3">
            Pick your level of clean
          </h2>
          <p className="text-body/80">All supplies and equipment included. Prices are a starting point — get an exact price in 60 seconds.</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((p) => (
            <li
              key={p.id}
              className={`relative flex flex-col rounded-[28px] p-7 sm:p-8 ${
                p.popular
                  ? "bg-gradient-to-b from-brand-600 to-brand-800 text-white shadow-[0_30px_60px_-30px_rgb(0_83_163/0.7)] md:-my-3"
                  : "card"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent-400 text-brand-950 text-xs font-semibold">
                  Most chosen
                </span>
              )}
              <h3 className={`text-xl font-medium ${p.popular ? "text-white" : "text-ink"}`}>{p.name}</h3>
              <p className={`text-sm mb-5 ${p.popular ? "text-white/75" : "text-muted"}`}>{p.desc}</p>
              <p className="mb-6">
                <span className={`text-sm ${p.popular ? "text-white/75" : "text-muted"}`}>from </span>
                <span className={`text-4xl font-medium tracking-tight ${p.popular ? "text-white" : "text-ink"}`}>{p.price}</span>
              </p>

              <ul className="space-y-3 mb-8">
                {packageFeatures.map((f, i) => {
                  const yes = p.included[i];
                  return (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${
                        yes ? (p.popular ? "text-white" : "text-body") : p.popular ? "text-white/45" : "text-muted/70"
                      }`}
                    >
                      {yes ? (
                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-accent-300" : "text-brand-600"}`} aria-hidden />
                      ) : (
                        <Minus className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />
                      )}
                      <span>
                        {f}
                        {!yes && <span className="sr-only"> (not included)</span>}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link href="/quote" className={`btn mt-auto w-full ${p.popular ? "btn-light" : "btn-secondary"}`}>
                Get a quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
