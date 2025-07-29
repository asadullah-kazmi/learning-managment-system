"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaCookieBite, FaEye, FaCog, FaShieldAlt } from "react-icons/fa";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCookieBite className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
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
              1. What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit our website. They
              help us provide you with a better experience by remembering your
              preferences and analyzing how you use our platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Cookie Policy explains how LearnForU uses cookies and similar
              technologies on our learning platform and how you can control
              them.
            </p>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              2. Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Essential Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like page navigation,
                  access to secure areas, and form submissions.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Authentication and security cookies</li>
                  <li>Session management cookies</li>
                  <li>Load balancing cookies</li>
                  <li>
                    Cannot be disabled as they are essential for platform
                    functionality
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Analytics Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies help us understand how visitors interact with
                  our platform by collecting and reporting information
                  anonymously.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Google Analytics cookies</li>
                  <li>Page view and session tracking</li>
                  <li>User behavior analysis</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Preference Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies remember your choices and preferences to provide
                  you with a personalized experience.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Language preferences</li>
                  <li>Theme and display settings</li>
                  <li>Course recommendations</li>
                  <li>Learning progress tracking</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Marketing Cookies
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  These cookies are used to track visitors across websites to
                  display relevant advertisements.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>Social media integration cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Require your explicit consent</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Specific Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              3. Specific Cookies We Use
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                      Cookie Name
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                      Purpose
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                      Duration
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900 border-b">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      session_id
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Maintains your login session
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Essential
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">_ga</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Google Analytics tracking
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Analytics
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">_gid</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Google Analytics session tracking
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      24 hours
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Analytics
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      language_pref
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Stores your language preference
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Preference
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      theme_mode
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Stores your theme preference
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Preference
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      fb_pixel
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Facebook advertising tracking
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      3 months
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Marketing
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              4. Third-Party Cookies
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We use third-party services that may set cookies on your device:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Google Analytics:</strong> For website analytics and
                  performance monitoring
                </li>
                <li>
                  <strong>Facebook Pixel:</strong> For advertising and
                  conversion tracking
                </li>
                <li>
                  <strong>Stripe:</strong> For payment processing and security
                </li>
                <li>
                  <strong>YouTube:</strong> For embedded video content
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> For social sharing
                  and login features
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These third-party services have their own privacy policies and
                cookie practices. We encourage you to review their policies.
              </p>
            </div>
          </section>

          {/* Cookie Management */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              5. Managing Your Cookie Preferences
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <div className="flex">
                  <FaCog className="w-5 h-5 text-blue-400 mt-0.5 mr-3" />
                  <div>
                    <p className="text-blue-800 font-medium">Cookie Settings</p>
                    <p className="text-blue-700 text-sm mt-1">
                      You can manage your cookie preferences through our cookie
                      consent banner or your browser settings.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Browser Settings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Most web browsers allow you to control cookies through their
                  settings. You can:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Set preferences for different types of cookies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Platform Cookie Settings
                </h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You can also manage cookies directly on our platform:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Access cookie settings through your account preferences
                  </li>
                  <li>Opt out of non-essential cookies</li>
                  <li>Update your marketing preferences</li>
                  <li>Request data deletion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Impact of Disabling Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              6. Impact of Disabling Cookies
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                While you can disable cookies, doing so may affect your
                experience on our platform:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You may need to log in repeatedly</li>
                <li>Some features may not work properly</li>
                <li>Your preferences may not be saved</li>
                <li>Course progress may not be tracked accurately</li>
                <li>Personalized recommendations may not be available</li>
              </ul>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              7. Updates to This Cookie Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or for legal reasons. We will notify you
              of any material changes by posting the updated policy on our
              platform and updating the "Last updated" date.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              8. Contact Us
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about our use of cookies or this Cookie
                Policy, please contact us:
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

export default CookiePolicy;
