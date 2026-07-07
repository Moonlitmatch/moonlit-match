import Image from "next/image";
import {
  CheckCircle2,
  Eye,
  Heart,
  PenLine,
  Search,
  ShieldCheck,
  Sparkles,
  Stars,
  Waves,
} from "lucide-react";
import CelestialBackdrop from "@/components/CelestialBackdrop";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SectionShell from "@/components/SectionShell";
import { AFFILIATE_REL, OFFERS } from "@/lib/offers";

export const metadata = {
  title: "Soulmate Sketch | Explore a Symbolic Romantic Connection",
  description:
    "Discover a soulmate sketch experience designed for romantic curiosity, symbolic insight, and self-reflection around love, attraction, and meaningful connection.",
};

const familiarItems = [
  "Some connections have stayed in your mind longer than you expected.",
  "You feel curious about the kind of presence, energy, or expression you are drawn toward.",
  "You want romantic insight that feels imaginative, gentle, and pressure-free.",
  "You are open to symbolic reflection, without needing it to decide your future.",
];

const revealCards = [
  {
    icon: Heart,
    title: "Romantic attraction themes",
    copy: "Reflect on the qualities, moods, and emotional cues that may feel meaningful to you.",
  },
  {
    icon: PenLine,
    title: "A symbolic visual prompt",
    copy: "Use the sketch experience as a keepsake for romantic curiosity and self-reflection.",
  },
  {
    icon: Waves,
    title: "Connection patterns",
    copy: "Explore why certain forms of closeness, recognition, or chemistry can feel familiar.",
  },
  {
    icon: Sparkles,
    title: "Quiet clarity",
    copy: "Notice what you may be calling toward you emotionally, without forcing certainty.",
  },
];

const steps = [
  {
    title: "Enter the experience",
    copy: "Continue to the partner page and begin the soulmate sketch path from there.",
  },
  {
    title: "Share the requested details",
    copy: "The experience uses your responses to shape a romantic, symbolic sketch concept.",
  },
  {
    title: "Reflect on what resonates",
    copy: "Use the result as symbolic insight around attraction, connection themes, and personal meaning.",
  },
];

const faqs = [
  {
    question: "Does this mean I will meet someone?",
    answer:
      "No. Moonlit Match does not frame soulmate sketch experiences as promises, proof, or certain predictions.",
  },
  {
    question: "Is the sketch meant to be literal?",
    answer:
      "Treat it as symbolic insight and romantic curiosity. It can be meaningful without needing to define a specific person or outcome.",
  },
  {
    question: "What can this experience help me explore?",
    answer:
      "It may help you reflect on attraction, connection patterns, emotional energy, and the kind of love symbolism that feels alive to you.",
  },
  {
    question: "What if I am skeptical?",
    answer:
      "That is completely okay. The healthiest way to approach this is with curiosity, self-reflection, and your own judgment.",
  },
];

