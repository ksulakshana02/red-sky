import Link from "next/link";
import { ArrowRight, PackageCheck, Leaf, Wind, BadgeCheck } from "lucide-react";

// Written as customer benefits ("what do I get?"), not internal processes.
const benefits = [
  {
    icon: PackageCheck,
    title: "Nothing to prepare",
    desc: "We bring every product and all the equipment.",
  },
  {
    icon: Leaf,
    title: "Safe for kids & pets",
    desc: "Plant-based products — no bleach, no harsh fumes.",
  },
  {
    icon: Wind,
    title: "Fresher, cleaner air",
    desc: "HEPA vacuums trap fine dust and allergens.",
  },
  {
    icon: BadgeCheck,
    title: "Happiness guaranteed",
    desc: "Missed a spot? Tell us within 24 hours and we re-clean free.",
  },
];

export default function ServiceStandards() {
  return (
    <section aria-labelledby="included-heading" className="px-4 sm:px-6 lg:px-10 pb-16 sm:pb-20 bg-white">
      <div className="relative overflow-hidden max-w-[1280px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-10 sm:p-12 lg:p-14">
        {/* soft decorative light */}
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full bg-white/10" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-accent-400/15 blur-2xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Heading + action */}
          <div className="lg:col-span-4">
            <p className="text-accent-200 text-xs font-semibold uppercase tracking-[0.08em] mb-3">
              Every service, every visit
            </p>
            <h2 id="included-heading" className="text-white text-[28px] sm:text-4xl font-medium tracking-tight leading-tight mb-4">
              Included with every clean
            </h2>
            <p className="text-white/75 text-base leading-relaxed lg:mb-7 max-w-sm">
              No add-on fees for the basics. Whatever service you choose, you always get this.
            </p>
            {/* Desktop: action sits beside the benefits */}
            <Link href="/quote" className="hidden lg:inline-flex btn btn-light h-12 px-6">
              Get a free quote
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          {/* Benefits */}
          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white/[0.08] border border-white/15 p-4 sm:p-6 backdrop-blur-sm"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-white text-brand-600 flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-white text-[17px] font-medium mb-1">{title}</span>
                  <span className="block text-white/75 text-[15px] leading-relaxed">{desc}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Mobile: read the benefits first, then act */}
          <Link href="/quote" className="lg:hidden btn btn-light h-12 px-6 w-full sm:w-auto sm:justify-self-start">
            Get a free quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
