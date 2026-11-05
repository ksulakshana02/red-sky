import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AboutStory() {
  return (
    <section id="about-story" className="pt-4 pb-16 sm:pt-6 sm:pb-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3.2] ring-1 ring-line">
            <Image
              src="/images/about/about-img-2.jpg"
              alt="RedSky cleaner polishing glass in an office meeting room"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="eyebrow mb-4">Our story</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-5">
            Why we started RedSky
          </h2>
          <div className="space-y-4 text-body/80 text-base sm:text-[17px] leading-relaxed">
            <p>
              In 2018 we saw an industry cutting corners: harsh chemicals that irritate lungs, and
              cleaners treated as disposable gig workers.
            </p>
            <p>
              So we built something better — spotless results with family-safe products, delivered
              by a trained, fairly paid team who take pride in every home.
            </p>
          </div>

          <figure className="mt-8 rounded-2xl bg-brand-50 border border-brand-100 p-6 relative">
            <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-200" aria-hidden />
            <blockquote className="text-ink text-[17px] leading-relaxed pr-10">
              &ldquo;When a company treats its cleaners with dignity, they treat every client&apos;s
              home with pride.&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              <span className="font-semibold text-ink">Elena Vance</span> · Founder
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
