// "use client"

// import React from "react";
// import NavLink from "./NavLink";

// export default function MenuOverlay({ links }) {
//     return (
//         <ul className="flex flex-col py-4 items-center">
//           {links.map((link, index) => (
//             <li key={index}>
//               <NavLink href={link.href} title={link.title} />
//             </li>
//           ))}
//           <button>Get Started</button>
//         </ul>
//     );
// }

"use client";

import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

interface MenuOverlayProps {
    links: { title: string; href: string }[];
}
  
  export default function MenuOverlay({ links }: MenuOverlayProps) {
    return (
    <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
      <ul className="flex flex-col items-center py-6 space-y-4">
        {links.map((link: { title: string; href: string }, index: number) => (
          <li key={index}>
            <NavLink href={link.href} title={link.title} />
          </li>
        ))}
        <Link href="/get-started">
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Get Started
          </button>
        </Link>
      </ul>
    </div>
  );
}


