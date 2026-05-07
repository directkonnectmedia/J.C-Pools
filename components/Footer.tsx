import { COMPANY } from "@/lib/site-data";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-white">
            {COMPANY.name}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            {COMPANY.tagline}
          </p>
          <p className="mt-4 text-sm text-slate-400">
            <span className="text-slate-500">Service area:</span> {COMPANY.area}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Navigate
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center text-base text-cyan-300/90 underline-offset-4 hover:text-cyan-200 hover:underline"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
            Contact
          </p>
          <a
            href={COMPANY.phoneTel}
            className="mt-4 inline-flex min-h-[44px] items-center text-lg font-semibold text-white hover:text-cyan-200"
          >
            {COMPANY.phoneDisplay}
          </a>
          <p className="mt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
