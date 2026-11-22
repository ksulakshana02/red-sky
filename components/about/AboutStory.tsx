import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="about-story" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3.2] ring-1 ring-line">
            <Image
              src="/images/about/about-img-2.jpg"
              alt="A RedSky team working on a commercial site"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-4 sm:-left-6 card px-5 py-4 max-w-[230px] hidden sm:block">
            <p className="text-[11px] uppercase tracking-wider text-muted mb-1">
              How we measure ourselves
            </p>
            <p className="text-[15px] font-medium text-ink leading-snug">
              Contracts renewed, not contracts won
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow mb-4">Who we are</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[42px] font-medium tracking-tight text-ink leading-tight mb-5">
            Built for the facilities managers nobody was listening to
          </h2>
          <div className="space-y-4 text-body/80 text-base sm:text-[17px] leading-relaxed">
            <p>
              RedSky started in cleaning and grew the way its clients asked it to. Site
              after site, the same request came up: could we take on the hygiene supply,
              then the waste, then the grounds — because managing four contractors for
              one building was costing more time than the cleaning itself.
            </p>
            <p>
              So we built the company around that. Today we deliver cleaning, hygiene,
              waste, grounds and maintenance coordination as integrated facility
              services, with the operational discipline that a multi-service contract
              demands: written scopes, scheduled audits, and compliance records held
              centrally rather than chased after the fact.
            </p>
            <p>
              What has not changed is the part clients tell us matters most — a named
              person who knows the site, answers their phone, and does not pass the
              problem sideways.
            </p>
          </div>

          <figure className="mt-8 rounded-2xl bg-surface border border-line p-6 relative">
            <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-200" aria-hidden />
            <blockquote className="text-ink text-[17px] leading-relaxed pr-10">
              &ldquo;Any supplier can clean a building well in month one. The whole job is
              making month twenty-four look the same.&rdquo;
            </blockquote>
            {/* TODO(client): replace with a real named person. */}
            <figcaption className="mt-3 text-sm text-muted">
              <span className="font-semibold text-ink">RedSky operations</span> · on how
              contracts are run
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
