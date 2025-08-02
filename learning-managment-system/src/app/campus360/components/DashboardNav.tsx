"use client";

import React from "react";
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUniversity,
  FaBook,
  FaCog,
  FaBell,
  FaSearch,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

interface DashboardNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
}

const DashboardNav: React.FC<DashboardNavProps> = ({
  activeTab,
  setActiveTab,
  sidebarCollapsed,
  setSidebarCollapsed,
}) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: FaHome },
    { id: "students", label: "Students", icon: FaUserGraduate },
    { id: "teachers", label: "Teachers", icon: FaChalkboardTeacher },
    { id: "courses", label: "Courses", icon: FaBook },
    { id: "academies", label: "Academies", icon: FaUniversity },
    { id: "settings", label: "Settings", icon: FaCog },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        sidebarCollapsed ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <FaUniversity className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Campus360</h1>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <FaChevronLeft className="text-gray-400" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="text-lg" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <FaUserGraduate className="text-white text-sm" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@campus360.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
