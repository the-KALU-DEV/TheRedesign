// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import TitleSubtitle from "./TitleSubtitle";

// const items = [
//   { src: "/software-engineering.svg" },
//   { src: "/product-design.svg" },
//   { src: "/product-management.svg" },
//   { src: "/technical-writing.svg" },
//   { src: "/cyber-security.svg" },
// ];

// // Parent container animation
// const containerVariants = {
//   visible: { transition: { staggerChildren: 0.08 } }
// };

// // Individual image animation
// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.5 },
//   visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
// };

// export default function BuildtiviteCourses() {
//   return (
//     <>
//     <TitleSubtitle title="Our Courses" subtitle="Check Out Our Course Tracks" centered/>
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full"
//     >
//       {items.map((item, index) => (
//         <motion.div key={index} variants={itemVariants} className="w-full h-full">
//           <Image
//             src={item.src}
//             alt=""
//             width={200}
//             height={200}
//             className="w-full h-full object-contain" />
//         </motion.div>
//       ))}
//     </motion.div></>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleSubtitle from "./TitleSubtitle";
import StyledButton from "./StyledButton";

const items = [
  { src: "/software-engineering.svg", title: "Software Engineering", description: "Build AI models, developer tools, and blockchain applications." },
  { src: "/product-design.svg", title: "Product Design", description: "Create stunning UI/UX, design systems, and accessible interfaces." },
  { src: "/product-management.svg", title: "Product Management", description: "Manage Agile teams, define product roadmaps, and conduct user research." },
  { src: "/technical-writing.svg", title: "Technical Writing", description: "Create API documentation, technical guides, and open-source contributions." },
  { src: "/cyber-security.svg", title: "Cyber Security", description: "Perform security audits, risk assessments, and penetration testing." }
];

// Parent container animation
const containerVariants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

// Individual image animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 120 } 
  },
};

export default function BuildtiviteCourses() {
  return (
    <>
      <TitleSubtitle 
        title="Our Courses" 
        subtitle="Check Out Our Course Tracks" 
        className="mb-6"
        centered 
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full"
      >
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants} 
            className="w-full h-full"
          >
            <div 
              className="group relative w-full h-48" 
              style={{ perspective: "1000px" }}
            >
              <div 
                className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 rounded-lg overflow-hidden" 
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image
                    src={item.src}
                    alt="Course Image"
                    fill
                    sizes="(max-width: 500px) 90vw, (max-width: 1200px) 50vw, 27vw"
                    className="object-cover"
                  />
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 rounded-lg bg-black text-white flex flex-col justify-evenly items-start p-4" 
                  style={{ 
                    backfaceVisibility: "hidden", 
                    transform: "rotateY(180deg)" 
                  }}
                >
                  <h3 className="text-md mt-4">{item.title}</h3>
                  <p className="text-xs text-left mb-2">
                    {item.description}
                  </p>
                  <StyledButton className="mt-2">
                    Apply Now!
                  </StyledButton>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
