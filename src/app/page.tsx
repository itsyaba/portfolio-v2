"use client";
import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import Loader from "@/components/Loader";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/sections/Header";
import HeroV2 from "@/sections/Hero-v2";
import Tape from "@/sections/Tape";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };
  return (
    <div>
      {/* <Loader onComplete={handleLoaderComplete} /> */}
      {/* {showContent && ( */}
      <>
        <CustomCursor />
        <Header />
        {/* <HeroSection /> */}
        <HeroV2 />
        <AboutSection />
        <Experience />
        <Tape />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}
