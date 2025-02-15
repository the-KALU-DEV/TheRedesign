"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import NavLink from "./NavLink";
import Link from "next/link";

interface MenuOverlayProps {
  links: { title: string; href?: string; dropdown?: { title: string; href: string }[] }[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
      <ul className="flex flex-col items-center py-6 space-y-4 w-full">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            {link.href ? (
              <NavLink href={link.href} title={link.title} />
            ) : (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center justify-center gap-2 w-full py-2 text-black hover:text-green-700 transition"
                >
                  {link.title}
                  <FiChevronDown className="text-gray-500 transition" />
                </button>

                {openDropdown === index && (
                  <ul className="mt-2 bg-gray-100 rounded-md p-2 w-full text-left">
                    {link.dropdown?.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-200 "
                      >
                        <NavLink href={subLink.href} title={subLink.title} />
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}

        {/* Get Started Button */}
        <Link href="/get-started">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Get Started
          </button>
        </Link>
      </ul>
    </div>
  );
}
