import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Suspense } from "react";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import PinterestTag from "@/components/PinterestTag";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Moonlit Match | Love Astrology, Moon Readings & Soulmate Insights",
    template: "%s",
  },
  description:
    "Explore astrology-inspired insights, moon readings, soulmate symbolism, and relationship patterns for self-reflection, emotional clarity, and spiritual curiosity.",
};

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PinterestTag />
        {gaMeasurementId ? <GoogleAnalytics gaId={gaMeasurementId} /> : null}
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
