import Image from "next/image";

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  description: string;
  reverse?: boolean; // Controls the layout order
}

export default function ImageWithText({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  description,
  reverse = false,
}: ImageWithTextProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 min-h-[450px]">
      {/* Image (1/3) */}
      <div
        className={`relative flex justify-center lg:col-span-1 ${
          reverse ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-full h-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={400}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 400px"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Text Content (2/3) */}
      <div
        className={`lg:col-span-2 flex flex-col h-full ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="flex flex-col flex-1 justify-start gap-4">
          <h3 className="text-green-600 font-semibold text-lg">{subtitle}</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gra6900">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
