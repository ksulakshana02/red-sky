import Image from "next/image";
import { ArrowRight, Phone, ShieldCheck, Leaf, BadgeCheck, PackageCheck } from "lucide-react";
import { site } from "@/lib/site";

const trust = [
  { icon: ShieldCheck, label: "Insured & vetted" },
  { icon: Leaf, label: "Family-safe products" },
  { icon: BadgeCheck, label: "Free re-clean guarantee" },
];

export default function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div aria-hidden className="pointer-events-none absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full bg-brand-200/50 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy: one message, one main action */}
          <div className="lg:col-span-6">
            <span className="eyebrow mb-5">Cleaning services</span>
            <h1 className="text-[34px] leading-[1.1] sm:text-5xl lg:text-[54px] font-medium tracking-tight text-ink mb-5">
              Professional cleaning, <span className="text-brand-600">priced upfront</span>
            </h1>
            <p className="text-base sm:text-lg text-body/80 leading-relaxed mb-8 max-w-md">
              Choose a service below, see the starting price, and get your exact quote in about a minute.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#services-explorer" className="btn btn-primary h-[54px] px-7 text-[15px]">
                See services &amp; prices
                <ArrowRight className="w-4 h-4 rotate-90" aria-hidden />
              </a>
              <a href={site.phone.href} className="btn btn-secondary h-[54px] px-7 text-[15px]">
                <Phone className="w-4 h-4 text-brand-600" aria-hidden />
                {site.phone.display}
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-body">
                  <Icon className="w-4 h-4 text-brand-600" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual with a concrete, useful fact */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden aspect-[16/11] shadow-[0_30px_80px_-30px_rgb(0_83_163/0.45)] ring-1 ring-brand-100">
              <Image
                src="/images/service/service-1.jpg"
                alt="RedSky cleaner vacuuming a bright living room"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-3 sm:-left-6 -bottom-5 card px-5 py-4 flex items-center gap-4">
              <span className="w-11 h-11 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center">
                <PackageCheck className="w-5 h-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-muted">Home cleaning from</span>
                <span className="block text-2xl font-semibold text-ink">$89</span>
              </span>
              <span className="hidden sm:block pl-4 ml-1 border-l border-line text-xs text-muted leading-snug">
                All supplies
                <br />
                included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
