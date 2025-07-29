"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaUsers,
  FaLaptop,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  mainImage: string;
  backgroundImage: string;
  icon: React.ComponentType<{ className?: string }>;
  features: Array<{
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
  stats: Array<{ number: string; label: string }>;
}

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const heroSlides: HeroSlide[] = [
    {
      title: "Campus360",
      subtitle: "Learning Management Solution",
      description:
        "Complete white-label learning platform for academies with online classes, assessments, and student tracking.",
      buttonText: "Learn More",
      buttonLink: "/campus360",
      mainImage: "/campus360.svg",
      backgroundImage: "/globe.svg",
      icon: FaGraduationCap,
      features: [
        { text: "White label branding", icon: FaShieldAlt },
        { text: "Online classes", icon: FaLaptop },
        { text: "Student tracking", icon: FaUsers },
      ],
      stats: [
        { number: "500+", label: "Academies" },
        { number: "50K+", label: "Students" },
      ],
    },
    {
      title: "Become an Instructor",
      subtitle: "Share Your Knowledge",
      description:
        "Create courses, reach students worldwide, and build your online teaching business.",
      buttonText: "Start Teaching",
      buttonLink: "/become-instructor",
      mainImage: "/globe.svg",
      backgroundImage: "/next.svg",
      icon: FaChalkboardTeacher,
      features: [
        { text: "Create courses", icon: FaLaptop },
        { text: "Global audience", icon: FaUsers },
        { text: "Earn revenue", icon: FaChartLine },
      ],
      stats: [
        { number: "10K+", label: "Instructors" },
        { number: "1M+", label: "Students" },
      ],
    },
  ];

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="relative flex transition-transform duration-700 ease-in-out w-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center px-4 md:px-16 py-16 relative min-h-[600px]"
          >
            {/* Glassmorphic Card */}
            <div className="backdrop-blur-xl bg-white/30 border border-white/30 shadow-2xl rounded-3xl p-10 w-full max-w-2xl z-20 relative animate-fade-in-up mx-auto">
              {/* Icon and Subtitle */}
              <div className="flex items-center mb-2">
                <div className="p-2 bg-teal-100 rounded-full mr-2 shadow-md animate-float">
                  <slide.icon className="w-6 h-6 text-teal-800" />
                </div>
                <h2 className="text-teal-800 font-semibold text-base tracking-wide animate-fade-in">
                  {slide.subtitle}
                </h2>
              </div>
              {/* Main Title */}
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight animate-fade-in delay-100">
                {slide.title}
              </h1>
              {/* Description */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed animate-fade-in delay-200">
                {slide.description}
              </p>
              {/* Features Grid */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-3">
                  {slide.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center p-2 bg-white/60 rounded-xl shadow hover:bg-white/80 transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-1 bg-teal-100 rounded-full mr-2">
                        <feature.icon className="w-4 h-4 text-teal-800" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stats Section */}
              <div className="flex space-x-6 mb-6">
                {slide.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="text-center animate-fade-in delay-300"
                  >
                    <div className="text-2xl font-bold text-teal-800">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <Link href={slide.buttonLink}>
                <button className="bg-gradient-to-r from-teal-800 to-teal-600 text-white px-8 py-3 rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-teal-700 hover:to-teal-500 text-lg hover:cursor-pointer animate-fade-in delay-400">
                  {slide.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white bg-white/60 transition-all duration-300 transform hover:scale-125 hover:bg-[#1ea88f] hover:border-[#1ea88f] hover:cursor-pointer ${
              currentSlide === index
                ? "bg-[#1ea88f] border-[#1ea88f] scale-125 shadow-lg"
                : ""
            }`}
          />
        ))}
      </div>

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#1ea88f] text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl z-30 hover:cursor-pointer border border-gray-200"
      >
        <FaChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-[#1ea88f] text-gray-800 hover:text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl z-30 hover:cursor-pointer border border-gray-200"
      >
        <FaChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default HeroCarousel;
