import { MapPin, Navigation } from "lucide-react";
import { site, fullAddress } from "@/lib/site";

/**
 * Only embeds a map when a real embed URL has been set in lib/site.ts.
 * Publishing an interactive map pinned to a placeholder address would send
 * people to the wrong building, so the fallback is an address panel.
 */
export default function ContactMap() {
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <section id="contact-map" className="py-12 sm:py-16 lg:py-20 bg-surface">
      <div className="shell">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <span className="eyebrow eyebrow-accent mb-3">Where we are</span>
            <h2 className="text-[24px] sm:text-[32px] font-medium text-ink tracking-tight">
              {site.address.suburb} office
            </h2>
          </div>
          {/* The address element is flow content, so a paragraph cannot
              contain it — it is the flex container itself here. */}
          <address className="not-italic flex items-start gap-2 text-sm text-body/80">
            <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" aria-hidden />
            {fullAddress}
          </address>
        </div>

        {site.mapEmbedUrl ? (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-line bg-surface-2">
            <iframe
              title={`Map showing the ${site.shortName} office`}
              src={site.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          <div className="rounded-[24px] sm:rounded-[32px] border border-line bg-white p-8 sm:p-12 text-center">
            <span className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-5">
              <MapPin className="w-6 h-6" aria-hidden />
            </span>
            <h3 className="text-xl font-medium text-ink mb-2">Visits by appointment</h3>
            <p className="text-body/75 max-w-md mx-auto mb-6">
              We come to you — site walkthroughs happen at your building, not ours. If you
              do need to visit the office, call ahead and we&apos;ll make sure someone is in.
            </p>
            <a
              href={directions}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <Navigation className="w-4 h-4 text-brand-600" aria-hidden />
              Get directions
            </a>
          </div>
        )}

        <p className="mt-5 text-sm text-muted">
          Servicing {site.serviceAreas.join(" · ")}. Multi-state portfolios welcome.
        </p>
      </div>
    </section>
  );
}
