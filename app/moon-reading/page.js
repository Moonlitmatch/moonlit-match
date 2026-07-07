import Image from "next/image";
import {
  CheckCircle2,
  Clock3,
  Compass,
  Heart,
  Moon,
  ShieldCheck,
  Sparkles,
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
  title: "Free Moon Reading | Discover What Your Birth Moon May Reveal",
  description:
    "Start a free personalized Moon Reading experience designed to reflect on your moon sign, moon phase, emotional patterns, intuition, and self-discovery.",
};

const feelingItems = [
  "You have been craving clarity, but not the loud, rushed kind.",
  "Certain emotional patterns keep returning in love, timing, or trust.",
  "You feel pulled toward a more intuitive way to understand your inner world.",
  "Your heart wants language for something your mind cannot fully name yet.",
];

const explorationCards = [
  {
    icon: Moon,
    title: "Moon sign themes",
    copy: "Explore how lunar symbolism may reflect comfort, sensitivity, and emotional needs.",
  },
  {
    icon: Waves,
    title: "Emotional patterns",
    copy: "Notice recurring feelings and relationship themes with a calmer self-reflection lens.",
  },
  {
    icon: Heart,
    title: "Love and intuition",
    copy: "Reflect on the quiet signals that may shape closeness, trust, and romantic choices.",
  },
  {
    icon: Sparkles,
    title: "Moon phase insight",
    copy: "Use lunar timing as a symbolic prompt for clarity, release, and renewed intention.",
  },
];

const steps = [
  {
    title: "Begin with birth details",
    copy: "The partner experience uses your birth information to shape the moon-based reading path.",
  },
  {
    title: "Explore the interpretation",
    copy: "Read through symbolic insight around your moon sign, emotional energy, and inner patterns.",
  },
  {
    title: "Reflect without pressure",
    copy: "Use what resonates as a prompt for clarity, self-reflection, and personal meaning.",
  },
];

const faqs = [
  {
    question: "Is the Moon Reading really free?",
    answer:
      "Yes. The initial Moon Reading experience is presented as free by the partner. You'll be guided through a short process using your birth details so the reading can be personalized around your moon sign, moon phase, and lunar themes.",
  },
  {
    question: "What happens after I click?",
    answer:
      "You'll continue to the Moon Reading experience, where you may be asked for details like your birth date, birth place, birth time, and email so your personalized reading can be generated. The experience is designed to feel more like a guided moon-based presentation than a generic horoscope.",
  },
  {
    question: "Why does my birth information matter?",
    answer:
      "In astrology, your moon sign and moon phase are connected to the timing and place of your birth. Those details help shape the symbolic reading around emotional patterns, intuition, relationships, and inner-world themes.",
  },
  {
    question: "What should I listen for in the reading?",
    answer:
      "Listen for the parts that feel personally meaningful: emotional patterns, repeating relationship themes, moments of clarity, or language that helps you understand what you've been feeling. Treat it as a reflective experience, not a fixed prediction.",
  },
  {
    question: "Is this a prediction of my future?",
    answer:
      "No. Moonlit Match frames moon readings as symbolic insight and self-reflection, not certain predictions or promised outcomes. Use what resonates as a prompt for clarity, intuition, and personal meaning.",
  },
  {
    question: "What if I do not know my exact birth time?",
    answer:
      "Use the guidance provided on the partner page. Exact birth time can help refine certain astrology details when available, but the experience will guide you through the information it needs to begin.",
  },
];

