"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import NavbarDropdown from "./icons/NavbarDropdown";
import StyledButton from "./StyledButton";

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
                className="block py-3 px-6 w-full text-start text-black hover:text-green-700 transition"
              />
            ) : (
              <>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center justify-start gap-2 px-6 py-3 w-full text-black hover:text-green-700 transition"
                >
                  {link.title}
                  <NavbarDropdown isActive={openDropdown === index} />
                </button>

                {openDropdown === index && link.dropdown && (
                  <ul className="mt-1 bg-gray-100 rounded-md w-full animate-fade-in">
                    {link.dropdown.map((subLink, subIndex) => (
                      <li key={subIndex} className="w-full">
                        <NavLink
                          href={subLink.href}
                          title={subLink.title}
                          className="block py-3 px-6 w-full text-black hover:bg-gray-200 text-start"
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
        <div className="w-full px-6 text-left">
          <StyledButton onClickAction={() => {}} className="w-fit">
            Get Started
          </StyledButton>
        </div>
      </ul>
    </div>
  );
}
