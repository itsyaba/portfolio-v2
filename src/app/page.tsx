import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";

import { Experience } from "@/sections/Experience";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <Experience />
      <ProjectsSection />
    </div>
  );
}
