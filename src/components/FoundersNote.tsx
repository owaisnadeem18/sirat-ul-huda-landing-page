import React from "react";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";
import { IslamicStarPattern, ArchMotif } from "./IslamicPattern";

export default function FoundersNote() {
  return (
    <section id="founders-note" className="relative py-20 bg-white overflow-hidden scroll-mt-24">
      <IslamicStarPattern opacity={0.02} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mihrab / Arch framed Quote Container */}
        <div className="relative rounded-3xl bg-gradient-to-b from-dome-950 via-dome-900 to-dome-950 text-white p-8 sm:p-12 md:p-14 border-2 border-gold-500/40 shadow-glow-emerald overflow-hidden text-center">
          {/* Subtle Islamic watermarks in corners */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Mihrab Arch Top Motif */}
          <div className="flex justify-center mb-4">
            <ArchMotif className="text-gold-400/50" />
          </div>

          {/* Arabic Dua / Bismillah Calligraphic Accent */}
          <div className="font-arabic text-xl sm:text-2xl text-gold-300 font-bold mb-6">
            رَبِّ زِدْنِي عِلْمًا
            <span className="block text-xs font-sans text-gold-300/70 font-normal mt-1 tracking-wider uppercase">
              "My Lord, increase me in knowledge." (Surah Taha 20:114)
            </span>
          </div>

          {/* Quote Icon */}
          <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-gold-500/15 border border-gold-400/30 flex items-center justify-center text-gold-400">
            <Quote className="w-6 h-6 rotate-180" />
          </div>

          {/* Quote Text */}
          <blockquote className="font-heading text-lg sm:text-2xl md:text-3xl text-alabaster font-normal leading-relaxed italic max-w-3xl mx-auto mb-8">
            “Sirat-ul-Huda Academy was born out of a simple, sincere yearning: in a world consumed by digital noise and rapid distractions, every Muslim deserves a calm digital sanctuary where pure sacred knowledge meets daily life with clarity, beauty, and sincerity.
            <br className="hidden sm:inline" />
            Our aim is not merely to transmit texts, but to nurture hearts intimately illuminated by the Quran and the character of the Beloved Prophet ﷺ.”
          </blockquote>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />

          {/* Attribution & Title */}
          <div className="flex flex-col items-center">
            <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-wide">
              Aalima Rabia Owais & Academic Council
            </h4>
            <p className="text-xs sm:text-sm text-gold-300/90 font-medium mt-1">
              Sirat-ul-Huda Academy • Academy of Sacred Knowledge & Family Reformation
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dome-800/80 border border-gold-500/20 text-[11px] text-emerald-200">
              <HeartHandshake className="w-3.5 h-3.5 text-gold-400" />
              <span>Dedicated as a Sadaqah Jariyah for the Ummah</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
