import React from "react";

interface PatternProps {
  className?: string;
  opacity?: number;
}

export function IslamicStarPattern({ className = "", opacity = 0.04 }: PatternProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full text-dome-900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="islamic-star-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* 8-point geometric star pattern */}
            <path
              d="M40 0 L48 24 L72 16 L64 40 L88 48 L64 56 L72 80 L48 72 L40 96 L32 72 L8 80 L16 56 L-8 48 L16 40 L8 16 L32 24 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Center concentric octagonal accent */}
            <circle cx="40" cy="40" r="12" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <circle cx="40" cy="40" r="4" fill="currentColor" />
            <circle cx="0" cy="0" r="6" fill="currentColor" />
            <circle cx="80" cy="0" r="6" fill="currentColor" />
            <circle cx="0" cy="80" r="6" fill="currentColor" />
            <circle cx="80" cy="80" r="6" fill="currentColor" />
            {/* Corner interlaces */}
            <path
              d="M0 40 L16 40 M64 40 L80 40 M40 0 L40 16 M40 64 L40 80"
              stroke="currentColor"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star-pattern)" />
      </svg>
    </div>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500" />
      <div className="relative flex items-center justify-center">
        {/* Diamond 8-point star mini emblem */}
        <div className="w-2.5 h-2.5 rotate-45 border border-gold-500 bg-gold-50 shadow-sm" />
        <div className="absolute w-1 h-1 bg-dome-700 rounded-full" />
      </div>
      <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500" />
    </div>
  );
}

export function ArchMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={`w-40 h-12 text-gold-500/40 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 50 Q 50 10, 100 8 Q 150 10, 190 50"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="100" cy="18" r="3" fill="currentColor" />
    </svg>
  );
}
