"use client";
import React from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { useState } from "react";

const academies = [
  {
    id: "bright-future",
    name: "Bright Future Academy",
    logo: "/campus360.svg",
    description:
      "A leading institution offering STEM and business courses with a focus on innovation and student success.",
    location: "123 Main St, Cityville, Country",
    students: 1200,
    courses: [
      {
        title: "Full Stack Web Development",
        image: "https://source.unsplash.com/400x250/?web,development",
        teachers: ["Alice Smith", "Bob Lee"],
      },
      {
        title: "Business Analytics",
        image: "https://source.unsplash.com/400x250/?business,analytics",
        teachers: ["Carol White"],
      },
    ],
  },
  {
    id: "global-learning",
    name: "Global Learning Hub",
    logo: "/globe.svg",
    description:
      "Empowering students worldwide with online classes, assessments, and personalized learning paths.",
    location: "456 Global Ave, Metropolis, Country",
    students: 950,
    courses: [
      {
        title: "Data Science Essentials",
        image: "https://source.unsplash.com/400x250/?data,science",
        teachers: ["David Kim", "Emma Brown"],
      },
      {
        title: "Digital Marketing Mastery",
        image: "https://source.unsplash.com/400x250/?digital,marketing",
        teachers: ["Sophia Turner"],
      },
    ],
  },
  {
    id: "nextgen-institute",
    name: "NextGen Institute",
    logo: "/next.svg",
    description:
      "Modern academy providing technology and creative courses for the next generation of leaders.",
    location: "789 Next St, Innoville, Country",
    students: 700,
    courses: [
      {
        title: "Creative Design Fundamentals",
        image: "https://source.unsplash.com/400x250/?design,creative",
        teachers: ["Lucas Green"],
      },
      {
        title: "App Development Bootcamp",
        image: "https://source.unsplash.com/400x250/?app,development",
        teachers: ["Mia Clark", "Noah Lee"],
      },
    ],
  },
  {
    id: "innovation-college",
    name: "Innovation College",
    logo: "/vercel.svg",
    description:
      "Fostering creativity and critical thinking with a wide range of innovative programs.",
    location: "321 Innovation Blvd, Creativia, Country",
    students: 850,
    courses: [
      {
        title: "Entrepreneurship 101",
        image: "https://source.unsplash.com/400x250/?entrepreneur,innovation",
        teachers: ["Olivia Adams"],
      },
      {
        title: "Critical Thinking Skills",
        image: "https://source.unsplash.com/400x250/?critical,thinking",
        teachers: ["William Scott", "Ella Martinez"],
      },
    ],
  },
  {
    id: "future-minds",
    name: "Future Minds Academy",
    logo: "/window.svg",
    description:
      "Preparing students for tomorrow with advanced technology and leadership courses.",
    location: "654 Future Rd, Tomorrowland, Country",
    students: 1100,
    courses: [
      {
        title: "Leadership for the Future",
        image: "https://source.unsplash.com/400x250/?leadership,future",
        teachers: ["James Wilson"],
      },
      {
        title: "AI and Robotics",
        image: "https://source.unsplash.com/400x250/?ai,robotics",
        teachers: ["Grace Hall", "Benjamin Young"],
      },
    ],
  },
  {
    id: "universal-academy",
    name: "Universal Academy",
    logo: "/file.svg",
    description:
      "A global institution with a diverse curriculum and world-class faculty.",
    location: "987 Universal Ln, Cosmopolis, Country",
    students: 1300,
    courses: [
      {
        title: "World History & Culture",
        image: "https://source.unsplash.com/400x250/?history,culture",
        teachers: ["Henry King"],
      },
      {
        title: "Global Economics",
        image: "https://source.unsplash.com/400x250/?economics,global",
        teachers: ["Victoria Wright", "Samuel Harris"],
      },
    ],
  },
];

