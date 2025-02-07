"use client";

import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";


const faqs = [
  {
    question: "At the end of the program you will",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Develop skills to understand and empathize with user needs and behaviors.</li>
        <li>
          Learn how to work with peers effectively, as real-world product designers collaborate
          cross-functionally.
        </li>
        <li>Uncover true customer desires to create user-friendly solutions.</li>
        <li>Master usability testing: refine designs based on user feedback.</li>
        <li>Gain expertise in UI/UX design, wireframing, and prototyping.</li>
      </ul>
    ),
  },
  { question: "Course curriculum", answer: "Details about the course curriculum will go here." },
  { question: "Items needed in class", answer: "A list of required items for the class." },
];

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
      setOpenIndex(prev => (prev === index ? null : index)); 
    };
     // Default: First item open

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image with Floating Elements */}
        <div className="relative">
          <img
            src="/images/faq-image.jpg"
            alt="User holding a phone"
            className="rounded-xl w-full object-cover"
          />
          {/* Floating Review */}
          <div className="absolute top-10 left-[-20px] bg-white shadow-lg p-4 rounded-xl max-w-xs">
            <p className="text-yellow-500 text-lg">★★★★★</p>
            <p className="text-sm text-gray-700">
              "Codetivite changed my life! The hands-on training helped me build a job-worthy
              portfolio and gain confidence."
            </p>
            <p className="text-xs font-semibold mt-2">Sandra O., Front-End Developer</p>
          </div>
          {/* Floating User Count */}
          <div className="absolute bottom-[-10px] left-5 bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
            <span className="font-semibold">2k+ Registered users</span>
            <FiPlusCircle className="w-5 h-5 ml-2" />
          </div>
        </div>

        {/* Right: FAQ Section */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md">
              <button onClick={() => handleToggle(index)} className="flex justify-between items-center w-full p-5">

                <h4 className="text-lg font-semibold">{faq.question}</h4>
                {openIndex === index ? (
                  <FiMinusCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <FiPlusCircle className="w-6 h-6 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
