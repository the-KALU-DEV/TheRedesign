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
    <motion.button
      whileHover={
        muted
          ? { backgroundColor: "#b0b3b8", color: "#4b5563" } // Muted hover effect
          : { backgroundColor: "#000", color: "#fff" } // Normal hover effect
      }
      whileTap={{ scale: 1.03 }}
      className={twMerge(
        "px-4 py-2 rounded-full w-full xl:w-auto transition-colors duration-100",
        muted ? "bg-gray-200 text-gray-700" : "bg-green-500 text-white", // Default styles
        className
      )}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