const AcademiesDetailPage = () => {
  const { academyId } = useParams();
  const academy = academies.find((a) => a.id === academyId);
  const [showContact, setShowContact] = useState(false);

  if (!academy) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-2xl text-gray-600">
            Academy not found.
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Gather all unique teachers
  const allTeachers = Array.from(
    new Set(academy.courses.flatMap((c) => c.teachers))
  );

  // Dummy contact info for demonstration
  const contactInfo = {
    email: `${academyId}@academy.com`,
    phone: "+1 (123) 456-7890",
    location: academy.location,
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Academy Summary Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-8 mb-12 border border-gray-100">
            <img
              src={academy.logo}
              alt={academy.name}
              className="w-32 h-32 rounded-2xl object-contain bg-gray-100 border border-gray-200 mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                {academy.name}
              </h1>
              <div className="text-gray-600 mb-4 text-lg">
                {academy.description}
              </div>
              <div className="flex flex-wrap gap-6 text-gray-500 text-sm mb-2 items-center">
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-[#1ea88f]" />
                  {academy.location}
                </span>
                <span className="flex items-center gap-2">
                  <FaUsers className="text-[#1ea88f]" />
                  {academy.students} Students
                </span>
                <span className="flex items-center gap-2">
                  <FaBook className="text-[#1ea88f]" />
                  {academy.courses.length} Courses
                </span>
                <span className="flex items-center gap-2">
                  <FaChalkboardTeacher className="text-[#1ea88f]" />
                  {allTeachers.length} Teachers
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href={`/academies/${academy.id}/register`}>
                  <button className="px-8 py-3 bg-gradient-to-r from-[#1ea88f] to-[#198773] text-white rounded-lg font-bold shadow hover:from-[#198773] hover:to-[#1ea88f] transition-all hover:scale-105 hover:cursor-pointer text-lg">
                    Register
                  </button>
                </a>
                <button
                  className="px-8 py-3 bg-gradient-to-r from-[#198773] to-[#1ea88f] text-white rounded-lg font-bold shadow hover:from-[#1ea88f] hover:to-[#198773] transition-all hover:scale-105 hover:cursor-pointer text-lg"
                  onClick={() => setShowContact(true)}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          {/* Contact Modal */}
          {showContact && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              onClick={() => setShowContact(false)}
            >
              <div
                className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-[#1ea88f] text-2xl"
                  onClick={() => setShowContact(false)}
                >
                  &times;
                </button>
                <h3 className="text-2xl font-bold text-[#1ea88f] mb-4">
                  Contact {academy.name}
                </h3>
                <div className="mb-3 flex items-center gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-[#1ea88f]" />{" "}
                  {contactInfo.location}
                </div>
                <div className="mb-3 flex items-center gap-2 text-gray-700">
                  <FaUsers className="text-[#1ea88f]" /> Students:{" "}
                  {academy.students}
                </div>
                <div className="mb-3 flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-[#1ea88f] underline"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="mb-3 flex items-center gap-2 text-gray-700">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-[#1ea88f] underline"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Courses Offered */}
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-6">
            Courses Offered
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {academy.courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col border border-gray-100"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <div className="font-bold text-lg text-gray-900 mb-2">
                  {course.title}
                </div>
                <div className="flex items-center mt-2">
                  {course.teachers.map((teacher, tIdx) => (
                    <div key={tIdx} className="flex items-center mr-2">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${
                          20 + tIdx
                        }.jpg`}
                        alt={teacher}
                        className="w-8 h-8 rounded-full border-2 border-white shadow -ml-2 first:ml-0"
                      />
                      <span className="ml-2 text-gray-700 text-sm">
                        {teacher}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Teachers Section */}
          <h2 className="text-2xl font-bold text-[#1ea88f] mb-6">
            Our Teachers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {allTeachers.map((teacher, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-100"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${
                    30 + idx
                  }.jpg`}
                  alt={teacher}
                  className="w-16 h-16 rounded-full border-2 border-white shadow mb-2"
                />
                <div className="font-semibold text-gray-900">{teacher}</div>
                <div className="text-gray-500 text-sm">Instructor</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AcademiesDetailPage;
