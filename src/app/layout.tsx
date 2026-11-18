import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sirat-ul-Huda Academy | Illuminating Hearts Through Quran & Sunnah",
  description:
    "An authentic Islamic learning and daily spiritual reflection platform. Daily Quran with Tarjuma, verified Hadith, structured academy courses, and community learning.",
  keywords: [
    "Sirat-ul-Huda Academy",
    "Islamic learning",
    "Quran with Tarjuma",
    "Hadith of the day",
    "Daily Ayah",
    "Tajweed courses",
    "Islamic education online",
  ],
  authors: [{ name: "Sirat-ul-Huda Academy" }],
  openGraph: {
    title: "Sirat-ul-Huda Academy — Coming Soon",
    description:
      "A serene digital sanctuary for daily Quran reflections, authentic Hadith, and structured Islamic courses.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} ${amiri.variable}`}
    >
      <body className="font-sans antialiased bg-alabaster text-charcoal min-h-screen relative selection:bg-dome-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
