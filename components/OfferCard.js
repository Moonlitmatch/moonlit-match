import CTAButton from "@/components/CTAButton";

const toneClasses = {
  moon: "text-[#f8dc8f]",
  sketch: "text-[#f5a8c7]",
};

export default function OfferCard({
  icon: Icon,
  eyebrow,
  title,
  copy,
  href,
  ctaLabel,
  offer,
  tone = "moon",
  points = [],
}) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur">
      <div className={`mb-5 ${toneClasses[tone]}`}>
        <Icon size={30} aria-hidden="true" />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-white/64">{copy}</p>

      {points.length > 0 && (
        <ul className="mt-5 space-y-2 text-sm text-white/62">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className={toneClasses[tone]} aria-hidden="true">
                *
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      <CTAButton
        href={href}
        offer={offer}
        location="mid-page"
        variant="secondary"
        className="mt-7 w-full sm:w-fit"
      >
        {ctaLabel}
      </CTAButton>
    </article>
  );
}
