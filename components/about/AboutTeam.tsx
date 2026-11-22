import React from "react";
import { Mail } from "lucide-react";
import { site } from "@/lib/site";

/**
 * TODO(client): replace with the real leadership team.
 *
 * Deliberately rendered as initials rather than photographs — a stock
 * headshot presented as a named member of staff is a fabrication, and the
 * monogram treatment reads as a design choice rather than a placeholder.
 * Add a `photo` field here once you have real portraits.
 */
const team = [
  { name: "Operations Director", role: "Service delivery & mobilisation", initials: "OD" },
  { name: "Account Management", role: "Client relationships & reporting", initials: "AM" },
  { name: "HSEQ Manager", role: "Compliance, safety & quality systems", initials: "HQ" },
  { name: "Business Development", role: "Tenders, scoping & new sites", initials: "BD" },
];

export default function AboutTeam() {
  return (
    <section id="about-team" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="shell">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="eyebrow mb-4">Your team</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-4">
            The people you&apos;ll actually deal with
          </h2>
          <p className="text-body/80 text-base sm:text-lg">
            Four roles sit behind every contract. You get direct contact details for the
            first two on day one.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <li key={m.name} className="card p-6 h-full flex flex-col">
              <span
                className="w-14 h-14 rounded-2xl bg-accent-900 text-white flex items-center justify-center text-lg font-semibold mb-5"
                aria-hidden
              >
                {m.initials}
              </span>
              <h3 className="text-[17px] font-medium text-ink mb-1">{m.name}</h3>
              <p className="text-[14px] text-body/70 leading-relaxed">{m.role}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-[24px] border border-line bg-surface px-6 py-5">
          <p className="text-[15px] text-body/85 flex-1">
            <span className="font-semibold text-ink">Looking to join us?</span> We recruit
            site crews, supervisors and account managers across every state we service.
          </p>
          <a href={`mailto:${site.careersEmail}`} className="btn btn-secondary shrink-0">
            <Mail className="w-4 h-4 text-brand-600" aria-hidden />
            {site.careersEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
