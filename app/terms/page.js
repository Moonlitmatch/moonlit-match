import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export const metadata = {
  title: "Terms | Moonlit Match",
  description:
    "Review the basic terms for using Moonlit Match content and affiliate bridge pages.",
};

export default function TermsPage() {
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
          <Sparkles className="mb-5 text-pink-300" />
          <h1 className="text-4xl font-bold tracking-tight">Terms</h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-white/65 sm:text-base">
            <p>
              By using Moonlit Match, you agree to use this site for personal
              information and entertainment purposes only. Content is provided as
              symbolic reflection, not professional advice.
            </p>
            <p>
              Affiliate offers are operated by third parties. Any purchase,
              refund, account, or support request related to an external offer is
              handled by that third-party platform.
            </p>
            <p>
              We may update these terms as the site grows. Continued use of the
              site means you accept the current version of these terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
