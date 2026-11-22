import { Clock, Mail, MapPin, Phone, Siren } from "lucide-react";
import { site, fullAddress } from "@/lib/site";

/**
 * Contact methods grid. Phone first — facilities managers with a problem
 * call, they do not fill in forms.
 */
export default function ContactMethods() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="shell">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <li className="card p-6 h-full">
            <span className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5 shadow-[var(--shadow-brand)]">
              <Phone className="w-5 h-5" aria-hidden />
            </span>
            <h2 className="text-[17px] font-medium text-ink mb-1">Call us</h2>
            <p className="text-[14px] text-body/70 mb-3">
              Fastest route to a person who can help.
            </p>
            <a
              href={site.phone.href}
              className="text-[15px] font-semibold text-brand-700 hover:text-brand-800 rounded break-words"
            >
              {site.phone.display}
            </a>
          </li>

          <li className="card p-6 h-full">
            <span className="w-12 h-12 rounded-2xl bg-accent-900 text-white flex items-center justify-center mb-5">
              <Siren className="w-5 h-5" aria-hidden />
            </span>
            <h2 className="text-[17px] font-medium text-ink mb-1">After hours</h2>
            <p className="text-[14px] text-body/70 mb-3">
              Urgent callouts for contracted sites.
            </p>
            <a
              href={site.afterHours.href}
              className="text-[15px] font-semibold text-brand-700 hover:text-brand-800 rounded break-words"
            >
              {site.afterHours.display}
            </a>
          </li>

          <li className="card p-6 h-full">
            <span className="w-12 h-12 rounded-2xl bg-accent-900 text-white flex items-center justify-center mb-5">
              <Mail className="w-5 h-5" aria-hidden />
            </span>
            <h2 className="text-[17px] font-medium text-ink mb-1">Email</h2>
            <p className="text-[14px] text-body/70 mb-3">{site.responsePromise}</p>
            <a
              href={`mailto:${site.email}`}
              className="text-[15px] font-semibold text-brand-700 hover:text-brand-800 rounded break-all"
            >
              {site.email}
            </a>
          </li>

          <li className="card p-6 h-full">
            <span className="w-12 h-12 rounded-2xl bg-accent-900 text-white flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5" aria-hidden />
            </span>
            <h2 className="text-[17px] font-medium text-ink mb-1">Office</h2>
            <address className="not-italic text-[14px] text-body/70 leading-relaxed mb-3">
              {fullAddress}
            </address>
            <p className="flex items-start gap-2 text-[13px] text-muted">
              <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0" aria-hidden />
              {site.hours[0].days} {site.hours[0].time}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
