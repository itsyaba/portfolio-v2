"use client";
import { AboutSection } from "@/sections/About";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/sections/Header";
import HeroV2 from "@/sections/Hero-v2";
import Tape from "@/sections/Tape";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const notifyVisit = async () => {
      try {
        await fetch("/api/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: window.location.pathname,
          }),
          keepalive: true,
        });
      } catch {
      }
    };

    void notifyVisit();
  }, []);

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
