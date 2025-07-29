"use client";

import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Web Development Student",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      text: "LearnForU transformed my career. The quality of courses and support from instructors is exceptional. I went from knowing nothing about coding to landing my dream job!",
    },
    {
      name: "Michael Chen",
      role: "Data Science Instructor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      text: "As an instructor, I love the platform's tools and the global reach it provides. My students come from all over the world, and the earning potential is fantastic.",
    },
    {
      name: "Emily Rodriguez",
      role: "Business Student",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      text: "The flexibility of learning at my own pace while having access to expert instructors has been incredible. Highly recommend LearnForU for anyone serious about learning.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-800 font-semibold mb-2">
            WHAT OUR USERS SAY
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students and instructors about their learning journey
            and success stories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
            >
              {/* User Picture at Top */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow-lg"
              />
              {/* Name and Role */}
              <div className="mb-2">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              {/* Quote and Text */}
              <div className="mb-6">
                <FaQuoteLeft className="w-8 h-8 text-teal-200 mb-4 mx-auto" />
                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
