"use client";

import Link from "next/link";
import StyledButton from "@/app/components/StyledButton";
import { twMerge } from "tailwind-merge";

export default function BuildtiviteHero() {
  return (
    <section className="relative w-full flex flex-col items-center text-center py-20 px-6">
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-28 py-6 max-w-4xl">
        Your Portfolio is Your Power. <br className="hidden md:inline" />
        Build One That Stands Out.
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-lg mt-4 max-w-2xl">
        Build, Deploy & Master the Skills That Make You Stand Out
      </p>

      {/* CTA Button */}
      <Link href="buildtivite/register">
        <StyledButton
          className={twMerge(
            "mt-6 px-6 py-3 text-white text-lg font-medium bg-green-600 rounded-full",
            "hover:bg-green-700 transition"
          )}
        >
          Join Buildtivite
        </StyledButton>
      </Link>
    </section>
  );
}
