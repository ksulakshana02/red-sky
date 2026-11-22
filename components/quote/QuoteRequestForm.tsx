"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { servicesList, specialistServices } from "@/lib/services";
import { industries } from "@/lib/industries";
import { site } from "@/lib/site";

/* ── Option sets ───────────────────────────────────────────────────── */

const siteCounts = ["1 site", "2–5 sites", "6–20 sites", "20+ sites"];
const floorAreas = [
  "Under 500 m²",
  "500 – 2,000 m²",
  "2,000 – 10,000 m²",
  "Over 10,000 m²",
  "Not sure yet",
];
const situations = [
  "New site or first-time contract",
  "Replacing our current contractor",
  "Going to market / formal tender",
  "One-off or project work",
];
const frequencies = [
  "Daily",
  "Several times a week",
  "Weekly",
  "Fortnightly or monthly",
  "Periodic / one-off",
];
const accessHoursOptions = [
  "During business hours",
  "After hours / evenings",
  "Overnight",
  "Weekends",
  "Flexible",
];
const startTimings = ["As soon as possible", "Within 1 month", "1–3 months", "Just researching"];
const contactPreferences = ["Phone", "Email", "Either"];

type Values = {
  services: string[];
  specialist: string[];
  industry: string;
  siteCount: string;
  floorArea: string;
  region: string;
  situation: string;
  frequency: string;
  accessHours: string;
  startTiming: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  preferredContact: string;
  message: string;
  company_website: string; // honeypot
};

const EMPTY: Values = {
  services: [],
  specialist: [],
  industry: "",
  siteCount: "",
  floorArea: "",
  region: "",
  situation: "",
  frequency: "",
  accessHours: "",
  startTiming: "",
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  preferredContact: "Either",
  message: "",
  company_website: "",
};

const STEPS = [
  { id: 0, label: "Services" },
  { id: 1, label: "Your site" },
  { id: 2, label: "Your details" },
] as const;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/* ── Small presentational helpers ──────────────────────────────────── */

