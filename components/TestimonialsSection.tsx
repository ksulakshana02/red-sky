"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Eleanor Vance",
    role: "Homeowner, Boston MA",
    quote: "Redsky Cleaning transformed our home. The team arrived on time, was exceptionally polite, and left every surface in our kitchen and bathrooms spotless!",
    rating: 5,
  },
  {
    name: "Marcus Sterling",
    role: "Facilities Director, TechSpace",
    quote: "We've contracted them for 3 commercial buildings. Their consistency, green products, and responsiveness to emergencies have been second to none.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Interior Designer",
    quote: "Before our architectural staging shoots, we only trust Redsky. Their attention to detail on glass, wood floors, and tile grout is absolute perfection.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrent((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <section className="wpo-testimonials-section py-8 sm:py-10 lg:py-12 relative z-10 bg-white overflow-hidden font-[family-name:var(--font-parkinsans)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Soft wrap card */}
        <div className="bg-[#F8F9FA] border border-slate-100 rounded-[36px] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Section Title */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0E152B] mb-3">
              <span>TESTIMONIALS</span>
              <span className="text-[#DC2626] font-sans font-semibold tracking-tighter text-sm">//</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#0E152B] leading-[1.15] font-serif tracking-tight">
              What Our Happy Clients Say About Our Work
            </h2>
          </div>

          {/* Desktop Grid / Mobile Active Card Carousel */}
          <div className="relative z-10 max-w-[1350px] mx-auto">
            {/* Desktop 3-Card Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="wpo-testimonial-item bg-white border border-slate-100 hover:border-red-200 rounded-[20px] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div>
                    {/* Top Quote Icon & Stars */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-[#DC2626]/30 rotate-180" />
                      <div className="flex items-center gap-1 text-[#FFD700]">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Quote Body */}
                    <p className="text-sm sm:text-base text-[#032532]/85 italic leading-relaxed">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <h4 className="text-base sm:text-lg font-bold text-[#0E152B]">
                      {item.name}
                    </h4>
                    <span className="text-xs sm:text-sm font-semibold text-[#DC2626]">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Single Card Slider */}
            <div className="block md:hidden">
              <div className="wpo-testimonial-item bg-white border border-slate-100 rounded-[20px] p-6 flex flex-col justify-between shadow-sm min-h-[280px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-7 h-7 text-[#DC2626]/30 rotate-180" />
                    <div className="flex items-center gap-1 text-[#FFD700]">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-[#032532]/85 italic leading-relaxed">
                    “{testimonials[current].quote}”
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100">
                  <h4 className="text-base font-bold text-[#0E152B]">
                    {testimonials[current].name}
                  </h4>
                  <span className="text-xs font-semibold text-[#DC2626]">
                    {testimonials[current].role}
                  </span>
                </div>
              </div>

              {/* Mobile Dots */}
              <div className="flex justify-center items-center gap-2 mt-5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2 rounded-full transition-all ${
                      current === idx ? "w-6 bg-[#DC2626]" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-4 mt-6 sm:mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0E152B] border border-slate-200 flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-xs cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0E152B] border border-slate-200 flex items-center justify-center hover:bg-[#DC2626] hover:text-white transition-colors shadow-xs cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
