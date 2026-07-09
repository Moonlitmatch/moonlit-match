import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, Moon } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Moonlit Match",
  description:
    "Learn how Moonlit Match handles basic privacy, analytics, and affiliate traffic information.",
};

export default function PrivacyPolicyPage() {
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
          <Moon className="mb-5 text-purple-300" />
          <h1 className="text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <div className="mt-6 space-y-5 text-sm leading-7 text-white/65 sm:text-base">
            <p>
              Moonlit Match publishes astrology and relationship reflection
              content. We may collect basic information that you voluntarily
              provide, such as a message sent through the contact page.
            </p>
            <p>
              We may use analytics or affiliate tracking links to understand
              page performance and outbound clicks. Third-party platforms may
              process information according to their own privacy policies.
            </p>
            <p>
              Moonlit Match may use Pinterest Tag or similar tracking
              technologies to measure visits, page activity, and outbound
              affiliate clicks.
            </p>
            <p>
              We do not sell personal readings directly on this site. If you
              continue to a third-party offer, review that platform&apos;s
              privacy practices before purchasing or submitting information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
