// "use client";

// export default function AboutUs() {
//     return (
//       <section className="w-full py-20 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-12">
//           {/* Heading */}
//           <h5 className="text-green-600 text-lg font-semibold text-center">About us</h5>
//           <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
//             What You Should Know About Us
//           </h2>
  
//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
//             {/* Card 1 */}
//             <div className="bg-green-50 p-6 md:p-8 rounded-xl shadow-sm">
//               <h4 className="text-lg font-semibold">We Understand</h4>
//               <p className="text-gray-600 mt-2">
//                 At Codetivite, we understand your dreams — and your doubts. You want more than
//                 just a job in tech; you crave a career that brings growth, fulfillment, and the
//                 chance to make an impact. But we also know the fears that come with it. You’re
//                 wondering if you’re skilled enough, if your resume stands out, and how to prove
//                 your worth in a sea of competition.
//               </p>
//             </div>
  
//             {/* Card 2 */}
//             <div className="bg-yellow-50 p-6 md:p-8 rounded-xl shadow-sm">
//               <h4 className="text-lg font-semibold">We Will Not Abandon You Halfway</h4>
//               <p className="text-gray-600 mt-2">
//                 And we’re with you every step of the way. Even after the learning ends, our
//                 continuity program keeps the momentum going, so you never stop improving. Even if
//                 you’re just starting or leveling up your career, Codetivite is here to mentor you,
//                 guide you, and give you the real-world tools you need to not just land a job, but
//                 build a future.
//               </p>
//             </div>
  
//             {/* Card 3 */}
//             <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm">
//               <h4 className="text-lg font-semibold">Our Greatest Desire</h4>
//               <p className="text-gray-600 mt-2">
//                 Codetivite aims to be an empowering, innovative, and inclusive career partner that
//                 equips young people with the tools they need for long-term success in tech,
//                 offering more than just education—offering a path to real-world achievement.
//               </p>
//             </div>
  
//             {/* Card 4 */}
//             <div className="bg-blue-50 p-6 md:p-8 rounded-xl shadow-sm">
//               <h4 className="text-lg font-semibold">Codetivite is More Than a Learning Platform</h4>
//               <p className="text-gray-600 mt-2">
//                 Codetivite is more than a learning platform; we’re your career partner. We don’t
//                 just teach you the skills you need—we give you the real-life experience that sets
//                 you apart. Through immersive projects, mentorship from industry professionals, and
//                 hands-on learning that mirrors the demands of the tech world, we equip you with
//                 more than knowledge. We arm you with confidence, a strong portfolio, and the soft
//                 skills employers are truly looking for.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
  

"use client";

export default function AboutUs() {
  return (
    <section className="mt-6 w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <h5 className="text-green-600 text-lg font-semibold text-center">About us</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          What You Should Know About Us
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-10">
          {/* Card 1 (5/12) */}
          <div className="bg-green-50 p-6 md:p-8 rounded-xl shadow-sm md:col-span-5">
            <h4 className="text-lg font-semibold">We Understand</h4>
            <p className="text-gray-600 mt-2">
              At Codetivite, we understand your dreams — and your doubts. You want more than
              just a job in tech; you crave a career that brings growth, fulfillment, and the
              chance to make an impact. But we also know the fears that come with it. You’re
              wondering if you’re skilled enough, if your resume stands out, and how to prove
              your worth in a sea of competition.
            </p>
          </div>

          {/* Card 2 (7/12) */}
          <div className="bg-yellow-50 p-6 md:p-8 rounded-xl shadow-sm md:col-span-7">
            <h4 className="text-lg font-semibold">We Will Not Abandon You Halfway</h4>
            <p className="text-gray-600 mt-2">
              And we’re with you every step of the way. Even after the learning ends, our
              continuity program keeps the momentum going, so you never stop improving. Even if
              you’re just starting or leveling up your career, Codetivite is here to mentor you,
              guide you, and give you the real-world tools you need to not just land a job, but
              build a future.
            </p>
          </div>

          {/* Card 3 (7/12) */}
          <div className="bg-gray-100 p-6 md:p-8 rounded-xl shadow-sm md:col-span-7">
            <h4 className="text-lg font-semibold">Our Greatest Desire</h4>
            <p className="text-gray-600 mt-2">
              Codetivite aims to be an empowering, innovative, and inclusive career partner that
              equips young people with the tools they need for long-term success in tech,
              offering more than just education—offering a path to real-world achievement.
            </p>
          </div>

          {/* Card 4 (5/12) */}
          <div className="bg-blue-50 p-6 md:p-8 rounded-xl shadow-sm md:col-span-5">
            <h4 className="text-lg font-semibold">Codetivite is More Than a Learning Platform</h4>
            <p className="text-gray-600 mt-2">
              Codetivite is more than a learning platform; we’re your career partner. We don’t
              just teach you the skills you need—we give you the real-life experience that sets
              you apart. Through immersive projects, mentorship from industry professionals, and
              hands-on learning that mirrors the demands of the tech world, we equip you with
              more than knowledge. We arm you with confidence, a strong portfolio, and the soft
              skills employers are truly looking for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
