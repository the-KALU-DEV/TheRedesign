"use client";

import StyledButton from "./StyledButton";

export default function PreFooter() {
  return (
    <section className="relative w-full flex justify-center px-4 sm:px-12 mt-16">
      {/* Background container */}
      <div className="relative rounded-t-xl md:rounded-t-2xl w-full bg-blue-600 text-white px-6 sm:px-16 py-20 flex flex-col items-center text-center ">

        {/* Content */}
        <h1 className="text-3xl sm:text-5xl font-bold relative max-w-4xl">
          Join other creatives at Codetivite <br className="hidden sm:block" />
          to create amazing projects.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/90 relative">
          If our training program is a photo, then we have 'cropped out' our curriculum
          to cut out all the ugly-time-wasting and unnecessary parts to teach you only
          the juicy part that you need to succeed in the real world.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 relative w-full sm:w-auto">
          <StyledButton className="w-full sm:w-auto">Get started</StyledButton>
          <StyledButton className="w-full sm:w-auto" muted>
            Contact us
          </StyledButton>
        </div>
      </div>
    </section>
  );
}
