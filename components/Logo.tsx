import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo — public/redsky-logo-blue.svg (618 × 200).
 *
 * Rendered by height with width:auto so it keeps its true proportions.
 * (Previously it was squeezed into a fixed 178×48 box with object-contain,
 * which shrank the tagline to ~4px.)
 */
export default function Logo({
  variant = "dark",
  className = "",
}: {
  /** "dark" = on light backgrounds; "light" = on dark backgrounds (adds a white plate,
   *  because the SVG's wordmark and tagline are dark) */
  variant?: "dark" | "light";
  className?: string;
}) {
  const img = (
    <Image
      src={site.logo}
      alt={site.name}
      width={618}
      height={200}
      priority={variant === "dark"}
      className="h-12 sm:h-14 lg:h-[60px] w-auto"
    />
  );

  if (variant === "light") {
    return (
      <span className={`inline-flex items-center rounded-2xl bg-white px-4 py-3 shadow-sm ${className}`}>
        {img}
      </span>
    );
  }
  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
