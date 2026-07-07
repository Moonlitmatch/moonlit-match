const tones = {
  home:
    "bg-[radial-gradient(circle_at_18%_16%,rgba(248,220,143,0.14),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(245,168,199,0.18),transparent_31%),radial-gradient(circle_at_50%_74%,rgba(111,95,255,0.22),transparent_42%),linear-gradient(135deg,#05050d_0%,#080a1b_42%,#180927_100%)]",
  moon:
    "bg-[radial-gradient(circle_at_16%_18%,rgba(248,220,143,0.16),transparent_30%),radial-gradient(circle_at_76%_15%,rgba(151,132,255,0.22),transparent_31%),radial-gradient(circle_at_48%_78%,rgba(74,144,226,0.16),transparent_40%),linear-gradient(135deg,#05050d_0%,#070a18_45%,#130927_100%)]",
  sketch:
    "bg-[radial-gradient(circle_at_18%_18%,rgba(245,168,199,0.2),transparent_30%),radial-gradient(circle_at_78%_16%,rgba(168,132,255,0.2),transparent_31%),radial-gradient(circle_at_48%_80%,rgba(248,220,143,0.12),transparent_40%),linear-gradient(135deg,#05050d_0%,#0b0718_48%,#1b0924_100%)]",
};

export default function CelestialBackdrop({ tone = "home" }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className={`absolute inset-0 ${tones[tone]}`} />
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.76) 1px, transparent 1.4px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="absolute right-[-7rem] top-20 h-72 w-72 rounded-full border border-[#f8dc8f]/20 bg-[radial-gradient(circle_at_35%_30%,#fff6d7_0%,#f8dc8f_18%,#b9a3ff_42%,rgba(185,163,255,0.08)_67%,transparent_70%)] opacity-75 shadow-[0_0_110px_rgba(248,220,143,0.24)] sm:right-[-3rem] sm:h-96 sm:w-96 lg:right-[5%] lg:top-24" />
      <div className="absolute left-[8%] top-[18%] h-px w-28 -rotate-12 bg-gradient-to-r from-transparent via-[#f8dc8f]/80 to-transparent" />
      <div className="absolute bottom-[18%] right-[18%] h-px w-36 rotate-[-22deg] bg-gradient-to-r from-transparent via-[#f5a8c7]/70 to-transparent" />
    </div>
  );
}
