"use client";

import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { name: "Vertex", src: "/images/partners/1.svg" },
    { name: "Orbit", src: "/images/partners/2.svg" },
    { name: "CleanPro", src: "/images/partners/3.svg" },
    { name: "Nexus", src: "/images/partners/4.svg" },
    { name: "Prime", src: "/images/partners/5.svg" },
    { name: "Orbit", src: "/images/partners/2.svg" },
  ];

  return (
    <section className="partners-section py-8 sm:py-10 lg:py-12 bg-white border-t border-slate-100 font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-center text-[#0E152B] font-serif text-xs sm:text-sm font-semibold capitalize mb-6 sm:mb-8 tracking-wide">
          Featured by popular companies in the industry
        </h2>

        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-6 sm:gap-6">
            {partners.map((partner, idx) => (
              <li
                key={idx}
                className="h-12 sm:h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-24 sm:w-36 h-8 sm:h-10">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
