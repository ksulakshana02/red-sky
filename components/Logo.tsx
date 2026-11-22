import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand lockup — public/rs-new.svg (486 × 140).
 *
 * Rendered by height with width:auto so it always keeps its true
 * proportions and the "FACILITY SERVICE" rule stays legible.
 *
 * The wordmark's "Sky" and the rule are deep teal, which disappears on a
 * dark band — so `variant="light"` swaps in rs-logo-white.svg, the same
 * artwork with the teal replaced by white. The red monogram is kept in
 * both, because it is the part people recognise.
 */
export default function Logo({
  variant = "dark",
  priority = false,
  className = "",
  /** Tailwind height utilities. Width follows automatically. */
  sizeClass = "h-9 sm:h-10 lg:h-11",
}: {
  variant?: "dark" | "light";
  priority?: boolean;
  className?: string;
  sizeClass?: string;
}) {
  return (
    <Image
      src={variant === "light" ? site.logoLight : site.logo}
      alt={site.name}
      width={486}
      height={140}
      priority={priority}
      className={`${sizeClass} w-auto ${className}`}
    />
  );
}

/** Monogram only — for tight spaces such as a condensed sticky header. */
export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src={site.icon}
      alt=""
      width={172}
      height={179}
      aria-hidden
      className={className}
    />
  );
}
