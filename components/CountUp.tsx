"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Counts a figure up once, as it comes into view.
 *
 * Takes the display string straight from lib/site.ts ("350+", "98%",
 * "2017") and animates only the numeric part, so any prefix or suffix the
 * client edits in survives untouched.
 *
 * `display === null` means "render the string as written" — which is the
 * state on the server, before hydration, with JavaScript off, and when the
 * visitor prefers reduced motion. The figure is never hidden behind the
 * effect; the animation is pure decoration layered on top.
 */
export default function CountUp({
  value,
  duration = 1400,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const match = value.match(/^(\D*)(\d[\d,]*)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : null;

  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    // Leaving state alone keeps the final figure on screen, unanimated.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo — quick off the mark, settles gently on the figure
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(target * eased));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      // Fires ~160px before the band scrolls in, so the jump to zero
      // happens off screen and the visitor only ever sees it counting.
      { threshold: 0, rootMargin: "0px 0px 160px 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  const shown =
    display === null || match === null
      ? value
      : `${match[1]}${display.toLocaleString("en-AU")}${match[3]}`;

  return (
    <span ref={ref} className={className}>
      {/* The written value stays in the accessibility tree, so a screen
          reader never announces a half-finished number. */}
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
