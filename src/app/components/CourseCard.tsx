import Image from "next/image";
import StyledButton from "./StyledButton";

interface CourseCardProps {
  title?: string | "";
  description: string;
  image: string;
  tag: string;
  tagColor: string;
}

export default function CourseCard({
  title,
  description,
  image,
  tag,
  tagColor,
}: CourseCardProps) {
  // Conditionally set text color based on tag color
  const textColor =
    tag === "Software Development" || tag === "Product Design"
      ? "text-white"
      : "text-gray-900";

  return (
    <div className="bg-[#F8F8F8EE] shadow-md rounded-2xl overflow-hidden p-4 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden">
        <Image 
          src={image} 
          alt="{title}" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-lg"
        />

        {/* Tag */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full ${textColor}`}
          style={{ backgroundColor: tagColor }}
        >
          {tag}
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">{description}</p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col mt-8 lg:flex-row lg:justify-between gap-3">
          <StyledButton muted>
            Learn More
          </StyledButton>
          <StyledButton>
            Apply Now!
          </StyledButton>
        </div>
      </div>
    </div>
  );
}
