"use client";

import Image from "next/image";

interface CardFlipProps {
  frontImage: string;
  backText: string;
}

export default function CardFlip({ frontImage, backText }: CardFlipProps) {
  return (
    <div className="group relative w-full h-64 md:h-72 lg:h-80">
      <div className="relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 rounded-lg [backface-visibility:hidden]">
          <Image
            src={frontImage}
            alt={backText}
            fill
            sizes="(max-width: 500px) 90vw, (max-width: 1200px) 50vw, 27vw"
            className="object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
          />
          <div className="font-bold absolute bottom-3 left-0 right-0 text-white text-center py-2">
            {backText}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-300/80 text-white text-xl font-bold [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backText}
        </div>
      </div>
    </div>
  );
}
