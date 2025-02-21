import CourseCard from "./CourseCard";
import TitleSubtitle from "./TitleSubtitle";
import React from "react";


const courses = [
  {
    //title: "Software Development",
    description:
      "Harness and sharpen your passion with 'REACT' together with other programming languages.",
    image: "/software-development.svg", 
    tag: "Software Development",
    tagColor: "#2AB255", // Green
  },
  {
    //title: "Product Design",
    description:
      "Master product design and collaborate with teams to create innovative user-friendly products.",
    image: "/pd.svg", 
    tag: "Product Design",
    tagColor: "#0A68EC", // Blue
  },
  {
    //title: "Product Management",
    description:
      "Learn the art of product strategy development and kickstart a career in Tech.",
    image: "/pm.svg", 
    tag: "Product Management",
    tagColor: " #FCE459", // Yellow
  },
];

export default function CourseTracks() {
  return (
    <section className="w-full py-20 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <TitleSubtitle title="See Our Courses" subtitle="Check Out Our Course Tracks" centered/>      

        {/* Course Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
