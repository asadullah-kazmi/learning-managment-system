"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Users,
  BookOpen,
  Award,
  Globe,
  TrendingUp,
  Heart,
  CheckCircle,
  Star,
} from "lucide-react";

interface StatCardProps {
  number: string;
  label: string;
  color: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface InstructorProps {
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({ number, label, color }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className={`text-4xl font-bold ${color} mb-2`}>{number}</div>
    <div className="text-gray-600 text-sm uppercase tracking-wider">
      {label}
    </div>
  </div>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4 text-teal-500">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const InstructorCard: React.FC<InstructorProps> = ({
  name,
  role,
  image,
  description,
  socialLinks,
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="aspect-w-1 aspect-h-1">
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-teal-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex space-x-3">
        {socialLinks.facebook && (
          <a
            href={socialLinks.facebook}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            className="text-gray-400 hover:text-pink-600 transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
            </svg>
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            className="text-gray-400 hover:text-blue-700 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  const stats = [
    { number: "50K+", label: "Active Learners", color: "text-teal-500" },
    { number: "1,200+", label: "Expert Instructors", color: "text-blue-500" },
    { number: "5,000+", label: "Online Courses", color: "text-purple-500" },
    { number: "180+", label: "Countries Reached", color: "text-orange-500" },
  ];

  const features = [
    {
      icon: <TrendingUp size={48} />,
      title: "Learn the Latest Top Skills",
      description:
        "Learning top skills can bring an extraordinary outcome in a career.",
    },
    {
      icon: <BookOpen size={48} />,
      title: "Learn in Your Own Pace",
      description:
        "Everyone prefers to enjoy learning at their own pace & that gives a great result.",
    },
    {
      icon: <Award size={48} />,
      title: "Learn From Industry Experts",
      description:
        "Experienced teachers can assist in learning faster with their best approaches!",
    },
  ];

  const instructors = [
    {
      name: "William James",
      role: "Project Management Expert",
      image: "/api/placeholder/400/400",
      description:
        "With over 10 years of experience in project management, William specializes in agile methodologies and team leadership.",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Taylor",
      role: "Agile Project Expert",
      image: "/api/placeholder/400/400",
      description:
        "Sarah brings expertise in agile project management with a focus on digital transformation and process optimization.",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "James Robert",
      role: "Senior Developer",
      image: "/api/placeholder/400/400",
      description:
        "A seasoned developer with expertise in full-stack development, cloud architecture, and modern web technologies.",
      socialLinks: {
        facebook: "#",
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ];

  const partners = [
    "Aesop",
    "Glossier",
    "Kinfolk",
    "Everlane",
    "Pegasus",
    "Comedy",
  ];

  return (
    <div className="bg-white w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-teal-500 text-4xl mb-4">+</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <nav className="text-gray-500">
              <Link href="/" className="hover:text-teal-500">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/api/placeholder/600/400"
                alt="Team celebrating success"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="text-teal-500 font-semibold mb-2">
                DISTANCE LEARNING
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                89% of people learning for professional development report
                career benefits like getting a promotion, starting a new career
              </h2>
              <p className="text-gray-600 mb-6">
                LearnForU empowers educational institutions and individual
                educators through our comprehensive white-label SaaS platform.
                We provide the tools and infrastructure needed to create,
                manage, and scale online learning experiences.
              </p>
              <p className="text-gray-600 mb-8">
                Our platform supports multiple business models - from
                white-label solutions for established institutions to
                marketplace opportunities for individual instructors, ensuring
                everyone can participate in the digital education revolution.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Expert Trainers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Lifetime Access
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Remote Learning
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-teal-500" size={20} />
                  <span className="text-gray-700 font-medium">
                    Self Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-teal-500 font-semibold mb-2">
              DISTANCE LEARNING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Study at Your Own Pace, According to Your Own Needs
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With LearnForU, you can study whenever and wherever you choose. We
              have students in over 175 countries and a global reputation as a
              pioneer in the field.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-teal-500 font-semibold mb-2">
              EDUCATION FOR EVERYONE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Affordable Online Courses and Learning Opportunities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Finding your own space and utilize better learning options can
              result in faster than the traditional ways. Enjoy the beauty of
              eLearning!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Course Advisors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet our experienced course advisors who are dedicated to helping
              you achieve your learning goals and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <InstructorCard key={index} {...instructor} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="text-2xl font-light text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-teal-500 font-semibold mb-2">
              GO AT YOUR OWN PACE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay updated with the latest courses, features, and educational
              insights from LearnForU.
            </p>

            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="bg-teal-500 text-white px-6 py-3 rounded-r-lg hover:bg-teal-600 transition-colors flex items-center space-x-2 hover:cursor-pointer">
                <Users size={20} />
                <span>Subscribe Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
