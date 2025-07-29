"use client";

import React, { useState } from "react";
import { FaEnvelope, FaRocket } from "react-icons/fa";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-teal-800 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaEnvelope className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <p className="text-teal-100 mb-8 max-w-2xl mx-auto text-lg">
          Get the latest updates on new courses, features, and learning tips
          delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-6 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white text-teal-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
          >
            <FaRocket className="w-4 h-4" />
            Subscribe
          </button>
        </form>

        <p className="text-teal-100 text-sm mt-4">
          No spam, unsubscribe at any time. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
 