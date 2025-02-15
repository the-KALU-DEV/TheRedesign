"use client";

import Hero from './components/Hero';
import About from './components/About';
import Features from "./components/Features";
import CourseTracks from "./components/CourseTracks";
import Testimonials from "./components/Testimonials";
import HomeFAQ from './components/HomeFAQ';

export default function Home() {
  return (
        <>
          <Hero />
          <About />
          <Features />
          <CourseTracks />
          <Testimonials />
          <HomeFAQ />
        </>
  );
}
