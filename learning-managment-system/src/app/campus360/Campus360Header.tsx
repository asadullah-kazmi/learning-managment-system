"use client";
import React from "react";
import Link from "next/link";

const Campus360Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/campus360.svg"
            alt="Campus360 Logo"
            className="w-10 h-10 rounded bg-white"
          />
          <span className="text-2xl font-extrabold text-[#1ea88f] tracking-tight">
            Campus360
          </span>
          <span className="ml-2 text-sm text-gray-400 font-semibold hidden md:inline">
            by LearnForU
          </span>
        </div>
        {/* Register Button */}
        <Link href="/campus360/register">
          <button className="px-7 py-2.5 rounded-lg font-bold bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white shadow-md hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105 hover:cursor-pointer text-base">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Campus360Header;
