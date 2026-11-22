import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialistServices } from "@/lib/services";
import Reveal from "@/components/Reveal";

/**
 * Specialist works as a plain tag list. These are add-ons, not products —
 * eight descriptive cards gave them more weight on the page than they
 * earn, so they're names only, with detail handled at the walkthrough.
 */
export default function SpecialistWorks() {
  return (
    <Reveal className="rounded-[28px] border border-line bg-surface p-7 sm:p-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-md">
          <span className="eyebrow eyebrow-accent mb-3">Specialist works</span>
          <h3 className="text-[22px] sm:text-[26px] font-medium text-ink leading-snug">
            Add these to a contract, or book them on their own
          </h3>
        </div>
        <Link href="/quote" className="btn btn-accent shrink-0">
          Add to your quote
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>

      <ul className="flex flex-wrap gap-2.5 mt-8">
        {specialistServices.map((s) => (
          <li
            key={s.id}
            className="rounded-full bg-white border border-line px-4 py-2.5 text-[14px] font-medium text-ink transition-colors hover:border-brand-300 hover:text-brand-700"
          >
            {s.title}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
