"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaShieldAlt,
  FaUsers,
  FaGraduationCap,
  FaExclamationTriangle,
} from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to LearnForU. These Terms and Conditions govern your use
              of our learning management platform and services. By accessing or
              using our platform, you agree to be bound by these terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              LearnForU provides an online learning platform that connects
              students with instructors worldwide. Our services include course
              creation, delivery, assessment, and certification.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Definitions
            </h2>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">"Platform"</strong> refers to
                the LearnForU website and mobile applications.
              </div>
              <div>
                <strong className="text-gray-900">"User"</strong> refers to any
                individual who accesses or uses our platform.
              </div>
              <div>
                <strong className="text-gray-900">"Student"</strong> refers to
                users who enroll in courses on our platform.
              </div>
              <div>
                <strong className="text-gray-900">"Instructor"</strong> refers
                to users who create and deliver courses on our platform.
              </div>
              <div>
                <strong className="text-gray-900">"Content"</strong> refers to
                all materials, including courses, videos, text, and assessments.
              </div>
            </div>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. User Accounts
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                To access certain features of our platform, you must create an
                account. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>
                  Ensuring you are at least 13 years old to create an account
                </li>
              </ul>
            </div>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Acceptable Use Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                You agree not to use our platform to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload malicious content or software</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to scrape or collect data</li>
                <li>Impersonate another person or entity</li>
              </ul>
            </div>
          </section>

          {/* Course Content */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Course Content and Intellectual Property
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Instructor Content:</strong> Instructors retain
                ownership of their course content. By uploading content,
                instructors grant LearnForU a license to host and distribute
                their content on our platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Student Access:</strong> Students may access course
                content for personal, non-commercial use only. Redistribution or
                commercial use is prohibited.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Platform Content:</strong> LearnForU retains ownership
                of platform-specific content, including our branding, software,
                and website design.
              </p>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Payment and Refund Policy
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Course Purchases:</strong> Course prices are set by
                instructors and may vary. All payments are processed securely
                through our payment partners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Refunds:</strong> We offer a 30-day money-back guarantee
                for course purchases. Refund requests must be submitted through
                our support system.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Instructor Payments:</strong> Instructors receive
                payments according to our revenue sharing model, typically
                within 30 days of course completion.
              </p>
            </div>
          </section>

          {/* Privacy and Data */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Privacy and Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Our collection and use of
              personal information is governed by our Privacy Policy, which is
              incorporated into these terms by reference.
            </p>
          </section>

          {/* Disclaimers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Disclaimers and Limitations
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <FaExclamationTriangle className="w-5 h-5 text-yellow-400 mt-0.5 mr-3" />
                  <div>
                    <p className="text-yellow-800 font-medium">
                      Important Disclaimer
                    </p>
                    <p className="text-yellow-700 text-sm mt-1">
                      LearnForU provides educational content but does not
                      guarantee specific outcomes, job placement, or
                      certification recognition. Course quality and
                      effectiveness may vary.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our platform is provided "as is" without warranties of any kind.
                We are not responsible for the accuracy, completeness, or
                usefulness of course content.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Account Termination
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account at any time for
                violations of these terms. You may also terminate your account
                at any time through your account settings.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, your access to the platform will cease, but
                certain provisions of these terms will survive.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of significant changes via email or platform
              notification. Continued use of the platform constitutes acceptance
              of updated terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Contact Information
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms and Conditions, please
                contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> legal@learnforu.com
                </p>
                <p>
                  <strong>Address:</strong> 2750 Quadra Street Golden Victoria
                  Road, New York, USA
                </p>
                <p>
                  <strong>Phone:</strong> +1 (123) 456 7890
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
