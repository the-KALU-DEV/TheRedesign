// import Image from "next/image";

// export default function Testimonials() {
//   return (
//     <section className="w-full py-20 bg-gray-50">
//       <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Image */}
//         <div className="flex justify-center">
//           <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
//             <Image
//               src="/testimonial-image.png"
//               alt="Testimonial"
//               layout="fill"
//               objectFit="contain"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div>
//           <h5 className="text-green-600 text-lg font-semibold">Testimonials</h5>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Success Story</h2>

//           {/* Profile */}
//           <div className="flex items-center gap-4 mt-6">
//             <Image
//               src="/james-emmanuella.jpg"
//               alt="James Emmanuella"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <div>
//               <h4 className="text-lg font-semibold">James Emmanuella</h4>
//               <p className="text-gray-500 text-sm">Product Designer, Cohort 2</p>
//             </div>
//           </div>

//           {/* Testimonial Text */}
//           <p className="text-gray-600 mt-4 leading-relaxed">
//             You can see us as your career mentor who will be there for you every step of the way. 
//             And this is why: Our single aim is to help tech-aspirants transition from new-techies 
//             to become full-time employees of reputable brands across Africa and the world.  
//           </p>

//           {/* Pagination Dots */}
//           <div className="flex items-center gap-2 mt-6">
//             <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//             <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//             <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//             <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "James Emmanuella",
    role: "Product Designer, Cohort 2",
    image: "/james-emmanuella.jpg",
    feedback:
      "You can see us as your career mentor who will be there for you every step of the way. Our single aim is to help tech-aspirants transition from new-techies to full-time employees of reputable brands across Africa and the world.",
  },
  {
    name: "Ada Johnson",
    role: "Software Engineer, Cohort 5",
    image: "/ada-johnson.jpg",
    feedback:
      "The mentorship I received helped me land a high-paying tech job in just a few months. The program's structure and guidance were invaluable.",
  },
  {
    name: "Michael Chinedu",
    role: "Product Manager, Cohort 3",
    image: "/michael-chinedu.jpg",
    feedback:
      "Navigating the tech job market was tough, but with the right support and guidance, I was able to break in and thrive!",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h5 className="text-green-600 text-lg font-semibold text-center">Testimonials</h5>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Our Success Story
        </h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation={true}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Image */}
                <div className="flex justify-center">
                  <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
                    <Image
                      src="/testimonial-image.png"
                      alt="Testimonial"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div>
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
