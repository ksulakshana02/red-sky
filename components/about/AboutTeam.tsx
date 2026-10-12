"use client";

import React from "react";
import Image from "next/image";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Elena Vance",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      bio: "With over a decade in hospitality management, Elena started RedSky to provide healthy, non-toxic cleaning for everyday families.",
    },
    {
      name: "Marcus Sterling",
      role: "Operations & Training",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      bio: "Marcus oversees technician onboarding, equipment checks, and our color-coded microfiber system to prevent room cross-contamination.",
    },
    {
      name: "Dr. Sophia Lin",
      role: "Product & Safety Advisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      bio: "Environmental scientist who reviews our plant-derived cleaning solutions to ensure they are safe around babies, pets, and allergy sufferers.",
    },
    {
      name: "David Miller",
      role: "Quality Assurance",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      bio: "David performs regular quality walkthroughs and handles our 24-hour re-clean visits if anything ever misses the mark.",
    },
  ];

  return (
    <section id="about-team" className="py-12 sm:py-16 lg:py-18 bg-[#F9FAFB]/90 relative z-10 border-t border-slate-200/70 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-500 mb-2">
            <span>Our team</span>
            <span className="text-[#DC2626] font-normal">//</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#0E152B] leading-[1.25] font-serif tracking-tight">
            The people behind RedSky
          </h2>
          <p className="text-sm sm:text-base text-[#0E152B]/70 mt-2 font-normal leading-relaxed">
            Our leadership and supervisory team support our cleaners in delivering careful, dependable service.
          </p>
        </div>

        {/* 4 Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] overflow-hidden border border-slate-200/80 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-normal font-serif text-[#0E152B] mb-0.5 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-[#DC2626] mb-2.5">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-[13px] text-[#0E152B]/70 leading-relaxed font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
