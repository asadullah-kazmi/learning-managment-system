"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import HeroCarousel from "./HeroCarousel";
import FeaturesSection from "./FeaturesSection";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";
import StatsSection from "./StatsSection";
import TestimonialSection from "./TestimonialSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";

const LandingPages = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setShowVideo(true);
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Video Background and Overlay (client only) */}
      {showVideo && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-0"
            poster="/globe.svg"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="fixed inset-0 bg-gradient-to-br from-black/70 via-black/40 to-[#1ea88f]/30 z-10 pointer-events-none" />
        </>
      )}
      <div className="relative z-20">
        <Header />
        <HeroCarousel />
        <FeaturesSection />
        <AboutSection />
        <CoursesSection />
        <StatsSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPages;
