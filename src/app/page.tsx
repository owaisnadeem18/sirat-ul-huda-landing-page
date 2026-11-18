"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FarzUloomSection from "@/components/FarzUloomSection";
import DailyPreviewCard from "@/components/DailyPreviewCard";
import CorePillars from "@/components/CorePillars";
import InstructorProfile from "@/components/InstructorProfile";
import FoundersNote from "@/components/FoundersNote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-alabaster text-charcoal flex flex-col selection:bg-dome-900 selection:text-white">
      {/* Fixed Header Navbar with 80% Underline on Active Route */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Live Countdown & Registration Form */}
        <Hero />

        {/* Farz Uloom Course Flagship Section (Batch 1 Success & Batch 2 Admissions) */}
        <FarzUloomSection />

        {/* Live Interactive Daily Reflection Card (Verse & Hadith) */}
        <DailyPreviewCard />

        {/* Core Pillars & Kids Islamic Workshop */}
        <CorePillars />

        {/* Instructor Profile (Aalima Rabia Owais - 8 Years Dars-e-Nizami) */}
        <InstructorProfile />

        {/* Founder's Vision & Note */}
        <FoundersNote />
      </main>

      {/* Footer with Calligraphy, Links, and Dua */}
      <Footer />
    </div>
  );
}
