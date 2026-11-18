"use client";

import React from "react";
import {
  BookOpen,
  Scroll,
  GraduationCap,
  Smile,
  HeartHandshake,
  Share2,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { GoldDivider, IslamicStarPattern } from "./IslamicPattern";

export default function CorePillars() {
  const pillars = [
    {
      id: "kids-workshop",
      title: "Kids Islamic Workshop",
      arabicTitle: "وَرْشَةُ تَرْبِيَةِ الْأَطْفَالِ الْإِسْلَامِيَّة",
      tag: "Interactive & Engaging",
      description:
        "Joyful, creative, values-based Islamic workshops designed specially for young boys & girls. We nurture genuine love for Allah and Prophet Muhammad ﷺ through interactive storytelling, basic Duas, and Sunnah manners (Adaab).",
      icon: Smile,
      highlights: [
        "Fun Sunnah habits & daily Masnoon Duas",
        "Inspiring moral stories from Quran & Seerah",
        "Creative art, quizzes & values-based activities",
      ],
      featured: true,
    },
    {
      id: "farz-uloom",
      title: "Farz Uloom Course (Batch 2)",
      arabicTitle: "دَوْرَةُ فُرُوضِ الْعُلُومِ الشَّرْعِيَّة",
      tag: "Batch 1 Completed",
      description:
        "Our 3-month flagship program covering the compulsory religious knowledge every Muslim household needs: Tarbiyat-e-Aulaad, Seerat-e-Rasool ﷺ, everyday Fiqh, and Social Relations.",
      icon: GraduationCap,
      highlights: [
        "Taught by 8-year Dars-e-Nizami scholar",
        "Overwhelming 100% positive Batch 1 feedback",
        "Comprehensive 3-month structured roadmap",
      ],
      featured: true,
    },
    {
      id: "quran",
      title: "Daily Quran & Tarjuma",
      arabicTitle: "الْقُرْآنُ الْكَرِيمُ وَالتَّرْجَمَة",
      tag: "Every Morning",
      description:
        "Bite-sized daily Ayah reflections with clear, authentic translations in English and Urdu tailored for modern, busy schedules. Build a consistent lifelong bond with the Divine Word.",
      icon: BookOpen,
      highlights: [
        "Authentic Urdu Tarjuma (کنز الایمان / مفتی تقی عثمانی)",
        "Sahih International English translation",
        "Daily spiritual contemplation & Tadabbur",
      ],
      featured: false,
    },
    {
      id: "hadith",
      title: "Daily Hadith of the Day",
      arabicTitle: "أَحَادِيثُ نَبَوِيَّةٌ صَحِيحَة",
      tag: "Prophetic Sunnah",
      description:
        "Carefully curated authentic Prophetic wisdom from Sahih Bukhari and Muslim with practical life morals to bring barakah, calmness, and good character into your everyday interactions.",
      icon: Scroll,
      highlights: [
        "Verified references & narrator context",
        "Practical modern character building",
        "Simple, actionable daily Sunnah goals",
      ],
      featured: false,
    },
    {
      id: "social-relations",
      title: "Tarbiyat & Social Harmony",
      arabicTitle: "تَرْبِيَةُ الْأُسْرَةِ وَحُقُوقُ الْعِبَاد",
      tag: "Family Focus",
      description:
        "Specialized guidance on navigating modern marital, in-law, and parenting dynamics with Ihsan. Learn how to resolve conflicts peacefully following the example of the Prophet ﷺ.",
      icon: HeartHandshake,
      highlights: [
        "Islamic conflict resolution in families",
        "Rights of parents, spouse, and neighbors",
        "Compassionate, non-judgmental approach",
      ],
      featured: false,
    },
    {
      id: "shareable",
      title: "Shareable Spiritual Cards",
      arabicTitle: "بِطَاقَاتُ دَعْوَةٍ وَتَذْكِير",
      tag: "One-Click Share",
      description:
        "Bespoke, aesthetically crafted WhatsApp status and social media cards to easily spread daily Quranic and Hadith reminders to your friends, family, and community.",
      icon: Share2,
      highlights: [
        "Mobile-optimized high-resolution cards",
        "Direct WhatsApp status broadcast",
        "Earn ongoing Sadaqah Jariyah effortlessly",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pillars" className="relative py-24 bg-alabaster overflow-hidden scroll-mt-24">
      <IslamicStarPattern opacity={0.03} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-dome-900 border border-gold-500/30 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Foundations of Sirat-ul-Huda</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dome-950 mb-4 tracking-tight">
            Our Core Offerings & Academy Pillars
          </h2>
          <p className="text-base sm:text-lg text-slateText leading-relaxed">
            From comprehensive adult courses and kids' spiritual workshops to daily morning reflections, every program is built with scholarly authenticity and heartfelt sincerity.
          </p>
          <GoldDivider className="mt-4" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`group relative rounded-3xl p-7 sm:p-8 border shadow-soft-card hover:shadow-elevated-card transition-all duration-300 flex flex-col justify-between ${
                  pillar.featured
                    ? "bg-gradient-to-b from-white via-white to-gold-50/20 border-gold-500/40 hover:border-gold-500/70"
                    : "bg-white border-gold-500/25 hover:border-gold-500/50"
                }`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-gold-400/40 group-hover:border-gold-500 transition-colors" />

                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-dome-900 to-dome-800 p-3 text-gold-300 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-gold-300" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-alabaster text-dome-900 border border-gold-500/25">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Arabic subtitle */}
                  <span className="block font-arabic text-xs font-bold text-gold-700/90 mb-1">
                    {pillar.arabicTitle}
                  </span>

                  {/* English title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-dome-950 mb-3 group-hover:text-dome-800 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slateText leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {pillar.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slateText"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-dome-700 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
