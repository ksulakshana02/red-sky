"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { site } from "@/lib/site";

const subjects = [
  "Request a quote or walkthrough",
  "Question about a service",
  "Existing contract or site issue",
  "Tender or procurement enquiry",
  "Careers",
  "Something else",
];

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * General contact form. Deliberately short — the long, qualifying version
 * lives at /quote. Posts to the same endpoint so every enquiry lands in
 * one place, and falls back to a prefilled email if delivery isn't
 * configured yet, so nothing is ever silently dropped.
 */
export default function ContactFormSection() {
  const [v, setV] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: subjects[0],
    message: "",
    company_website: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "unconfigured" | "error"
  >("idle");
  const alertRef = useRef<HTMLDivElement>(null);

  const set = (k: keyof typeof v, value: string) => {
    setV((prev) => ({ ...prev, [k]: value }));
    setErrors((e) => {
      if (!e[k]) return e;
      const next = { ...e };
      delete next[k];
      return next;
    });
  };

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${v.name}`,
      v.company && `Organisation: ${v.company}`,
      `Email: ${v.email}`,
      v.phone && `Phone: ${v.phone}`,
      `Subject: ${v.subject}`,
      "",
      v.message,
    ]
      .filter(Boolean)
      .join("\n");
    return `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
  }, [v]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!v.name.trim()) err.name = "Please tell us your name.";
    if (!v.email.trim()) err.email = "Please enter an email address.";
    else if (!isEmail(v.email)) err.email = "That email address doesn't look right.";
    if (!v.phone.trim()) err.phone = "Please enter a contact number.";
    if (!v.message.trim()) err.message = "Let us know what you need.";
    setErrors(err);
    if (Object.keys(err).length > 0) {
      alertRef.current?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...v,
          company: v.company || "Not supplied",
          services: [],
          specialist: [],
          message: `[${v.subject}]\n\n${v.message}`,
        }),
      });
      if (res.ok) setStatus("sent");
      else if (res.status === 501) setStatus("unconfigured");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section className="py-16 sm:py-20 bg-surface">
        <div className="shell max-w-2xl">
          <div className="card p-8 sm:p-12 text-center">
            <span className="w-16 h-16 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" aria-hidden />
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-medium text-ink tracking-tight mb-3">
              Message received
            </h2>
            <p className="text-body/80" role="status">
              {site.responsePromise} If it&apos;s urgent, call {site.phone.display} and
              you&apos;ll get a person rather than a queue.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const errorList = Object.entries(errors);

  return (
    <section id="contact-form" className="py-16 sm:py-20 lg:py-24 bg-surface scroll-mt-24">
      <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-5">
          <span className="eyebrow eyebrow-accent mb-4">Send a message</span>
          <h2 className="text-[28px] sm:text-4xl font-medium tracking-tight text-ink leading-tight mb-4">
            Tell us what you need and we&apos;ll route it to the right person
          </h2>
          <p className="text-body/80 mb-6">
            For a quote, the{" "}
            <a href="/quote" className="text-brand-700 font-medium underline underline-offset-2">
              three-step quote request
            </a>{" "}
            gathers what we need to scope your site properly. For anything else, this form
            is the quickest way through.
          </p>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-center gap-3 text-body">
              <Phone className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
              <a href={site.phone.href} className="rounded hover:text-brand-700">
                {site.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-3 text-body">
              <Mail className="w-4 h-4 text-brand-600 shrink-0" aria-hidden />
              <a href={`mailto:${site.email}`} className="rounded hover:text-brand-700 break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} noValidate className="lg:col-span-7 card p-5 sm:p-8">
          {errorList.length > 0 && (
            <div
              ref={alertRef}
              tabIndex={-1}
              role="alert"
              className="mb-6 rounded-2xl border border-brand-200 bg-brand-50 p-4 outline-none"
            >
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-1.5">
                <AlertTriangle className="w-4 h-4" aria-hidden />
                Please check {errorList.length === 1 ? "this field" : "these fields"}
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-sm text-brand-800">
                {errorList.map(([k, m]) => (
                  <li key={k}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="c-name" className="field-label">
                Name <span className="text-brand-600">*</span>
              </label>
              <input
                id="c-name"
                type="text"
                autoComplete="name"
                className="field"
                value={v.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "c-name-err" : undefined}
              />
              {errors.name && (
                <span id="c-name-err" className="field-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="c-company" className="field-label">
                Organisation <span className="text-muted font-normal">(optional)</span>
              </label>
              <input
                id="c-company"
                type="text"
                autoComplete="organization"
                className="field"
                value={v.company}
                onChange={(e) => set("company", e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="c-email" className="field-label">
                Email <span className="text-brand-600">*</span>
              </label>
              <input
                id="c-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="field"
                value={v.email}
                onChange={(e) => set("email", e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "c-email-err" : undefined}
              />
              {errors.email && (
                <span id="c-email-err" className="field-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="c-phone" className="field-label">
                Phone <span className="text-brand-600">*</span>
              </label>
              <input
                id="c-phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                className="field"
                value={v.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "c-phone-err" : undefined}
              />
              {errors.phone && (
                <span id="c-phone-err" className="field-error">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="c-subject" className="field-label">
                What&apos;s it about?
              </label>
              <select
                id="c-subject"
                className="field"
                value={v.subject}
                onChange={(e) => set("subject", e.target.value)}
              >
                {subjects.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="field-label">
                Message <span className="text-brand-600">*</span>
              </label>
              <textarea
                id="c-message"
                className="field"
                placeholder="Site type, location, what you need and by when."
                value={v.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "c-message-err" : undefined}
              />
              {errors.message && (
                <span id="c-message-err" className="field-error">
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          {/* Honeypot */}
          <div aria-hidden className="absolute -left-[9999px] w-px h-px overflow-hidden">
            <label htmlFor="c-website">Leave this field empty</label>
            <input
              id="c-website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={v.company_website}
              onChange={(e) => set("company_website", e.target.value)}
            />
          </div>

          {(status === "unconfigured" || status === "error") && (
            <div role="alert" className="mt-6 rounded-2xl border border-brand-200 bg-brand-50 p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-800 mb-2">
                <AlertTriangle className="w-4 h-4" aria-hidden />
                {status === "unconfigured"
                  ? "Online submission isn't switched on yet"
                  : "That didn't go through"}
              </p>
              <p className="text-sm text-brand-900/85 mb-4">
                Nothing was lost — the email below is already filled in with what you wrote.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={mailtoHref} className="btn btn-primary">
                  <Mail className="w-4 h-4" aria-hidden />
                  Email it to us
                </a>
                <a href={site.phone.href} className="btn btn-secondary">
                  <Phone className="w-4 h-4" aria-hidden />
                  {site.phone.display}
                </a>
              </div>
            </div>
          )}

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-4">
            <button type="submit" disabled={status === "sending"} className="btn btn-primary">
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <Send className="w-4 h-4" aria-hidden />
                </>
              )}
            </button>
            <p className="text-[13px] text-muted">
              We use your details only to reply. No marketing list.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
