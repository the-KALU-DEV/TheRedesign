"use client";

import Image from "next/image";
import FAQ from "./FAQ"; // Import the flexible FAQ component

const faqs = [
  { question: "Course curriculum", answer: "Details about the course curriculum will go here." },
  { question: "Items needed in class", answer: "A list of required items for the class." },
];

export default function AboutUsFAQ() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Image with Floating Elements */}
        <div className="relative">
          <Image
            src="/codetivite-learning.svg"
            alt="User holding a phone"
            width={500}
            height={500}
            className="rounded-xl w-full object-cover"
          />
          {/* Floating Review
          <div className="absolute top-10 left-[-20px] bg-white shadow-lg p-4 rounded-xl max-w-xs">
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className="text-sm text-gray-700">
              "Codetivite changed my life! The hands-on training helped me build a job-worthy
              portfolio and gain confidence."
            </p>
            <p className="text-xs font-semibold mt-2">Sandra O., Front-End Developer</p>
          </div>
          {/* Floating User Count *
          <div className="absolute bottom-[-10px] left-5 bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
            <span className="font-semibold">2k+ Registered users</span>
            <FiPlusCircle className="w-5 h-5 ml-2" />
          </div>*/}
        </div> 

        {/* Right: FAQ Section */}
        <div>
          <FAQ
            faqs={faqs} // Custom FAQ list
            fullWidth={true} // Ensures it fills the available space
            iconColor="text-green-600" // Custom plus/minus icon color
            bgColor="bg-gray-100" // Background color for FAQs
            defaultOpenIndex={0} // Ensure this prop is valid in FAQ component
          />
        </div>

      </div>
    </section>
  );
}
