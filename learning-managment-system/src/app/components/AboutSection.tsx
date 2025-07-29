"use client";

import React from "react";
import Link from "next/link";
import { FaPlay, FaUsers, FaGraduationCap, FaChartLine } from "react-icons/fa";

const AboutSection = () => {
  const highlights = [
    { icon: FaUsers, number: "50K+", label: "Active Students" },
    { icon: FaGraduationCap, number: "500+", label: "Expert Instructors" },
    { icon: FaChartLine, number: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/about-section-image.svg
              "
              alt="Learning Platform"
              className="w-full h-96 rounded-2xl shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-blue-600/20 rounded-2xl"></div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                  <FaPlay className="w-5 h-5 text-teal-800" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Video Lessons</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-teal-800 font-semibold mb-2">
              ABOUT LEARNFORU
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Education Through Technology
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              LearnForU is a comprehensive learning management platform that
              connects students with expert instructors worldwide. Our mission
              is to make quality education accessible to everyone, everywhere.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <highlight.icon className="w-5 h-5 text-teal-800" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-gray-600">{highlight.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/courses"
                className="bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors text-center hover:cursor-pointer"
              >
                Explore Courses
              </Link>
              <Link
                href="/become-instructor"
                className="border-2 border-teal-800 text-teal-800 px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 hover:text-white transition-colors text-center hover:cursor-pointer"
              >
                Become Instructor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
