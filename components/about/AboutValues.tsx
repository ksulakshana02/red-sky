import React from "react";
import { Leaf, BadgeDollarSign, Users, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Safe, non-toxic products",
    desc: "Plant-based formulas with no bleach, fumes or residue — safe for kids and pets.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest, upfront pricing",
    desc: "What we quote is what you pay. No hidden fees, ever.",
  },
  {
    icon: Users,
    title: "Respected, full-time cleaners",
    desc: "Trained employees on fair wages — not rotating contractors.",
  },
  {
    icon: ShieldCheck,
    title: "Insured & guaranteed",
    desc: "Background-checked, fully insured, and a free re-clean if anything's missed.",
  },
];

export default function AboutValues() {
  return (
    <section id="about-values" className="py-16 sm:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-4">What we stand for</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight">
            What you can count on, every visit
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="card card-hover p-6 sm:p-7">
              <span className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5 shadow-[var(--shadow-brand)]">
                <Icon className="w-5 h-5" aria-hidden />
              </span>
              <h3 className="text-lg font-medium text-ink mb-2 [text-wrap:pretty]">{title}</h3>
              <p className="text-[15px] text-body/75 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
