"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaUniversalAccess,
  FaEye,
  FaHandPaper,
  FaVolumeUp,
  FaKeyboard,
  FaMobile,
} from "react-icons/fa";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUniversalAccess className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessibility Statement
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
          {/* Commitment */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment to Accessibility
            </h2>
            <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-4">
              <p className="text-teal-800 font-medium">
                LearnForU is committed to ensuring digital accessibility for
                people with disabilities. We are continually improving the user
                experience for everyone and applying the relevant accessibility
                standards.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We believe that education should be accessible to everyone,
              regardless of their abilities or disabilities. Our platform is
              designed to provide an inclusive learning experience for all
              users, including those with visual, auditory, motor, and cognitive
              disabilities.
            </p>
          </section>

          {/* Standards Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Accessibility Standards Compliance
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our platform strives to conform to the following accessibility
                standards:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>WCAG 2.1 AA:</strong> Web Content Accessibility
                  Guidelines 2.1 Level AA
                </li>
                <li>
                  <strong>Section 508:</strong> Rehabilitation Act of 1973,
                  Section 508
                </li>
                <li>
                  <strong>ADA Title III:</strong> Americans with Disabilities
                  Act
                </li>
                <li>
                  <strong>EN 301 549:</strong> European accessibility standard
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We are continuously working to improve our compliance with these
                standards and regularly conduct accessibility audits and user
                testing.
              </p>
            </div>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Accessibility Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Visual Accessibility */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaEye className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Visual Accessibility
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• High contrast color schemes</li>
                  <li>• Adjustable font sizes</li>
                  <li>• Screen reader compatibility</li>
                  <li>• Alternative text for images</li>
                  <li>• Clear typography and spacing</li>
                  <li>• Focus indicators for navigation</li>
                </ul>
              </div>

              {/* Auditory Accessibility */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaVolumeUp className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Auditory Accessibility
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Closed captions for videos</li>
                  <li>• Transcripts for audio content</li>
                  <li>• Visual alerts and notifications</li>
                  <li>• Audio descriptions where needed</li>
                  <li>• Volume controls for media</li>
                  <li>• Text-based alternatives</li>
                </ul>
              </div>

              {/* Motor Accessibility */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaHandPaper className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Motor Accessibility
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keyboard navigation support</li>
                  <li>• Large click/touch targets</li>
                  <li>• Voice control compatibility</li>
                  <li>• Customizable time limits</li>
                  <li>• Error prevention features</li>
                  <li>• Assistive technology support</li>
                </ul>
              </div>

              {/* Cognitive Accessibility */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <FaKeyboard className="w-6 h-6 text-teal-600 mr-3" />
                  <h3 className="text-xl font-medium text-gray-900">
                    Cognitive Accessibility
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clear and simple language</li>
                  <li>• Consistent navigation structure</li>
                  <li>• Progress indicators</li>
                  <li>• Error messages and help text</li>
                  <li>• Distraction-free learning modes</li>
                  <li>• Multiple learning formats</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Mobile Accessibility */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Mobile Accessibility
            </h2>
            <div className="flex items-start space-x-4">
              <FaMobile className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed">
                  Our platform is fully responsive and accessible on mobile
                  devices:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>
                    Touch-friendly interface with appropriate target sizes
                  </li>
                  <li>Gesture support for common interactions</li>
                  <li>Optimized for screen readers on mobile devices</li>
                  <li>Voice input and dictation support</li>
                  <li>Adaptive layouts for different screen sizes</li>
                  <li>Mobile-specific accessibility features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Assistive Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Assistive Technology Support
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our platform is compatible with various assistive technologies:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Screen Readers
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• JAWS (Windows)</li>
                    <li>• NVDA (Windows)</li>
                    <li>• VoiceOver (macOS/iOS)</li>
                    <li>• TalkBack (Android)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Other Tools
                  </h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Voice recognition software</li>
                    <li>• Switch navigation devices</li>
                    <li>• Eye tracking systems</li>
                    <li>• Magnification software</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Known Limitations */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Known Limitations
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 font-medium mb-2">
                Areas for Improvement
              </p>
              <p className="text-yellow-700 text-sm">
                While we strive for full accessibility, some areas may have
                limitations. We are actively working to address these issues and
                welcome feedback from users.
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Some third-party content (such as external videos or interactive
                elements) may not be fully accessible. We work with content
                creators to improve accessibility, but cannot guarantee full
                compliance for all external content.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are continuously improving our platform based on user
                feedback and accessibility testing.
              </p>
            </div>
          </section>

          {/* Feedback and Support */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Feedback and Support
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We welcome feedback on the accessibility of our platform. If you
                experience accessibility barriers or have suggestions for
                improvement, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Accessibility Team:</strong>{" "}
                    accessibility@learnforu.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (123) 456 7890 (TTY available)
                  </p>
                  <p>
                    <strong>Address:</strong> 2750 Quadra Street Golden Victoria
                    Road, New York, USA
                  </p>
                  <p>
                    <strong>Response Time:</strong> We aim to respond to
                    accessibility feedback within 2 business days
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your feedback helps us improve our platform and make it more
                accessible for all users.
              </p>
            </div>
          </section>

          {/* Testing and Evaluation */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Testing and Evaluation
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We regularly evaluate our platform for accessibility using:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Automated accessibility testing tools</li>
                <li>Manual testing with assistive technologies</li>
                <li>User testing with people with disabilities</li>
                <li>Expert accessibility audits</li>
                <li>Continuous monitoring and improvement</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Our accessibility testing is conducted by trained professionals
                and includes feedback from users with various disabilities.
              </p>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Updates to This Statement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Accessibility Statement from time to time to
              reflect changes in our practices, technology, or legal
              requirements. We will notify users of significant changes and
              maintain an archive of previous versions.
            </p>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed">
                For more information about web accessibility:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <a
                    href="https://www.w3.org/WAI/"
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Web Accessibility Initiative (WAI)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3.org/TR/WCAG21/"
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    WCAG 2.1 Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.section508.gov/"
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Section 508 Information
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ada.gov/"
                    className="text-teal-600 hover:text-teal-800 underline"
                  >
                    Americans with Disabilities Act
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessibility;
