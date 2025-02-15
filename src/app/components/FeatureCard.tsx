"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="relative group overflow-hidden p-6 bg-gray-100 rounded-lg shadow-md transition-all"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Main Content (Fades out on hover) */}
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

      {/* Hover Overlay (Slides up and appears) */}
      <div
        className={twMerge(
          "absolute inset-0 bg-black transition-transform duration-300 ease-in-out",
          "translate-y-full group-hover:translate-y-0"
        )}
      >
        <div className="p-6 relative z-10">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 text-3xl">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
          </div>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
