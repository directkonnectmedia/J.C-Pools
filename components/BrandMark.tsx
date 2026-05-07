import { COMPANY } from "@/lib/site-data";
import { CompanyLogo } from "./CompanyLogo";

type Props = {
  variant?: "header" | "hero";
  className?: string;
};

export function BrandMark({ variant = "header", className = "" }: Props) {
  const isHero = variant === "hero";
  const onLight = variant === "header";

  return (
    <div
      className={`relative isolate flex items-center gap-3 ${isHero ? "flex-col sm:flex-row sm:gap-5" : ""} ${className}`}
    >
      {isHero ? (
        <div
          className="hero-brand-radial-glow pointer-events-none absolute z-0 -inset-x-[clamp(1.75rem,10vw,5rem)] -top-[clamp(2rem,8vw,4.25rem)] -bottom-[clamp(3rem,10vw,5.5rem)] sm:-inset-x-[clamp(3rem,12vw,6rem)] sm:-top-[clamp(2.25rem,6vw,3.75rem)] sm:-bottom-[clamp(2.75rem,7vw,4.5rem)]"
          aria-hidden
        />
      ) : null}
      <CompanyLogo
        variant={variant}
        className={isHero ? "relative z-10" : ""}
      />
      <div
        className={`relative z-10 min-w-0 text-center ${isHero ? "sm:text-left" : ""}`}
      >
        <p
          className={`tracking-tight ${
            onLight
              ? "text-slate-900"
              : "text-white drop-shadow-md"
          } ${
            isHero
              ? "font-[family-name:var(--font-display)] text-[clamp(2.125rem,7.5vw,4.25rem)] font-bold leading-[1.06]"
              : "font-[family-name:var(--font-display)] text-lg font-semibold sm:text-xl leading-snug"
          }`}
        >
          {COMPANY.name}
        </p>
        {!isHero ? (
          <p
            className={`hidden text-[11px] font-medium uppercase tracking-[0.2em] sm:block ${onLight ? "text-sky-700" : "text-cyan-100/90"}`}
          >
            Remodeling
          </p>
        ) : (
          <p className="mt-3 max-w-xl text-base font-semibold text-white/95 drop-shadow-md sm:text-lg">
            {COMPANY.tagline}
          </p>
        )}
      </div>
    </div>
  );
}
