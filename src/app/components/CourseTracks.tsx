import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Software Development",
    description:
      "Harness and sharpen your passion with 'REACT' together with other programming languages.",
    image: "/images/software-development.png", // ✅ Ensure correct path
    tag: "Software Development",
    tagColor: "#16A34A", // Green
  },
  {
    title: "Product Design",
    description:
      "Master product design and collaborate with teams to create innovative user-friendly products.",
    image: "/images/product-design.png", // ✅ Ensure correct path
    tag: "Product Design",
    tagColor: "#2563EB", // Blue
  },
  {
    title: "Product Management",
    description:
      "Learn the art of product strategy development and kickstart a career in Tech.",
    image: "/images/product-management.png", // ✅ Ensure correct path
    tag: "Product Management",
    tagColor: "#EAB308", // Yellow
  },
];

export default function CourseTracks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <p className="text-green-600 font-medium">See Our Courses</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Check Out Our Course Tracks
          </h2>
        </div>

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
