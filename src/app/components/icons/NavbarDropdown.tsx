"use client";

import Image from "next/image";

export default function NavbarDropdown({ isActive }: { isActive: boolean }) {
  return (
    <Image
      src={isActive ? "/arrow-down-01.svg" : "/arrow-down-01 (1).svg"}
      alt="Dropdown Icon"
      width={18} 
      height={18} 
      className="transition-transform duration-300 ease-in-out"
    />
  );
}
