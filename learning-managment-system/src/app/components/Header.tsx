"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";

const exampleCart = [
  {
    id: 1,
    title: "React for Beginners",
    price: 49,
    quantity: 1,
  },
  {
    id: 2,
    title: "Advanced Data Science",
    price: 79,
    quantity: 2,
  },
];

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const cart = exampleCart; // Replace with real cart state if available
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        e.target instanceof Node &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  return (
    <header className="w-full bg-white backdrop-blur-none border-b border-gray-200 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center group">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg flex items-center justify-center mr-2 shadow-md">
              <span className="text-white text-2xl font-bold">🎓</span>
            </div>
            <span className="text-2xl font-extrabold text-gray-900 group-hover:text-[#1ea88f] transition-colors tracking-tight">
              LearnForU
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <form className="flex-1 mx-8 max-w-lg hidden md:flex">
          <input
            type="text"
            placeholder="Search courses, topics, or instructors..."
            className="w-full px-5 py-2 rounded-l-lg bg-gray-100 border border-gray-200 focus:outline-none text-gray-800 placeholder-gray-400 shadow-sm"
          />
          <button
            type="submit"
            className="bg-[#1ea88f] px-5 rounded-r-lg text-white hover:bg-[#198773] transition-colors shadow-sm hover:cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </form>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-6">
          <Link
            href="/"
            className="px-3 py-2 text-gray-800 font-medium rounded transition relative group hover:text-[#1ea88f]"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1ea88f] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/courses"
            className="px-3 py-2 text-gray-800 font-medium rounded transition relative group hover:text-[#1ea88f]"
          >
            Courses
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1ea88f] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/academies"
            className="px-3 py-2 text-gray-800 font-medium rounded transition relative group hover:text-[#1ea88f]"
          >
            Academies
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1ea88f] transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="/become-instructor"
            className="px-3 py-2 text-gray-800 font-medium rounded transition relative group hover:text-[#1ea88f]"
          >
            Become an Instructor
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#1ea88f] transition-all group-hover:w-full"></span>
          </Link>
          {/* Cart Icon with Popup */}
          <div
            className="relative flex items-center justify-center ml-2"
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}
          >
            <Link href="/cart">
              <span className="rounded-full p-2 transition">
                <HiOutlineShoppingCart className="text-xl text-[#1ea88f]" />
              </span>
              <span className="absolute top-2.5 -right-1 bg-[#1ea88f] text-white text-xs rounded-full px-1 font-bold border border-white">
                {cart.length}
              </span>
            </Link>
            {/* Cart Popup */}
            {cartOpen && (
              <div className="absolute right-0 top-15 w-80 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-xl shadow-2xl p-4 z-50 animate-fade-in-up">
                <h4 className="font-bold text-lg mb-3 text-gray-900">Cart</h4>
                {cart.length === 0 ? (
                  <div className="text-gray-500 text-center py-8">
                    Your cart is empty.
                    <br />
                    <Link
                      href="/courses"
                      className="text-[#1ea88f] underline hover:text-[#198773]"
                    >
                      Browse Courses
                    </Link>
                  </div>
                ) : (
                  <>
                    <ul className="divide-y divide-gray-200 mb-3">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="py-2 flex items-center justify-between"
                        >
                          <span className="font-medium text-gray-800 truncate max-w-[120px]">
                            {item.title}
                          </span>
                          <span className="text-gray-600 text-sm">
                            x{item.quantity}
                          </span>
                          <span className="text-[#1ea88f] font-bold">
                            ${item.price * item.quantity}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-800">
                        Total:
                      </span>
                      <span className="text-[#1ea88f] font-bold text-lg">
                        ${total}
                      </span>
                    </div>
                    <Link
                      href="/cart"
                      className="block w-full text-center bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white font-semibold py-2 rounded-lg shadow hover:from-[#198773] hover:to-[#1ea88f] transition-all"
                    >
                      Go to Cart
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
          {/* Login/Register Button */}
          <Link
            href="/login"
            className="ml-4 flex items-center px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white shadow-md hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105 hover:cursor-pointer"
          >
            <FaRegUser className="w-5 h-5 mr-2 text-xl" />
            Login/Register
          </Link>
        </nav>

        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-800 focus:outline-none hover:cursor-pointer rounded-lg p-2 hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm flex md:hidden">
          <div
            ref={mobileMenuRef}
            className="w-64 bg-white z-50 h-full shadow-2xl p-6 flex flex-col gap-6 animate-slide-in-left border-r border-gray-200"
          >
            <button
              className="self-end text-gray-700 hover:text-[#1ea88f] text-2xl mb-4"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <Link
              href="/"
              className="text-lg font-semibold text-gray-900 hover:text-[#1ea88f] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="text-lg font-semibold text-gray-900 hover:text-[#1ea88f] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/academies"
              className="text-lg font-semibold text-gray-900 hover:text-[#1ea88f] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academies
            </Link>
            <Link
              href="/become-instructor"
              className="text-lg font-semibold text-gray-900 hover:text-[#1ea88f] py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become an Instructor
            </Link>
            <Link
              href="/cart"
              className="text-lg font-semibold text-gray-900 hover:text-[#1ea88f] py-2 flex items-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiOutlineShoppingCart className="text-xl text-[#1ea88f]" /> Cart
              <span className="ml-2 bg-[#1ea88f] text-white text-xs rounded-full px-2 font-bold">
                {cart.length}
              </span>
            </Link>
            <Link
              href="/login"
              className="mt-4 flex items-center px-5 py-2 rounded-lg font-semibold bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white shadow-md hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105 hover:cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaRegUser className="w-5 h-5 mr-2 text-xl" /> Login/Register
            </Link>
          </div>
          {/* Click outside closes menu */}
          <div className="flex-1" />
        </div>
      )}
    </header>
  );
};

export default Header;
