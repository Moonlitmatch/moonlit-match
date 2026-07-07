import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Heart,
  Moon,
  Sparkles,
  Star,
  Stars,
  Waves,
} from "lucide-react";
import CelestialBackdrop from "@/components/CelestialBackdrop";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfferCard from "@/components/OfferCard";
import SectionShell from "@/components/SectionShell";
import { OFFERS } from "@/lib/offers";

export const metadata = {
  title: "Moonlit Match | Love Astrology, Moon Readings & Soulmate Insights",
  description:
    "Explore astrology-inspired insights, moon readings, soulmate symbolism, and relationship patterns for self-reflection, emotional clarity, and spiritual curiosity.",
};

const pathCards = [
  {
    icon: Moon,
    title: "Your Inner World",
    copy: "Explore moon symbolism, emotional energy, intuition, and the softer patterns that shape how you love.",
    href: OFFERS.moonReading.bridgeHref,
    tone: "text-[#f8dc8f]",
  },
  {
    icon: Heart,
    title: "Romantic Connection",
    copy: "Reflect on attraction, meaningful connection themes, and the kind of love that feels emotionally familiar.",
    href: OFFERS.soulmateSketch.bridgeHref,
    tone: "text-[#f5a8c7]",
  },
  {
    icon: Compass,
    title: "Astrology & Self-Discovery",
    copy: "Use astrology-inspired prompts as a calm way to notice patterns, clarity, and personal meaning.",
    href: OFFERS.moonReading.bridgeHref,
    tone: "text-[#a99cff]",
  },
];

const insightCards = [
  {
    title: "What Your Moon Sign Says About Love",
    copy: "A gentle look at emotional needs, trust, and the private rhythms that may influence closeness.",
    href: OFFERS.moonReading.bridgeHref,
  },
  {
    title: "Why Some Connections Feel Familiar",
    copy: "Explore why certain people can feel memorable through symbolism, timing, and connection patterns.",
    href: OFFERS.soulmateSketch.bridgeHref,
  },
  {
    title: "Moon Phases and Emotional Clarity",
    copy: "Notice how lunar cycles can become prompts for self-reflection, release, and renewed intention.",
    href: OFFERS.moonReading.bridgeHref,
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex-1 overflow-hidden bg-[#05050d] text-white">
        <section className="relative flex min-h-[86svh] items-center overflow-hidden px-6 py-16 sm:px-8 lg:px-10">
          <CelestialBackdrop tone="home" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#f8dc8f]">
                LOVE ASTROLOGY <span aria-hidden="true">&bull;</span> MOON
                INSIGHT <span aria-hidden="true">&bull;</span> SOULMATE
                SYMBOLISM
              </p>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Find Clarity in Love, Timing, and the Patterns Written in Your
                Stars
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                Moonlit Match helps you explore astrology-inspired insights,
                moon readings, soulmate symbolism, and relationship patterns for
                deeper self-reflection.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href={OFFERS.moonReading.bridgeHref}
                  offer={OFFERS.moonReading.dataOffer}
                  location="hero"
                >
                  Start Your Free Moon Reading
                </CTAButton>
                <CTAButton
                  href={OFFERS.soulmateSketch.bridgeHref}
                  offer={OFFERS.soulmateSketch.dataOffer}
                  location="hero"
                  variant="secondary"
                >
                  Discover Soulmate Sketch
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Choose your path"
          title="Start with the question that feels most alive."
          copy="Each Moonlit Match experience is designed as a bridge into symbolic insight, romantic curiosity, and calm self-reflection."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {pathCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group rounded-lg border border-white/10 bg-white/[0.07] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#f8dc8f]/45 hover:bg-white/[0.1]"
                >
                  <Icon className={card.tone} size={30} aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-semibold text-white">
                    {card.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {card.copy}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f8dc8f]">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Why Moonlit Match exists"
          title="A softer language for the parts of love that are hard to explain."
        >
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="border-l border-[#f8dc8f]/35 pl-6">
              <p className="text-lg leading-8 text-white/72">
                Moonlit Match was created for the moment when you know the facts
                of a situation, but your heart still wants a calmer way to
                understand what it is feeling.
              </p>
              <p className="mt-5 text-base leading-8 text-white/64">
                Astrology-inspired reflection cannot promise outcomes, and it
                should never replace your own judgment. It can, however, offer
                symbolic insight, fresh language, and a quiet invitation to
                notice emotional patterns with more compassion.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "Mystical, grounded",
                  copy: "Romantic language without certainty claims or pressure.",
                },
                {
                  icon: Waves,
                  title: "Pattern-aware",
                  copy: "Prompts for emotional clarity, timing, and connection themes.",
                },
                {
                  icon: Star,
                  title: "Premium by design",
                  copy: "A calm bridge from curiosity into carefully framed offers.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-white/[0.06] p-5"
                  >
                    <Icon
                      className="text-[#f8dc8f]"
                      size={24}
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/62">
                      {item.copy}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Featured experiences"
          title="Two symbolic paths for love, clarity, and self-reflection."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <OfferCard
              icon={Moon}
              eyebrow="Free personalized moon reading"
              title="Free Personalized Moon Reading"
              copy="Explore a free moon-based experience that may reflect your emotional energy, moon phase, intuition, and relationship patterns."
              href={OFFERS.moonReading.bridgeHref}
              ctaLabel="Get My Free Moon Reading"
              offer={OFFERS.moonReading.dataOffer}
              tone="moon"
              points={[
                "Moon sign and inner-world reflection",
                "Emotional clarity prompts",
                "A calm path into lunar symbolism",
              ]}
            />
            <OfferCard
              icon={Heart}
              eyebrow="Symbolic soulmate sketch experience"
              title="Symbolic Soulmate Sketch Experience"
              copy="Explore a romantic curiosity experience designed around symbolic insight, attraction themes, and the feeling of meaningful connection."
              href={OFFERS.soulmateSketch.bridgeHref}
              ctaLabel="Discover Soulmate Sketch"
              offer={OFFERS.soulmateSketch.dataOffer}
              tone="sketch"
              points={[
                "Romantic connection themes",
                "A memorable symbolic keepsake",
                "Self-reflection around what you are drawn to",
              ]}
            />
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Featured insight"
          title="Small reflections before you choose."
          copy="These entry points keep the experience grounded in curiosity, not certainty."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {insightCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-lg border border-white/10 bg-white/[0.06] p-5 transition hover:-translate-y-1 hover:border-[#f5a8c7]/45 hover:bg-white/[0.1]"
              >
                <Stars className="text-[#f5a8c7]" size={22} aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {card.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f8dc8f]">
                  Read the path
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="pb-24">
          <div className="border-y border-white/10 py-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f8dc8f]">
              Your next question
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Choose the question that feels most alive right now.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/66">
              Begin with the moon if your inner world is asking for clarity, or
              follow the sketch experience if romantic symbolism is calling for
              your attention.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton
                href={OFFERS.moonReading.bridgeHref}
                offer={OFFERS.moonReading.dataOffer}
                location="final"
              >
                Start Your Free Moon Reading
              </CTAButton>
              <CTAButton
                href={OFFERS.soulmateSketch.bridgeHref}
                offer={OFFERS.soulmateSketch.dataOffer}
                location="final"
                variant="secondary"
              >
                Discover Soulmate Sketch
              </CTAButton>
            </div>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
