"use client";

import { twMerge } from "tailwind-merge";
import FAQ from "./FAQ";

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

export default function BuildtiviteFAQ() {
    return (
        <section className={twMerge("py-16 bg-gray-50 px-30 lg:px-32", true ? "w-full " : "container mx-auto")}>
          <h5 className="text-green-600 text-lg font-semibold text-center">FAQs</h5>
          <div>
            <FAQ
              faqs={faqs}
              fullWidth={true}
              iconColor="text-blue-600"
              bgColor="bg-gray-100"
              defaultOpenIndex={0}
            />
          </div>    
        </section>
      );
}
