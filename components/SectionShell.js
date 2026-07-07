export default function SectionShell({
  eyebrow,
  title,
  copy,
  children,
  className = "",
}) {
  return (
    <section
      className={[
        "relative mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {(eyebrow || title || copy) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f8dc8f]">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {copy && (
            <p className="mt-4 text-base leading-7 text-white/66">{copy}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
