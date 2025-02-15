"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import StyledButton from "./StyledButton";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  {
    title: "Programs",
    dropdown: [
      { title: "Buildtivite", href: "/programs/buildtivite" },
      { title: "Learntivite", href: "/programs/learntivite" },
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
        <div className="hidden md:flex flex-1 justify-center">
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
                      className="flex items-center gap-2 text-black hover:text-green-700 transition"
                    >
                      {link.title}
                      <FiChevronDown className="text-gray-500 group-hover:text-green-700 transition" />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen === index && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 ">
                        {link.dropdown?.map((subLink, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2"
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
          </ul>
        </div>

        {/* Get Started Button (Desktop) */}
        <div className="hidden md:flex">
          <Link href="/get-started">
            <StyledButton className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Get Started
            </StyledButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black"
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
