"use client";

import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaBook,
  FaChartLine,
  FaBell,
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaStar,
  FaPlay,
  FaDownload,
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaFilter,
  FaSort,
  FaChevronRight,
  FaChevronLeft,
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaCog,
  FaSignOutAlt,
  FaVideo,
  FaFileAlt,
  FaTrophy,
  FaCertificate,
  FaComments,
  FaEnvelope,
} from "react-icons/fa";

const AcademyDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [academyData, setAcademyData] = useState({
    name: "Excellence Academy",
    email: "admin@excellenceacademy.com",
    status: "active",
    isVerified: true,
    totalStudents: 156,
    totalTeachers: 12,
    totalCourses: 24,
    totalRevenue: 45678,
    completionRate: 87.5,
  });

  const [recentActivities, setRecentActivities] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Mock data for recent activities
  useEffect(() => {
    setRecentActivities([
      {
        id: 1,
        type: "enrollment",
        user: "Ahmed Khan",
        course: "Advanced Mathematics",
        time: "2 hours ago",
        avatar: "/api/placeholder/40/40",
      },
      {
        id: 2,
        type: "course_completed",
        user: "Sara Ahmed",
        course: "Web Development",
        time: "4 hours ago",
        avatar: "/api/placeholder/40/40",
      },
      {
        id: 3,
        type: "assignment_submitted",
        user: "Muhammad Ali",
        course: "Data Science",
        time: "6 hours ago",
        avatar: "/api/placeholder/40/40",
      },
    ]);
  }, []);

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Academy Info Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{academyData.name}</h1>
            <p className="text-blue-100">{academyData.email}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {academyData.isVerified ? "✓ Verified" : "Pending Verification"}
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {academyData.status}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">Total Revenue</p>
            <p className="text-3xl font-bold">
              ${academyData.totalRevenue.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Students
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {academyData.totalStudents}
              </p>
              <p className="text-green-600 text-sm">+12% from last month</p>
            </div>
            <FaUsers className="text-4xl text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Total Teachers
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {academyData.totalTeachers}
              </p>
              <p className="text-green-600 text-sm">+5% from last month</p>
            </div>
            <FaChalkboardTeacher className="text-4xl text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">Total Courses</p>
              <p className="text-3xl font-bold text-gray-900">
                {academyData.totalCourses}
              </p>
              <p className="text-green-600 text-sm">+8% from last month</p>
            </div>
            <FaBook className="text-4xl text-purple-600" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm font-medium">
                Completion Rate
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {academyData.completionRate}%
              </p>
              <p className="text-green-600 text-sm">+3% from last month</p>
            </div>
            <FaTrophy className="text-4xl text-orange-600" />
          </div>
        </div>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Course Completion Rate
            </h3>
            <FaChartLine className="text-gray-400" />
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                  {academyData.completionRate}%
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-green-600">
                  {academyData.completionRate}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
              <div
                style={{ width: `${academyData.completionRate}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Activities
            </h3>
            <FaBell className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FaUserGraduate className="text-blue-600 text-sm" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user}
                  </p>
                  <p className="text-xs text-gray-500">
                    {activity.course} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <FaBook className="text-blue-600 text-xl mb-2" />
            <span className="text-sm font-medium text-blue-900">
              Add Course
            </span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <FaUserGraduate className="text-green-600 text-xl mb-2" />
            <span className="text-sm font-medium text-green-900">
              Enroll Student
            </span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <FaChalkboardTeacher className="text-purple-600 text-xl mb-2" />
            <span className="text-sm font-medium text-purple-900">
              Add Teacher
            </span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <FaVideo className="text-orange-600 text-xl mb-2" />
            <span className="text-sm font-medium text-orange-900">
              Upload Content
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Students</h2>
          <p className="text-gray-600">
            Manage enrolled students and their progress
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <FaPlus className="text-sm" />
          <span>Enroll Student</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaFilter className="text-gray-400" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <FaSort className="text-gray-400" />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((student) => (
          <div
            key={student}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <FaUserGraduate className="text-white text-4xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Student {student}
                </h3>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Enrolled in {Math.floor(Math.random() * 5) + 1} courses
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaBook className="mr-1" />
                  {Math.floor(Math.random() * 5) + 1} courses
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-1" />
                  {Math.floor(Math.random() * 20) + 10} hours
                </span>
                <span className="flex items-center">
                  <FaStar className="mr-1" />
                  {Math.floor(Math.random() * 2) + 4}.
                  {Math.floor(Math.random() * 9)}
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <FaEye className="inline mr-1" />
                  View
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaEdit className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
          <p className="text-gray-600">
            Manage your academy's courses and content
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <FaPlus className="text-sm" />
          <span>Create Course</span>
        </button>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((course) => (
          <div
            key={course}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
              <FaBook className="text-white text-4xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Course {course}
                </h3>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Published
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                This is a sample course description that shows what the course
                is about.
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaClock className="mr-1" />
                  12 hours
                </span>
                <span className="flex items-center">
                  <FaUsers className="mr-1" />
                  45 students
                </span>
                <span className="flex items-center">
                  <FaStar className="mr-1" />
                  4.5
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <FaPlay className="inline mr-1" />
                  View
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaEdit className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeachers = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Teachers</h2>
          <p className="text-gray-600">Manage teachers and their courses</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <FaPlus className="text-sm" />
          <span>Add Teacher</span>
        </button>
      </div>

      {/* Teachers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((teacher) => (
          <div
            key={teacher}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <FaChalkboardTeacher className="text-white text-4xl" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Teacher {teacher}
                </h3>
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Specialized in Mathematics and Science
              </p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  <FaBook className="mr-1" />
                  {Math.floor(Math.random() * 5) + 1} courses
                </span>
                <span className="flex items-center">
                  <FaUsers className="mr-1" />
                  {Math.floor(Math.random() * 50) + 20} students
                </span>
                <span className="flex items-center">
                  <FaStar className="mr-1" />
                  4.8
                </span>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  <FaEye className="inline mr-1" />
                  View
                </button>
                <button className="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors">
                  <FaEdit className="text-sm" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Academy Settings</h2>
        <p className="text-gray-600">
          Manage your academy profile and preferences
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Academy Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Academy Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={academyData.name}
                  onChange={(e) =>
                    setAcademyData({ ...academyData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={academyData.email}
                  onChange={(e) =>
                    setAcademyData({ ...academyData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={4}
                  placeholder="Describe your academy..."
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Enter your academy address..."
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Notifications
            </h3>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-700">
                  Email notifications for new enrollments
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  defaultChecked
                />
                <span className="ml-2 text-sm text-gray-700">
                  SMS notifications for course updates
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Weekly performance reports
                </span>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarCollapsed ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <FaUniversity className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Campus360</h1>
              <p className="text-xs text-gray-500">Academy Dashboard</p>
            </div>
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <FaChevronLeft className="text-gray-400" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab("overview")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "overview"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaHome className="text-lg" />
            <span>Overview</span>
          </button>
          <button
            onClick={() => setActiveTab("students")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "students"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaUserGraduate className="text-lg" />
            <span>Students</span>
          </button>
          <button
            onClick={() => setActiveTab("courses")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "courses"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaBook className="text-lg" />
            <span>Courses</span>
          </button>
          <button
            onClick={() => setActiveTab("teachers")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "teachers"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaChalkboardTeacher className="text-lg" />
            <span>Teachers</span>
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === "settings"
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <FaCog className="text-lg" />
            <span>Settings</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          sidebarCollapsed ? "ml-0" : "ml-64"
        }`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <FaChevronRight className="text-gray-400" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {activeTab === "overview" && "Academy Overview"}
                  {activeTab === "students" && "My Students"}
                  {activeTab === "courses" && "My Courses"}
                  {activeTab === "teachers" && "My Teachers"}
                  {activeTab === "settings" && "Academy Settings"}
                </h1>
                <p className="text-gray-600">
                  {activeTab === "overview" &&
                    "Welcome to your academy dashboard"}
                  {activeTab === "students" && "Manage your enrolled students"}
                  {activeTab === "courses" && "Manage your academy courses"}
                  {activeTab === "teachers" && "Manage your teaching staff"}
                  {activeTab === "settings" && "Manage your academy profile"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <FaBell className="text-gray-400 text-lg" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <FaUniversity className="text-white text-sm" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "students" && renderStudents()}
          {activeTab === "courses" && renderCourses()}
          {activeTab === "teachers" && renderTeachers()}
          {activeTab === "settings" && renderSettings()}
        </main>
      </div>
    </div>
  );
};

export default AcademyDashboard;
