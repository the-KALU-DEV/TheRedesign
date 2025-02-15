"use client";

import Hero from './components/Hero';
import About from './components/About';
import Features from "./components/Features";
import CourseTracks from "./components/CourseTracks";
import Testimonials from "./components/Testimonials";
import FAQ from './components/FAQ';

export default function Home() {
  return (
        <>
          <Hero />
          <About />
          <Features />
          <CourseTracks />
          <Testimonials />
          <FAQ />
        </>
  );
}
