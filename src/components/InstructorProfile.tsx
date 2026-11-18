"use client";

import React from "react";
import { Award, Heart, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import { GoldDivider, ArchMotif, IslamicStarPattern } from "./IslamicPattern";

export default function InstructorProfile() {
  return (
    <section id="instructor" className="relative py-24 bg-white overflow-hidden scroll-mt-24">
      <IslamicStarPattern opacity={0.03} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-dome-50 text-dome-900 border border-dome-200 shadow-sm mb-3">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Academic Leadership</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dome-950 mb-3">
            Guided by Authentic Scholarship
          </h2>
          <p className="text-sm sm:text-base text-slateText">
            Meet the driving vision and instructor behind Sirat-ul-Huda Academy's curriculum and reflections.
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {/* Profile Card Container with Emerald & Gold Border */}
        <div className="relative rounded-3xl bg-alabaster border-2 border-gold-500/35 p-7 sm:p-11 shadow-soft-card overflow-hidden">
          {/* Subtle Islamic watermarks in corners */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-dome-900/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Instructor Emblem / Medallion */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-dome-900 via-dome-800 to-dome-950 p-1 shadow-glow-emerald">
                <div className="w-full h-full rounded-full border-2 border-gold-400/60 bg-dome-900 flex flex-col items-center justify-center text-center p-3 text-gold-300">
                  <span className="font-arabic text-2xl font-bold text-gold-200">
                    عَالِمَة
                  </span>
                  <div className="w-8 h-0.5 bg-gold-400 my-1 rounded-full" />
                  <span className="text-[11px] font-semibold text-emerald-100 uppercase tracking-widest">
                    فاضلہ
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dome-900 text-gold-300 text-xs font-bold border border-gold-500/40 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>8 Years Dars-e-Nizami</span>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slateText-muted">
                  <div className="w-4 h-4 rounded-full overflow-hidden border border-gold-400">
                    <img src="/images/logo.jpg" alt="Sirat Ul Huda Logo" className="w-full h-full object-cover" />
                  </div>
                  <span>Sirat Ul Huda Academy</span>
                </div>
              </div>
            </div>

            {/* Content & Bio */}
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dome-950">
                    Aalima Rabia Owais
                  </h3>
                  <span className="font-arabic text-xl font-bold text-dome-800">
                    (عالمہ رابعہ اویس)
                  </span>
                </div>
                <p className="text-sm font-semibold text-gold-700">
                  Lead Instructor & Academic Director • Sirat-ul-Huda Academy
                </p>
              </div>

              <p className="text-sm sm:text-base text-slateText leading-relaxed">
                Aalima Rabia Owais is a distinguished Islamic scholar who completed the rigorous <strong>8-year traditional Dars-e-Nizami curriculum</strong>. Driven by profound sincerity and deep compassion, she is dedicating her absolute best to bring positive transformation, emotional peace, and authentic Islamic knowledge into modern homes and society.
              </p>

              <blockquote className="rounded-2xl bg-white p-5 border-l-4 border-dome-700 shadow-sm text-xs sm:text-sm text-charcoal italic leading-relaxed">
                “Our homes are suffering not because knowledge doesn't exist, but because authentic knowledge is often separated from practical empathy, character (Akhlaq), and daily reality. Through Sirat-ul-Huda Academy, my wholehearted effort is to illuminate hearts with pure Quran and Sunnah, revive Tarbiyat-e-Aulaad, and rebuild healthy, peaceful families for Allah's sake.”
              </blockquote>

              {/* Highlights Pill Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-slateText">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-gold-500/25 font-medium flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-dome-800" />
                  <span>8-Year Classical Dars-e-Nizami</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-gold-500/25 font-medium flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-600" />
                  <span>Parenting & Social Harmony Specialist</span>
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-gold-500/25 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Interactive & Non-Judgmental Mentorship</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
