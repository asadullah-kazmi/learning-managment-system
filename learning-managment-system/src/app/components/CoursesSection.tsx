"use client";

import React from "react";
import Link from "next/link";

const CoursesSection = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="text-center mb-12">
        <h5 className="text-teal-800 font-semibold mb-2">
          LEARN AT YOUR OWN PACE
        </h5>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          eCons Popular Courses
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us! We ensure that you will never regret it!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Course Card 1 */}
        <div className="bg-gray-50 rounded shadow p-4 flex flex-col">
          <img
            src="/python-course.jpg"
            alt="Course 1"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-700 font-semibold mr-2">
              Thomas Wilson
            </span>
          </div>
          <h4 className="font-bold text-lg mb-2">
            Automate the Boring Stuff with Python Pr...
          </h4>
          <p className="text-gray-600 mb-4">
            If you're an office worker, student, administrator, or just want to
            become more productive with your compute
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-gray-500 text-sm">21 Lessons</span>
            <span className="text-gray-500 text-sm">6 Students</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-2 line-through">
              $99.99
            </span>
            <span className="bg-teal-800 text-white px-3 py-1 rounded-full text-xs font-bold">
              $49.99
            </span>
          </div>
        </div>
        {/* Course Card 2 */}
        <div className="bg-gray-50 rounded shadow p-4 flex flex-col">
          <img
            src="/tailwind-job-consultancy.jpg"
            alt="Course 2"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-700 font-semibold mr-2">
              Smith Evans
            </span>
          </div>
          <h4 className="font-bold text-lg mb-2">
            React - Tailwind CSS Job Consultancy Web...
          </h4>
          <p className="text-gray-600 mb-4">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI compon
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-gray-500 text-sm">20 Lessons</span>
            <span className="text-gray-500 text-sm">4 Students</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-2 line-through">
              $100
            </span>
            <span className="bg-teal-800 text-white px-3 py-1 rounded-full text-xs font-bold">
              $60
            </span>
          </div>
        </div>
        {/* Course Card 3 */}
        <div className="bg-gray-50 rounded shadow p-4 flex flex-col">
          <img
            src="/consulting-masterclass.jpg"
            alt="Course 3"
            className="w-full h-48 object-cover rounded mb-4"
          />
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-700 font-semibold mr-2">
              Smith Evans
            </span>
          </div>
          <h4 className="font-bold text-lg mb-2">
            Consulting Masterclass: Start A Consulti...
          </h4>
          <p className="text-gray-600 mb-4">
            Would you like to start a profitable consulting business? And do you
            want to become location-independent
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-gray-500 text-sm">50 Lessons</span>
            <span className="text-gray-500 text-sm">4 Students</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold mr-2 line-through">
              $50
            </span>
            <span className="bg-teal-800 text-white px-3 py-1 rounded-full text-xs font-bold">
              $40
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Link
          href="/courses"
          className="bg-teal-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-900 transition-colors inline-block"
        >
          View All Courses
        </Link>
      </div>
    </section>
  );
};

export default CoursesSection;
