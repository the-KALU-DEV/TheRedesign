// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// // import StyledButton from "./StyledButton";
// // import { twMerge } from "tailwind-merge";

// // export default function BuildtiviteHero() {
// //   return (
// //     <section className="relative w-full flex flex-col items-center text-center py-24 px-6 mt-14">
// //       {/* Icons container: full area, behind content, hidden on mobile */}
// //       <div className="hidden w-full md:block pointer-events-none absolute inset-0 z-[-1]">
// //         {/* Left icons */}
// //         <div className="max-w-7xl">
// //         <Image
// //           src="/github.svg"
// //           alt="GitHub"
// //           width={120}
// //           height={120}
// //           className="absolute top-[140px] left-8"
// //         />
// //         <Image
// //           src="/jira.svg"
// //           alt="Jira"
// //           width={80}
// //           height={80}
// //           className="absolute top-14 left-[190px]"
// //         />
// //         <Image
// //           src="/trello.svg"
// //           alt="Trello"
// //           width={110}
// //           height={110}
// //           className="absolute bottom-16 left-12"
// //         />
// //         <Image
// //           src="/figma.svg"
// //           alt="Figma"
// //           width={60}
// //           height={60}
// //           className="absolute top-[310px] left-[270px]"
// //         />

// //         </div>
        
// //         {/* Right icons */}
// //         <div className="max-w-[700px]">
// //         <Image
// //           src="/archer.svg"
// //           alt="Archer"
// //           width={80}
// //           height={80}
// //           className="absolute top-14 right-[200px]"
// //         />
// //         <Image
// //           src="/solana.svg"
// //           alt="Solana"
// //           width={100}
// //           height={100}
// //           className="absolute top-28 right-0"
// //         />
// //         <Image
// //           src="/metasploit.svg"
// //           alt="Metasploit"
// //           width={60}
// //           height={60}
// //           className="absolute bottom-[140px] right-[220px]"
// //         />
// //         <Image
// //           src="/python.svg"
// //           alt="Python"
// //           width={100}
// //           height={100}
// //           className="absolute bottom-14 right-10"
// //         />
// //         </div>       
// //       </div>

// //       {/* Headline */}
// //       <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-6 py-6 max-w-4xl">
// //         Your Portfolio is Your Power. 
// //         <br className="hidden md:inline" />
// //         Build One That Stands Out.
// //       </h1>

// //       {/* Subheading */}
// //       <p className="text-gray-600 text-lg mt-4 max-w-2xl">
// //         Build, Deploy & Master the Skills That Make You Stand Out
// //       </p>

// //       {/* CTA Button */}
// //       <Link href="/userinfo">
// //         <StyledButton
// //           className={twMerge(
// //             "mt-6 px-6 py-3 text-white text-lg font-medium bg-green-600 rounded-full",
// //             "hover:bg-green-700 transition"
// //           )}
// //         >
// //           Join Buildtivite
// //         </StyledButton>
// //       </Link>
// //     </section>
// //   );
// // }


// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import StyledButton from "./StyledButton";
// import { twMerge } from "tailwind-merge";

// export default function BuildtiviteHero() {
//   return (
//     <section className="relative w-full flex flex-col items-center text-center py-24 px-6 mt-14">
//       {/* 
//         1) Mobile Icons (visible on mobile, hidden on md+)
//            - a simple flex or grid that stacks the icons
//       */}
//       <div className="block md:hidden flex flex-wrap justify-center gap-4 mb-6">
//         {/* Adjust icon sizes as needed */}
//         <Image src="/github.svg" alt="GitHub" width={60} height={60} />
//         <Image src="/jira.svg" alt="Jira" width={60} height={60} />
//         <Image src="/trello.svg" alt="Trello" width={60} height={60} />
//         <Image src="/figma.svg" alt="Figma" width={60} height={60} />
//         <Image src="/archer.svg" alt="Archer" width={60} height={60} />
//         <Image src="/solana.svg" alt="Solana" width={60} height={60} />
//         <Image src="/metasploit.svg" alt="Metasploit" width={60} height={60} />
//         <Image src="/python.svg" alt="Python" width={60} height={60} />
//       </div>

//       {/* 
//         2) Desktop Icons (hidden on mobile, absolutely positioned behind hero)
//            - exactly what you have, no changes except `hidden md:block`
//       */}
//       <div className="hidden w-full md:block pointer-events-none absolute inset-0 z-[-1]">
//         {/* Left icons */}
//         <Image
//           src="/github.svg"
//           alt="GitHub"
//           width={120}
//           height={120}
//           className="absolute top-[140px] left-8"
//         />
//         <Image
//           src="/jira.svg"
//           alt="Jira"
//           width={80}
//           height={80}
//           className="absolute top-14 left-[190px]"
//         />
//         <Image
//           src="/trello.svg"
//           alt="Trello"
//           width={110}
//           height={110}
//           className="absolute bottom-16 left-12"
//         />
//         <Image
//           src="/figma.svg"
//           alt="Figma"
//           width={60}
//           height={60}
//           className="absolute top-[310px] left-[270px]"
//         />