export default function SoulmateSketchPage() {
  return (
    <>
      <Header minimal />
      <main className="relative flex-1 overflow-hidden bg-[#05050d] text-white">
        <section className="relative flex min-h-[86svh] items-center overflow-hidden px-6 py-16 sm:px-8 lg:px-10">
          <CelestialBackdrop tone="sketch" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f5a8c7]">
                  SOULMATE SYMBOLISM <span aria-hidden="true">&bull;</span>{" "}
                  ROMANTIC CURIOSITY
                </p>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  A Symbolic Sketch May Help You Reflect on the Love You&apos;re
                  Calling In
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Explore a soulmate sketch experience designed around romantic
                  curiosity, connection patterns, and the quiet feeling that
                  someone meaningful may be closer than you think.
                </p>
                <div className="mt-8">
                  <CTAButton
                    href={OFFERS.soulmateSketch.affiliateUrl}
                    offer={OFFERS.soulmateSketch.dataOffer}
                    location="hero"
                    external
                  >
                    Discover Your Soulmate Sketch
                  </CTAButton>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/58">
                    For symbolic insight and self-reflection.
                  </p>
                </div>
              </div>

              <a
                href={OFFERS.soulmateSketch.affiliateUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                aria-label="Discover your Soulmate Sketch"
                data-offer={OFFERS.soulmateSketch.dataOffer}
                data-cta-location="hero-image"
                className="group relative mx-auto block w-full max-w-sm cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f5a8c7]/70 focus:ring-offset-2 focus:ring-offset-[#05050d] lg:max-w-md"
              >
                <div className="absolute -inset-5 rounded-full bg-[#f5a8c7]/18 blur-3xl" />
                <div className="relative rounded-lg border border-white/14 bg-white/[0.08] p-5 shadow-[0_28px_90px_rgba(245,168,199,0.18)] backdrop-blur-xl">
                  <div className="overflow-hidden rounded-lg border border-[#f5a8c7]/18 bg-[#0b0718]/72">
                    <Image
                      src="/images/soulmate-sketch-hero.webp"
                      alt="A psychic sketch artist presenting a hand-drawn soulmate portrait in a candlelit moonlit studio"
                      width={1120}
                      height={1400}
                      priority
                      sizes="(min-width: 1024px) 40vw, 92vw"
                      className="aspect-[4/5] h-auto w-full object-cover object-[50%_50%]"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Does this feel familiar?"
          title="Some romantic questions keep glowing in the background."
          copy="A soulmate sketch experience is not here to decide your life. It is a symbolic doorway into the attraction themes and connection patterns you may already be sensing."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {familiarItems.map((item) => (
              <article
                key={item}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#f5a8c7]"
                  size={22}
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-white/68">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton
              href={OFFERS.soulmateSketch.affiliateUrl}
              offer={OFFERS.soulmateSketch.dataOffer}
              location="mid-page"
              external
              variant="secondary"
            >
              Explore Your Soulmate Sketch
            </CTAButton>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="border-y border-white/10 py-12">
            <div className="mx-auto max-w-3xl text-center">
              <Eye
                className="mx-auto text-[#f8dc8f]"
                size={30}
                aria-hidden="true"
              />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Sometimes the Most Powerful Question Is Not &quot;When?&quot; -
                It&apos;s &quot;Would I Recognize It?&quot;
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Romantic symbolism can help you slow down and notice what
                recognition might feel like: the qualities, warmth, emotional
                energy, and connection themes that keep drawing your attention.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="What this experience may reveal"
          title="A romantic mirror for the connection themes that move you."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {revealCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
                >
                  <Icon
                    className="text-[#f5a8c7]"
                    size={26}
                    aria-hidden="true"
                  />
                  <h2 className="mt-4 text-lg font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {card.copy}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-8">
            <CTAButton
              href={OFFERS.soulmateSketch.affiliateUrl}
              offer={OFFERS.soulmateSketch.dataOffer}
              location="mid-page"
              external
            >
              Reveal Your Symbolic Soulmate Sketch
            </CTAButton>
          </div>
        </SectionShell>

        <SectionShell>
          <div className="grid gap-8 border-y border-white/10 py-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div className="flex items-center gap-4">
              <Search className="text-[#f8dc8f]" size={32} aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f8dc8f]">
                Gentle skepticism
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Skeptical? That&apos;s Completely Okay.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                The most grounded way to approach a soulmate sketch is with
                curiosity. Let it be a symbolic prompt, notice what resonates,
                and leave room for your own judgment.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="How it works"
          title="A simple symbolic experience for romantic curiosity."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.07] p-6"
              >
                <p className="text-sm font-semibold text-[#f5a8c7]">
                  Step {index + 1}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {step.copy}
                </p>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell>
          <div className="border-y border-white/10 py-12">
            <div className="mx-auto max-w-3xl text-center">
              <Stars
                className="mx-auto text-[#f5a8c7]"
                size={30}
                aria-hidden="true"
              />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Some Connections Stay With You for a Reason
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                A lasting connection does not have to become a certainty claim
                to matter. Sometimes it is enough to explore what the pattern
                may reflect, what it awakens, and what it helps you understand
                about the love you want to recognize.
              </p>
              <div className="mt-8">
                <CTAButton
                  href={OFFERS.soulmateSketch.affiliateUrl}
                  offer={OFFERS.soulmateSketch.dataOffer}
                  location="mid-page"
                  external
                  variant="secondary"
                >
                  Begin Your Soulmate Sketch Experience
                </CTAButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          title="Before you explore your Soulmate Sketch."
        >
          <FAQ items={faqs} />
        </SectionShell>

        <SectionShell className="pb-24">
          <div className="border-y border-white/10 py-12 text-center">
            <ShieldCheck
              className="mx-auto text-[#f8dc8f]"
              size={30}
              aria-hidden="true"
            />
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Follow the romantic question that keeps returning softly.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/66">
              Explore the soulmate sketch experience as symbolic insight for
              attraction, self-reflection, and meaningful connection themes.
            </p>
            <div className="mt-8">
              <CTAButton
                href={OFFERS.soulmateSketch.affiliateUrl}
                offer={OFFERS.soulmateSketch.dataOffer}
                location="final"
                external
                variant="light"
              >
                Discover Your Soulmate Sketch
              </CTAButton>
            </div>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
