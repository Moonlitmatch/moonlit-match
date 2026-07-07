import Link from "next/link";

const complianceLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact" },
];

const affiliateDisclosure =
  "Moonlit Match may receive a small commission if you choose to continue through links on this site, at no extra cost to you. Content is provided for spiritual curiosity, symbolic insight, and self-reflection.";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05050d] px-6 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-white">
              Moonlit Match
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/55">
              Premium love astrology, moon insight, and soulmate symbolism for
              reflection, curiosity, and personal meaning.
            </p>
          </div>

          <nav
            aria-label="Compliance navigation"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm"
          >
            {complianceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/65 transition hover:text-pink-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-6 text-white/55">
          {affiliateDisclosure}
        </p>
      </div>
    </footer>
  );
}
