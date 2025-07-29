"use client";

import React from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaGlobe,
  FaLaptop,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaGraduationCap,
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of teaching experience",
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description:
        "Connect with students and instructors from around the world",
    },
    {
      icon: FaGlobe,
      title: "Learn Anywhere",
      description: "Access courses from any device, anytime, anywhere",
    },
    {
      icon: FaLaptop,
      title: "Interactive Learning",
      description: "Engage with video lessons, quizzes, and hands-on projects",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Platform",
      description:
        "Your data and progress are protected with enterprise-grade security",
    },
    {
      icon: FaChartLine,
      title: "Track Progress",
      description:
        "Monitor your learning journey with detailed analytics and certificates",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-800 font-semibold mb-2">
            WHY CHOOSE LEARNFORU
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Platform
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience the future of education with our advanced learning
            management system designed for both students and instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-teal-800" />
              </div>
              <h4 className="font-bold text-xl text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
