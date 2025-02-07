// import Image from "next/image";
// import { twMerge } from "tailwind-merge";


// export default function About() {
//   return (
//     <section className="w-full max-w-6xl mx-auto px-6 py-16 space-y-20">
//       {/* About Us Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left - Image with Floating UI */}
//         <div className="relative">
//           <Image
//             src="/codetivitelearning.png" // Replace with actual image
//             alt="Tech Learner"
//             width={500}
//             height={500}
//             className="rounded-lg"
//           />
//         </div>
//         {/* Right - Text Content */}
//         <div>
//           <h3 className="text-green-600 font-semibold text-lg">About us:</h3>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             codetivite is a new tech learning platform.
//           </h2>
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             You can see us as your career mentor who will be there for you every step of the way.
//             Our goal is to help tech-aspirants transition from new-techies to full-time employees...
//           </p>
//         </div>
//       </div>

//       {/* Our Mission Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left - Text */}
//         <div>
//           <h3 className="text-green-600 font-semibold text-lg">Our commitment to you</h3>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//             Our Mission is to help you as a new Techie.
//           </h2>
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             We help new techies stay patient and consistent in their job search.
//             Our goal is to reduce the time it takes to get hired by 87%...
//           </p>
//         </div>

//         {/* Right - Circular Network */}
//         <div className="relative flex justify-center items-center">
//           <Image src="/learnwithus.png" alt="User" width={500} height={500} className="absolute top-0 left-1/4 rounded-full border" />
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* About Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left - Image (1/3) */}
        <div className="relative lg:col-span-1 flex justify-center">
          <Image
            src="/codetivitelearning.png"
            alt="Tech Learner"
            width={400}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        {/* Right - Text Content (2/3) */}
        <div className="lg:col-span-2">
          <h3 className="text-green-600 font-semibold text-lg">About us:</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Codetivite is a new tech learning platform.
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            You can see us as your career mentor who will be there for you every step of the way.
            Our goal is to help tech-aspirants transition from new-techies to full-time employees...
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left - Text Content (2/3) */}
        <div className="lg:col-span-2">
          <h3 className="text-green-600 font-semibold text-lg">Our commitment to you</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Mission is to help you as a new Techie.
          </h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We help new techies stay patient and consistent in their job search.
            Our goal is to reduce the time it takes to get hired by 87%...
          </p>
        </div>

        {/* Right - Circular Image (1/3) */}
        <div className="relative lg:col-span-1 flex justify-center">
          <Image
            src="/learnwithus.png"
            alt="User"
            width={400}
            height={400}
            className="rounded-full border object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
