"use client";

import StyledButton from "./StyledButton";

export default function PreFooter() {
  return (
    <section className="relative w-full flex justify-center px-6 sm:px-12 mt-16">
      {/* Background container */}
      <div className="relative w-full max-w-screen-xl bg-blue-600 text-white rounded-[40px] px-8 sm:px-16 py-20 flex flex-col items-center text-center">
        {/* Background abstract shapes (FIXED: added pointer-events-none) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-40px] left-[-40px] w-48 h-48 bg-blue-500 opacity-40 rounded-lg rotate-45"></div>
          <div className="absolute top-20 right-[-30px] w-48 h-48 bg-blue-500 opacity-40 rounded-lg rotate-45"></div>
          <div className="absolute bottom-[-40px] left-10 w-48 h-48 bg-blue-500 opacity-40 rounded-lg rotate-45"></div>
        </div>

        {/* Content */}
        <h1 className="text-3xl sm:text-5xl font-bold relative">
          Join other creatives at Codetivite <br className="hidden sm:block" />
          to create amazing projects.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 relative">
          If our training program is a photo, then we have 'cropped out' our curriculum
          to cut out all the ugly-time-wasting and unnecessary parts to teach you only
          the juicy part that you need to succeed in the real world.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 relative">
          <StyledButton>
            Get started
          </StyledButton>
          <StyledButton muted>
            Contact us
          </StyledButton>
        </div>
      </div>
    </section>
  );
}
