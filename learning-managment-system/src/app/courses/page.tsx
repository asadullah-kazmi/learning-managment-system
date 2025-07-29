"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Types
interface Course {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
  pricing: {
    original: number;
    discounted: number;
  };
  stats: {
    lessons: number;
    students: number;
  };
  image: string;
  category: string;
}

// Sample course data
const coursesData: Course[] = [
  {
    id: 1,
    title: "How To Become a Management Consultant...",
    description:
      "Imagine a step by step guide covering how to get hired in a rewarding (and highly paid) career.",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 30,
      discounted: 15,
    },
    stats: {
      lessons: 50,
      students: 16,
    },
    image: "https://source.unsplash.com/400x250/?business,consulting",
    category: "Business",
  },
  {
    id: 2,
    title: "Marketing success for your consultancy -...",
    description:
      "This course is based on real-world experience. It takes you through key tools and techniques that will help",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 20,
      discounted: 15,
    },
    stats: {
      lessons: 25,
      students: 11,
    },
    image: "https://source.unsplash.com/400x250/?marketing,success",
    category: "Marketing",
  },
  {
    id: 3,
    title: "The Best Dream Quotes To Inspire You...",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 60,
      discounted: 50,
    },
    stats: {
      lessons: 10,
      students: 8,
    },
    image: "https://source.unsplash.com/400x250/?motivation,dream,success",
    category: "Motivation",
  },
  {
    id: 4,
    title: "Backend CSS Job Consultancy Web...",
    description:
      "Become a few and super organized frontend developer who can work extremely fast based on 14 complete",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 35,
      discounted: 25,
    },
    stats: {
      lessons: 42,
      students: 19,
    },
    image: "https://source.unsplash.com/400x250/?technology,web,css",
    category: "Technology",
  },
  {
    id: 5,
    title: "Automate the Boring Stuff with Python Pr...",
    description:
      "If you've ever spent hours renaming files or updating hundreds of spreadsheet cells, you know how tedious",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 45,
      discounted: 35,
    },
    stats: {
      lessons: 38,
      students: 24,
    },
    image: "https://source.unsplash.com/400x250/?python,programming,automation",
    category: "Programming",
  },
  {
    id: 6,
    title: "Become a highly paid Consultant, Advisor...",
    description:
      "If you want to become a highly skilled and versatile management consultant, this is the first course you have to digest to...",
    instructor: {
      name: "Smith Evans",
      avatar: "/api/placeholder/40/40",
    },
    pricing: {
      original: 55,
      discounted: 40,
    },
    stats: {
      lessons: 32,
      students: 15,
    },
    image: "https://source.unsplash.com/400x250/?business,advisor,consultant",
    category: "Business",
  },
];

// Course Card Component
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    setImgUrl(course.image);
  }, [course.image]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Course Image */}
      <div className="relative">
        {imgUrl && (
          <img
            src={imgUrl}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
        )}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-md hover:bg-gray-50"
        >
          <svg
            className={`w-5 h-5 ${
              isWishlisted ? "text-red-500 fill-current" : "text-gray-400"
            }`}
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Pricing badges */}
        <div className="absolute bottom-3 left-3 flex space-x-2">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${course.pricing.original}
          </span>
          <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            ${course.pricing.discounted}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        {/* Instructor */}
        <div className="flex items-center mt-2">
          <img
            src={`https://randomuser.me/api/portraits/men/10.jpg`}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full border-2 border-white shadow"
          />
          <span className="ml-2 text-gray-700 text-sm">
            {course.instructor.name}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {course.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>{course.stats.lessons} Lessons</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              <span>{course.stats.students} Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Courses Page Component
const Courses: React.FC = () => {
  const [sortBy, setSortBy] = useState("");
  const [courses] = useState<Course[]>(coursesData);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-white w-full">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Courses</h1>
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Courses</span>
          </nav>
        </div>

        {/* Sort and Filter */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Sort By</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2">
          <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-2 rounded hover:cursor-pointer ${
                currentPage === page
                  ? "bg-teal-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button className="px-3 py-2 text-gray-500 hover:text-gray-700 hover:cursor-pointer">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
