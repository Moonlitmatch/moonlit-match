import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Disclaimer | Moonlit Match",
  description:
    "Read the Moonlit Match disclaimer for symbolic astrology, relationship, and affiliate content.",
};

export default function DisclaimerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070712] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(236,72,153,0.18),transparent_30%),radial-gradient(circle_at_50%_92%,rgba(99,102,241,0.18),transparent_36%)]" />

      <section className="relative mx-auto min-h-screen max-w-4xl px-6 py-8 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/75 backdrop-blur transition hover:border-purple-300/40 hover:text-purple-200"
        >
          <ArrowLeft size={16} />
          Moonlit Match
        </Link>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur sm:p-10">
          <ShieldCheck className="mb-5 text-purple-300" />
          <h1 className="text-4xl font-bold tracking-tight">Disclaimer</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-white/65 sm:text-base">
            <p>
              Moonlit Match content is created for self-reflection, symbolic
              insight, and entertainment. Astrology, soulmate, moon reading, and
              sketch content should not be treated as certain predictions.
            </p>
            <p>
              We do not guarantee romantic outcomes, personal results, or the
              accuracy of third-party readings or sketches. Use your own
              judgment before relying on any interpretation.
            </p>
            <p>
              Nothing on this site replaces professional advice for legal,
              financial, medical, mental health, or relationship decisions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
