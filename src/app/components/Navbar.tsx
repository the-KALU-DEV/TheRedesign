// // // "use client";

// // // import { useState } from "react";
// // // import { usePathname } from "next/navigation";
// // // import Link from "next/link";
// // // import { FiMenu, FiX } from "react-icons/fi"; // Import icons
// // // import NavLinks from "./NavLinks";

// // // export default function Header() {
// // //   const [isOpen, setOpen] = useState(false);
// // //   const pathname = usePathname();

// // //   return (
// // //     <header className="w-full z-50 fixed top-0 left-0 bg-background border-b shadow-xs">
// // //       <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
// // //         {/* Brand Name */}
// // //         <div className="text-xl font-bold text-primary">Codetivite</div>

// // //         {/* Desktop Navigation & Button */}
// // //         <div className="hidden md:flex md:justify-around space-x-8">
// // //           <nav className="flex space-x-6">
// // //             <NavLinks />
// // //           </nav>
// // //           <Link href="/get-started">
// // //             <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
// // //               Get Started
// // //             </button>
// // //           </Link>
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <button
// // //           className="md:hidden text-2xl text-primary"
// // //           onClick={() => setOpen(!isOpen)}
// // //           aria-label="Toggle Menu"
// // //         >
// // //           {isOpen ? <FiX /> : <FiMenu />}
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu Dropdown */}
// // //       {isOpen && (
// // //         <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md">
// // //           <nav className="flex flex-col space-y-4 p-6">
// // //             <NavLinks />
// // //             <Link href="/get-started">
// // //               <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
// // //                 Get Started
// // //               </button>
// // //             </Link>
// // //           </nav>
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // }


// // "use client";

// // import { useState } from "react";
// // //import { usePathname } from "next/navigation";
// // import Link from "next/link";
// // import { FiMenu, FiX } from "react-icons/fi"; // Import icons
// // import NavLinks from "./NavLinks";

// // export default function Header() {
// //   const [isOpen, setOpen] = useState(false);
// //   //const pathname = usePathname();

// //   return (
// //     <header className="w-full z-50 fixed top-0 left-0 bg-[#F8F8F8] border-[#DFF2E6] shadow-xs">
// //       <div className="container mx-auto min-h-16 flex items-center justify-between py-4 px-6 lg:px-12">
        
// //         <div className="text-xl font-bold text-primary">Codetivite</div>

// //         <nav className="hidden md:flex space-x-6">
// //           <NavLinks />
// //         </nav>

// //         <div className="hidden md:block">
// //           <Link href="/get-started">
// //             <button className="w-full bg-[#2AB255] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
// //               Get Started
// //             </button>
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden text-2xl text-[#2AB255]"
// //           onClick={() => setOpen(!isOpen)}
// //           aria-label="Toggle Menu"
// //         >
// //           {isOpen ? <FiX /> : <FiMenu />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu Dropdown */}
// //       {isOpen && (
// //         <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-md">
// //           <nav className="flex flex-col space-y-4 p-6">
// //             <NavLinks />
// //             <Link href="/get-started">
// //               <button className="w-full bg-[#2AB255] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
// //                 Get Started
// //               </button>
// //             </Link>
// //           </nav>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }


// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { FiMenu, FiX } from "react-icons/fi";
// import MenuOverlay from "./MenuOverlay";
// import Image from "next/image";


// const navLinks = [
//     { title: "Home", href: "/" },
//     { title: "About Us", href: "/about" },
//     { title: "Courses", href: "/courses" },
//     { title: "Resources", href: "/resources" },
//     { title: "Contact Us", href: "/contact" },
// ];


// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className=" fixed px-10 xl:px-[3rem] z-50 w-full top-0 pb-4 mx-auto bg-[]">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-white font-semibold"
//         >
//           <Image src="/logo.svg" alt="Logo" width={100} height={200} />
//         </Link>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <FiMenu className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <FiX className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.href} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { FiMenu, FiX } from "react-icons/fi";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Programs", href: "/programs" },
  { title: "Resources", href: "/resources" },
  { title: "Contact Us", href: "/contact" },
];


export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full top-0 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left-aligned Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" alt="Logo" width={120} height={50} />
        </Link>

        {/* Centered Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {/* Right-aligned "Get Started" Button (hidden on small screens) */}
        <div className="hidden md:flex">
          <Link href="/get-started">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Get Started
            </button>
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
