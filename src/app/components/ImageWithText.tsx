"use client";

import Image from "next/image";

interface ImageWithTextProps {
  imageSrc: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  description?: string;
  reverse?: boolean;
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
    <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8 mb-16 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-12 min-h-[450px] items-center">
        {/* Image (1/3) */}
        <div
          className={`relative flex justify-center lg:col-span-1 min-h-[300px] lg:min-h-[450px] ${
            reverse ? "lg:order-2 order-last" : "lg:order-1"
          }`}
        >
          <div className="w-full max-w-xs sm:max-w-sm lg:max-w-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              priority
              sizes="(max-width: 9000px) 90vw, 200px, (max-width: 1040px) 20vw, 300px, (max-width: 2040px) 400px"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Text Content (2/3) */}
        <div
          className={`lg:col-span-2 flex flex-col h-full ${
            reverse ? "lg:order-1 order-first" : "lg:order-2"
          }`}
        >
          <div className="flex flex-col flex-1 justify-start space-y-2 sm:space-y-4 lg:space-y-6">
            {subtitle && (
              <h3 className="text-green-600 font-semibold text-lg">{subtitle}</h3>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-700 leading-relaxed mt-4 sm:mt-6 lg:mt-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
