// "use client";

// import FAQ from "./FAQ"; 

// const faqs = [
//     {
//       question: "Why is your price very cheap compared to other tech learning platforms?",
//       answer: `You're right. We are aware of this and we are okay with it. Here’s why:
//       - Codetivite is a new learning platform. This is an opportunity for our first batch of students to take advantage before prices go up.
//       - We see tech as a wealth opportunity, and tuition shouldn’t be a barrier.`,
//     },
//     {
//       question: "I absolutely have zero knowledge of tech. Can I apply?",
//       answer: "Yes! Our programs are designed for beginners and experienced learners alike.",
//     },
//     {
//       question: "Are classes virtual (online) or physical?",
//       answer: "Our classes are primarily online, with mentorship and hands-on projects.",
//     },
//     {
//       question: "I'm still a student. Can I apply?",
//       answer: "Yes! Students, professionals, and career changers are all welcome.",
//     },
//     {
//       question: "I would like to know the learning system at Codetivite?",
//       answer: "We offer structured learning paths, real-world projects, and mentorship.",
//     },
//     {
//       question: "Do I need a degree to succeed/get a job in tech?",
//       answer: "No. Many successful developers and designers started without formal degrees.",
//     },
//     {
//       question: "Will I need to pay to get my tech certificate?",
//       answer: "No, the certification is included in the program at no extra cost.",
//     },
//     {
//       question: "Will I get a job right after graduating?",
//       answer: "While we can't guarantee immediate placement, we equip you with job-ready skills.",
//     },
//     {
//       question: "I have been rejected a lot of times before. How does your program help?",
//       answer: "We offer mentorship, portfolio-building, and interview prep to improve your chances.",
//     },
// ];

// export default function HomeFAQ() {
//   return (
//     <section className="container w-full py-20 bg-white">
//         <div>
//           <FAQ
//             faqs={faqs}
//             fullWidth={true}
//             iconColor="text-blue-600" 
//             bgColor="bg-gray-100" 
//             defaultOpenIndex={0}
//           />
//         </div>    
//     </section>
//   );
// }

"use client";

import FAQ from "./FAQ";
import { twMerge } from 'tailwind-merge';
import TitleSubtitle from "./TitleSubtitle";

const faqs = [
  {
    question: "Why is your price very cheap compared to other tech learning platforms?",
    answer: `You're right. We are aware of this and we are okay with it. Here’s why:
    - Codetivite is a new learning platform. This is an opportunity for our first batch of students to take advantage before prices go up.
    - We see tech as a wealth opportunity, and tuition shouldn’t be a barrier.`,
  },
  {
    question: "I absolutely have zero knowledge of tech. Can I apply?",
    answer: "Yes! Our programs are designed for beginners and experienced learners alike.",
  },
  {
    question: "Are classes virtual (online) or physical?",
    answer: "Our classes are primarily online, with mentorship and hands-on projects.",
  },
  {
    question: "I'm still a student. Can I apply?",
    answer: "Yes! Students, professionals, and career changers are all welcome.",
  },
  {
    question: "I would like to know the learning system at Codetivite?",
    answer: "We offer structured learning paths, real-world projects, and mentorship.",
  },
  {
    question: "Do I need a degree to succeed/get a job in tech?",
    answer: "No. Many successful developers and designers started without formal degrees.",
  },
  {
    question: "Will I need to pay to get my tech certificate?",
    answer: "No, the certification is included in the program at no extra cost.",
  },
  {
    question: "Will I get a job right after graduating?",
    answer: "While we can't guarantee immediate placement, we equip you with job-ready skills.",
  },
  {
    question: "I have been rejected a lot of times before. How does your program help?",
    answer: "We offer mentorship, portfolio-building, and interview prep to improve your chances.",
  },
];

export default function HomeFAQ() {
  return (
    <section className={twMerge("py-16 bg-white px-30 lg:px-32", true ? "w-full " : "container mx-auto")}>
      <TitleSubtitle title="FAQs" centered />
        <FAQ
          faqs={faqs}
          fullWidth={true}
          iconColor="text-green-600"
          bgColor="bg-gray-100"
          defaultOpenIndex={0}
        />    
    </section>
  );
}
