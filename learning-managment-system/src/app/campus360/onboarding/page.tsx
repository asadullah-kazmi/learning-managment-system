"use client";
import React from "react";
import Campus360Header from "../Campus360Header";
import Footer from "../../components/Footer";

const rules = [
  "Academy must provide accurate information during registration.",
  "All student data is confidential and must not be shared without consent.",
  "Campus360 is for educational use only; commercial resale is prohibited.",
  "Academy is responsible for managing its own instructors and students.",
  "Any misuse of the platform may result in suspension or termination.",
  "Support is available 24/7 for technical and operational issues.",
];

const Campus360Onboarding = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Campus360Header />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1ea88f] mb-8 text-center">
            Welcome to Campus360 Onboarding
          </h1>
          {/* Video Section */}
          <div className="mb-10 flex flex-col items-center">
            <div className="w-full aspect-video bg-gray-200 rounded-2xl shadow-lg overflow-hidden mb-4 flex items-center justify-center">
              {/* Replace with your real video URL */}
              <video
                controls
                className="w-full h-full object-cover rounded-2xl"
              >
                <source
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-gray-700 text-center max-w-xl mx-auto mb-2">
              Watch this short video to understand how Campus360 can transform
              your academy with seamless online learning, branding, and
              analytics.
            </p>
          </div>
          {/* Rules and Regulations */}
          <div className="mb-10 bg-white rounded-2xl shadow p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#1ea88f] mb-4">
              Rules & Regulations
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
          {/* Call to Action */}
          <div className="text-center mt-8">
            <a
              href="/register"
              className="inline-block bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:from-[#198773] hover:to-[#1ea88f] transition-all text-lg hover:scale-105 hover:cursor-pointer"
            >
              Start Sign Up Process
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Campus360Onboarding;