export default function MoonReadingPage() {
  return (
    <>
      <Header minimal />
      <main className="relative flex-1 overflow-hidden bg-[#05050d] text-white">
        <section className="relative flex min-h-[86svh] items-center overflow-hidden px-6 py-16 sm:px-8 lg:px-10">
          <CelestialBackdrop tone="moon" />
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f8dc8f]">
                  FREE PERSONALIZED MOON READING
                </p>
                <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Your Free Moon Reading May Reveal the Emotional Pattern
                  Beneath Your Story
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                  Explore a personalized Moon Reading experience designed to
                  help you reflect on your moon sign, moon phase, intuition,
                  relationships, and inner world.
                </p>
                <div className="mt-8">
                  <CTAButton
                    href={OFFERS.moonReading.affiliateUrl}
                    offer={OFFERS.moonReading.dataOffer}
                    location="hero"
                    external
                  >
                    Start Your Free Moon Reading
                  </CTAButton>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/58">
                    A moon-based experience for spiritual curiosity, clarity,
                    and self-reflection.
                  </p>
                </div>
              </div>

              <a
                href={OFFERS.moonReading.affiliateUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                aria-label="Start your free Moon Reading"
                data-offer={OFFERS.moonReading.dataOffer}
                data-cta-location="hero-image"
                className="group relative mx-auto block w-full max-w-sm cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f8dc8f]/70 focus:ring-offset-2 focus:ring-offset-[#05050d] lg:max-w-md"
              >
                <div className="absolute -inset-5 rounded-full bg-[#f8dc8f]/14 blur-3xl transition duration-300 group-hover:bg-[#f8dc8f]/18" />
                <div className="relative rounded-lg border border-white/14 bg-white/[0.08] p-5 shadow-[0_28px_90px_rgba(248,220,143,0.14)] backdrop-blur-xl transition duration-300 group-hover:scale-[1.01]">
                  <div className="overflow-hidden rounded-lg border border-[#f8dc8f]/18 bg-[#0b1024]">
                    <Image
                      src="/images/moon-reading-hero.webp"
                      alt="A glowing moon reading audio presentation with moon phases, a play button, and a reflective viewer"
                      width={1120}
                      height={1400}
                      priority
                      sizes="(min-width: 1024px) 40vw, 92vw"
                      className="aspect-[4/5] h-auto w-full object-cover object-[52%_50%]"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="Have you been feeling this lately?"
          title="A free moon reading can be a quiet place to begin noticing what keeps resurfacing."
          copy="These questions are not meant to diagnose or decide anything for you. They simply create room for the patterns you may already be sensing."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {feelingItems.map((item) => (
              <article
                key={item}
                className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.07] p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[#f8dc8f]"
                  size={22}
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-white/68">{item}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <CTAButton
              href={OFFERS.moonReading.affiliateUrl}
              offer={OFFERS.moonReading.dataOffer}
              location="mid-page"
              external
              variant="secondary"
            >
              Get My Free Moon Reading
            </CTAButton>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="What this reading may help you explore"
          title="Moon symbolism gives your inner world a softer frame."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {explorationCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-lg border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
                >
                  <Icon
                    className="text-[#f8dc8f]"
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
        </SectionShell>

        <SectionShell>
          <div className="border-y border-white/10 py-12">
            <div className="mx-auto max-w-3xl text-center">
              <Compass
                className="mx-auto text-[#a99cff]"
                size={30}
                aria-hidden="true"
              />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Your Sun Sign Gets Attention. Your Moon Sign Holds the Softer
                Clue.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/66">
                Sun sign content can feel familiar, but moon symbolism often
                speaks to the private emotional landscape: what soothes you, why
                certain patterns repeat, and what kind of clarity feels safe
                enough to receive.
              </p>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="How it works"
          title="A simple path from curiosity to reflection."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.07] p-6"
              >
                <p className="text-sm font-semibold text-[#f8dc8f]">
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
          <div className="grid gap-8 border-y border-white/10 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="flex items-center gap-4">
              <Clock3 className="text-[#f8dc8f]" size={32} aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f8dc8f]">
                Lunar pause
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Let this lunar moment become a gentle reset.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                If your emotions have been asking for language, the free Moon
                Reading experience can be a symbolic place to begin.
              </p>
              <div className="mt-7">
                <CTAButton
                  href={OFFERS.moonReading.affiliateUrl}
                  offer={OFFERS.moonReading.dataOffer}
                  location="mid-page"
                  external
                >
                  Begin Your Free Personalized Moon Reading
                </CTAButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          title="Before you begin your free Moon Reading."
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
              Start with the emotional pattern your heart keeps returning to.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/66">
              Explore the free Moon Reading experience and use what resonates as
              a prompt for clarity, intuition, and self-reflection.
            </p>
            <div className="mt-8">
              <CTAButton
                href={OFFERS.moonReading.affiliateUrl}
                offer={OFFERS.moonReading.dataOffer}
                location="final"
                external
                variant="light"
              >
                Start Your Free Moon Reading
              </CTAButton>
            </div>
          </div>
        </SectionShell>
      </main>
      <Footer />
    </>
  );
}
