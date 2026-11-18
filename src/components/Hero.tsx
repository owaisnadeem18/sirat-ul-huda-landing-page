"use client";

import React from "react";
import { Sparkles, GraduationCap, Smile, BookOpen } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import WaitlistForm from "./WaitlistForm";
import { IslamicStarPattern, GoldDivider } from "./IslamicPattern";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden scroll-mt-24">
      {/* Background Islamic Star Watermark */}
      <IslamicStarPattern opacity={0.035} />

      {/* Atmospheric Radial Glows inspired by Gumbad-e-Khazra Emerald & Champagne Gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] bg-dome-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Official Brand Seal / Medallion Display */}
        <div className="flex justify-center mb-5">
          <div className="relative group">
            {/* Ambient gold glow behind the emblem */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-dome-800 via-gold-500 to-dome-900 opacity-60 blur-md group-hover:opacity-90 transition duration-500" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-gold-600 via-gold-400 to-dome-900 shadow-glow-emerald">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center border border-gold-300">
                <img
                  src="/images/logo.jpg"
                  alt="Sirat Ul Huda Official Emblem"
                  className="w-full h-full object-cover transform scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/95 border border-gold-500/40 shadow-sm backdrop-blur-md mb-5 transition-all hover:border-gold-500 hover:shadow-glow-gold">
          <Sparkles className="w-3.5 h-3.5 text-gold-500 animate-spin" style={{ animationDuration: "8s" }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-dome-950">
            Farz Uloom Batch 2 & Kids Workshop • In Sha Allah
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span className="text-xs sm:text-sm font-arabic font-bold text-dome-800">
            إِنْ شَاءَ اللَّه
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal leading-[1.18] mb-5">
          Illuminating Hearts Through{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-dome-900 via-dome-700 to-dome-900 bg-clip-text text-transparent underline decoration-gold-500/50 decoration-wavy decoration-1 underline-offset-8">
              Authentic Quran
            </span>
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-gold-600 via-gold-500 to-gold-700 bg-clip-text text-transparent">
            Sunnah
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl sm:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slateText leading-relaxed mb-6 font-normal">
          Welcome to <strong className="text-dome-950 font-semibold">Sirat-ul-Huda Academy (Guidance Path)</strong> — an authentic Islamic sanctuary guided by <strong className="text-dome-900 font-semibold">Aalima Rabia Owais (8 Years Dars-e-Nizami)</strong>. Join our acclaimed 3-month <span className="font-semibold text-dome-950">Farz Uloom Course</span>, engaging <span className="font-semibold text-dome-950">Kids Islamic Workshops</span>, and daily Quranic reflections.
        </p>

        {/* Subtle Decorative Golden Divider with Central 8-Point Star */}
        <GoldDivider className="my-4" />

        {/* Live Countdown Timer Section */}
        <CountdownTimer />

        {/* Early Access / Waitlist Form Component */}
        <WaitlistForm />

        {/* Direct WhatsApp Channel Invitation Banner */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 text-xs">
          <span className="text-slateText font-medium">Prefer instant updates on WhatsApp?</span>
          <a
            href="https://whatsapp.com/channel/0029VbEn18F8kyyOpiaIoH3j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-300 shadow-sm transition active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Join Official WhatsApp Channel</span>
            <span className="text-emerald-600 font-bold">→</span>
          </a>
        </div>

        {/* Key Highlight Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-5 mt-8 text-xs text-slateText font-medium">
          <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-gold-500/25 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-dome-800" />
            <span className="text-dome-950 font-semibold">Farz Uloom (Batch 2 Open)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-gold-500/25 shadow-sm">
            <Smile className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-dome-950 font-semibold">Kids Islamic Workshops</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full border border-gold-500/25 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-dome-800" />
            <span className="text-dome-950 font-semibold">Daily Quran & Hadith Cards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
