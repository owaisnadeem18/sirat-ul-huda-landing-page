"use client";

import React from "react";
import {
  MessageCircle,
  Youtube,
  Instagram,
  Send,
  Heart,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import { GoldDivider } from "./IslamicPattern";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dome-950 text-white pt-14 pb-10 overflow-hidden border-t-2 border-gold-500/30">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-dome-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bismillah Calligraphy */}
        <div className="text-center mb-9">
          <p
            dir="rtl"
            className="font-arabic text-2xl sm:text-3xl md:text-4xl text-gold-300 font-bold tracking-widest select-none"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <span className="block text-xs text-emerald-200/60 uppercase tracking-widest mt-1">
            In the Name of Allah, the Most Gracious, the Most Merciful
          </span>
          <GoldDivider className="my-4" />
        </div>

        {/* Middle Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info with Official Logo */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 via-gold-400 to-dome-700 shadow-md flex-shrink-0">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src="/images/logo.jpg"
                    alt="Sirat Ul Huda Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white block">
                  Sirat Ul Huda Academy
                </span>
                <span className="text-xs text-gold-300 font-medium">
                  Guidance Path • Authentic Quran, Sunnah & Family Tarbiyat
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-md">
              A serene digital sanctuary providing daily Quranic reflections, verified Hadith, the acclaimed <strong>Farz Uloom Course</strong>, and <strong>Kids Islamic Workshops</strong> under the academic direction of <strong>Aalima Rabia Owais (8 Years Dars-e-Nizami)</strong>.
            </p>

            {/* Official Channels */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider block mb-2.5">
                Official Channels
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {/* Official WhatsApp Channel */}
                <a
                  href="https://whatsapp.com/channel/0029VbEn18F8kyyOpiaIoH3j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-700/90 hover:bg-emerald-600 text-white text-xs font-semibold border border-emerald-500/40 shadow-sm transition-all duration-200 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Join WhatsApp Channel</span>
                </a>

                {/* Instagram Profile */}
                <a
                  href="https://instagram.com/sirat_ul_huda_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-semibold border border-pink-400/30 shadow-sm transition-all duration-200 active:scale-95"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-4 h-4 text-white" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gold-300 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/80">
              <li>
                <a
                  href="#farz-uloom"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold-400 rounded-full" />
                  <span>Farz Uloom Course (Batch 2)</span>
                </a>
              </li>
              <li>
                <a
                  href="#preview"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold-400 rounded-full" />
                  <span>Daily Ayah & Hadith Reflection</span>
                </a>
              </li>
              <li>
                <a
                  href="#pillars"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold-400 rounded-full" />
                  <span>Kids Islamic Workshop & Pillars</span>
                </a>
              </li>
              <li>
                <a
                  href="#instructor"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold-400 rounded-full" />
                  <span>Aalima Rabia Owais Bio</span>
                </a>
              </li>
              <li>
                <a
                  href="#waitlist-section"
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gold-400 rounded-full" />
                  <span>Reserve Seat / Waitlist</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Sincere Mission & Prayer */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gold-300 uppercase tracking-wider">
              Our Sincere Trust
            </h4>
            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Sirat-ul-Huda Academy is dedicated to bringing positive, grounded transformation into Muslim households through authentic scholarship and practical Sunnah character.
            </p>
            <div className="p-3 rounded-xl bg-dome-900/60 border border-gold-500/20 text-[11px] text-gold-200/90 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Sadaqah Jariyah for the Ummah</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-dome-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Sirat Ul Huda Academy. All rights reserved.

          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dome-900 hover:bg-dome-800 text-gold-300 border border-gold-500/20 hover:border-gold-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
