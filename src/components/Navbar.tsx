"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = [
        { id: "hero", offset: 0 },
        { id: "farz-uloom", offset: 120 },
        { id: "preview", offset: 120 },
        { id: "pillars", offset: 120 },
        { id: "instructor", offset: 120 },
      ];

      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "farz-uloom", label: "Farz Uloom", badge: "Batch 2" },
    { id: "preview", label: "Daily Reflection" },
    { id: "pillars", label: "Kids Workshop & Pillars" },
    { id: "instructor", label: "About Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-gold-500/25 py-2.5"
          : "bg-[#FAF9F6]/85 backdrop-blur-sm py-3 sm:py-3.5 border-b border-gold-500/15"
        }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Logo & Title with Official Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-dome-700 rounded-lg p-0.5 transition-transform duration-200 active:scale-95"
            aria-label="Sirat-ul-Huda Academy Home"
          >
            {/* Official Logo in circular gold frame */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-600 via-gold-400 to-dome-800 shadow-md group-hover:shadow-glow-emerald transition-all duration-300 flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img
                  src="/images/logo.jpg"
                  alt="Sirat Ul Huda Academy Logo"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="flex flex-col leading-tight">
              <div className="flex items-center gap-1.5">
                <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-dome-950 group-hover:text-dome-800 transition-colors">
                  Sirat Ul Huda
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-full bg-gold-100/80 text-gold-800 border border-gold-300/60 hidden xs:inline-block">
                  Academy
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slateText tracking-normal hidden md:block">
                Guidance Path • Authentic Quran & Sunnah
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 text-xs xl:text-[13px] font-semibold transition-all duration-200 group rounded-md ${isActive
                      ? "text-dome-950 font-bold"
                      : "text-slateText hover:text-dome-900 hover:bg-white/50"
                    }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300/60 leading-tight">
                        {item.badge}
                      </span>
                    )}
                  </span>

                  {/* 80% Underline matching theme */}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${isActive
                        ? "w-[80%] mx-auto bg-gradient-to-r from-dome-900 via-gold-500 to-dome-900 opacity-100"
                        : "w-0 mx-auto bg-gradient-to-r from-dome-800 via-gold-400 to-dome-800 opacity-0 group-hover:w-[80%] group-hover:opacity-70"
                      }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Action: Launching Soon & Join Waitlist */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Subtle "Batch 2 Soon" badge */}
            <div className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white text-dome-900 border border-gold-500/30 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-dome-700"></span>
              </span>
              <span>Batch 2 Open</span>
            </div>

            {/* Join Waitlist Quick Button */}
            <button
              onClick={() => scrollTo("waitlist-section")}
              className="relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-xs sm:text-[13px] font-semibold text-white rounded-full bg-gradient-to-r from-dome-900 via-dome-800 to-dome-900 hover:from-dome-800 hover:to-dome-700 border border-gold-500/40 shadow-sm hover:shadow-glow-emerald transition-all duration-200 active:scale-95 cursor-pointer flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>Join Waitlist</span>
              <ArrowRight className="w-3.5 h-3.5 text-gold-300 hidden sm:inline-block" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-dome-950 hover:bg-white border border-gold-500/20 shadow-sm transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-dome-950" />
              ) : (
                <Menu className="w-5 h-5 text-dome-950" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileOpen && (
          <>
            {/* Backdrop overlay for closing on tap outside */}
            <div
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[62px] bg-charcoal/25 backdrop-blur-[2px] z-40 lg:hidden"
              aria-hidden="true"
            />

            <div className="relative z-50 lg:hidden mt-2.5 pt-2 pb-3 px-3 rounded-2xl bg-white/98 backdrop-blur-xl border border-gold-500/35 shadow-elevated-card animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`text-left px-3.5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-dome-50 text-dome-900 border-l-4 border-dome-800"
                          : "text-slateText hover:bg-alabaster hover:text-dome-950"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}

                {/* Direct WhatsApp Channel Button in Mobile Drawer */}
                <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="https://whatsapp.com/channel/0029VbEn18F8kyyOpiaIoH3j"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm transition active:scale-95"
                  >
                    <span>Join WhatsApp Channel</span>
                    <span className="text-emerald-200">→</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
