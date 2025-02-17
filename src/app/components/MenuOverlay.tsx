"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import NavbarDropdown from "./icons/NavbarDropdown";

interface MenuOverlayProps {
  links: { title: string; href?: string; dropdown?: { title: string; href: string }[] }[];
}

export default function MenuOverlay({ links }: MenuOverlayProps) {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
      <ul className="flex flex-col items-center py-6 space-y-2 w-full">
        {links.map((link, index) => (
          <li key={index} className="w-full">
            {link.href ? (
              <NavLink
                href={link.href}
                title={link.title}
                className="block py-3 px-6 w-full text-center text-black hover:text-green-700 transition"
              />
            ) : (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center justify-center gap-2 px-6 py-3 w-full text-black hover:text-green-700 transition"
                >
                  {link.title}
                  <NavbarDropdown isActive={openDropdown === index} />
                </button>

                {/* Dropdown Content (Same Height) */}
                {openDropdown === index && (
                  <ul className="mt-1 bg-gray-100 rounded-md w-full animate-fade-in">
                    {link.dropdown?.map((subLink, subIndex) => (
                      <li key={subIndex} className="w-full">
                        <NavLink
                          href={subLink.href}
                          title={subLink.title}
                          className="block py-3 px-6 w-full text-black hover:bg-gray-200 text-center"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}

        {/* Get Started Button */}
        <Link href="/get-started" className="w-full">
          <button className="w-full py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
            Get Started
          </button>
        </Link>
      </ul>
    </div>
  );
}
