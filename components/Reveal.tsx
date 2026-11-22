"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  /** Seconds of delay — use `index * 0.06` for a stagger across a list. */
  delay?: number;
  /** Direction the element travels in from. */
  from?: "bottom" | "left" | "right" | "none";
  as?: "div" | "li" | "section" | "article" | "span";
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "ref">;

const offsets = {
  bottom: { y: 18, x: 0 },
  left: { y: 0, x: -18 },
  right: { y: 0, x: 18 },
  none: { y: 0, x: 0 },
};

/**
 * One scroll-reveal, used everywhere, instead of repeating the same
 * framer-motion props in a dozen components.
 *
 * Animation is opacity + transform only, so it never triggers layout.
 * `prefers-reduced-motion` is honoured globally in globals.css, which
 * collapses the transition to ~0ms — the element still ends up visible.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  as = "div",
  className = "",
  ...rest
}: RevealProps) {
  const Tag = motion[as] as typeof motion.div;
  const offset = offsets[from];

  return (
    <Tag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
