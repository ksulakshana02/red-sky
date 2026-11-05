"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import { Phone, Play, ChevronDown, ChevronUp } from "lucide-react";

export default function ServiceSinglePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(1); // Index 1 is active by default matching template
  const [activeCategory, setActiveCategory] = useState("Deep Cleaning");
  const [videoModal, setVideoModal] = useState(false);

  const categories = [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Deep Cleaning",
    "Office Cleaning",
    "Home Cleaning",
    "Carpet Cleaning",
  ];

  const accordionItems = [
    {
      q: "How to learn digital marketing?",
      a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      q: "Can I use the demos made by Ewebot?",
      a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      q: "Why didn’t you showcase my submission?",
      a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
    {
      q: "Why didn’t you showcase my submission?",
      a: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signifer umque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    },
  ];

  return (
    <div className="page-wrapper bg-white text-body font-sans antialiased min-h-screen flex flex-col">
      {/* Start header */}
      <Header />

      {/* start wpo-page-title */}
      <PageHeader subtitle="Because Clean Feels Better" title="Service Single" />

      {/* start of service-single-page */}
      <section className="service-single-page py-12 sm:py-16 lg:py-20 bg-white relative z-10">
        <div className="container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="row grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Right Main Content (col-lg-8 col-12 order-lg-2) */}
            <div className="col-lg-8 col-12 order-1 lg:order-2 lg:col-span-8">
              <div className="service-single-wrap">
                {/* Title Image */}
                <div className="title-image mb-8 rounded-[16px] overflow-hidden relative aspect-[16/9] shadow-sm">
                  <Image
                    src="/images/service-single/img-1.jpg"
                    alt="Residential Cleaning Detail"
                    fill
                    className="object-cover rounded-[16px]"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>

                {/* Main Heading & Intro */}
                <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-serif font-medium text-ink mb-5">
                  Residential Cleaning
                </h2>
                <p className="text-base text-[#6B7280] leading-[1.9] mb-10 max-w-[800px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.
                </p>

                {/* Subtitle & Paragraph */}
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-ink mb-5 leading-snug">
                  Sed ut perspiciatis unde omnis iste natus et
                </h3>
                <p className="text-base text-[#6B7280] leading-[1.9] mb-10 max-w-[800px]">
                  Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                {/* Video Wrap */}
                <div className="video-wrap flex flex-col md:flex-row items-center gap-8 mb-10 bg-surface p-6 sm:p-8 rounded-[20px]">
                  {/* Video Thumbnail */}
                  <div className="video-img relative max-w-[380px] w-full aspect-[4/3] rounded-[14px] overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src="/images/service-single/video.jpg"
                      alt="Service Single Video"
                      fill
                      className="object-cover"
                    />
                    <div className="video-holder absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={() => setVideoModal(true)}
                        className="video-btn w-20 h-20 bg-white rounded-full flex items-center justify-center text-brand-600 hover:scale-110 transition-transform shadow-lg cursor-pointer"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </button>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="video-content flex-1">
                    <h2 className="text-xl sm:text-2xl font-serif font-medium text-ink mb-3">
                      Why RedSky Quality Matters ?
                    </h2>
                    <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mb-4">
                      Our certified staff follows strict hospital-grade sanitization protocols for a pristine home or office.
                    </p>
                    <ul className="space-y-2.5">
                      {[
                        "100% bonded, insured, and vetted cleaning crew",
                        "Eco-friendly, non-toxic hospital-grade disinfectants",
                        "Flexible scheduling with 100% satisfaction guarantee",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-[#5E5F63] font-medium">
                          <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shadow-xs shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-base text-[#6B7280] leading-[1.9] mb-10 max-w-[800px]">
                  There are many variations of passages of cleaning services available in the market, but RedSky Cleaning Service stands apart with verified protocols, meticulous attention to detail, and a commitment to transforming your indoor air quality and cleanliness.
                </p>

                {/* Quote Box */}
                <h3 className="quate bg-white shadow-md p-6 sm:p-8 border-l-4 border-brand-600 text-base sm:text-lg font-serif font-medium text-ink leading-relaxed mb-12 rounded-r-[10px]">
                  “A sparkling, deeply sanitized space isn't just about appearances—it boosts wellbeing, productivity, and brings lasting peace of mind.”
                </h3>

                {/* Eligibility Checklist / Image Gallery */}
                <div className="image-gallery mb-12">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink mb-6">
                    Service Standards Checklist :
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {["1", "2", "3", "4"].map((imgNum) => (
                      <div
                        key={imgNum}
                        className="relative aspect-square rounded-[14px] overflow-hidden shadow-xs border border-slate-100 group"
                      >
                        <Image
                          src={`/images/image-gallery/${imgNum}.jpg`}
                          alt={`Checklist item ${imgNum}`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accordion */}
                <div className="accordion space-y-4">
                  {accordionItems.map((item, idx) => {
                    const isOpen = activeAccordion === idx;
                    return (
                      <div
                        key={idx}
                        className={`accordion-item border rounded-[14px] overflow-hidden bg-white transition-all ${
                          isOpen
                            ? "border-brand-200 shadow-lg"
                            : "border-slate-200 shadow-xs"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveAccordion(isOpen ? null : idx)}
                          className="accordion-header w-full p-5 sm:p-6 text-left flex items-center justify-between font-serif font-medium text-base sm:text-lg text-ink hover:text-brand-600 transition-colors"
                        >
                          <span>{item.q}</span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors ${isOpen ? "bg-brand-600 text-white" : "bg-slate-100 text-ink"}`}>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="accordion-content px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#5A627D] leading-relaxed border-t border-slate-100 mt-2">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Left Sidebar (col-lg-4 col-12 order-lg-1) */}
            <div className="col-lg-4 col-12 order-2 lg:order-1 lg:col-span-4">
              <div className="service-sidebar space-y-8">
                {/* Service Categories List */}
                <div className="service-catagory bg-white rounded-[16px]">
                  <ul className="space-y-3">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => setActiveCategory(cat)}
                          className={`w-full text-left px-6 py-4 rounded-[10px] font-serif font-medium text-base sm:text-lg flex items-center justify-between transition-all duration-200 cursor-pointer ${
                            activeCategory === cat
                              ? "bg-brand-600 text-white font-bold shadow-md shadow-brand-500/25"
                              : "bg-slate-50 text-ink hover:bg-brand-50 hover:text-brand-600"
                          }`}
                        >
                          <span>{cat}</span>
                          <span className="text-sm">→</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Info Call Box */}
                <div className="service-info relative rounded-[14px] p-8 text-center overflow-hidden shadow-md border border-brand-100">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-100/70 to-[#E2E8F0]/70 opacity-60 -z-10" />

                  {/* Icon */}
                  <div className="icon w-20 h-20 rounded-2xl bg-white text-brand-600 mx-auto flex items-center justify-center mb-6 shadow-sm">
                    <Phone className="w-8 h-8 fill-current" />
                  </div>

                  {/* Headline */}
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-ink leading-snug mb-3">
                    Looking for a Cleaning Service Provider?
                  </h2>

                  {/* Subtext */}
                  <span className="font-serif text-xs font-semibold text-ink/80 tracking-[0.15em] uppercase block mb-4">
                    Call anytime 24/7
                  </span>

                  {/* Phone Button */}
                  <a
                    href="tel:+17189044450"
                    className="num inline-block bg-brand-600 hover:bg-brand-700 text-white font-bold text-base sm:text-lg py-3.5 px-8 rounded-full shadow-lg shadow-brand-500/25 transition-all hover:scale-105"
                  >
                    <span>+1 718-904-4450</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal if clicked */}
      {videoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModal(false)}
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/1Bsgv6DnTiI?autoplay=1"
              title="Cleanar Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
