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
    <section className="partners-section py-12 lg:py-16 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-center text-[#0E152B] font-serif text-sm sm:text-base font-semibold capitalize mb-8 tracking-wide">
          Featured by popular companies in the industry
        </h2>

        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-6">
            {partners.map((partner, idx) => (
              <li
                key={idx}
                className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="relative w-28 sm:w-36 h-10">
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
