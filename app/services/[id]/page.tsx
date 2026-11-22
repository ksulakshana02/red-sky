import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import FaqPreview from "@/components/FaqPreview";
import Footer from "@/components/Footer";
import ServiceIcon from "@/components/ServiceIcon";
import { getService, quoteHref, servicesList } from "@/lib/services";
import { getIndustry } from "@/lib/industries";
import { site } from "@/lib/site";

interface PageProps {
  params: Promise<{ id: string }>;
}

/** Pre-render every service page at build time. */
export function generateStaticParams() {
  return servicesList.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getService(id);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.summary,
    openGraph: {
      title: `${service.title} | ${site.shortName}`,
      description: service.summary,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const service = getService(id);
  if (!service) notFound();

  const related = service.related
    .map((rid) => getService(rid))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const sectors = service.industries
    .map((iid) => getIndustry(iid))
    .filter((i): i is NonNullable<typeof i> => Boolean(i));

  return (
    <div className="bg-white text-body flex flex-col min-h-screen font-sans">
      <Header />
      <main id="main" className="flex-1">
        <PageHeader
          eyebrow={service.badge ?? "Service line"}
          title={service.title}
          description={service.summary}
          trail={[{ label: "Services", href: "/services" }]}
          align="left"
        >
          <Link href={quoteHref(service.id)} className="btn btn-primary h-[52px] px-7">
            Request a quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <a href={site.phone.href} className="btn btn-secondary h-[52px] px-7">
            <Phone className="w-4 h-4 text-brand-600" aria-hidden />
            {site.phone.display}
          </a>
        </PageHeader>

        <article className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Main column */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="relative aspect-[16/9] rounded-[24px] overflow-hidden bg-surface ring-1 ring-line mb-8">
                <Image
                  src={service.image}
                  alt={`${service.title} being delivered on site`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 760px"
                  className="object-cover"
                />
              </div>

              <p className="text-[17px] sm:text-lg text-body/85 leading-relaxed mb-10">
                {service.intro}
              </p>

              <h2 className="text-[24px] sm:text-[32px] font-medium text-ink tracking-tight mb-2">
                Scope of works
              </h2>
              <p className="text-body/75 mb-8">
                This is the template we start from. The final scope is written against your
                specific site after the walkthrough.
              </p>

              <div className="space-y-6">
                {service.scope.map((group) => (
                  <section
                    key={group.heading}
                    className="rounded-[24px] border border-line bg-surface p-6 sm:p-7"
                  >
                    <h3 className="text-lg font-medium text-ink mb-4">{group.heading}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[15px] text-body">
                          <Check
                            className="w-4 h-4 mt-1 text-brand-600 shrink-0"
                            strokeWidth={2.5}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {/* Assurances */}
              <section className="mt-10 rounded-[24px] border border-brand-100 bg-brand-50 p-6 sm:p-8">
                <h2 className="flex items-center gap-2.5 text-lg font-medium text-ink mb-4">
                  <ShieldCheck className="w-5 h-5 text-brand-600" aria-hidden />
                  What we commit to in writing
                </h2>
                <ul className="space-y-3">
                  {service.assurances.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-[15px] text-body">
                      <Check
                        className="w-4 h-4 mt-1 text-brand-700 shrink-0"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 order-1 lg:order-2 lg:sticky lg:top-28 space-y-5">
              {/* At a glance */}
              <div className="card p-6">
                <span className="w-12 h-12 rounded-2xl bg-accent-900 text-white flex items-center justify-center mb-5">
                  <ServiceIcon name={service.icon} className="w-[22px] h-[22px]" />
                </span>
                <h2 className="text-lg font-medium text-ink mb-4">At a glance</h2>
                <dl className="space-y-4 text-[14.5px]">
                  <div>
                    <dt className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-muted mb-1">
                      <CalendarClock className="w-3.5 h-3.5" aria-hidden />
                      Typical schedule
                    </dt>
                    <dd className="text-body">{service.cadence}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-muted mb-1">
                      <Building2 className="w-3.5 h-3.5" aria-hidden />
                      Common sectors
                    </dt>
                    <dd className="text-body">{sectors.map((s) => s.name).join(", ")}</dd>
                  </div>
                </dl>
                <Link
                  href={quoteHref(service.id)}
                  className="btn btn-primary w-full mt-6 shadow-none"
                >
                  Request a quote
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>

              {/* Other services */}
              {related.length > 0 && (
                <nav aria-labelledby="related-services" className="card p-6">
                  <h2 id="related-services" className="text-lg font-medium text-ink mb-4">
                    Often taken together
                  </h2>
                  <ul className="space-y-1">
                    {related.map((r) => (
                      <li key={r.id}>
                        <Link
                          href={`/services/${r.id}`}
                          className="group flex items-center gap-3 rounded-2xl px-3 py-3 hover:bg-surface transition-colors"
                        >
                          <span className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                            <ServiceIcon name={r.icon} className="w-4 h-4" />
                          </span>
                          <span className="text-[14.5px] font-medium text-ink group-hover:text-brand-700 transition-colors">
                            {r.navLabel}
                          </span>
                          <ArrowRight
                            className="w-4 h-4 ml-auto text-line-strong group-hover:text-brand-600 transition-colors"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Talk to someone */}
              <div className="on-dark rounded-[24px] bg-accent-900 p-6 text-center">
                <h2 className="text-white text-lg font-medium mb-2">
                  Prefer to talk it through?
                </h2>
                <p className="text-white/70 text-[14.5px] leading-relaxed mb-5">
                  {site.responsePromise}
                </p>
                <a href={site.phone.href} className="btn btn-light w-full mb-2.5">
                  <Phone className="w-4 h-4" aria-hidden />
                  {site.phone.display}
                </a>
                <a href={`mailto:${site.email}`} className="btn btn-ghost-light w-full">
                  <Mail className="w-4 h-4" aria-hidden />
                  Email us
                </a>
              </div>
            </aside>
          </div>
        </article>

        <FaqPreview
          ids={service.faqIds}
          eyebrow={`${service.navLabel} FAQ`}
          title="Questions about this service"
          tinted
        />
      </main>
      <Footer />
    </div>
  );
}
