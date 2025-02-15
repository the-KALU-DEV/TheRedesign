"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

const testimonials = [
  {
    name: "James Emmanuella",
    role: "Product Designer, Learntivite C2",
    image: "/testimonial-avatar.png",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    name: "Ada Johnson",
    role: "Software Engineer, Cohort 5",
    image: "/testimonial-avatar.png",
    feedback:
      "The mentorship I received helped me land a high-paying tech job in just a few months. The program's structure and guidance were invaluable.",
  },
  {
    name: "Iferika Akpundu",
    role: "Product Manager, Cohort 3",
    image: "/testimonial-avatar.png",
    feedback:
      "Navigating the tech job market was tough, but with the right support and guidance, I was able to break in and thrive!",
  },
  {
    name: "Agege Precious",
    role: "Product Manager, Cohort 3",
    image: "/testimonial-avatar.png",
    feedback:
      "Navigating the tech job market was tough, but with the right support and guidance, I was able to break in and thrive!",
  },
  {
    name: "Ojo Lois",
    role: "Product Manager, Cohort 3",
    image: "/testimonial-avatar.png",
    feedback:
      "Navigating the tech job market was tough, but with the right support and guidance, I was able to break in and thrive!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-28 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
          {/* Left Image Section (1/3 Width on Large Screens) */}
          <div className="hidden lg:flex justify-center relative lg:col-span-1">
            <div className="relative w-[340px] h-[440px] md:w-[420px] md:h-[500px] flex justify-center">
              <Image
                src="/Testimonial.svg"
                alt="Testimonial"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col space-y-10 text-center items-center lg:col-span-2 lg:text-left lg:items-start">
            {/* Title */}
            <div className="space-y-3">
              <h5 className="text-green-600 text-lg font-semibold">
                Testimonials
              </h5>
              <h2 className="text-3xl md:text-5xl font-bold">
                Our Success Story
              </h2>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center lg:flex-row lg:items-center gap-6">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-center lg:text-left">
                <h4 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-base">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {testimonials[currentIndex].feedback}
            </p>

            {/* Pagination Dots */}
            <div className="flex space-x-3 justify-center lg:justify-start">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={clsx(
                    "h-4 w-4 rounded-full transition-colors duration-300",
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
