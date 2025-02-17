"use client";

import Image from "next/image";

export default function NavbarDropdownItem({ isActive }: { isActive: boolean }) {
  return (
    <Image
      src={isActive ? "/programming-flag.svg" : ""}
      alt="Dropdown Icon"
      width={4} 
      height={4} 
      className="transition-transform duration-300 ease-in-out"
      />
      
  );
}
