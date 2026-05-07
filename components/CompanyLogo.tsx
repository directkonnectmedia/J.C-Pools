"use client";

import Image from "next/image";
import { COMPANY_LOGO_SRC } from "@/lib/site-data";

export type LogoVariant = "header" | "hero" | "footer";

function remoteLogo(src: string) {
  return /^https?:\/\//i.test(src);
}

const VARIANT_BOX: Record<
  LogoVariant,
  { box: string; sizes: string; priority: boolean }
> = {
  header: {
    box: "h-14 w-[5.25rem] sm:h-16 sm:w-24",
    sizes: "(max-width: 640px) 84px, 96px",
    priority: true,
  },
  hero: {
    box: "h-[8.5rem] w-[11rem] sm:h-[10rem] sm:w-[13rem]",
    sizes: "(max-width: 640px) 176px, 208px",
    priority: true,
  },
  footer: {
    box: "h-12 w-14 shrink-0 sm:h-[3.25rem] sm:w-[4.5rem]",
    sizes: "(max-width: 640px) 56px, 72px",
    priority: false,
  },
};

type Props = {
  variant: LogoVariant;
  className?: string;
};

export function CompanyLogo({ variant, className = "" }: Props) {
  const { box, sizes, priority } = VARIANT_BOX[variant];
  const outer = `relative shrink-0 overflow-visible drop-shadow-lg ${box} ${className}`;
  const imgClass =
    "absolute inset-0 h-full w-full object-contain object-left";

  if (remoteLogo(COMPANY_LOGO_SRC)) {
    return (
      <div className={outer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={COMPANY_LOGO_SRC} alt="" className={imgClass} />
      </div>
    );
  }

  return (
    <div className={outer}>
      <Image
        src={COMPANY_LOGO_SRC}
        alt=""
        role="presentation"
        fill
        priority={priority}
        sizes={sizes}
        unoptimized
        className={imgClass}
      />
    </div>
  );
}
