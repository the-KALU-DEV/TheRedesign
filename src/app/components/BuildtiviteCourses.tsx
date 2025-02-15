"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { src: "/software-engineering.svg" },
  { src: "/product-design.svg" },
  { src: "/product-management.svg" },
  { src: "/technical-writing.svg" },
  { src: "/cyber-security.svg" },
];

// Parent container animation
const containerVariants = {
  visible: { transition: { staggerChildren: 0.08 } }
};

// Individual image animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120 } },
};

export default function BuildtiviteCourses() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-7xl px-4"
    >
      {items.map((item, index) => (
        <motion.div key={index} variants={itemVariants} className="w-full h-full">
          <Image 
            src={item.src} 
            alt="" 
            width={200} 
            height={200} 
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
