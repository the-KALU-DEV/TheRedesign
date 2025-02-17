"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import StyledButton from "./StyledButton";
import NavbarDropdownIcon from "./icons/NavbarDropdown"; // Ensure this path is correct

interface DropdownItem {
  title: string;
  href: string;
  icon?: string; // FIX: Ensure it's a string (image path), not ReactNode
}

interface NavLinkType {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const icons = {
  flag: "/programming-flag.svg",
};

const navLinks: NavLinkType[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Programs",
    dropdown: [
      { title: "Buildtivite", href: "/programs/buildtivite", icon: icons.flag },
      { title: "Learntivite", href: "/programs/learntivite", icon: icons.flag },
    ],
  },
  {
    title: "Resources",
    dropdown: [
      { title: "E-Books", href: "/resources/ebooks" },
      { title: "Free Tools", href: "/resources/free-tools" },
      { title: "Webinars", href: "/resources/webinars" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

function NavbarDropdown({ dropdown }: { dropdown: DropdownItem[] }) {
  return (
    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md p-2 animate-fade-in">
      {dropdown.map((subLink, index) => (
        <li key={index} className="px-4 py-2 flex items-center gap-2">
          {/* FIX: Ensure icon exists before rendering Image */}
          {subLink.icon && (
            <Image src={subLink.icon} alt={subLink.title} width={20} height={20} />
          )}
          <NavLink href={subLink.href} title={subLink.title} />
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <nav className="fixed z-50 w-full top-0 bg-[#F8F8F8] shadow-xs">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Codetivite" width={120} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-[891px]:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                {link.href ? (
                  <NavLink href={link.href} title={link.title} />
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setDropdownOpen(dropdownOpen === index ? null : index)
                      }
                      className="flex items-center gap-2 hover:text-green-700 transition"
                    >
                      {link.title}

                      {/* Dropdown Icon (Restored) */}
                      <span
                        className={`transform transition-transform ${
                          dropdownOpen === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <NavbarDropdownIcon isActive={dropdownOpen === index} />
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen === index && link.dropdown && (
                      <NavbarDropdown dropdown={link.dropdown} />
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Get Started Button */}
        <div className="hidden min-[891px]:flex">
          <Link href="/get-started">
            <StyledButton className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Get Started
            </StyledButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block min-[891px]:hidden text-2xl text-black"
          onClick={() => setNavbarOpen(!navbarOpen)}
          aria-label="Toggle Menu"
        >
          {navbarOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
