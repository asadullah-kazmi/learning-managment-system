"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGraduationCap,
  FaUsers,
  FaChalkboardTeacher,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Become Instructor", href: "/become-instructor" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  const popularCourses = [
    { name: "Web Development", href: "/courses" },
    { name: "Data Science", href: "/courses" },
    { name: "Business", href: "/courses" },
    { name: "Design", href: "/courses" },
    { name: "Marketing", href: "/courses" },
    { name: "Programming", href: "/courses" },
  ];

  const certifications = [
    { name: "Product Management", href: "/courses" },
    { name: "Data Analytics", href: "/courses" },
    { name: "Digital Marketing", href: "/courses" },
    { name: "UX Design", href: "/courses" },
    { name: "AI & Machine Learning", href: "/courses" },
    { name: "Software Engineering", href: "/courses" },
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Student Support", href: "#" },
    { name: "Instructor Support", href: "#" },
    { name: "Contact Support", href: "/contact" },
    { name: "FAQ", href: "#" },
    { name: "Community", href: "#" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">LearnForU</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              LearnForU is a global leader in digital and tech skills training.
              Start or accelerate your career in tech today with our
              comprehensive learning platform.
            </p>
            <p className="text-gray-300 mb-4 text-sm">
              <strong>Campus360:</strong> Our all-in-one white-label learning
              management solution for academies.{" "}
              <Link
                href="/campus360"
                className="text-[#1ea88f] underline hover:text-[#198773]"
              >
                Learn more
              </Link>
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 hover:cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaUsers className="w-5 h-5 mr-2 text-teal-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaChalkboardTeacher className="w-5 h-5 mr-2 text-teal-400" />
              Popular Courses
            </h4>
            <ul className="space-y-3">
              {popularCourses.map((course, index) => (
                <li key={index}>
                  <Link
                    href={course.href}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Support */}
          <div>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FaShieldAlt className="w-5 h-5 mr-2 text-teal-400" />
                  Certifications
                </h4>
                <ul className="space-y-2">
                  {certifications.slice(0, 4).map((cert, index) => (
                    <li key={index}>
                      <Link
                        href={cert.href}
                        className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer text-sm"
                      >
                        {cert.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <FaUsers className="w-5 h-5 mr-2 text-teal-400" />
                  Support
                </h4>
                <ul className="space-y-2">
                  {support.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Info - now its own column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 text-teal-400" />
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-snug">
                  2750 Quadra Street Golden Victoria Road,
                  <br />
                  New York, USA
                </span>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="tel:+11234567890"
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  +1 (123) 456 7890
                </a>
                <span className="text-gray-400 mx-1">|</span>
                <a
                  href="tel:+557854578964"
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  +55 785 4578964
                </a>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:hello@learnforu.com"
                  className="text-gray-300 text-sm hover:text-teal-400 transition-colors"
                >
                  hello@learnforu.com
                </a>
              </div>
              {/* Hours */}
              <div className="flex items-center space-x-2">
                <FaClock className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4" />
                <span className="text-gray-300 text-sm">
                  Sat - Sun: 10:00 AM - 4:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest courses and updates.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-teal-500 text-white px-6 py-3 rounded-r-lg hover:bg-teal-600 transition-colors duration-300 hover:cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              All Content © LearnForU Inc. 2015-{currentYear}.
            </div>
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 hover:cursor-pointer"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
