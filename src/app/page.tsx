"use client";
import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import Loader from "@/components/Loader";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };
  return (
    <div>
      <Loader onComplete={handleLoaderComplete} />
      {showContent && (
        <>
          <CustomCursor />
          <Header />
          <HeroSection />
          <AboutSection />
          <Experience />
          <TapeSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
}