function Chip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-11 px-4 py-2.5 rounded-full text-sm font-medium border transition-colors cursor-pointer text-left ${
        selected
          ? "bg-brand-600 border-brand-600 text-white"
          : "bg-white border-line-strong text-ink hover:border-brand-300 hover:bg-brand-50"
      }`}
    >
      {children}
    </button>
  );
}

function CheckCard({
  selected,
  onClick,
  title,
  desc,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex items-start gap-3 text-left rounded-2xl border p-4 transition-colors cursor-pointer h-full ${
        selected
          ? "border-brand-600 bg-brand-50"
          : "border-line bg-white hover:border-brand-300 hover:bg-surface"
      }`}
    >
      <span
        className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
          selected ? "bg-brand-600 border-brand-600 text-white" : "border-line-strong bg-white"
        }`}
        aria-hidden
      >
        {selected && <Check className="w-3 h-3" strokeWidth={3} />}
      </span>
      <span>
        <span className="block text-[15px] font-medium text-ink leading-snug">{title}</span>
        {desc && (
          <span className="block text-[13px] text-muted leading-relaxed mt-0.5">{desc}</span>
        )}
      </span>
    </button>
  );
}

/* ── Form ──────────────────────────────────────────────────────────── */

export default function QuoteRequestForm({
  presetService,
}: {
  /** Service id from ?service= so a visitor who clicked through isn't asked twice. */
  presetService?: string;
}) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>(() => ({
    ...EMPTY,
    services: presetService ? [presetService] : [],
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unconfigured" | "error">(
    "idle",
  );

  const errorRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);
  const firstRender = useRef(true);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key as string];
      return next;
    });
  };

  const toggle = (key: "services" | "specialist", id: string) =>
    setValues((v) => ({
      ...v,
      [key]: v[key].includes(id) ? v[key].filter((x) => x !== id) : [...v[key], id],
    }));

  // Move focus to the step heading on change, so screen reader and keyboard
  // users land in the new content instead of at the top of the document.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    headingRef.current?.focus();
  }, [step]);

  useEffect(() => {
    if (Object.keys(errors).length > 0) errorRef.current?.focus();
  }, [errors]);

  function validate(target: number): boolean {
    const e: Record<string, string> = {};
    if (target > 0 && values.services.length === 0 && values.specialist.length === 0) {
      e.services = "Choose at least one service so we know who to put on it.";
    }
    if (target > 1) {
      if (!values.industry) e.industry = "Tell us the type of site.";
      if (!values.region.trim()) e.region = "Where is the site? A suburb or state is enough.";
    }
    if (target > 2) {
      if (!values.name.trim()) e.name = "We need a name to address the proposal to.";
      if (!values.company.trim()) e.company = "Enter your organisation's name.";
      if (!values.email.trim()) e.email = "Enter an email address.";
      else if (!isEmail(values.email)) e.email = "That email address doesn't look right.";
      if (!values.phone.trim()) e.phone = "Enter a phone number so we can arrange the walkthrough.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  const goNext = () => {
    if (validate(step + 1)) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  };
  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  };

  /** Fallback path: everything the visitor typed, as a prefilled email. */
  const mailtoHref = useMemo(() => {
    const chosen = [
      ...values.services.map((id) => servicesList.find((s) => s.id === id)?.title ?? id),
      ...values.specialist.map((id) => specialistServices.find((s) => s.id === id)?.title ?? id),
    ];
    const body = [
      `Name: ${values.name}`,
      `Organisation: ${values.company}`,
      values.role && `Role: ${values.role}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Preferred contact: ${values.preferredContact}`,
      "",
      `Services: ${chosen.join(", ") || "—"}`,
      `Sector: ${values.industry || "—"}`,
      `Sites: ${values.siteCount || "—"}`,
      `Approx. floor area: ${values.floorArea || "—"}`,
      `Location: ${values.region || "—"}`,
      `Situation: ${values.situation || "—"}`,
      `Frequency: ${values.frequency || "—"}`,
      `Access hours: ${values.accessHours || "—"}`,
      `Timing: ${values.startTiming || "—"}`,
      "",
      values.message && `Notes:\n${values.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(
      `Quote request — ${values.company || "new enquiry"}`,
    )}&body=${encodeURIComponent(body)}`;
  }, [values]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate(3)) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) setStatus("sent");
      else if (res.status === 501) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  /* ── Confirmation ─────────────────────────────────────────────── */
  if (status === "sent") {
    return (
      <section className="py-16 sm:py-20 bg-white">
        <div className="shell max-w-2xl text-center">
          <span className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8" aria-hidden />
          </span>
          <h2 className="text-[26px] sm:text-4xl font-medium text-ink tracking-tight mb-3">
            Thanks — we&apos;ve got it
          </h2>
          <p className="text-body/80 text-base sm:text-lg mb-8" role="status">
            {site.responsePromise} We&apos;ll be in touch to arrange a walkthrough and come
            back to you with a written scope of works and a fixed monthly price.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/services" className="btn btn-secondary">
              Browse our services
            </Link>
            <a href={site.phone.href} className="btn btn-primary">
              <Phone className="w-4 h-4" aria-hidden />
              {site.phone.display}
            </a>
          </div>
        </div>
      </section>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="shell max-w-4xl">
        {/* Progress */}
        <ol className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-10" aria-label="Progress">
          {STEPS.map((s, i) => {
            const done = i < step;
            const active = i === step;
            return (
              <li key={s.id} className="flex-1 flex items-center gap-2 sm:gap-3">
                <span
                  className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-[13px] font-semibold transition-colors ${
                    done
                      ? "bg-brand-600 text-white"
                      : active
                        ? "bg-brand-600 text-white"
                        : "bg-surface-2 text-muted"
                  }`}
                  aria-hidden
                >
                  {done ? <Check className="w-4 h-4" strokeWidth={3} /> : i + 1}
                </span>
                <span
                  className={`text-[13px] sm:text-sm font-medium whitespace-nowrap ${
                    active ? "text-ink" : "text-muted"
                  }`}
                >
                  {s.label}
                  {active && <span className="sr-only"> (current step)</span>}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={`hidden sm:block flex-1 h-px ${done ? "bg-brand-300" : "bg-line"}`}
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ol>

        <form onSubmit={handleSubmit} noValidate className="card p-5 sm:p-8 lg:p-10">
          <p
            ref={headingRef}
            tabIndex={-1}
            className="text-[13px] font-semibold uppercase tracking-wider text-brand-700 mb-1.5 outline-none"
          >
            Step {step + 1} of {STEPS.length}
          </p>

          {/* Error summary */}
          {errorList.length > 0 && (
            <div
              ref={errorRef}
              tabIndex={-1}
              role="alert"
              className="mb-6 rounded-2xl border border-brand-200 bg-brand-50 p-4 outline-none"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-1.5">
                <AlertTriangle className="w-4 h-4" aria-hidden />
                Please check {errorList.length === 1 ? "this field" : "these fields"}
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-sm text-brand-800">
                {errorList.map(([k, v]) => (
                  <li key={k}>{v}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Step 1: services ── */}
          {step === 0 && (
            <div>
              <h2 className="text-[22px] sm:text-[28px] font-medium text-ink tracking-tight mb-2">
                What do you need covered?
              </h2>
              <p className="text-body/75 text-[15px] mb-7">
                Choose as many as apply. If you are not sure yet, pick the closest and
                we&apos;ll work the rest out at the walkthrough.
              </p>

              <fieldset className="mb-8">
                <legend className="field-label mb-3">Core service lines</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesList.map((s) => (
                    <CheckCard
                      key={s.id}
                      selected={values.services.includes(s.id)}
                      onClick={() => toggle("services", s.id)}
                      title={s.title}
                      desc={s.cadence}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="field-label mb-3">Specialist works (optional)</legend>
                <div className="flex flex-wrap gap-2.5">
                  {specialistServices.map((s) => (
                    <Chip
                      key={s.id}
                      selected={values.specialist.includes(s.id)}
                      onClick={() => toggle("specialist", s.id)}
                    >
                      {s.title}
                    </Chip>
                  ))}
                </div>
              </fieldset>
            </div>
          )}

          {/* ── Step 2: the site ── */}
          {step === 1 && (
            <div>
              <h2 className="text-[22px] sm:text-[28px] font-medium text-ink tracking-tight mb-2">
                Tell us about the site
              </h2>
              <p className="text-body/75 text-[15px] mb-7">
                Enough to scope it properly. Exact measurements come later, at the walkthrough.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label htmlFor="industry" className="field-label">
                    Type of site <span className="text-brand-600">*</span>
                  </label>
                  <select
                    id="industry"
                    className="field"
                    value={values.industry}
                    onChange={(e) => set("industry", e.target.value)}
                    aria-invalid={Boolean(errors.industry)}
                    aria-describedby={errors.industry ? "industry-err" : undefined}
                  >
                    <option value="">Select a sector…</option>
                    {industries.map((i) => (
                      <option key={i.id} value={i.name}>
                        {i.name}
                      </option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                  {errors.industry && (
                    <span id="industry-err" className="field-error">
                      {errors.industry}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="region" className="field-label">
                    Suburb or state <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="region"
                    type="text"
                    className="field"
                    placeholder="e.g. Dandenong VIC"
                    value={values.region}
                    onChange={(e) => set("region", e.target.value)}
                    aria-invalid={Boolean(errors.region)}
                    aria-describedby={errors.region ? "region-err" : "region-hint"}
                  />
                  {errors.region ? (
                    <span id="region-err" className="field-error">
                      {errors.region}
                    </span>
                  ) : (
                    <span id="region-hint" className="field-hint">
                      We service {site.serviceAreas.join(", ")}.
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <fieldset>
                  <legend className="field-label mb-2.5">How many sites?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {siteCounts.map((o) => (
                      <Chip
                        key={o}
                        selected={values.siteCount === o}
                        onClick={() => set("siteCount", values.siteCount === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="field-label mb-2.5">Approximate floor area</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {floorAreas.map((o) => (
                      <Chip
                        key={o}
                        selected={values.floorArea === o}
                        onClick={() => set("floorArea", values.floorArea === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="field-label mb-2.5">Where are you up to?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {situations.map((o) => (
                      <Chip
                        key={o}
                        selected={values.situation === o}
                        onClick={() => set("situation", values.situation === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="field-label mb-2.5">How often do you need service?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {frequencies.map((o) => (
                      <Chip
                        key={o}
                        selected={values.frequency === o}
                        onClick={() => set("frequency", values.frequency === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="field-label mb-2.5">When can we access the site?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {accessHoursOptions.map((o) => (
                      <Chip
                        key={o}
                        selected={values.accessHours === o}
                        onClick={() => set("accessHours", values.accessHours === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="field-label mb-2.5">When would you like to start?</legend>
                  <div className="flex flex-wrap gap-2.5">
                    {startTimings.map((o) => (
                      <Chip
                        key={o}
                        selected={values.startTiming === o}
                        onClick={() => set("startTiming", values.startTiming === o ? "" : o)}
                      >
                        {o}
                      </Chip>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>
          )}

          {/* ── Step 3: contact ── */}
          {step === 2 && (
            <div>
              <h2 className="text-[22px] sm:text-[28px] font-medium text-ink tracking-tight mb-2">
                Who should we talk to?
              </h2>
              <p className="text-body/75 text-[15px] mb-7">
                No obligation, and no sales sequence — one person will contact you to
                arrange the walkthrough.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="field-label">
                    Full name <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    className="field"
                    value={values.name}
                    onChange={(e) => set("name", e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-err" : undefined}
                  />
                  {errors.name && (
                    <span id="name-err" className="field-error">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="field-label">
                    Organisation <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    className="field"
                    value={values.company}
                    onChange={(e) => set("company", e.target.value)}
                    aria-invalid={Boolean(errors.company)}
                    aria-describedby={errors.company ? "company-err" : undefined}
                  />
                  {errors.company && (
                    <span id="company-err" className="field-error">
                      {errors.company}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="field-label">
                    Your role <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <input
                    id="role"
                    type="text"
                    autoComplete="organization-title"
                    className="field"
                    placeholder="e.g. Facilities Manager"
                    value={values.role}
                    onChange={(e) => set("role", e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="field-label">
                    Phone <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    className="field"
                    value={values.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-err" : undefined}
                  />
                  {errors.phone && (
                    <span id="phone-err" className="field-error">
                      {errors.phone}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="field-label">
                    Work email <span className="text-brand-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    className="field"
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-err" : undefined}
                  />
                  {errors.email && (
                    <span id="email-err" className="field-error">
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <fieldset>
                    <legend className="field-label mb-2.5">Preferred contact method</legend>
                    <div className="flex flex-wrap gap-2.5">
                      {contactPreferences.map((o) => (
                        <Chip
                          key={o}
                          selected={values.preferredContact === o}
                          onClick={() => set("preferredContact", o)}
                        >
                          {o}
                        </Chip>
                      ))}
                    </div>
                  </fieldset>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="field-label">
                    Anything else we should know?{" "}
                    <span className="text-muted font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    className="field"
                    placeholder="Current pain points, tender deadlines, specific compliance requirements…"
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                  />
                </div>
              </div>

              {/* Honeypot — hidden from people, irresistible to bots */}
              <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
                <label htmlFor="company_website">Leave this field empty</label>
                <input
                  id="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company_website}
                  onChange={(e) => set("company_website", e.target.value)}
                />
              </div>

              {/* Delivery not configured — give them a path that works right now */}
              {status === "unconfigured" && (
                <div
                  role="alert"
                  className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 p-5"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden />
                    Online submission isn&apos;t switched on yet
                  </p>
                  <p className="text-sm text-brand-900/85 mb-4">
                    Nothing was lost. Send the same details through now — the email below is
                    already filled in with everything you entered.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={mailtoHref} className="btn btn-primary">
                      <Mail className="w-4 h-4" aria-hidden />
                      Email it to us
                    </a>
                    <a href={site.phone.href} className="btn btn-secondary">
                      <Phone className="w-4 h-4" aria-hidden />
                      Call {site.phone.display}
                    </a>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 p-5"
                >
                  <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-2">
                    <AlertTriangle className="w-4 h-4" aria-hidden />
                    That didn&apos;t go through
                  </p>
                  <p className="text-sm text-brand-900/85 mb-4">
                    Please try again, or reach us directly — we&apos;d rather hear from you
                    than lose the enquiry.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={mailtoHref} className="btn btn-secondary">
                      <Mail className="w-4 h-4" aria-hidden />
                      Email instead
                    </a>
                    <a href={site.phone.href} className="btn btn-secondary">
                      <Phone className="w-4 h-4" aria-hidden />
                      {site.phone.display}
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 pt-6 border-t border-line flex flex-col-reverse sm:flex-row sm:items-center gap-3">
            {step > 0 ? (
              <button type="button" onClick={goBack} className="btn btn-secondary">
                <ArrowLeft className="w-4 h-4" aria-hidden />
                Back
              </button>
            ) : (
              <span className="hidden sm:block" />
            )}

            <span className="hidden sm:block flex-1" />

            {step < STEPS.length - 1 ? (
              <button type="button" onClick={goNext} className="btn btn-primary">
                Continue
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            ) : (
              <button type="submit" disabled={status === "sending"} className="btn btn-primary">
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    Send enquiry
                    <Send className="w-4 h-4" aria-hidden />
                  </>
                )}
              </button>
            )}
          </div>

          <p className="mt-4 text-[13px] text-muted">
            We use your details only to respond to this enquiry. No marketing sequence,
            and we never pass them on.
          </p>
        </form>
      </div>
    </section>
  );
}
