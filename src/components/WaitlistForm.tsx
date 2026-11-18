"use client";

import React, { useState } from "react";
import { Mail, Phone, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Loader2, BookOpen } from "lucide-react";

export default function WaitlistForm() {
  const [channel, setChannel] = useState<"email" | "whatsapp">("email");
  const [program, setProgram] = useState("Farz Uloom Course (Batch 2)");
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) {
      setError(
        channel === "email"
          ? "Please enter your email address."
          : "Please enter your WhatsApp phone number."
      );
      return;
    }

    if (channel === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setError("Please provide a valid email address.");
      return;
    }

    if (channel === "whatsapp" && value.replace(/\D/g, "").length < 8) {
      setError("Please provide a valid WhatsApp number with country code.");
      return;
    }

    setError("");
    setIsLoading(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Fire confetti safely
    try {
      const confetti = (await import("canvas-confetti")).default;
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#0B4F32", "#136F47", "#C5A059", "#FAF9F6", "#D7B576"],
      });
    } catch {
      // ignore in SSR
    }

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setValue("");
    setName("");
  };

  return (
    <div id="waitlist-section" className="w-full max-w-xl mx-auto scroll-mt-28">
      {isSubmitted ? (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-dome-900 to-dome-950 p-6 sm:p-8 text-white border-2 border-gold-500/40 shadow-glow-emerald text-center">
          {/* Subtle gold watermark rings */}
          <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full border border-gold-500/20 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full border border-gold-500/20 pointer-events-none" />

          {/* Success Icon */}
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-inner">
            <CheckCircle2 className="w-8 h-8 text-gold-400 animate-bounce" />
          </div>

          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
            جَزَاكُمُ اللَّهُ خَيْرًا
          </h3>
          <p className="font-semibold text-gold-300 text-lg mb-2">
            JazakAllah Khair{name ? `, ${name}` : ""}! You're registered for {program}.
          </p>
          <p className="text-sm text-emerald-100/90 max-w-md mx-auto leading-relaxed mb-5">
            We have reserved your early priority notification on{" "}
            <span className="text-gold-200 font-semibold underline decoration-gold-400/60">
              {value}
            </span>
            . Aalima Rabia Owais and the Sirat-ul-Huda Academy team will reach out with complete batch details.
          </p>

          <button
            onClick={handleReset}
            className="text-xs text-gold-300/80 hover:text-gold-200 underline cursor-pointer"
          >
            Register another family member or email
          </button>
        </div>
      ) : (
        <div className="relative rounded-2xl bg-white/95 backdrop-blur-md p-5 sm:p-7 border border-gold-500/30 shadow-soft-card">
          {/* Top channel selector (Email vs WhatsApp) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-4">
            <span className="text-xs font-semibold text-slateText uppercase tracking-wider text-left">
              Contact preference:
            </span>
            <div className="flex items-center bg-alabaster p-1 rounded-lg border border-gold-500/20">
              <button
                type="button"
                onClick={() => {
                  setChannel("email");
                  setError("");
                }}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  channel === "email"
                    ? "bg-dome-900 text-white shadow-sm"
                    : "text-slateText hover:text-dome-900"
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setChannel("whatsapp");
                  setError("");
                }}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  channel === "whatsapp"
                    ? "bg-dome-900 text-white shadow-sm"
                    : "text-slateText hover:text-dome-900"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Program Preference Selector */}
            <div className="text-left">
              <label className="block text-xs font-semibold text-slateText mb-1">
                Select your area of interest:
              </label>
              <div className="relative">
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm font-medium rounded-xl bg-alabaster border border-slate-200 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-dome-900/10 text-charcoal transition"
                >
                  <option value="Farz Uloom Course (Batch 2)">
                    🎓 Farz Uloom Course (Batch 2 Registration)
                  </option>
                  <option value="Kids Islamic Workshop">
                    🌟 Kids Islamic Workshop (Tarbiyat-e-Atfal)
                  </option>
                  <option value="Daily Quran & Hadith Reflections">
                    📖 Daily Quran & Hadith Broadcasts (Free)
                  </option>
                  <option value="All Academy Programs">
                    ✨ All Programs & Early Academy Access
                  </option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {/* Optional Name */}
              <div className="sm:col-span-1">
                <input
                  type="text"
                  placeholder="Your Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-3 text-sm rounded-xl bg-alabaster border border-slate-200 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-dome-900/10 text-charcoal placeholder-slate-400 transition"
                />
              </div>

              {/* Main input (Email or WhatsApp) */}
              <div className="sm:col-span-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-dome-800">
                  {channel === "email" ? (
                    <Mail className="w-4 h-4 text-dome-800" />
                  ) : (
                    <Phone className="w-4 h-4 text-dome-800" />
                  )}
                </div>
                <input
                  type={channel === "email" ? "email" : "tel"}
                  placeholder={
                    channel === "email"
                      ? "Enter your email (e.g. name@domain.com)"
                      : "WhatsApp number with country code (+...)"
                  }
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full pl-10 pr-3.5 py-3 text-sm rounded-xl bg-alabaster border border-slate-200 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-dome-900/10 text-charcoal placeholder-slate-400 transition"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-rose-600 font-medium px-1 text-left">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full group relative overflow-hidden flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-dome-900 via-dome-800 to-dome-900 hover:from-dome-800 hover:to-dome-700 active:scale-[0.99] border border-gold-500/40 shadow-md hover:shadow-glow-emerald transition-all duration-200 disabled:opacity-75 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-gold-300" />
                  <span>Submitting Registration...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-gold-300 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide">Register Priority Interest</span>
                  <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Trust badges & privacy */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slateText gap-2">
            <div className="flex items-center gap-1.5 text-slateText">
              <ShieldCheck className="w-3.5 h-3.5 text-dome-700" />
              <span>Direct communication from Academy • 100% Privacy guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-dome-900">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>Batch 2 Seats are Limited</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
