// "use client";

// import { useState } from "react";
// import { twMerge } from "tailwind-merge";
// import Image from "next/image";
// import { FaMinus, FaPlus } from "react-icons/fa";

// interface FAQItem {
//   question: string;
//   answer: string | React.ReactNode; // Supports JSX (lists, paragraphs, etc.)
// }

// interface FAQsProps {
//   faqs?: FAQItem[]; // Optional, but defaults to []
//   fullWidth?: boolean;
//   iconColor?: string;
//   bgColor?: string; // Expect a valid Tailwind class
//   defaultOpenIndex?: number | null;
// }

// export default function FAQ({
//   faqs = [],
//   fullWidth = false,
//   iconColor = "text-blue-600",
//   bgColor = "bg-bgFAQ", // Changed from raw hex code
//   defaultOpenIndex = null,
// }: FAQsProps) {
//   const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className={twMerge("py-2", fullWidth ? "w-full" : "container mx-auto px-8 lg:px-12")}>
//       <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>

//       <div className="mt-6 md:mt-8 space-y-4">
//         {faqs.length > 0 ? (
//           faqs.map((faq, index) => (
//             <div key={index} className={twMerge(bgColor, "rounded-lg border border-gray-200")}>
              
//               <button
//                 className="w-full flex justify-between items-center p-5 font-semibold text-left"
//                 onClick={() => toggleFAQ(index)}
//               >
//                 {faq.question}
//                 {openIndex === index ? (
//                   <div className={twMerge(iconColor, "w-10 h-10 flex items-center justify-center")}>
//                     <Image alt="icon" src="/minus-sign.svg" width={20} height={20} objectFit="contain" />
//                   </div>
//                 ) : (
//                   <div className={twMerge(iconColor, "w-10 h-10 flex items-center justify-center")}>
//                     <Image alt="icon" src="/plus-sign.svg" width={20} height={20} objectFit="contain" />
//                   </div>
//                 )}
//               </button>

//               {/* <button
//               className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
//               onClick={() => toggleFAQ(index)}
//             >
//               {faq.question}
//               {openIndex === index ? (
//                 <FaMinus className="text-blue-500 w-2 h-2 sm:w-4 md:w-6" />
//               ) : (
//                 <FaPlus className="text-blue-500 w-2 h-2 sm:w-4 md:w-6" />
//               )}
//             </button> */}

//               {openIndex === index && <div className="p-5 pt-0 text-gray-600">{faq.answer}</div>}
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No FAQs available.</p>
//         )}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaMinus, FaPlus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode; // Supports JSX (lists, paragraphs, etc.)
}

interface FAQsProps {
  faqs?: FAQItem[]; // Optional, but defaults to []
  fullWidth?: boolean;
  iconColor?: string;
  bgColor?: string; // Expect a valid Tailwind class
  defaultOpenIndex?: number | null;
}

export default function FAQ({
  faqs = [],
  fullWidth = false,
  iconColor = "text-blue-500",
  bgColor = "bg-FAQ", // Changed from raw hex code
  defaultOpenIndex = null,
}: FAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={twMerge("py-2 px-4 sm:px-6 md:px-8 bg-white", fullWidth ? "w-full" : "container mx-auto")}>
      <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>

      <div className="mt-10 md:mt-14 space-y-4">
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <div key={index} className={twMerge(bgColor, "bg-FAQ rounded-lg")}>
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className={twMerge("ml-auto", iconColor)}>
                  {openIndex === index ? (
                    <FaMinus className="w-4 h-4 text-blue-500" />
                  ) : (
                    <FaPlus className="w-4 h-4 text-blue-500" />
                  )}
                </span>
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
