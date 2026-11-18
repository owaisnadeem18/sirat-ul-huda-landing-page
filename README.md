# Sirat-ul-Huda Academy — Coming Soon / Pre-Launch Landing Page

> **"Illuminating Hearts Through Authentic Quran & Sunnah"**  
> A serene, majestic, and spiritually uplifting pre-launch web platform for **Sirat-ul-Huda Academy**.

---

## 🕌 Aesthetic & Design Philosophy (Gumbad-e-Khazra Inspired)

The design takes direct inspiration from the sublime serenity of **Al-Masjid an-Nabawi in Madinah**, contrasting the deep emerald green of the **Gumbad-e-Khazra (Green Dome)** against pure white marble courtyards with warm champagne gold accents:

- **Primary Background:** Pure Alabaster & Marble White (`#FAF9F6`, `#FFFFFF`)
- **Primary Accent (Dome Green):** Deep Dome Green (`#0B4F32`) and Rich Emerald (`#136F47`)
- **Secondary Accent (Brass / Trim):** Warm Champagne Gold (`#C5A059`)
- **Text Hierarchy:** Deep Charcoal (`#1A2421`) for headings, Muted Slate (`#4A5D55`) for readable body text
- **Visual Motifs:** Subtle geometric Islamic 8-point star watermarks (`3% - 4%` opacity), soft radial emerald & gold glows, and delicate glassmorphism cards.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (custom dome green & gold color palettes)
- **Icons:** Lucide React
- **Animations:** Framer Motion & CSS keyframe glow shimmers
- **Typography:** Google Fonts:
  - `Amiri`: Quranic Arabic calligraphy & Urdu typography
  - `Playfair Display`: Regal headings
  - `Plus Jakarta Sans`: Modern, legible UI body text

---

## 📑 Page Sections & Architecture

1. **Minimalist Top Navbar (`Navbar.tsx`):**
   - Dome Medallion with Arabic Calligraphy (`صِرَاط`)
   - Anchor links for quick navigation
   - Animated "Launching Soon" pulsing emerald badge
   - "Join Waitlist" quick-scroll CTA button

2. **Hero Section (`Hero.tsx`):**
   - Top Pill Badge: `✨ Something Big Is Coming Soon • إِنْ شَاءَ اللَّه`
   - Headline: *"Illuminating Hearts Through Authentic Quran & Sunnah"*
   - Subheadline describing the digital sanctuary
   - **Live Countdown Timer (`CountdownTimer.tsx`)**: Days, Hours, Minutes, Seconds with dual English and Arabic labels (`أَيَّام`, `سَاعَات`, `دَقَائِق`, `ثَوَانٍ`)
   - **Interactive Early Access Waitlist (`WaitlistForm.tsx`)**:
     - Toggle between **Email** and **WhatsApp Number**
     - Form validation with error handling
     - Realistic submission delay with loading indicator
     - Emerald/Gold celebratory confetti burst
     - Warm confirmation screen: `جَزَاكُمُ اللَّهُ خَيْرًا — JazakAllah Khair! You're on the list.`

3. **Live Interactive Daily Preview Card (`DailyPreviewCard.tsx`):**
   - Tab switcher between **"Verse of the Day"** (Surah Al-Inshirah 94:5-6) and **"Hadith of the Day"** (Sahih al-Bukhari 5027)
   - Proper Arabic diacritics and typography with RTL support (`dir="rtl"`)
   - Authentic Urdu Tarjuma & Sahih International English translation
   - Spiritual reflection & Tadabbur insights
   - Functional **"Copy Reflection"** button with clipboard feedback
   - Direct **"Share on WhatsApp"** button
   - Interactive **Audio Recitation Preview** toggle with visualizer

4. **Our Vision & Core Pillars (`CorePillars.tsx`):**
   - Bento grid showcasing the 6 pillars:
     1. *Daily Quran & Tarjuma*
     2. *Hadith of the Day*
     3. *Structured Academy Courses*
     4. *Shareable Spiritual Cards*
     5. *Distraction-Free Sanctuary*
     6. *Community & Q&A*

5. **Founder's Vision Note (`FoundersNote.tsx`):**
   - Mihrab-arch framed quote container in emerald and gold
   - Dua: `رَبِّ زِدْنِي عِلْمًا` (*"My Lord, increase me in knowledge"*)
   - Mission statement dedicating the academy as a *Sadaqah Jariyah*

6. **Footer (`Footer.tsx`):**
   - Bismillah calligraphy: `بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ`
   - Academy overview, social channel placeholders (WhatsApp, YouTube, Instagram, Telegram)
   - Back-to-top smooth scroller and copyright

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Or build and run production server
npm run build
npm run start -p 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
