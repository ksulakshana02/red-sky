"use client";

import React from "react";
import Image from "next/image";

interface PageHeaderProps {
  subtitle?: string;
  title: string;
}

export default function PageHeader({
  subtitle = "Because Clean Feels Better",
  title = "Services",
}: PageHeaderProps) {
  return (
    <div className="breadcumb-area box-style relative min-h-[350px] sm:min-h-[406px] flex flex-col justify-center items-center rounded-[14px] overflow-hidden my-4 sm:my-6 mx-3 sm:mx-6 lg:mx-auto max-w-[1691px] shadow-sm z-10">
      {/* Background Gradient matching .breadcumb-area:before */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "linear-gradient(110deg, #FFE4DC -0.4%, #F8FAFC 45%, #E2E8F0 100%)",
          opacity: 0.95,
        }}
      />

      {/* Subtle Background Pattern/Shine Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] z-0 pointer-events-none" />

      {/* Decorative Top-Left Wave/Curve Shape (.shape) */}
      <div className="shape absolute left-0 top-0 pointer-events-none z-1 overflow-hidden opacity-60 hidden md:block">
        <svg
          width="400"
          height="300"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 0C50 120 180 180 350 120C450 80 400 280 400 300L-50 300V0Z"
            fill="url(#header-shape-grad)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="header-shape-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFE4DC" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Floating Shape Left (.shape-s2) */}
      <div className="shape-s2 absolute left-10 sm:left-16 bottom-10 sm:bottom-12 pointer-events-none z-1 hidden md:block animate-bounce">
        <div className="w-12 h-12 rounded-full bg-white/80 border border-red-100 flex items-center justify-center shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
              fill="#DC2626"
            />
          </svg>
        </div>
      </div>

      {/* Animated Floating Shape Right (.shape-s3) */}
      <div className="shape-s3 absolute right-12 sm:right-24 bottom-14 sm:bottom-20 pointer-events-none z-1 hidden md:block">
        <div className="w-16 h-16 rounded-full bg-white/80 border border-red-100 flex items-center justify-center shadow-sm">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#FFD700" strokeWidth="3" />
            <circle cx="12" cy="12" r="4" fill="#DC2626" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-[1440px] mx-auto px-4 text-center relative z-10">
        <div className="row">
          <div className="col-12">
            <div className="breadcumb-wrap space-y-2 sm:space-y-4">
              <h2 className="text-[#DC2626] font-serif text-lg sm:text-2xl font-bold capitalize tracking-wide">
                {subtitle}
              </h2>
              <h3 className="text-5xl sm:text-7xl lg:text-[80px] font-normal text-[#0E152B] font-serif leading-none tracking-tight">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
