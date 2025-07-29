"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLock, FaEye, FaDatabase, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaLock className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
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
              At LearnForU, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our learning platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our platform, you consent to the data practices described
              in this policy. If you do not agree with our policies and
              practices, please do not use our platform.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect personal information that you provide directly to
                  us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Educational background and preferences</li>
                  <li>Course enrollment and progress data</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We automatically collect certain information when you use our
                  platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Device information (IP address, browser type, operating
                    system)
                  </li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Information from Third Parties
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We may receive information about you from third-party sources,
                  such as social media platforms (if you choose to connect your
                  account) and payment processors.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. How We Use Your Information
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing and maintaining our learning platform</li>
                <li>Processing course enrollments and payments</li>
                <li>Personalizing your learning experience</li>
                <li>Communicating with you about courses and updates</li>
                <li>Providing customer support and technical assistance</li>
                <li>Analyzing platform usage and improving our services</li>
                <li>Ensuring platform security and preventing fraud</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Information Sharing and Disclosure
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>With Instructors:</strong> Course instructors may
                  access student progress and completion data for their courses
                </li>
                <li>
                  <strong>Service Providers:</strong> We work with trusted
                  third-party service providers who assist us in operating our
                  platform
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose
                  information when required by law or to protect our rights
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger
                  or acquisition, your information may be transferred
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information
                  with your explicit consent
                </li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Data Security
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
              <div className="flex">
                <FaShieldAlt className="w-5 h-5 text-blue-400 mt-0.5 mr-3" />
                <div>
                  <p className="text-blue-800 font-medium">Security Measures</p>
                  <p className="text-blue-700 text-sm mt-1">
                    We implement industry-standard security measures to protect
                    your personal information, including encryption, secure
                    servers, and regular security audits.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              While we strive to protect your information, no method of
              transmission over the internet is 100% secure. We cannot guarantee
              absolute security, but we continuously work to improve our
              security practices.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience on our platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for basic
                  platform functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how
                  users interact with our platform
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings
                  and preferences
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used for targeted
                  advertising (with your consent)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie settings through your browser
                preferences. However, disabling certain cookies may affect
                platform functionality.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to
              provide our services and fulfill the purposes outlined in this
              policy. We may retain certain information for longer periods to
              comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Your Privacy Rights
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have certain rights
                regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Access:</strong> Request access to your personal
                  information
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  information
                </li>
                <li>
                  <strong>Portability:</strong> Request a copy of your data in a
                  portable format
                </li>
                <li>
                  <strong>Objection:</strong> Object to certain processing
                  activities
                </li>
                <li>
                  <strong>Withdrawal:</strong> Withdraw consent for data
                  processing
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              9. Children's Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform is not intended for children under 13 years of age.
              We do not knowingly collect personal information from children
              under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us
              immediately.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure that such transfers comply with
              applicable data protection laws and implement appropriate
              safeguards to protect your information.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              our platform and updating the "Last updated" date. We encourage
              you to review this policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              12. Contact Us
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> privacy@learnforu.com
                </p>
                <p>
                  <strong>Address:</strong> 2750 Quadra Street Golden Victoria
                  Road, New York, USA
                </p>
                <p>
                  <strong>Phone:</strong> +1 (123) 456 7890
                </p>
                <p>
                  <strong>Data Protection Officer:</strong> dpo@learnforu.com
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

export default PrivacyPolicy;
