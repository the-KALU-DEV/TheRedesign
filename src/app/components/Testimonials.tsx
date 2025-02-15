"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  {
    name: "James Emmanuella",
    role: "Product Designer, Cohort 2",
    image: "/testimonial-avatar.png",
    feedback:
      "You can see us as your career mentor who will be there for you every step of the way. Our single aim is to help tech-aspirants transition from new-techies to full-time employees of reputable brands across Africa and the world.",
  },
  {
    name: "Ada Johnson",
    role: "Software Engineer, Cohort 5",
    image: "/testimonial-avatar.png",
    feedback:
      "The mentorship I received helped me land a high-paying tech job in just a few months. The program's structure and guidance were invaluable.",
  },
  {
    name: "Michael Chinedu",
    role: "Product Manager, Cohort 3",
    image: "/testimonial-avatar.png",
    feedback:
      "Navigating the tech job market was tough, but with the right support and guidance, I was able to break in and thrive!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-change testimonial every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <h5 className="text-green-600 text-lg font-semibold text-center">
          Testimonials
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Our Success Story
        </h2>

        {/* Testimonial Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
              <Image
                src="/Testimonial.svg"
                alt="Testimonial"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            {/* Profile */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {testimonials[currentIndex].feedback}
            </p>

            {/* Responsive Dots Indicator */}
            <div className="flex mt-6 space-x-2 justify-center lg:justify-start">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={clsx(
                    "h-3 w-3 rounded-full transition-colors duration-300",
                    currentIndex === index ? "bg-green-600" : "bg-gray-300"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
