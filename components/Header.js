import Link from "next/link";
import { Moon } from "lucide-react";

const navLinks = [
  { href: "/moon-reading/", label: "Moon Reading" },
  { href: "/soulmate-sketch/", label: "Soulmate Sketch" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070712]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="inline-flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f8dc8f]/30 bg-white/10 text-[#f8dc8f]">
            <Moon size={18} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-[0.22em]">
            MOONLIT MATCH
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-[#f8dc8f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
