// // "use client";

// // import { twMerge } from "tailwind-merge";

// // interface FeatureCardProps {
// //   icon: string;
// //   title: string;
// //   description: string;
// // }

// // export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
// //   return (
// //     <div
// //       className={twMerge(
// //         "bg-white shadow-md rounded-xl p-6 text-left transition duration-300",
// //         "hover:shadow-lg"
// //       )}
// //     >
// //       {/* Icon & Title */}
// //       <div className="flex items-center gap-3 mb-3">
// //         <span className="text-2xl">{icon}</span>
// //         <h3 className="font-semibold text-lg">{title}</h3>
// //       </div>
// //       {/* Description */}
// //       <p className="text-gray-600 text-sm mb-4">{description}</p>
// //       {/* Read More Link */}
// //       <a href="#" className="text-blue-600 font-medium hover:underline">
// //         Read More
// //       </a>
// //     </div>
// //   );
// // }


// "use client";

// import { twMerge } from "tailwind-merge";

// interface FeatureCardProps {
//   icon: string;
//   title: string;
//   description: string;
// }

// export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
//   return (
//     <div
//       className={twMerge(
//         "bg-white shadow-md rounded-xl p-6 transition duration-300",
//         "hover:shadow-lg grid grid-rows-subgrid row-span-1 min-h-[250px]"
//       )}
//     >
//       {/* Top: Icon & Title */}
//       <div className="flex items-center gap-3">
//         <span className="text-2xl">{icon}</span>
//         <h3 className="font-semibold text-lg">{title}</h3>
//       </div>

//       {/* Center: Description */}
//       <p className="text-gray-600 text-sm self-center">{description}</p>

//       {/* Bottom: Read More Link */}
//       <a href="#" className="text-blue-600 font-medium hover:underline self-end">
//         Read More
//       </a>
//     </div>
//   );
// }


"use client";

import { useState } from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl flex flex-col h-full min-h-[20rem]">
      {/* Icon & Title */}
      <div className="flex items-center gap-3">
        <span className="text-blue-600 text-3xl">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className={`mt-2 text-[#7A7A7A] flex-grow ${!isExpanded ? "line-clamp-4" : ""}`}>
        {description}
      </p>

      {/* Read More Button */}
      <div className="mt-auto pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black underline underline-offset-4 decoration-2 font-medium hover:text-blue-600 text-left"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
