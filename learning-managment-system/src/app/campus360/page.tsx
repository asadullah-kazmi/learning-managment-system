"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaShieldAlt,
  FaLaptop,
  FaUsers,
  FaChartLine,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaCheckCircle,
  FaGlobe,
  FaBookOpen,
} from "react-icons/fa";
import Link from "next/link";

const features = [
  {
    icon: FaShieldAlt,
    title: "White Label Branding",
    description: "Fully customizable platform to match your academy's brand.",
  },
  {
    icon: FaLaptop,
    title: "Online Classes",
    description: "Host live and recorded classes with seamless student access.",
  },
  {
    icon: FaUsers,
    title: "Student Tracking",
    description: "Monitor student progress, attendance, and engagement.",
  },
  {
    icon: FaChartLine,
    title: "Analytics & Reports",
    description: "Detailed insights into performance, growth, and outcomes.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Instructor Tools",
    description: "Easy course creation, assessments, and communication tools.",
  },
  {
    icon: FaBookOpen,
    title: "Assessments & Certificates",
    description: "Automated quizzes, assignments, and certificate generation.",
  },
];

const benefits = [
  "No technical setup required",
  "Mobile & desktop friendly",
  "Secure & scalable infrastructure",
  "24/7 support for your academy",
  "Integrates with your website",
  "Affordable pricing for all sizes",
];

const stats = [
  { icon: FaUsers, number: "12K+", label: "Active Students" },
  { icon: FaGraduationCap, number: "500+", label: "Expert Instructors" },
  { icon: FaBookOpen, number: "120+", label: "Online Courses" },
  { icon: FaChartLine, number: "95%", label: "Success Rate" },
];

const Campus360Page = () => {
  return (
    <div className="bg-white/90 min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-br from-[#1ea88f]/80 to-[#198773]/90">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-white/20 rounded-full p-3 mr-2">
              <FaGraduationCap className="w-8 h-8 text-white" />
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Campus360
            </h1>
          </div>
          <p className="text-white/90 text-lg md:text-xl mb-8 font-medium">
            The complete white-label learning management solution for academies.
            Deliver online classes, track students, automate assessments, and
            grow your brand—all in one place.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-[#1ea88f] font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#1ea88f] hover:text-white transition-all text-lg"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-10 text-center uppercase tracking-widest">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/80 border border-gray-100 p-8 rounded-2xl shadow-md flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-[#1ea88f]" />
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works / Benefits Section */}
      <section className="py-16 bg-white/70">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-8 text-center uppercase tracking-widest">
            Why Academies Love Campus360
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-center bg-white border border-gray-100 rounded-xl shadow p-5"
              >
                <FaCheckCircle className="w-6 h-6 text-[#1ea88f] mr-3 flex-shrink-0" />
                <span className="text-gray-800 text-base font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#1ea88f] to-[#198773]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visuals / Screenshots Section (portal preview) */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-10 text-center uppercase tracking-widest">
            See Campus360 in Action
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Portal Preview - More Professional and Responsive */}
            <div className="w-full max-w-4xl mx-auto bg-white/95 border border-gray-100 rounded-2xl shadow-2xl p-0 overflow-hidden min-h-[480px]">
              {/* Top Bar */}
              <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#1ea88f]/90 to-[#198773]/80 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/Logo.png"
                    alt="Academy Logo"
                    className="w-9 h-9 rounded bg-white/80"
                  />
                  <span className="font-bold text-white text-xl tracking-tight">
                    My Academy
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <button className="relative">
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <span className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center font-bold text-[#1ea88f] border border-white">
                    S
                  </span>
                </div>
              </div>
              <div className="flex h-full">
                {/* Sidebar */}
                <aside className="w-60 bg-gradient-to-b from-[#1ea88f]/90 to-[#198773]/80 text-white flex flex-col py-8 px-4 gap-2 min-h-[480px]">
                  <div className="font-extrabold text-lg mb-10 flex items-center gap-2">
                    <span className="bg-white/20 rounded-full p-1">
                      <FaGraduationCap className="w-5 h-5 text-white" />
                    </span>{" "}
                    Campus360
                  </div>
                  <nav className="flex-1 flex flex-col gap-2">
                    <span className="flex items-center gap-2 font-semibold bg-white/10 rounded px-2 py-2">
                      <FaUsers className="w-4 h-4" /> Dashboard
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaLaptop className="w-4 h-4" /> Classes
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaBookOpen className="w-4 h-4" /> Assessments
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaChartLine className="w-4 h-4" /> Analytics
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaGlobe className="w-4 h-4" /> Announcements
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaUsers className="w-4 h-4" /> Students
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaChalkboardTeacher className="w-4 h-4" /> Instructors
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaBookOpen className="w-4 h-4" /> Subjects
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaShieldAlt className="w-4 h-4" /> Settings
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaChartLine className="w-4 h-4" /> Billing
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaCheckCircle className="w-4 h-4" /> Support
                    </span>
                  </nav>
                  <span className="mt-10 text-xs text-white/70">
                    White-label for your academy
                  </span>
                </aside>
                {/* Main Content */}
                <main className="flex-1 bg-white/80 p-8 flex flex-col gap-8 min-h-[480px]">
                  {/* Dashboard Widgets Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#1ea88f]">
                        3
                      </span>
                      <span className="text-xs text-gray-700">
                        Active Classes
                      </span>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#198773]">
                        92%
                      </span>
                      <span className="text-xs text-gray-700">Attendance</span>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col items-center">
                      <span className="text-2xl font-bold text-[#1ea88f]">
                        5
                      </span>
                      <span className="text-xs text-gray-700">
                        Upcoming Assessments
                      </span>
                    </div>
                  </div>
                  {/* Chart & Announcements Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col">
                      <div className="font-semibold text-gray-800 mb-2">
                        Progress Chart
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <svg width="100" height="100" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1ea88f"
                            strokeWidth="8"
                            fill="none"
                            opacity="0.2"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#1ea88f"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="251.2"
                            strokeDashoffset="50"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="ml-4 text-2xl font-bold text-[#1ea88f]">
                          80%
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 mt-2">
                        Course Completion
                      </span>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col">
                      <div className="font-semibold text-gray-800 mb-2">
                        Announcements
                      </div>
                      <div className="text-gray-700 text-sm mb-2">
                        New course materials have been uploaded for Module 3.
                        Please review before next class.
                      </div>
                      <button className="bg-[#1ea88f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#198773] transition self-end">
                        View
                      </button>
                    </div>
                  </div>
                  {/* Recent Activity */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col">
                      <div className="font-semibold text-gray-800 mb-2">
                        Recent Activity
                      </div>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>✔️ Completed: Algebra II - Quiz 2</li>
                        <li>✔️ Attended: Live Class - Geometry</li>
                        <li>✔️ Submitted: Assignment - Essay Draft</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 shadow p-6 flex flex-col items-center justify-center">
                      <div className="font-semibold text-gray-800 mb-2">
                        Next Assessment
                      </div>
                      <span className="text-lg font-bold text-[#1ea88f]">
                        Module 2: Reading & Writing
                      </span>
                      <span className="text-xs text-gray-700">Due: 12 May</span>
                      <button className="mt-3 bg-[#1ea88f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#198773] transition">
                        Start
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#1ea88f] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Academy?
          </h2>
          <p className="text-lg mb-8">
            Start using Campus360 today and unlock the full potential of your
            institution with seamless online learning, branding, and analytics.
          </p>
          <Link
            href="/register"
            className="inline-block bg-white text-[#1ea88f] font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-[#198773] hover:text-white transition-all text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Campus360Page;
 