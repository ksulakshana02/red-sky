import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = { title: "Page not found" };

const suggestions = [
  { label: "All facility services", href: "/services" },
  { label: "Request a quote", href: "/quote" },
  { label: "About RedSky", href: "/about" },
  { label: "Contact us", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1 flex items-center">
        <div className="shell max-w-2xl py-20 sm:py-28 text-center">
          <p className="text-[64px] sm:text-[88px] font-medium text-brand-600 leading-none tracking-tight mb-4">
            404
          </p>
          <h1 className="text-[28px] sm:text-4xl font-medium text-ink tracking-tight mb-4">
            That page has moved or never existed
          </h1>
          <p className="text-body/80 text-base sm:text-lg mb-8">
            We rebuilt this site when RedSky grew from cleaning into full facility
            services, so a few old addresses have changed. Here&apos;s where people
            usually want to go.
          </p>

          <ul className="flex flex-wrap justify-center gap-2.5 mb-9">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="btn btn-secondary">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn btn-primary h-[52px] px-7">
              Back to home
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <a href={site.phone.href} className="btn btn-secondary h-[52px] px-7">
              <Phone className="w-4 h-4 text-brand-600" aria-hidden />
              {site.phone.display}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
