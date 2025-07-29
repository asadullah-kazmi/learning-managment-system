"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const academies = [
  {
    id: "bright-future",
    name: "Bright Future Academy",
    logo: "/campus360.svg",
    description:
      "A leading institution offering STEM and business courses with a focus on innovation and student success.",
  },
  {
    id: "global-learning",
    name: "Global Learning Hub",
    logo: "/globe.svg",
    description:
      "Empowering students worldwide with online classes, assessments, and personalized learning paths.",
  },
  {
    id: "nextgen-institute",
    name: "NextGen Institute",
    logo: "/next.svg",
    description:
      "Modern academy providing technology and creative courses for the next generation of leaders.",
  },
  {
    id: "innovation-college",
    name: "Innovation College",
    logo: "/vercel.svg",
    description:
      "Fostering creativity and critical thinking with a wide range of innovative programs.",
  },
  {
    id: "future-minds",
    name: "Future Minds Academy",
    logo: "/window.svg",
    description:
      "Preparing students for tomorrow with advanced technology and leadership courses.",
  },
  {
    id: "universal-academy",
    name: "Universal Academy",
    logo: "/file.svg",
    description:
      "A global institution with a diverse curriculum and world-class faculty.",
  },
];

const AcademiesPage = () => {
  // Pagination logic
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(academies.length / itemsPerPage);
  const paginatedAcademies = academies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Registered Academies
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {paginatedAcademies.map((academy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition hover:cursor-pointer"
              >
                <img
                  src={academy.logo}
                  alt={academy.name}
                  className="w-20 h-20 mb-4 rounded-full object-contain bg-gray-100 border border-gray-200"
                />
                <div className="font-bold text-lg text-gray-900 mb-2">
                  {academy.name}
                </div>
                <div className="text-gray-600 text-sm mb-2">
                  {academy.description}
                </div>
                <div className="flex gap-3 mt-4 w-full justify-center">
                  <Link href={`/academies/${academy.id}`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white rounded-lg font-semibold shadow hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105 hover:cursor-pointer">
                      View Details
                    </button>
                  </Link>
                  <Link href={`/academies/${academy.id}/register`}>
                    <button className="px-6 py-2 bg-gradient-to-r from-[#198773] to-[#1ea88f] text-white rounded-lg font-semibold shadow hover:from-[#1ea88f] hover:to-[#198773] transition-all hover:scale-105 hover:cursor-pointer">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded-lg font-semibold border transition-all duration-200 ${
                  currentPage === i + 1
                    ? "bg-[#1ea88f] text-white border-[#1ea88f]"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100 hover:cursor-pointer"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademiesPage;
