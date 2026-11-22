import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Minus } from "lucide-react";
import { contractModels, contractFeatures } from "@/lib/services";

/**
 * Contract models, not price tiers. Facility services are scoped rather
 * than packaged, so this compares what each model covers and leaves price
 * to the walkthrough.
 *
 * Rendered as cards rather than a <table>: a ten-row × three-column matrix
 * is unusable on a phone, and cards keep each column self-contained.
 */
export default function ServiceComparison() {
  return (
    <section id="contract-models" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-24">
      <div className="shell max-w-[1180px]">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-4">Contract models</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-3">
            How much of the site do you want us to carry?
          </h2>
          <p className="text-body/80">
            Three ways to structure the agreement. Every model is priced after a
            walkthrough, as a fixed monthly figure against a written scope.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {contractModels.map((m) => (
            <li
              key={m.id}
              className={`relative flex flex-col rounded-[28px] p-7 sm:p-8 ${
                m.popular
                  ? "on-dark bg-gradient-to-b from-accent-800 to-accent-950 text-white shadow-[0_30px_60px_-30px_rgb(10_39_45/0.7)] md:-my-3"
                  : "card"
              }`}
            >
              {m.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold whitespace-nowrap">
                  Most chosen
                </span>
              )}

              <h3 className={`text-xl font-medium ${m.popular ? "text-white" : "text-ink"}`}>
                {m.name}
              </h3>
              <p className={`text-sm mt-1 ${m.popular ? "text-white/75" : "text-muted"}`}>
                {m.desc}
              </p>
              <p
                className={`text-[13px] mt-4 mb-6 pb-6 border-b ${
                  m.popular ? "text-white/70 border-white/15" : "text-body/70 border-line"
                }`}
              >
                {m.best}
              </p>

              <ul className="space-y-3 mb-8">
                {contractFeatures.map((f, i) => {
                  const yes = m.included[i];
                  return (
                    <li
                      key={f}
                      className={`flex items-start gap-2.5 text-sm ${
                        yes
                          ? m.popular
                            ? "text-white"
                            : "text-body"
                          : m.popular
                            ? "text-white/40"
                            : "text-muted/65"
                      }`}
                    >
                      {yes ? (
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            m.popular ? "text-brand-400" : "text-brand-600"
                          }`}
                          strokeWidth={2.5}
                          aria-hidden
                        />
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

              <Link
                href="/quote"
                aria-label={`Request a quote for ${m.name}`}
                className={`btn mt-auto w-full ${m.popular ? "btn-light" : "btn-secondary"}`}
              >
                Request a quote
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