//         {/* Right icons */}
//         <Image
//           src="/archer.svg"
//           alt="Archer"
//           width={80}
//           height={80}
//           className="absolute top-14 right-[200px]"
//         />
//         <Image
//           src="/solana.svg"
//           alt="Solana"
//           width={100}
//           height={100}
//           className="absolute top-28 right-0"
//         />
//         <Image
//           src="/metasploit.svg"
//           alt="Metasploit"
//           width={60}
//           height={60}
//           className="absolute bottom-[140px] right-[220px]"
//         />
//         <Image
//           src="/python.svg"
//           alt="Python"
//           width={100}
//           height={100}
//           className="absolute bottom-14 right-10"
//         />
//       </div>

//       {/* Headline */}
//       <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-6 py-6 max-w-4xl">
//         Your Portfolio is Your Power. <br className="hidden md:inline" />
//         Build One That Stands Out.
//       </h1>

//       {/* Subheading */}
//       <p className="text-gray-600 text-lg mt-4 max-w-2xl">
//         Build, Deploy & Master the Skills That Make You Stand Out
//       </p>

//       {/* CTA Button */}
//       <Link href="/userinfo">
//         <StyledButton
//           className={twMerge(
//             "mt-6 px-6 py-3 text-white text-lg font-medium bg-green-600 rounded-full",
//             "hover:bg-green-700 transition"
//           )}
//         >
//           Join Buildtivite
//         </StyledButton>
//       </Link>
//     </section>
//   );
// }

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import StyledButton from "./StyledButton";
import { twMerge } from "tailwind-merge";

export default function BuildtiviteHero() {
  return (
    <section className="relative w-full flex flex-col items-center text-center py-24 px-6 mt-14">
    {/* Mobile Icons - in progress */}
      <div className="md:hidden relative w-full h-[300px] mb-6">
        <Image
          src="/github.svg"
          alt="GitHub"
          width={60}
          height={60}
          className="absolute top-[20px] left-[20px]"
        />
        <Image
          src="/jira.svg"
          alt="Jira"
          width={50}
          height={50}
          className="absolute top-[80px] left-[100px]"
        />
        <Image
          src="/trello.svg"
          alt="Trello"
          width={60}
          height={60}
          className="absolute bottom-[80px] left-[50px]"
        />
        <Image
          src="/figma.svg"
          alt="Figma"
          width={50}
          height={50}
          className="absolute top-[120px] left-[200px]"
        />
        <Image
          src="/archer.svg"
          alt="Archer"
          width={50}
          height={50}
          className="absolute top-[20px] right-[60px]"
        />
        <Image
          src="/solana.svg"
          alt="Solana"
          width={60}
          height={60}
          className="absolute top-[100px] right-[10px]"
        />
        <Image
          src="/metasploit.svg"
          alt="Metasploit"
          width={40}
          height={40}
          className="absolute bottom-[50px] right-[70px]"
        />
        <Image
          src="/python.svg"
          alt="Python"
          width={50}
          height={50}
          className="absolute bottom-[10px] right-[20px]"
        />
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:block pointer-events-none absolute inset-0 z-[-1]">
        {/* Left icons */}
        <Image
          src="/github.svg"
          alt="GitHub"
          width={120}
          height={120}
          className="absolute top-[140px] left-8"
        />
        <Image
          src="/jira.svg"
          alt="Jira"
          width={80}
          height={80}
          className="absolute top-14 left-[190px]"
        />
        <Image
          src="/trello.svg"
          alt="Trello"
          width={110}
          height={110}
          className="absolute bottom-16 left-12"
        />
        <Image
          src="/figma.svg"
          alt="Figma"
          width={60}
          height={60}
          className="absolute top-[310px] left-[270px]"
        />

        {/* Right icons */}
        <Image
          src="/archer.svg"
          alt="Archer"
          width={80}
          height={80}
          className="absolute top-14 right-[200px]"
        />
        <Image
          src="/solana.svg"
          alt="Solana"
          width={100}
          height={100}
          className="absolute top-28 right-0"
        />
        <Image
          src="/metasploit.svg"
          alt="Metasploit"
          width={60}
          height={60}
          className="absolute bottom-[140px] right-[220px]"
        />
        <Image
          src="/python.svg"
          alt="Python"
          width={100}
          height={100}
          className="absolute bottom-14 right-10"
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mt-6 py-6 max-w-4xl">
        Your Portfolio is Your Power. 
        <br className="hidden md:inline" />
        Build One That Stands Out.
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 text-lg mt-4 max-w-2xl">
        Build, Deploy & Master the Skills That Make You Stand Out
      </p>

      {/* CTA Button */}
      <Link href="/userinfo">
        <StyledButton
          className={twMerge(
            "mt-6 px-6 py-3 text-white text-lg font-medium bg-green-600 rounded-full",
            "hover:bg-green-700 transition"
          )}
        >
          Join Buildtivite
        </StyledButton>
      </Link>
    </section>
  );
}
