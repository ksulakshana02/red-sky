import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  FileSearch,
  PackageCheck,
  UserRound,
} from "lucide-react";

/** Written as what the client receives, not as internal process language. */
const included = [
  {
    icon: ClipboardCheck,
    title: "A written scope of works",
    desc: "Every area, every task, every frequency — agreed before the first shift and reviewed quarterly.",
  },
  {
    icon: UserRound,
    title: "A named account manager",
    desc: "One person who knows your site, inspects it personally and owns the fix when something slips.",
  },
  {
    icon: FileSearch,
    title: "Scheduled audits with evidence",
    desc: "Supervisor inspections against the scope, photographed, with a rectification date on anything below standard.",
  },
  {
    icon: PackageCheck,
    title: "Equipment, chemistry and compliance",
    desc: "Machines, metered chemistry, SDS, SWMS and certificates of currency all supplied and maintained by us.",
  },
];

export default function ServiceStandards() {
  return (
    <section
      aria-labelledby="included-heading"
      className="px-4 sm:px-6 lg:px-10 py-16 sm:py-20 bg-surface"
    >
      <div className="on-dark relative overflow-hidden max-w-[1320px] mx-auto rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-accent-800 via-accent-900 to-accent-950 px-6 py-10 sm:p-12 lg:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-20 w-80 h-80 rounded-full bg-brand-600/20 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-white/5"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="eyebrow eyebrow-light mb-4">Every contract, every site</span>
            <h2
              id="included-heading"
              className="text-white text-[28px] sm:text-4xl font-medium tracking-tight leading-tight mb-4"
            >
              What you get regardless of which services you take
            </h2>
            <p className="text-white/75 text-base leading-relaxed lg:mb-7 max-w-sm">
              These are not upgrades. They are the baseline on a single-site cleaning
              contract and on a national portfolio alike.
            </p>
            <Link href="/quote" className="hidden lg:inline-flex btn btn-primary h-12 px-6">
              Request a quote
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {included.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="flex items-start gap-4 rounded-2xl bg-white/[0.08] border border-white/15 p-4 sm:p-6 backdrop-blur-sm"
              >
                <span className="w-12 h-12 shrink-0 rounded-xl bg-white text-brand-600 flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6" aria-hidden />
                </span>
                <span>
                  <span className="block text-white text-[17px] font-medium mb-1">{title}</span>
                  <span className="block text-white/75 text-[14.5px] leading-relaxed">{desc}</span>
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/quote"
            className="lg:hidden btn btn-primary h-12 px-6 w-full sm:w-auto sm:justify-self-start"
          >
            Request a quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
