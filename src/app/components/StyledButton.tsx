"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type MotionButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  muted?: boolean;
};

export default function StyledButton({ children, onClick, className, muted }: MotionButtonProps) {
  return (
    <motion.button //className="shadow-none"
      initial={{ backgroundColor: muted ? "#e5e7eb" : "#22c55e", color: muted ? "#374151" : "#fff" }}
      whileHover={{
        backgroundColor: muted ? "#d1d5db" : "#000",
        color: muted ? "#4b5563" : "#fff",
        transition: { duration: 0.2, ease: "easeIn" },
      }} 
      whileTap={{ scale: 1.03 }}
      className={twMerge(
        "px-4 py-2 rounded-full w-full xl:w-auto shadow-none",
        muted ? "bg-gray-200 text-gray-700" : "bg-green-500 text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
