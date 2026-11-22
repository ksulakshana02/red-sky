import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { differentiators } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";

/**
 * Four reasons to switch, as a plain list rather than cards — a list of
 * four short items reads faster than four boxes, and leaves the image
 * doing the visual work.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-24 lg:py-28 bg-white scroll-mt-24">
      <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <Reveal from="left" className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative rounded-[32px] overflow-hidden aspect-[4/3.4] ring-1 ring-line">
            <Image
              src="/images/about/about-img-1.jpg"
              alt="A RedSky supervisor inspecting a serviced site"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-4">Why RedSky</span>
            <h2 className="text-[30px] sm:text-4xl lg:text-[42px] font-medium tracking-tight text-ink leading-[1.15] mb-4">
              Most contracts start well and quietly decline
            </h2>
            <p className="text-body/80 text-base sm:text-lg leading-relaxed mb-10">
              Ours are built so they can&apos;t.
            </p>
          </Reveal>

          <ul className="space-y-7 mb-10">
            {differentiators.map((d, i) => (
              <Reveal
                as="li"
                key={d.title}
                delay={i * 0.07}
                className="group flex items-start gap-4"
              >
                <span className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <ServiceIcon name={d.icon} className="w-5 h-5" />
                </span>
                <span>
                  <span className="block text-[17px] font-medium text-ink mb-1">
                    {d.title}
                  </span>
                  <span className="block text-[15px] text-body/75 leading-relaxed">
                    {d.desc}
                  </span>
                </span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1} className="flex flex-col sm:flex-row gap-3">
            <Link href="/quote" className="btn btn-primary">
              Book a walkthrough
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link href="/about" className="btn btn-secondary">
              How we operate
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
