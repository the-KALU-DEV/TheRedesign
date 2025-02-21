// "use client";

// import React from "react";
// import Image from "next/image";

// export default function NavbarDropdownItem({ isActive }: { isActive: boolean }) {
//   return (
//     <Image
//       src={isActive ? "/programming-flag.svg" : ""}
//       alt="Dropdown Icon"
//       width={4} 
//       height={4} 
//       className="transition-transform duration-300 ease-in-out"
//       />
      
//   );
// }

// "use client";

// import React from "react";
// import Image from "next/image";
// import NavLink from "./NavLink";

// interface DropdownItem {
//   title: string;
//   href: string;
//   icon?: string;
// }

// interface NavbarDropdownProps {
//   dropdown: DropdownItem[];
//   onLinkClick: () => void;
// }

// export default function NavbarDropdown({ dropdown, onLinkClick }: NavbarDropdownProps) {
//   return (
//     <ul className="absolute left-0 mt-3 w-40 bg-white shadow-md rounded-md p-2 animate-fade-in">
//       {dropdown.map((subLink, index) => (
//         <li
//           key={index}
//           className="px-4 py-2 flex items-center gap-2 cursor-pointer"
//           onClick={onLinkClick}
//         >
//           {subLink.icon && (
//             <Image src={subLink.icon} alt={subLink.title} width={20} height={20} />
//           )}
//           <NavLink href={subLink.href} title={subLink.title} />
//         </li>
//       ))}
//     </ul>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";

interface DropdownItem {
  title: string;
  href: string;
  icon?: string;
}

interface NavbarDropdownProps {
  dropdown: DropdownItem[];
  onLinkClickAction: () => void;
}

export default function NavbarDropdown({ dropdown, onLinkClickAction }: NavbarDropdownProps) {
  return (
    <ul className="absolute left-0 mt-3 min-w-max bg-white shadow rounded-md p-2 animate-fade-in">
      {dropdown.map((subLink, index) => (
        <li
          key={index}
          className="px-4 py-2 flex items-center gap-2 cursor-pointer"
          onClick={onLinkClickAction}
        >
          {subLink.icon && (
            <Image src={subLink.icon} alt={subLink.title} width={20} height={20} />
          )}
          <NavLink href={subLink.href} title={subLink.title} />
        </li>
      ))}
    </ul>
  );
}
