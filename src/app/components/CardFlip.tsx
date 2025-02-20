"use client";

import React from "react";
import Image from "next/image";

interface CardFlipProps {
  frontImage: string;
  backText: string;
}

export default function CardFlip({ frontImage, backText }: CardFlipProps) {
  return (
    <div className="group relative w-full h-64 md:h-72 lg:h-80">
      <div className="-mt-10 relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 rounded-lg [backface-visibility:hidden] overflow-hidden">
          <Image
            src={frontImage}
            alt="Front card image"
            fill
            sizes="(max-width: 500px) 90vw, (max-width: 1200px) 50vw, 27vw"
            className="object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
          />
          <div className="font-bold absolute bottom-3 left-0 right-0 text-white text-center py-2">
          <div className="font-bold text-2xl md:text-3xl absolute bottom-5 left-0 right-0 text-gray-100 text-center py-2">
            {backText}
          </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-800 text-white text-2xl md:text-3xl font-bold [transform:rotateY(180deg)] [backface-visibility:hidden]">
          {backText}
        </div>
      </div>
    </div>
  );
}

