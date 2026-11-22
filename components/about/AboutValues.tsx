import React from "react";
import { ClipboardList, Eye, HeartHandshake, Recycle } from "lucide-react";

const values = [
  {
    icon: ClipboardList,
    title: "Write it down",
    desc: "Scope, frequency, roster, response times. If it isn't in the document it isn't a commitment.",
  },
  {
    icon: Eye,
    title: "Inspect, don't assume",
    desc: "Scheduled audits with photographic evidence. Standards drift unless someone is looking.",
  },
  {
    icon: HeartHandshake,
    title: "Own the fix",
    desc: "When something is missed you get a rectification date, and a name attached to it.",
  },
  {
    icon: Recycle,
    title: "Lower impact as standard",
    desc: "Metered dilution, microfibre, HEPA filtration and separated waste on every contract.",
  },
];

export default function AboutValues() {
  return (
    <section id="about-values" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="shell">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="eyebrow eyebrow-accent mb-4">How we operate</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-4">
            Four rules, applied to every contract
          </h2>
          <p className="text-body/80 text-base sm:text-lg">
            Not values on a wall — the things that decide whether a contract is still
            good two years in.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="card card-hover p-6 sm:p-7 h-full">
              <span className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5 shadow-[var(--shadow-brand)]">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <h3 className="text-lg font-medium text-ink mb-2">{title}</h3>
              <p className="text-[15px] text-body/75 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
