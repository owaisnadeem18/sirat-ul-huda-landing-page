"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 27,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    setMounted(true);

    // Target date: 30 days from project creation
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 27);
    targetDate.setHours(targetDate.getHours() + 14);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    {
      label: "Days",
      arabicLabel: "أَيَّام",
      value: mounted ? String(timeLeft.days).padStart(2, "0") : "27",
    },
    {
      label: "Hours",
      arabicLabel: "سَاعَات",
      value: mounted ? String(timeLeft.hours).padStart(2, "0") : "14",
    },
    {
      label: "Minutes",
      arabicLabel: "دَقَائِق",
      value: mounted ? String(timeLeft.minutes).padStart(2, "0") : "42",
    },
    {
      label: "Seconds",
      arabicLabel: "ثَوَانٍ",
      value: mounted ? String(timeLeft.seconds).padStart(2, "0") : "18",
    },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-7">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={unit.label}>
            <div className="flex flex-col items-center">
              {/* Timer Card */}
              <div className="relative group w-16 sm:w-24 h-20 sm:h-28 rounded-2xl bg-white/90 backdrop-blur-md border border-gold-500/25 shadow-soft-card flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:border-gold-500/60 hover:shadow-glow-emerald">
                {/* Subtle top golden accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dome-900 via-gold-500 to-dome-900 opacity-80" />

                {/* Counter Digit */}
                <span className="font-heading text-2xl sm:text-4xl font-bold text-dome-950 tracking-tight">
                  {unit.value}
                </span>

                {/* Subtitle label in English & Arabic */}
                <div className="flex flex-col items-center mt-0.5 sm:mt-1">
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slateText">
                    {unit.label}
                  </span>
                  <span className="text-[9px] font-arabic text-gold-700/80 -mt-0.5">
                    {unit.arabicLabel}
                  </span>
                </div>

                {/* Delicate corner geometric accent */}
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-r border-b border-gold-400/40 rounded-br-sm" />
              </div>
            </div>

            {/* Separator colon between cards */}
            {index < timeUnits.length - 1 && (
              <div className="flex flex-col items-center justify-center gap-1.5 text-gold-500/70 pb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500/80" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <p className="text-center text-xs text-slateText-muted mt-3 font-medium">
        Estimated Launch: <span className="text-dome-900 font-semibold">Ramadan Pre-Opening (In Sha Allah)</span>
      </p>
    </div>
  );
}
