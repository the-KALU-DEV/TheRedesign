"use client";

import React from "react";
import Image from "next/image";
import StyledButton from "./StyledButton";

interface Webinar {
  topic: string;
  duration: string;
  title: string;
  subtitle: string;
  image: string;
}

interface WebinarCardProps {
  webinar: Webinar;
  onDownloadAction: () => void;
}

export default function WebinarCard({ webinar, onDownloadAction }: WebinarCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-[#F8F8F8EE]">
      {/* Image Container */}
      <div className="relative w-full h-40 sm:h-48 md:h-40 lg:h-44 xl:h-48">
        <Image
          src={webinar.image}
          alt={webinar.topic}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between items-start h-52">
        {/* Topic + Duration with Icon */}
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-[#0A68EC1F] text-[#0A68EC] text-xs px-4 py-2 rounded-md">
            Topic
          </span>
          <div className="flex items-center gap-1 text-[#7A7A7A] text-xs">
            <Image
              src="/time-schedule.svg"
              alt="Duration Icon"
              width={16}
              height={16}
            />
            <span>{webinar.duration}</span>
          </div>
        </div>

        {/* Title + Subtitle */}
        <h3 className="text-md font-semibold mb-1 line-clamp-2">
          {webinar.topic}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 mb-6">
          {webinar.subtitle}
        </p>

        {/* Download Button */}
        <StyledButton
          icon="/download-03.svg"
          iconPosition="left"
          className="w-fit -mb-2"
          onClickAction={onDownloadAction}
        >
          Download
        </StyledButton>
      </div>
    </div>
  );
}
