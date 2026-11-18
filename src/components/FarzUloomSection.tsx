"use client";

import React from "react";
import {
  GraduationCap,
  CheckCircle2,
  Users,
  Calendar,
  Sparkles,
  BookMarked,
  HeartHandshake,
  ShieldCheck,
  Star,
  ArrowRight,
  Flame,
} from "lucide-react";
import { GoldDivider, IslamicStarPattern } from "./IslamicPattern";

export default function FarzUloomSection() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const modules = [
    {
      title: "Tarbiyat-e-Aulaad (تربیتِ اولاد)",
      badge: "Family & Parenting",
      desc: "Comprehensive Islamic parenting principles. Learn how to protect your children's faith, nurture love for Salah, handle teenage rebellion, and establish Sunnah manners in the home amidst digital distractions.",
      icon: Users,
    },
    {
      title: "Seerat-e-Rasool ﷺ (سیرتِ رسول ﷺ)",
      badge: "Prophetic Life",
      desc: "A deeply moving journey through the blessed life, sublime character, patience, and leadership of the Beloved Prophet Muhammad ﷺ. Transform your daily routine through practical Sunnah emulation.",
      icon: HeartHandshake,
    },
    {
      title: "Fiqhi Masaail (روزمرہ کے فقہی مسائل)",
      badge: "Essential Fiqh",
      desc: "Clear, authentic solutions to modern everyday Fiqh questions: Taharah (purity), Salah perfection, Fasting, Halal earning, and women's specific legal rulings taught with clarity and zero confusion.",
      icon: ShieldCheck,
    },
    {
      title: "Social Relations (معاشرتی تعلقات)",
      badge: "Ethics & Relations",
      desc: "Strengthening interpersonal relationships according to the Quran & Sunnah. Resolving marital misunderstandings, fulfilling rights of parents, in-laws, relatives, and neighbors with Ihsan and emotional balance.",
      icon: Flame,
    },
    {
      title: "Deeni & Islami Waqiyat (دینی و اسلامی واقعات)",
      badge: "Inspirational History",
      desc: "Faith-invigorating historical events of the Ambiya (Prophets), Sahabiyat, and pious predecessors with practical life lessons to build unwavering Yaqeen and emotional resilience.",
      icon: BookMarked,
    },
  ];

  const testimonials = [
    {
      quote:
        "Farz Uloom Course Batch 1 changed my entire perspective on daily life and parenting. Aalima Rabia Owais explains complex Fiqh and social issues with such gentleness, wisdom, and clarity. AlhamduLillah, our whole household felt the barakah.",
      name: "Umm Zayd",
      role: "Batch 1 Graduate (Karachi)",
      rating: 5,
    },
    {
      quote:
        "The sessions on Social Relations and Seerat-e-Rasool ﷺ answered questions I struggled with for years. The 3 months passed so quickly, and the practical homework helped us implement Sunnah right away. Highly recommend Batch 2!",
      name: "Sister Fatima",
      role: "Batch 1 Graduate (Lahore)",
      rating: 5,
    },
    {
      quote:
        "In today's chaotic world, finding a course grounded purely in 8-year Dars-e-Nizami authenticity without sectarian bias is a rare blessing. Batch 1 was an eye-opener for our entire family.",
      name: "Sister Ayesha",
      role: "Batch 1 Graduate (Islamabad)",
      rating: 5,
    },
  ];

  return (
    <section id="farz-uloom" className="relative py-24 bg-gradient-to-b from-alabaster via-white to-alabaster overflow-hidden scroll-mt-24">
      <IslamicStarPattern opacity={0.03} />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-dome-700/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-dome-900 border border-dome-200 shadow-sm mb-4">
            <GraduationCap className="w-4 h-4 text-dome-800" />
            <span className="font-bold">Flagship Academic Program</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="text-emerald-800 font-semibold">3 Months Comprehensive</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dome-950 mb-4 tracking-tight">
            Farz Uloom Course (فرض علوم کورس)
          </h2>
          <p className="text-base sm:text-lg text-slateText leading-relaxed">
            Essential Islamic knowledge that every Muslim individual, parent, and homemaker is obligated to know — taught with scholarly authenticity, practical warmth, and relatable everyday examples.
          </p>
          <GoldDivider className="mt-5" />
        </div>

        {/* Milestone Banner: Batch 1 Success Announcement */}
        <div className="relative mb-14 rounded-3xl bg-gradient-to-r from-dome-950 via-dome-900 to-dome-950 text-white p-6 sm:p-8 border-2 border-gold-500/40 shadow-glow-emerald overflow-hidden">
          {/* Subtle gold watermark ring */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-400/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                <span>BATCH 1 COMPLETED ALHAMDULILLAH</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Overwhelming Success & 100% Positive Feedback
              </h3>
              <p className="text-sm text-emerald-100/90 leading-relaxed">
                AlhamduLillah! <strong>Batch 1 (3 Months)</strong> has successfully concluded with transformative results for our enrolled sisters. Due to overwhelming demand, <strong>Admissions for Batch 2</strong> are now opening!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="text-center sm:text-right px-4 py-2 rounded-2xl bg-dome-800/80 border border-gold-500/30">
                <span className="block text-2xl font-bold text-gold-300">Batch 2</span>
                <span className="text-xs text-emerald-200">Registration Open</span>
              </div>
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dome-950 hover:brightness-105 shadow-md transition active:scale-95 cursor-pointer"
              >
                <span>Reserve Seat for Batch 2</span>
                <ArrowRight className="w-4 h-4 text-dome-950" />
              </button>
            </div>
          </div>
        </div>

        {/* 5 Core Curriculum Modules Covered in Course */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-dome-950">
              Curriculum & Subjects Covered
            </h3>
            <p className="text-sm text-slateText mt-1">
              Carefully structured by Aalima Rabia Owais to address the most urgent needs of Muslim households.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <div
                  key={index}
                  className="relative group rounded-3xl bg-white p-7 border border-gold-500/25 shadow-soft-card hover:border-gold-500/60 hover:shadow-elevated-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-dome-900 text-gold-300 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-gold-300" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-50 text-gold-800 border border-gold-300/40">
                        {mod.badge}
                      </span>
                    </div>

                    <h4 className="font-heading text-xl font-bold text-dome-950 group-hover:text-dome-800 transition-colors">
                      {mod.title}
                    </h4>

                    <p className="text-sm text-slateText leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-dome-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Included in 3-Month Syllabus</span>
                  </div>
                </div>
              );
            })}

            {/* Bonus Box: Interactive Q&A with Aalima */}
            <div className="rounded-3xl bg-gradient-to-br from-dome-900 to-dome-950 text-white p-7 border border-gold-500/40 shadow-soft-card flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gold-500/20 border border-gold-400/40 text-gold-300 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-gold-300" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/40">
                  Interactive Support
                </span>
                <h4 className="font-heading text-xl font-bold text-white mt-3 mb-2">
                  Live Guidance & Student Q&A
                </h4>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Direct question & answer sessions with Aalima Rabia Owais for personal dilemmas, family counseling inquiries, and Fiqh clarification in a confidential, respectful atmosphere.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-dome-800/80 flex items-center gap-2 text-xs text-gold-300 font-semibold">
                <Calendar className="w-4 h-4" />
                <span>Weekly Interactive Sessions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Feedback from Batch 1 Students */}
        <div className="mt-8 rounded-3xl bg-alabaster/80 p-8 sm:p-10 border border-gold-500/25">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1 text-gold-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-gold-500" />
              ))}
            </div>
            <h3 className="font-heading text-2xl font-bold text-dome-950">
              What Batch 1 Graduates Say
            </h3>
            <p className="text-xs sm:text-sm text-slateText">
              Real reflections from sisters who experienced the 3-month Farz Uloom journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-slateText leading-relaxed italic mb-4">
                  "{item.quote}"
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-dome-950">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slateText-muted">
                      {item.role}
                    </span>
                  </div>
                  <div className="flex gap-0.5 text-gold-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
