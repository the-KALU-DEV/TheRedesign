// "use client"

// import Image from "next/image";

// export default function Hero ()  {
//     const images = [
//         { src: "/empowerment.png", text: "Empowerment" },
//         { src: "/opportunity.png", text: "Opportunity" },
//         { src: "/community.png", text: "Community" },
//       ];

//     return (
//         <div className="w-full">
//             <div className="container mx-auto max-h-full">
//                 <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
//                     <div className="flex gap-4 flex-col items-center">
//                     <h1 className="text-6xl md:text-7xl tracking-tighter text-center font-regular">
//                         Land Your Dream Tech Job Fast, EVEN In A Highly Competitive Job Market.
//                     </h1>
//                     <p className="text-xl font-noral md:text-xl leading-relaxed tracking-tight text-[#575757] max-w-2xl text-center">
//                         Join Codetivite And Become The Employer’s  Favourite Techie
//                     </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
//                         {images.map((item, index) => (
//                         <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
//                             <Image
//                             src={item.src}
//                             alt={item.text}
                            
//                             fill
//                             className="object-cover w-full h-full"
//                             />
//                             <div className="absolute bottom-4 left-0 right-0 bg-opacity-50 text-white text-center py-2">
//                             {item.text}
//                         </div>
//                     </div>
//                     ))}
//                     </div>
//                     <div className="flex flex-row gap-3">
//                     <button className="w-full bg-[#2AB255] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
//                         Get our Free Resources
//                     </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import Image from "next/image";

export default function Hero() {
  const images = [
    { src: "/empowerment.png", text: "Empowerment" },
    { src: "/opportunity.png", text: "Opportunity" },
    { src: "/community.png", text: "Community" },
  ];

  return (
    // <div className="w-full px-2 sm:px-2 py-4">
    //   <div className="container mx-auto max-h-full">
        <div className="container mx-auto ax-h-full w-full flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-6xl md:text-7xl tracking-tighter text-center font-regular">
              Land Your Dream Tech Job Fast, EVEN In A Highly Competitive Job Market.
            </h1>
            <p className="text-xl font-normal md:text-xl leading-relaxed tracking-tight text-[#575757] max-w-2xl text-center">
              Join Codetivite And Become The Employer’s Favourite Techie
            </p>
          </div>
 
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
            {images.map((item, index) => (
              <div key={index} className="relative w-full h-64 rounded-lg overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.text}
                  fill
                  sizes="(max-width: 500px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Image Overlay Text */}
                <div className="absolute bottom-3 left-0 right-0 text-white text-center py-2">
                  {item.text}
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex flex-row gap-3">
            <button className="w-full bg-[#2AB255] text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Get our Free Resources
            </button>
          </div>
        </div>
    //  </div>
    //  </div>
  );
}
