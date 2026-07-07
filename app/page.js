import { Moon, Sparkles, Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070712] text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-full bg-white/10 p-5 backdrop-blur">
          <Moon size={48} className="text-purple-300" />
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Moonlit Match
        </h1>

        <p className="mt-4 max-w-xl text-lg text-white/70">
          Discover soulmate connections through astrology,
          moon energy, and meaningful insights.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <Sparkles className="mx-auto mb-3 text-purple-300" />
            <h2 className="font-semibold">
              Cosmic Insights
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Explore your emotional patterns.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <Heart className="mx-auto mb-3 text-pink-300" />
            <h2 className="font-semibold">
              Match Energy
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Understand relationship compatibility.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <Moon className="mx-auto mb-3 text-blue-300" />
            <h2 className="font-semibold">
              Lunar Guidance
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Follow your moon-inspired journey.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}