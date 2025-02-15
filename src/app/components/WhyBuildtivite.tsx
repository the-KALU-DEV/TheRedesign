"use client"

import ImageWithText from "./ImageWithText";

export default function WhyBuildtivite() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <ImageWithText
        imageSrc="/WhyBuildtivite.svg"
        imageAlt="Why Buildtivite"
        title="Why Buildtivite?"
        description="NO MORE portfolio projects—build a project and watch people use it in real time. 
        Most internships have you working on 'portfolio projects' that never see the light of day. 
        At Buildtivite, you’ll build, deploy, and maintain real open-source tools that developers and companies can actually use. 
        
        Master future-proof skills, not outdated tech stacks. We focus on AI, Blockchain, DevOps, Cybersecurity, and 
        Technical Documentation—the skills that will shape tech in 2025 and beyond.

        We connect you with industry mentors, hiring partners, and real-world challenges that make your resume stand out."
        
      />
    </section>
  );
}
