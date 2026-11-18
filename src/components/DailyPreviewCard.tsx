"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Scroll,
  Copy,
  Check,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { IslamicStarPattern } from "./IslamicPattern";

export default function DailyPreviewCard() {
  const [activeTab, setActiveTab] = useState<"verse" | "hadith">("verse");
  const [copied, setCopied] = useState(false);

  const verseData = {
    badge: "Verse of the Day • آيَةُ الْيَوْم",
    reference: "Surah Al-Inshirah (94:5-6)",
    surahArabic: "سُورَةُ الشَّرْح",
    revelation: "Meccan • 8 Verses",
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    urduTarjuma:
      "پس یقیناً مشکل کے ساتھ آسانی ہے، بے شک ہر مشکل کے ساتھ آسانی ہے۔",
    englishTarjuma:
      "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
    reflection:
      "A divine guarantee repeated twice: ease is not just after hardship, it accompanies it. In moments of trials, look for the subtle blessings and doors of relief Allah swt opens alongside them.",
    shareText: `✨ Daily Quranic Reflection | Sirat-ul-Huda Academy:
Surah Al-Inshirah (94:5-6)
"فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا"
English: For indeed, with hardship comes ease.
Urdu: پس یقیناً مشکل کے ساتھ آسانی ہے، بے شک ہر مشکل کے ساتھ آسانی ہے۔
Join Sirat-ul-Huda Academy — Pure Islamic Knowledge & Reflections.`,
  };

  const hadithData = {
    badge: "Hadith of the Day • حَدِيثُ الْيَوْم",
    reference: "Sahih al-Bukhari • Hadith 5027",
    surahArabic: "صَحِيحُ الْبُخَارِي",
    revelation: "Book of Virtues of the Qur'an • Chapter 21",
    arabic:
      "عَنْ عُثْمَانَ رَضِيَ اللَّهُ عَنْهُ عَنِ النَّبِيِّ ﷺ قَالَ: « خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »",
    urduTarjuma:
      "حضرت عثمان رضی اللہ عنہ سے روایت ہے کہ نبی کریم ﷺ نے فرمایا: ”تم میں سب سے بہترین شخص وہ ہے جس نے قرآن مجید سیکھا اور دوسروں کو سکھایا۔“",
    englishTarjuma:
      'Narrated `Uthman (RA): The Prophet ﷺ said: "The best among you are those who learn the Qur\'an and teach it to others."',
    reflection:
      "True nobility in the sight of Allah begins with connecting to His Divine Book. Understanding a single Ayah with sincerity, improving Tajweed, or teaching a verse to your family elevates your status in this life and the Akhirah.",
    shareText: `🌿 Daily Hadith Reflection | Sirat-ul-Huda Academy:
Sahih al-Bukhari 5027
« خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »
"The best among you are those who learn the Qur'an and teach it."
Urdu: ”تم میں سب سے بہترین شخص وہ ہے جس نے قرآن مجید سیکھا اور دوسروں کو سکھایا۔“
Join Sirat-ul-Huda Academy — Pure Islamic Knowledge & Reflections.`,
  };

  const current = activeTab === "verse" ? verseData : hadithData;

  const handleCopy = () => {
    navigator.clipboard.writeText(current.shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleWhatsAppShare = () => {
    const encoded = encodeURIComponent(current.shareText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
  };

  return (
    <section id="preview" className="relative py-20 bg-white/70 overflow-hidden scroll-mt-24">
      {/* Background Motifs */}
      <IslamicStarPattern opacity={0.025} />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-dome-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-dome-50 text-dome-900 border border-dome-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Daily Spiritual Nourishment</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-dome-950 mb-3">
            A Glimpse of Daily Reflections
          </h2>
          <p className="text-sm sm:text-base text-slateText leading-relaxed">
            Every morning on Sirat-ul-Huda Academy brings a carefully selected Ayah and authentic Hadith card crafted for deep contemplation, clear Urdu & English comprehension, and easy sharing.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-alabaster border border-gold-500/30 shadow-inner">
            <button
              onClick={() => setActiveTab("verse")}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "verse"
                  ? "bg-dome-900 text-white shadow-md border border-gold-500/30"
                  : "text-slateText hover:text-dome-950 hover:bg-white/60"
              }`}
            >
              <BookOpen className="w-4 h-4 text-gold-400" />
              <span>Verse of the Day</span>
              <span className="font-arabic text-xs text-gold-300/80 hidden sm:inline">
                آية اليوم
              </span>
            </button>

            <button
              onClick={() => setActiveTab("hadith")}
              className={`flex items-center gap-2 px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "hadith"
                  ? "bg-dome-900 text-white shadow-md border border-gold-500/30"
                  : "text-slateText hover:text-dome-950 hover:bg-white/60"
              }`}
            >
              <Scroll className="w-4 h-4 text-gold-400" />
              <span>Hadith of the Day</span>
              <span className="font-arabic text-xs text-gold-300/80 hidden sm:inline">
                حديث اليوم
              </span>
            </button>
          </div>
        </div>

        {/* The Card Widget */}
        <div className="relative max-w-3xl mx-auto">
          {/* Decorative glowing dome halo behind card */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-dome-900/15 via-gold-500/20 to-dome-800/15 blur-lg opacity-70 pointer-events-none" />

          <div className="relative rounded-3xl bg-white border border-gold-500/40 shadow-elevated-card overflow-hidden transition-all duration-300">
            {/* Top Ornamental Header Bar */}
            <div className="bg-gradient-to-r from-dome-950 via-dome-900 to-dome-950 text-white px-6 py-4 flex items-center justify-between border-b border-gold-500/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
                  {activeTab === "verse" ? (
                    <BookOpen className="w-4 h-4" />
                  ) : (
                    <Scroll className="w-4 h-4" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-semibold text-gold-300 tracking-wide uppercase">
                    {current.badge}
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{current.reference}</span>
                    <span className="text-[11px] text-emerald-200/70 font-normal">
                      • {current.revelation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arabic Surah Title Header */}
              <div className="text-right">
                <div className="font-arabic text-lg font-bold text-gold-300 leading-none">
                  {current.surahArabic}
                </div>
                <span className="text-[10px] text-emerald-200/70 uppercase tracking-widest">
                  Verified Authentic
                </span>
              </div>
            </div>

            {/* Main Content Body */}
            <div className="p-6 sm:p-9 space-y-6">
              {/* Arabic Verse / Hadith Text Block (RTL) */}
              <div
                dir="rtl"
                className="relative py-5 px-4 sm:px-6 rounded-2xl bg-alabaster/90 border border-gold-500/20 text-center shadow-inner"
              >
                <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-dome-950 leading-[2.1] sm:leading-[2.3] font-bold tracking-wide select-text">
                  {current.arabic}
                </p>
                <div className="mt-3 flex justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent rounded-full" />
                </div>
              </div>

              {/* Urdu Translation Block (RTL) */}
              <div
                dir="rtl"
                className="border-r-4 border-dome-700 pr-4 py-2 text-right bg-emerald-50/40 rounded-l-xl p-3.5"
              >
                <div className="text-[11px] font-semibold text-dome-800 uppercase tracking-wider mb-1 flex items-center gap-1.5 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-dome-700" />
                  <span>اردو ترجمہ و مفہوم</span>
                </div>
                <p className="font-arabic text-lg sm:text-xl text-charcoal font-medium leading-relaxed select-text">
                  {current.urduTarjuma}
                </p>
              </div>

              {/* English Translation Block */}
              <div className="border-l-4 border-gold-500 pl-4 py-2 bg-gold-50/25 rounded-r-xl p-3.5 text-left">
                <div className="text-[11px] font-semibold text-gold-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>English Translation</span>
                </div>
                <p className="text-sm sm:text-base text-charcoal font-normal italic leading-relaxed select-text">
                  "{current.englishTarjuma}"
                </p>
              </div>

              {/* Reflection / Tadabbur Note */}
              <div className="rounded-xl bg-alabaster p-4 border border-slate-200/80 text-left">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-dome-900 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                  <span>Spiritual Tadabbur (تدبّر اور سبق)</span>
                </div>
                <p className="text-xs sm:text-sm text-slateText leading-relaxed">
                  {current.reflection}
                </p>
              </div>
            </div>

            {/* Action Bar Footer */}
            <div className="bg-alabaster/90 px-6 py-4 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slateText flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Share daily Khair directly with your family and WhatsApp status</span>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Copy Reflection Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-white border border-gold-500/40 text-dome-950 hover:bg-gold-50 hover:border-gold-500 shadow-sm transition active:scale-95 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gold-600" />
                      <span>Copy Reflection</span>
                    </>
                  )}
                </button>

                {/* WhatsApp Share Button */}
                <button
                  onClick={handleWhatsAppShare}
                  className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Share on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
