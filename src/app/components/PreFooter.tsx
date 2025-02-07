"use client"

export default function PreFooter(){
    return (
      <section className="relative w-full flex justify-center px-6 sm:px-12 mt-16">
        {/* Background container */}
        <div className="relative w-full max-w-screen-xl bg-blue-600 text-white rounded-[40px] px-8 sm:px-16 py-20 flex flex-col items-center text-center overflow-hidden">
          {/* Background abstract shapes */}
          <div className="absolute inset-0">
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
          <div className="mt-8 flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-lg">
              Get started
            </button>
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-6 py-3 rounded-full shadow-lg">
              Contact us
            </button>
          </div>
        </div>
      </section>
    );
  };
  

  