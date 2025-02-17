"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import NavbarDropdown from "./icons/NavbarDropdown";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode; // Supports JSX (lists, paragraphs, etc.)
}

interface FAQsProps {
  faqs?: FAQItem[]; // Optional, but defaults to []
  fullWidth?: boolean;
  iconColor?: string;
  bgColor?: string;
  defaultOpenIndex?: number | null;
}

export default function FAQ({
  faqs = [], // Default to an empty array to avoid undefined issues
  fullWidth = false,
  iconColor = "text-blue-600",
  bgColor = "#F6FAFF",
  defaultOpenIndex = null,
}: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={twMerge("py-2", fullWidth ? "w-full" : "container mx-auto px-6 lg:px-12")}>
      <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>

      <div className="mt-6 md:mt-8 space-y-4">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className={twMerge(bgColor, "rounded-lg border border-gray-200")}>
              <button
                className="w-full flex justify-between items-center p-5 font-semibold text-left"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <span className={iconColor}>
                                        <Image alt="icon" src="/minus-sign.svg" width={30} height={30} />
                                      </span> : <span className={iconColor}>
                                                              <Image alt="icon" src="/plus-sign.svg" width={30} height={30} />
                                                            </span>}
              </button>
              {openIndex === index && <div className="p-5 pt-0 text-gray-600">{faq.answer}</div>}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No FAQs available.</p>
        )}
      </div>
    </section>
  );
}
