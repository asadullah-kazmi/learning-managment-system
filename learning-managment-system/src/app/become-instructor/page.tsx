"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaLaptop,
  FaChartLine,
  FaShieldAlt,
  FaGraduationCap,
  FaPlay,
  FaStar,
  FaCheckCircle,
  FaGlobe,
  FaClock,
  FaDollarSign,
  FaTools,
  FaRocket,
  FaBookOpen,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BecomeInstructor = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const benefits = [
    {
      icon: FaGlobe,
      title: "Global Reach",
      description:
        "Teach students from around the world and expand your audience",
    },
    {
      icon: FaClock,
      title: "Flexible Schedule",
      description: "Create courses on your own time and pace",
    },
    {
      icon: FaDollarSign,
      title: "Earn Revenue",
      description: "Competitive revenue sharing and multiple earning streams",
    },
    {
      icon: FaTools,
      title: "Professional Tools",
      description: "Access to advanced teaching tools and analytics",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Create Your Profile",
      description:
        "Set up your instructor profile with your expertise and experience",
    },
    {
      number: "02",
      title: "Design Your Course",
      description: "Plan and structure your course content with our guidance",
    },
    {
      number: "03",
      title: "Record & Upload",
      description: "Record your lessons and upload them to our platform",
    },
    {
      number: "04",
      title: "Launch & Earn",
      description:
        "Publish your course and start earning from student enrollments",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Development Instructor",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Teaching on this platform has been incredible. I've reached students from 50+ countries and earned over $25,000 in my first year.",
    },
    {
      name: "Michael Chen",
      role: "Data Science Expert",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The tools and support provided are excellent. I can focus on creating quality content while the platform handles everything else.",
    },
    {
      name: "Emily Rodriguez",
      role: "Language Teacher",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Flexible schedule and great earning potential. I've built a sustainable income teaching Spanish online.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Instructors" },
    { number: "1M+", label: "Students Worldwide" },
    { number: "$50M+", label: "Total Earnings" },
    { number: "95%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-teal-500 text-4xl mb-4">
              <FaChalkboardTeacher />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Become an Instructor
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Share your expertise with millions of students worldwide. Create
              courses, build your brand, and earn while making a difference.
            </p>
            <nav className="text-sm text-gray-500">
              <Link href="/" className="hover:text-teal-500">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Become an Instructor</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-teal-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of successful instructors who are already making a
              difference and earning well.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-teal-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to begin your teaching journey with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful instructors who have transformed their
              careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Portal Preview Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-10 text-center uppercase tracking-widest">
            See Instructor Portal Preview
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Instructor Portal Preview - More Professional */}
            <div className="w-full max-w-4xl mx-auto bg-white/95 border border-gray-100 rounded-2xl shadow-2xl p-0 overflow-hidden min-h-[480px]">
              {/* Top Bar with LearnForU Logo */}
              <div className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-[#1ea88f]/90 to-[#198773]/80 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/Logo.png"
                    alt="LearnForU Logo"
                    className="w-9 h-9 rounded bg-white/80"
                  />
                  <span className="font-bold text-white text-xl tracking-tight">
                    LearnForU
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
                    I
                  </span>
                </div>
              </div>
              <div className="flex h-full">
                {/* Sidebar with Instructor Name at Top */}
                <aside className="w-60 bg-gradient-to-b from-[#1ea88f]/90 to-[#198773]/80 text-white flex flex-col py-8 px-4 gap-2 min-h-[480px]">
                  <div className="font-extrabold text-lg mb-8 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center font-bold text-[#1ea88f] border border-white">
                      I
                    </span>
                    John Instructor
                  </div>
                  <nav className="flex-1 flex flex-col gap-2">
                    <span className="flex items-center gap-2 font-semibold bg-white/10 rounded px-2 py-2">
                      <FaUsers className="w-4 h-4" /> Dashboard
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaBookOpen className="w-4 h-4" /> My Courses
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaLaptop className="w-4 h-4" /> Assignments
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaChartLine className="w-4 h-4" /> Analytics
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaDollarSign className="w-4 h-4" /> Earnings
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaCheckCircle className="w-4 h-4" /> Support
                    </span>
                    <span className="flex items-center gap-2 hover:bg-white/10 rounded px-2 py-2 cursor-pointer">
                      <FaShieldAlt className="w-4 h-4" /> Settings
                    </span>
                  </nav>
                  <span className="mt-10 text-xs text-white/70">
                    Empower your teaching
                  </span>
                </aside>
                {/* Main Content (unchanged) */}
                <main className="flex-1 bg-white/80 p-8 flex flex-col gap-6 min-h-[480px]">
                  {/* Quick Stats Row */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#1ea88f]/10 rounded-xl p-4 flex flex-col items-center">
                      <span className="text-xl font-bold text-[#1ea88f]">
                        8
                      </span>
                      <span className="text-xs text-gray-700">
                        Active Courses
                      </span>
                    </div>
                    <div className="bg-[#198773]/10 rounded-xl p-4 flex flex-col items-center">
                      <span className="text-xl font-bold text-[#198773]">
                        1,200
                      </span>
                      <span className="text-xs text-gray-700">
                        Enrolled Students
                      </span>
                    </div>
                    <div className="bg-[#1ea88f]/10 rounded-xl p-4 flex flex-col items-center">
                      <span className="text-xl font-bold text-[#1ea88f]">
                        $4,500
                      </span>
                      <span className="text-xs text-gray-700">
                        This Month's Earnings
                      </span>
                    </div>
                  </div>
                  {/* Course Management & Analytics */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow p-4 flex flex-col mb-2">
                      <div className="font-semibold text-gray-800 mb-2">
                        Course Management
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span className="bg-[#1ea88f]/10 text-[#1ea88f] px-2 py-1 rounded">
                          React for Beginners
                        </span>
                        <span className="bg-[#198773]/10 text-[#198773] px-2 py-1 rounded">
                          Draft
                        </span>
                        <span className="ml-auto text-xs text-gray-400">
                          Edit
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="bg-[#1ea88f]/10 text-[#1ea88f] px-2 py-1 rounded">
                          Data Science 101
                        </span>
                        <span className="bg-[#1ea88f]/10 text-[#1ea88f] px-2 py-1 rounded">
                          Published
                        </span>
                        <span className="ml-auto text-xs text-gray-400">
                          Edit
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow p-4 flex flex-col mb-2">
                      <div className="font-semibold text-gray-800 mb-2">
                        Analytics
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <span className="bg-[#1ea88f]/10 text-[#1ea88f] px-2 py-1 rounded">
                          Top Course
                        </span>
                        <span>Data Science 101</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="bg-[#198773]/10 text-[#198773] px-2 py-1 rounded">
                          Completion Rate
                        </span>
                        <span>87%</span>
                      </div>
                    </div>
                  </div>
                  {/* Recent Student Activity & Earnings */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow p-4 flex flex-col">
                      <div className="font-semibold text-gray-800 mb-2">
                        Recent Student Activity
                      </div>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>✔️ John enrolled in "React for Beginners"</li>
                        <li>✔️ Sarah completed "Data Science 101"</li>
                        <li>
                          ✔️ Emily submitted assignment for "React for
                          Beginners"
                        </li>
                      </ul>
                    </div>
                    <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow p-4 flex flex-col items-center justify-center">
                      <div className="font-semibold text-gray-800 mb-2">
                        Earnings
                      </div>
                      <span className="text-2xl font-bold text-[#1ea88f]">
                        $4,500
                      </span>
                      <span className="text-xs text-gray-700">This Month</span>
                      <button className="mt-3 bg-[#1ea88f] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#198773] transition">
                        Withdraw
                      </button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Teaching?
          </h2>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
            Join our community of educators and start sharing your knowledge
            with students worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors hover:cursor-pointer">
              Get Started Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-800 transition-colors hover:cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BecomeInstructor;
