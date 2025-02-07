import Image from "next/image";

interface CourseCardProps {
  title: string;
  description: string;
  image: string; // URL of the image
  tag?: string;
  tagColor: string;
}

export default function CourseCard({
  title,
  description,
  image,
  tag,
  tagColor,
}: CourseCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />
        {/* <span
          className="absolute top-3 left-3 px-3 py-1 text-sm font-medium text-white rounded-full"
          style={{ backgroundColor: tagColor }}
        >
          {tag}
        </span> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>

        {/* Buttons - Stacks on xl (≤1234px), inline above */}
        <div className="mt-4 flex flex-col xl:flex-row gap-3">
          <button className="bg-gray-200 text-gray-600 px-5 py-2 rounded-full w-full xl:w-auto text-center">
            Learn More
          </button>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full w-full xl:w-auto text-center hover:bg-green-600 transition">
            Apply Now!
          </button>
        </div>
      </div>
    </div>
  );
}
