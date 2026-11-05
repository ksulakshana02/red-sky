import React from "react";
import Image from "next/image";

// TODO(client): replace with real team photos and names.
const team = [
  { name: "Elena Vance", role: "Founder", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Marcus Sterling", role: "Operations & Training", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" },
  { name: "Dr. Sophia Lin", role: "Product & Safety Advisor", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" },
  { name: "David Miller", role: "Quality Assurance", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" },
];

export default function AboutTeam() {
  return (
    <section id="about-team" className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-4">Our team</span>
          <h2 className="text-[28px] sm:text-4xl lg:text-[44px] font-medium tracking-tight text-ink leading-tight mb-3">
            The people behind every clean
          </h2>
          <p className="text-body/80">A small leadership team that trains, supports and checks the work of every cleaner.</p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {team.map((m) => (
            <li key={m.name} className="group text-center">
              <div className="relative aspect-square rounded-[28px] overflow-hidden bg-surface ring-1 ring-line mb-4">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-ink">{m.name}</h3>
              <p className="text-sm text-brand-600">{m.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
