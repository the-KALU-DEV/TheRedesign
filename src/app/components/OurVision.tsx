"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default function OurVision() {
  const [isMissionOpen, setMissionOpen] = useState(true);
  const [isVisionOpen, setVisionOpen] = useState(false);

  return (
    <section className="w-full mt-4 py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="overflow-hidden rounded-sm">
            <Image
              src="/images/mission-vision.jpg" // Replace with your actual image path
              alt="Person working on a design"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <button
                onClick={() => setMissionOpen(!isMissionOpen)}
                className="w-full flex justify-between items-center"
              >
                <h4 className="text-lg font-semibold">Our mission</h4>
                {isMissionOpen ? (
                  <FiMinusCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <FiPlusCircle className="w-6 h-6 text-green-600" />
                )}
              </button>
              {isMissionOpen && (
                <p className="text-gray-600 mt-2">
                  To increase the financial earning ability and career readiness measured by job
                  placements, certifications, or self-reported preparedness of 5,000 users by at
                  least 30% over 5 years, through work experience, skill-building, and learning
                  programs, reaching 1000 users in year one, 2500 in year two, 3500 in year three,
                  and 4500 in year four, while scaling support and mentorship to sustain impact and
                  career progression into year five.
                </p>
              )}
            </div>

            {/* Vision Card */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <button
                onClick={() => setVisionOpen(!isVisionOpen)}
                className="w-full flex justify-between items-center"
              >
                <h4 className="text-lg font-semibold">Our vision</h4>
                {isVisionOpen ? (
                  <FiMinusCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <FiPlusCircle className="w-6 h-6 text-green-600" />
                )}
              </button>
              {isVisionOpen && (
                <p className="text-gray-600 mt-2">
                  Our vision is to create a future where anyone, regardless of background, can gain
                  the skills, confidence, and career opportunities needed to thrive in the tech
                  industry.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
