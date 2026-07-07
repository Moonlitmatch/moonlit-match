import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AFFILIATE_REL } from "@/lib/offers";

const variants = {
  primary:
    "bg-gradient-to-r from-[#f8dc8f] via-[#f5a8c7] to-[#a99cff] text-[#10091f] shadow-[0_18px_60px_rgba(245,168,199,0.22)] hover:shadow-[0_22px_70px_rgba(248,220,143,0.28)]",
  secondary:
    "border border-white/18 bg-white/8 text-white hover:border-[#f8dc8f]/55 hover:bg-white/12",
  light:
    "bg-white text-[#10091f] shadow-[0_18px_55px_rgba(255,255,255,0.14)] hover:bg-[#fff4cf]",
};

export default function CTAButton({
  href,
  children,
  offer,
  location,
  external = false,
  variant = "primary",
  className = "",
}) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f8dc8f]/70 focus:ring-offset-2 focus:ring-offset-[#070712] sm:text-base",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const analyticsProps = {
    ...(offer ? { "data-offer": offer } : {}),
    ...(location ? { "data-cta-location": location } : {}),
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel={AFFILIATE_REL}
        className={classes}
        {...analyticsProps}
      >
        <span>{children}</span>
        <ArrowRight size={18} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...analyticsProps}>
      <span>{children}</span>
      <ArrowRight size={18} aria-hidden="true" />
    </Link>
  );
}
