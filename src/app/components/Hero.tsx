// "use client";

// import Image from "next/image";
// import StyledButton from "./StyledButton";

// export default function Hero() {
//   const images = [
//     { src: "/empowerment.png", text: "Empowerment" },
//     { src: "/opportunity.png", text: "Opportunity" },
//     { src: "/community.png", text: "Community" },
//   ];

//   return (
//     <div className="relative w-full flex flex-col items-center justify-center text-center py-20 lg:py-40 gap-12">
//       {/* Background Vector */}
//       <div className="absolute inset-0 w-full h-full -z-10">
//         <Image
//           src="/Vector.svg"
//           alt="Background"
//           fill
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* Hero Content */}
//       <div className="flex flex-col items-center gap-4 relative z-10">
//         <h1 className="text-6xl md:text-7xl tracking-tighter text-center font-regular">
//           Land Your Dream Tech Job Fast, EVEN In A Highly Competitive Job Market.
//         </h1>
//         <p className="text-xl font-normal md:text-xl leading-relaxed tracking-tight text-[#575757] max-w-2xl">
//           Join Codetivite And Become The Employer’s Favourite Techie.
//         </p>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
//         {images.map((item, index) => (
//           <div key={index} className="group relative w-full h-64 md:h-72 lg:h-80">
//             <div className="relative h-full w-full rounded-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//               {/* Front Side */}
//               <div className="absolute inset-0 rounded-lg [backface-visibility:hidden]">
//                 <Image
//                   src={item.src}
//                   alt={item.text}
//                   fill
//                   sizes="(max-width: 500px) 90vw, (max-width: 1200px) 50vw, 27vw"
//                   className="object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
//                 />
//                 <div className="font-bold absolute bottom-3 left-0 right-0 text-white text-center py-2">
//                   {item.text}
//                 </div>
//               </div>

//               {/* Back Side */}
//               <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-300/80 text-white text-xl font-bold [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                 {item.text}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call-to-Action Button */}
//       <div className="flex relative z-10">
//         <StyledButton className="w-full bg-[#2AB255] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
//           Get our Free Resources
//         </StyledButton>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import StyledButton from "./StyledButton";
import CardFlip from "./CardFlip";

export default function Hero() {
  const images = [
    { frontImage: "/empowerment.svg", backText: "Empowerment" },
    { frontImage: "/opportunity.svg", backText: "Opportunity" },
    { frontImage: "/community.svg", backText: "Community" },
  ];

  return (
    <div className="relative container w-full flex flex-col items-center justify-center text-center py-10 lg:py-20 gap-4 md:gap-6">
      {/* Background Vector */}
      <div className="absolute -top-2 -left-2 w-full h-full -z-10">
        <Image
          src="/Vector.svg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />
      </div> 

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-4 relative z-10 p-12 md:p-16">
        <h1 className="text-4xl md:text-6xl tracking-tighter text-center font-bold">
          Land Your Dream Tech Job Fast, EVEN In A Highly Competitive Job Market.
        </h1>
        <p className="text-sm font-normal md:text-xl leading-relaxed tracking-tight text-[#575757] max-w-2xl">
          Join Codetivite And Become The Employer’s Favourite Techie.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
        {images.map((item, index) => (
          <CardFlip key={index} {...item} />
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="flex relative z-10">
        <StyledButton className="w-full bg-[#2AB255] text-white px-6 rounded-full hover:bg-green-600 transition">
          Get our Free Resources
        </StyledButton>
      </div>
    </div>
  );
}
