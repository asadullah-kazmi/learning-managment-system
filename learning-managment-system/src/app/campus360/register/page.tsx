"use client";
import React, { useState } from "react";
import Campus360Header from "../Campus360Header";
import Footer from "../../components/Footer";
import {
  FaCheck,
  FaGraduationCap,
  FaUsers,
  FaMapMarkerAlt,
  FaVideo,
} from "react-icons/fa";

const initialAcademy = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};
const initialAdmins = [
  { name: "", lastName: "", email: "", phone: "" },
  { name: "", lastName: "", email: "", phone: "" },
];
const initialDetails = {
  address: "",
  logo: null,
};
const initialBusiness = {
  type: "",
  description: "",
  message: "",
};

const Campus360Register = () => {
  const [step, setStep] = useState(1);
  const [academy, setAcademy] = useState(initialAcademy);
  const [admins, setAdmins] = useState(initialAdmins);
  const [details, setDetails] = useState(initialDetails);
  const [business, setBusiness] = useState(initialBusiness);
  const [video, setVideo] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const steps = [
    { id: 1, title: "Academy Details", icon: FaGraduationCap },
    { id: 2, title: "Administrators", icon: FaUsers },
    { id: 3, title: "Business Info", icon: FaMapMarkerAlt },
    { id: 4, title: "Verification", icon: FaVideo },
  ];

  // Step 1: Academy Account
  const handleAcademyChange = (e) => {
    const { name, value } = e.target;
    setAcademy((prev) => ({ ...prev, [name]: value }));
  };
  const validateStep1 = () => {
    if (
      !academy.name ||
      !academy.email ||
      !academy.phone ||
      !academy.password ||
      !academy.confirmPassword
    ) {
      setError("All fields are required.");
      return false;
    }
    if (academy.password !== academy.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  };

  // Step 2: Admins
  const handleAdminChange = (idx, e) => {
    const { name, value } = e.target;
    setAdmins((prev) =>
      prev.map((a, i) => (i === idx ? { ...a, [name]: value } : a))
    );
  };
  const addAdmin = () =>
    setAdmins((prev) => [
      ...prev,
      { name: "", lastName: "", email: "", phone: "" },
    ]);
  const removeAdmin = (idx) =>
    setAdmins((prev) =>
      prev.length > 2 ? prev.filter((_, i) => i !== idx) : prev
    );
  const validateStep2 = () => {
    if (admins.length < 2) {
      setError("At least 2 admins are required.");
      return false;
    }
    for (const admin of admins) {
      if (!admin.name || !admin.lastName || !admin.email || !admin.phone) {
        setError("All admin fields are required.");
        return false;
      }
    }
    setError("");
    return true;
  };

  // Step 3: Business Details
  const handleBusinessChange = (e) => {
    const { name, value } = e.target;
    setBusiness((prev) => ({ ...prev, [name]: value }));
  };
  const handleDetailsChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setDetails((prev) => ({ ...prev, logo: files[0] }));
    } else {
      setDetails((prev) => ({ ...prev, [name]: value }));
    }
  };
  const validateStep3 = () => {
    if (!details.address || !business.type) {
      setError("Address and business type are required.");
      return false;
    }
    setError("");
    return true;
  };

  // Step 4: Video Verification
  const handleVideoChange = (e) => setVideo(e.target.files[0]);
  const validateStep4 = () => {
    if (!video) {
      setError("Please upload a verification video.");
      return false;
    }
    setError("");
    return true;
  };

  // Navigation
  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    setStep((s) => s + 1);
  };
  const prevStep = () => setStep((s) => s - 1);

  // Final Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep4()) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Campus360Header />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white p-8 rounded-t-2xl">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
                Register Your Academy
              </h1>
              <p className="text-white/90 text-lg">
                Please provide all required details to register your academy
                with Campus360
              </p>
            </div>
          </div>

          {/* Steps Progress Bar */}
          <div className="px-8 py-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              {steps.map((stepItem, index) => (
                <div key={stepItem.id} className="flex items-center">
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        step > stepItem.id
                          ? "bg-[#1ea88f] border-[#1ea88f] text-white"
                          : step === stepItem.id
                          ? "bg-white border-[#1ea88f] text-[#1ea88f]"
                          : "bg-gray-100 border-gray-200 text-gray-400"
                      }`}
                    >
                      {step > stepItem.id ? (
                        <FaCheck className="w-5 h-5" />
                      ) : (
                        <stepItem.icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="ml-3">
                      <div
                        className={`text-sm font-semibold ${
                          step >= stepItem.id
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {stepItem.title}
                      </div>
                      <div
                        className={`text-xs ${
                          step >= stepItem.id
                            ? "text-[#1ea88f]"
                            : "text-gray-400"
                        }`}
                      >
                        Step {stepItem.id}
                      </div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        step > stepItem.id ? "bg-[#1ea88f]" : "bg-gray-200"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheck className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Registration Successful!
                </h2>
                <p className="text-gray-600">
                  We will contact you soon to verify your academy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Academy Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Academy Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={academy.name}
                          onChange={handleAcademyChange}
                          placeholder="Enter academy name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Contact Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={academy.phone}
                          onChange={handleAcademyChange}
                          placeholder="(000) 000-0000"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={academy.email}
                        onChange={handleAcademyChange}
                        placeholder="ex: academy@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        required
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        example@example.com
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Password *
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={academy.password}
                          onChange={handleAcademyChange}
                          placeholder="Enter password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          Confirm Password *
                        </label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={academy.confirmPassword}
                          onChange={handleAcademyChange}
                          placeholder="Confirm password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Administrators */}
                {step === 2 && (
                  <div className="space-y-6">
                    {/* Email Notification Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="w-5 h-5 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-blue-800">
                            Email Invitations
                          </h3>
                          <div className="mt-2 text-sm text-blue-700">
                            <p>
                              All administrators will receive an email
                              invitation to their Gmail account to complete
                              their registration and set up their passwords.
                              Please ensure all email addresses are correct.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Academy Administrators *
                      </h3>
                      <button
                        type="button"
                        onClick={addAdmin}
                        className="text-[#1ea88f] font-semibold hover:text-[#198773] transition-colors"
                      >
                        + Add Administrator
                      </button>
                    </div>
                    {admins.map((admin, idx) => (
                      <div
                        key={idx}
                        className="border border-gray-200 rounded-lg p-6 bg-gray-50"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-semibold text-gray-900">
                            Administrator {idx + 1}
                          </h4>
                          {admins.length > 2 && (
                            <button
                              type="button"
                              onClick={() => removeAdmin(idx)}
                              className="text-red-500 hover:text-red-700 font-bold text-xl"
                            >
                              ×
                            </button>
                          )}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={admin.name}
                              onChange={(e) => handleAdminChange(idx, e)}
                              placeholder="First Name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              name="lastName"
                              value={admin.lastName || ""}
                              onChange={(e) => handleAdminChange(idx, e)}
                              placeholder="Last Name"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              E-mail *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={admin.email}
                              onChange={(e) => handleAdminChange(idx, e)}
                              placeholder="ex: admin@example.com"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Contact Number *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={admin.phone}
                              onChange={(e) => handleAdminChange(idx, e)}
                              placeholder="(000) 000-0000"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step 3: Business Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Address *
                      </label>
                      <div className="space-y-4">
                        <input
                          type="text"
                          name="address"
                          value={details.address}
                          onChange={handleDetailsChange}
                          placeholder="Street Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          required
                        />
                        <input
                          type="text"
                          name="address2"
                          value={details.address2 || ""}
                          onChange={handleDetailsChange}
                          placeholder="Street Address Line 2"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            name="city"
                            value={details.city || ""}
                            onChange={handleDetailsChange}
                            placeholder="City"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          />
                          <input
                            type="text"
                            name="state"
                            value={details.state || ""}
                            onChange={handleDetailsChange}
                            placeholder="State / Province"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                          />
                        </div>
                        <input
                          type="text"
                          name="postalCode"
                          value={details.postalCode || ""}
                          onChange={handleDetailsChange}
                          placeholder="Postal / Zip Code"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Type of Academy *
                      </label>
                      <select
                        name="type"
                        value={business.type}
                        onChange={handleBusinessChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        required
                      >
                        <option value="">Please Select</option>
                        <option value="primary">Primary School</option>
                        <option value="secondary">Secondary School</option>
                        <option value="college">College</option>
                        <option value="university">University</option>
                        <option value="training">Training Institute</option>
                        <option value="tutoring">Tutoring Center</option>
                        <option value="online">Online Academy</option>
                        <option value="other">Other</option>
                      </select>
                      <p className="text-sm text-gray-500 mt-1">Academy</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Others *
                      </label>
                      <input
                        type="text"
                        name="description"
                        value={business.description}
                        onChange={handleBusinessChange}
                        placeholder="Additional academy details"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={business.message}
                        onChange={handleBusinessChange}
                        placeholder="Tell us about your academy's mission and goals..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Academy Logo
                      </label>
                      <input
                        type="file"
                        name="logo"
                        accept="image/*"
                        onChange={handleDetailsChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Video Verification */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Video Verification *
                      </label>
                      <input
                        type="file"
                        accept="video/*"
                        onChange={handleVideoChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1ea88f] focus:border-[#1ea88f] transition-all"
                        required
                      />
                      <p className="text-sm text-gray-600 mt-2">
                        Upload a short video introducing your academy and
                        explaining your mission. This helps us verify your
                        authenticity.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-600 text-sm font-semibold">
                      {error}
                    </p>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-gray-200">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-3 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all"
                    >
                      Back
                    </button>
                  )}
                  {step < 4 && (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white shadow-lg hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105"
                    >
                      Next
                    </button>
                  )}
                  {step === 4 && (
                    <button
                      type="submit"
                      className="ml-auto px-8 py-3 rounded-lg font-bold bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white shadow-lg hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Campus360Register;
