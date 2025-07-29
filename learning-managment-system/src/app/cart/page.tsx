"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

// Example cart items (replace with real data or state management)
const initialCart = [
  {
    id: 1,
    title: "React for Beginners",
    instructor: "Jane Doe",
    price: 49,
    image: "/globe.svg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Advanced Data Science",
    instructor: "John Smith",
    price: 79,
    image: "/campus360.svg",
    quantity: 1,
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white/90 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4 bg-gradient-to-br from-[#e6f7f3] to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Your Cart
          </h1>
          {cart.length === 0 ? (
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-lg p-12 text-center">
              <p className="text-xl text-gray-700 mb-6">Your cart is empty.</p>
              <Link
                href="/courses"
                className="inline-block bg-[#1ea88f] text-white font-bold px-8 py-3 rounded-xl shadow hover:bg-[#198773] transition-all text-lg"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-lg p-8">
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center py-6 gap-6"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain rounded-xl bg-gray-50 border border-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-gray-900 mb-1">
                        {item.title}
                      </h2>
                      <p className="text-gray-500 text-sm mb-2">
                        by {item.instructor}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-xl flex items-center justify-center hover:bg-[#e6f7f3] transition"
                        >
                          -
                        </button>
                        <span className="text-lg font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 text-gray-700 font-bold text-xl flex items-center justify-center hover:bg-[#e6f7f3] transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xl font-bold text-[#1ea88f]">
                        ${item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm mt-2"
                      >
                        <FaTrashAlt className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
                <span className="text-2xl font-bold text-gray-900">
                  Total: ${total}
                </span>
                <button className="bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:from-[#198773] hover:to-[#1ea88f] transition-all text-lg hover:scale-105">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
