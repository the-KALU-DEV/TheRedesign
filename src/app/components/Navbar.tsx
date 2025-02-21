"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import StyledButton from "./StyledButton";
import NavbarDropdownIcon from "./icons/NavbarDropdown"; // Ensure this path is correct
import NavbarDropdown from "./NavbarDropdown"; // Updated dropdown component

interface DropdownItem {
  title: string;
  href: string;
  icon?: string;
}

interface NavLinkType {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const icons = {
  flag: "/programming-flag.svg",
  blog: "/blog.svg",
  ai: "/ai.svg",
  webinar: "/webinar.svg",
  ebook: "/ebook.svg"
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
      { title: "Our Blog", href: "/resources/our-blog", icon: icons.blog},
      { title: "Free Ai Tools", href: "/resources/free-ai-tools", icon: icons.ai},
      { title: "Webinars", href: "/resources/webinars", icon: icons.webinar },
      { title: "Free E-books", href: "/resources/free-ebooks", icon: icons.ebook }
      // Four more icons can be added here if needed.
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // Now storing the open dropdown as a string (link title) or null.
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown if clicking outside the nav
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed z-50 w-full top-0 bg-[#F8F8F8] shadow-xs">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Codetivite" width={120} height={50} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden min-[891px]:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => {
              // If link has href, compare directly; if dropdown exists, check if any sublink matches
              const isActive = link.href
                ? pathname === link.href
                : link.dropdown
                ? link.dropdown.some((sub) => sub.href === pathname)
                : false;
              return (
                <li key={index} className="relative group">
                  {link.href ? (
                    <NavLink
                      href={link.href}
                      title={link.title}
                      className={`transition-colors ${
                        isActive
                          ? "text-green-500"
                          : "text-black hover:text-gray-800"
                      }`}
                    />
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setDropdownOpen(
                            dropdownOpen === link.title ? null : link.title
                          )
                        }
                        className={`flex items-center gap-2 transition-colors ${
                          isActive
                            ? "text-green-500"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {link.title}
                        <span
                          className={`transform transition-transform ${
                            dropdownOpen === link.title
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                        >
                          <NavbarDropdownIcon
                            isActive={dropdownOpen === link.title}
                          />
                        </span>
                      </button>
                      {dropdownOpen === link.title && link.dropdown && (
                        <NavbarDropdown
                          dropdown={link.dropdown}
                          onLinkClickAction={() => setDropdownOpen(null)}
                        />
                      )}
                    </>
                  )}
                </li>
              );
            })}
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
