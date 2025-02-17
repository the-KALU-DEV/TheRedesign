"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      className="relative group overflow-hidden p-6 bg-white rounded-lg transition-all 
                 flex flex-col h-[250px]" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Main Content */}
      <div className="relative z-10 transition-opacity duration-300 group-hover:opacity-0 flex flex-col flex-grow">
        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold text-black">{title}</h3>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-4 flex-grow">{description}</p>
        <Link href="" className="underline underline-offset-4 text-gray-600 mt-auto">Read More</Link> 
      </div>

      {/* Hover Overlay */}
      <div
        className={twMerge(
          "absolute inset-0 bg-black transition-transform duration-300 ease-in-out",
          "translate-y-full group-hover:translate-y-0 flex flex-col p-6"
        )}
      >
        <div className="relative z-10 flex flex-col flex-grow">
          <div className="flex items-center gap-3">
            <span className="text-blue-400 text-3xl">{icon}</span>
            <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
          </div>
          <p className="mt-4 text-gray-300 line-clamp-4 flex-grow">{description}</p>
          <p className="underline underline-offset-4 text-gray-200 mt-auto">Read More</p> {/* Always at bottom */}
        </div>
      </div>
    </motion.div>
  );
}
