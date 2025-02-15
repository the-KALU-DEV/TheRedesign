import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Software Development",
    description:
      "Harness and sharpen your passion with 'REACT' together with other programming languages.",
    image: "/software-development.png", // ✅ Ensure correct path
    tag: "Software Development",
    tagColor: "#2AB255", // Green
  },
  {
    title: "Product Design",
    description:
      "Master product design and collaborate with teams to create innovative user-friendly products.",
    image: "/product-design.png", // ✅ Ensure correct path
    tag: "Product Design",
    tagColor: "#0A68EC", // Blue
  },
  {
    title: "Product Management",
    description:
      "Learn the art of product strategy development and kickstart a career in Tech.",
    image: "/product-management.png", 
    tag: "Product Management",
    tagColor: " #FCE459;", // Yellow
  },
];

export default function CourseTracks() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h5 className="text-green-600 text-lg font-semibold text-center">See Our Courses</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Check Out Our Course Tracks
        </h2>

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
