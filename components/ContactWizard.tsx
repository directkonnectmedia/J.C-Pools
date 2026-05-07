"use client";

import { useMemo, useState } from "react";
import {
  COMPANY,
  SERVICE_SLIDES,
  TIMELINE_OPTIONS,
} from "@/lib/site-data";
import { ThankYouModal } from "./ThankYouModal";

const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function buildMailto(body: string) {
  const subject = encodeURIComponent(`Quote request — ${COMPANY.name}`);
  const encoded = encodeURIComponent(body);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  /* Omit recipient until NEXT_PUBLIC_CONTACT_EMAIL is set — body still prefilled */
  return email
    ? `mailto:${email}?subject=${subject}&body=${encoded}`
    : `mailto:?subject=${subject}&body=${encoded}`;
}

export function ContactWizard() {
  const [step, setStep] = useState(0);
  const [timelineId, setTimelineId] = useState<string | null>(null);
  const [serviceIds, setServiceIds] = useState<string[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobType, setJobType] = useState<"residential" | "commercial" | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [thanksOpen, setThanksOpen] = useState(false);

  const serviceLabels = useMemo(
    () =>
      SERVICE_SLIDES.map((s) => ({
        id: s.id,
        label: s.title,
      })),
    [],
  );

  function toggleService(id: string) {
    setServiceIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  function validateStep(): boolean {
    setError(null);
    if (step === 0) {
      if (!timelineId) {
        setError("Please choose when you would like to get started.");
        return false;
      }
    }
    if (step === 1) {
      if (serviceIds.length === 0) {
        setError("Please select at least one service.");
        return false;
      }
    }
    if (step === 2) {
      if (!fullName.trim()) {
        setError("Please enter your full name.");
        return false;
      }
      if (!EMAIL_RE.test(email.trim())) {
        setError("Please enter a valid email address.");
        return false;
      }
      if (phone.trim().length < 10) {
        setError("Please enter a phone number we can reach you at.");
        return false;
      }
      if (!jobType) {
        setError("Please choose residential or commercial.");
        return false;
      }
    }
    return true;
  }

  function submitWizard() {
    const timelineLabel =
      TIMELINE_OPTIONS.find((t) => t.id === timelineId)?.label ?? timelineId;
    const servicesText = serviceLabels
      .filter((s) => serviceIds.includes(s.id))
      .map((s) => s.label)
      .join(", ");

    const body = [
      `Timeline: ${timelineLabel}`,
      `Services interested in: ${servicesText}`,
      `Name: ${fullName.trim()}`,
      `Email: ${email.trim()}`,
      `Phone: ${phone.trim()}`,
      `Job type: ${jobType === "residential" ? "Residential" : "Commercial"}`,
      "",
      "(Sent from website contact form)",
    ].join("\n");

    try {
      window.setTimeout(() => {
        window.location.href = buildMailto(body);
      }, 400);
    } catch {
      /* ignore */
    }

    setThanksOpen(true);
    setStep(0);
    setTimelineId(null);
    setServiceIds([]);
    setFullName("");
    setEmail("");
    setPhone("");
    setJobType(null);
  }

  return (
    <>
      <section
        id="contact"
        className="scroll-mt-[72px] bg-surface-baby-blue py-20 sm:py-28"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <header className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Contact
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold text-slate-900">
              Tell us about your project
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Three quick steps — timeline, services, and your details.
            </p>
          </header>

          <div className="mt-10 rounded-3xl border border-sky-200/90 bg-white/80 p-6 shadow-lg shadow-sky-900/15 backdrop-blur-sm sm:p-10">
            <ol className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
              <li className={step === 0 ? "font-semibold text-cyan-700" : ""}>
                1 · Timeline
              </li>
              <span aria-hidden className="text-slate-400">
                —
              </span>
              <li className={step === 1 ? "font-semibold text-cyan-700" : ""}>
                2 · Services
              </li>
              <span aria-hidden className="text-slate-400">
                —
              </span>
              <li className={step === 2 ? "font-semibold text-cyan-700" : ""}>
                3 · Your info
              </li>
            </ol>

            <div className="mt-10 space-y-6">
              {step === 0 && (
                <div>
                  <p className="text-lg font-medium text-slate-900">
                    When do you need help?
                  </p>
                  <div className="mt-4 flex flex-col gap-3">
                    {TIMELINE_OPTIONS.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setTimelineId(opt.id)}
                        className={`min-h-[48px] rounded-2xl border px-4 py-3 text-left text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                          timelineId === opt.id
                            ? "border-cyan-600 bg-cyan-100 text-slate-900 shadow-sm shadow-cyan-900/10"
                            : "border-sky-200 bg-white text-slate-800 hover:border-sky-400"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <p className="text-lg font-medium text-slate-900">
                    Which services are you considering?
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Select any that apply — tap again to deselect.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceLabels.map((s) => {
                      const on = serviceIds.includes(s.id);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.id)}
                          className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                            on
                              ? "border-cyan-600 bg-cyan-100 text-slate-900 shadow-sm"
                              : "border-sky-200 bg-white text-slate-800 hover:border-sky-400"
                          }`}
                        >
                          {s.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="cw-name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>
                    <input
                      id="cw-name"
                      autoComplete="name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="mt-2 w-full min-h-[48px] rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-900 outline-none ring-sky-400/50 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cw-email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="cw-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full min-h-[48px] rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-900 outline-none ring-sky-400/50 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cw-phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone number
                    </label>
                    <input
                      id="cw-phone"
                      type="tel"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full min-h-[48px] rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-900 outline-none ring-sky-400/50 focus:ring-2"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">
                      Please choose which job you are looking for:
                    </p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        onClick={() => setJobType("residential")}
                        className={`min-h-[48px] rounded-2xl border px-4 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                          jobType === "residential"
                            ? "border-cyan-600 bg-cyan-100 text-slate-900 shadow-sm"
                            : "border-sky-200 bg-white text-slate-800 hover:border-sky-400"
                        }`}
                      >
                        Residential service job
                      </button>
                      <button
                        type="button"
                        onClick={() => setJobType("commercial")}
                        className={`min-h-[48px] rounded-2xl border px-4 py-3 text-center text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700 ${
                          jobType === "commercial"
                            ? "border-cyan-600 bg-cyan-100 text-slate-900 shadow-sm"
                            : "border-sky-200 bg-white text-slate-800 hover:border-sky-400"
                        }`}
                      >
                        Commercial service job
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {error ? (
                <p className="rounded-xl border border-rose-400/70 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                  {error}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-2">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => {
                      setError(null);
                      setStep((s) => s - 1);
                    }}
                    className="inline-flex min-h-[48px] min-w-[44px] items-center justify-center rounded-full border border-sky-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-sky-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
                  >
                    Back
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => {
                    if (!validateStep()) return;
                    if (step < 2) setStep((s) => s + 1);
                    else submitWizard();
                  }}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-600/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 sm:flex-none"
                >
                  {step === 2 ? "Submit" : "Next"}
                </button>
              </div>

              <p className="text-xs leading-relaxed text-slate-600">
                {/* Hook for future Formspree / API — set NEXT_PUBLIC_CONTACT_EMAIL for mailto &quot;to&quot; */}
                Prefer phone? Call{" "}
                <a
                  className="font-medium text-cyan-700 underline-offset-2 hover:underline"
                  href={COMPANY.phoneTel}
                >
                  {COMPANY.phoneDisplay}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <ThankYouModal open={thanksOpen} onClose={() => setThanksOpen(false)} />
    </>
  );
}
