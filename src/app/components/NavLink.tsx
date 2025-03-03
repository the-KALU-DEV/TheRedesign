"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string; // ✅ Make className optional
}

export default function NavLink({ href, title, className }: NavLinkProps) {
  const pathname = usePathname();

  if (!href) return null; // Ensures `href` is always valid

  return (
    <Link
      href={href}
      className={clsx(
        "text-gray-600 hover:text-gray-900 hover:font-semibold transition relative",
        pathname === href && "text-green-500 font-semibold",
        className // ✅ Allow passing optional className
      )}
    >
      {title}
    </Link>
  );
}
