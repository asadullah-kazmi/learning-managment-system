"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Send } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-teal-500 text-4xl mb-4">+</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <nav className="text-gray-500">
              <Link href="/" className="hover:text-teal-500">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="text-teal-500 font-semibold mb-2">
                CONTACT DETAILS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to transform your educational institution with our
                white-label platform? Have questions about our marketplace
                model? We're here to help you succeed in the digital education
                space.
              </p>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <MapPin className="text-teal-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Our Address
                  </h3>
                  <p className="text-gray-600">
                    2750 Quadra Street Victoria Road, New York, Canada
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Phone className="text-teal-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                  <p className="text-gray-600">Mobile: (+44) - 45789 - 5789</p>
                  <p className="text-gray-600">Mail: hello@eLearniv.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 mb-8">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Clock className="text-teal-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Hours of Operation
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 09:00 - 20:00
                  </p>
                  <p className="text-gray-600">
                    Sunday & Saturday: 10:30 - 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-teal-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Your email address will not be published. All fields are
                required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-teal-600 border border-teal-400 placeholder-teal-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-teal-600 border border-teal-400 placeholder-teal-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-teal-600 border border-teal-400 placeholder-teal-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-teal-600 border border-teal-400 placeholder-teal-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-teal-600 border border-teal-400 placeholder-teal-200 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center space-x-2 hover:cursor-pointer"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-118.123456!3d34.052234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAzJzA4LjAiTiAxMTjCsDA3JzI0LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
