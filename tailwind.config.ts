import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: "#FAF9F6",
        marble: "#FFFFFF",
        dome: {
          50: "#F2F9F5",
          100: "#E3F3EC",
          200: "#C6E6D8",
          300: "#98D3BB",
          400: "#5EB895",
          500: "#2FA072",
          600: "#1E825A",
          700: "#136F47",
          800: "#11633F",
          900: "#0B4F32",
          950: "#052A1B",
        },
        gold: {
          50: "#FCF9F2",
          100: "#FAF3E3",
          200: "#F1E3C4",
          300: "#E5CCA0",
          400: "#D7B576",
          500: "#C5A059",
          600: "#AD8442",
          700: "#8C6533",
          800: "#6B4C29",
          900: "#4D351D",
        },
        charcoal: {
          DEFAULT: "#1A2421",
          900: "#121A18",
          800: "#1A2421",
          700: "#2B3A35",
          600: "#3D4F49",
        },
        slateText: {
          DEFAULT: "#4A5D55",
          muted: "#667A72",
          light: "#8C9E97",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-playfair)", "serif"],
        arabic: ["var(--font-amiri)", "serif"],
      },
      boxShadow: {
        "glow-emerald": "0 0 35px -5px rgba(11, 79, 50, 0.25)",
        "glow-emerald-lg": "0 0 60px -10px rgba(11, 79, 50, 0.35)",
        "glow-gold": "0 0 25px -5px rgba(197, 160, 89, 0.3)",
        "soft-card": "0 10px 40px -10px rgba(11, 79, 50, 0.07)",
        "elevated-card": "0 20px 50px -15px rgba(11, 79, 50, 0.12)",
      },
      backgroundImage: {
        "radial-emerald": "radial-gradient(circle at center, rgba(19, 111, 71, 0.15) 0%, transparent 70%)",
        "radial-gold": "radial-gradient(circle at center, rgba(197, 160, 89, 0.12) 0%, transparent 65%)",
      },
    },
  },
  plugins: [],
};

export default config;
