"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  FaUsers,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

// CountUp hook
function useCountUp(target: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = target;
    const increment = end / (duration / 16);
    let frame: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [target, duration, inView]);
  return count;
}

const StatsSection = () => {
  const stats = [
    {
      icon: FaUsers,
      number: 12000,
      suffix: "K+",
      label: "Active Students",
      description: "Learning worldwide",
    },
    {
      icon: FaGraduationCap,
      number: 500,
      suffix: "+",
      label: "Expert Instructors",
      description: "Industry professionals",
    },
    {
      icon: FaChalkboardTeacher,
      number: 120,
      suffix: "+",
      label: "Online Courses",
      description: "Quality content",
    },
    {
      icon: FaBook,
      number: 95,
      suffix: "%",
      label: "Success Rate",
      description: "Student satisfaction",
    },
  ];

  // Intersection Observer to trigger animation when in view
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fix: Call hooks in a fixed order
  const count1 = useCountUp(stats[0].number, 1200, inView);
  const count2 = useCountUp(stats[1].number, 1200, inView);
  const count3 = useCountUp(stats[2].number, 1200, inView);
  const count4 = useCountUp(stats[3].number, 1200, inView);
  const counts = [count1, count2, count3, count4];

  return (
    <section className="py-20 bg-gradient-to-r from-teal-800 to-teal-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const display = inView ? counts[index] : 0;
            return (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">
                  {display}
                  {stat.suffix}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-teal-100 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
 