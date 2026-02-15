"use client";

import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { ContactSection } from "@/sections/Contact";
import { useEffect, useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/sections/Header";
import HeroV2 from "@/sections/Hero-v2";
import Tape from "@/sections/Tape";
import Loader from "@/components/Loader";

export default function HomePageClient() {
  useEffect(() => {
    const sectionIds = ["hero", "about", "experience", "tape", "projects", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sections.length) {
      return;
    }

    const timings = new Map<string, number>();
    const ratios = new Map<string, number>();
    let activeSectionId: string | null = null;
    let lastChange = performance.now();
    let hasSent = false;

    const addTime = (sectionId: string, now: number) => {
      const current = timings.get(sectionId) ?? 0;
      timings.set(sectionId, current + (now - lastChange));
    };

    const setActiveSection = (nextId: string | null, now: number) => {
      if (nextId === activeSectionId) {
        return;
      }

      if (activeSectionId) {
        addTime(activeSectionId, now);
      }

      activeSectionId = nextId;
      lastChange = now;
    };

    const roundToNearest = (value: number, step: number) => Math.round(value / step) * step;

    const sendSummary = () => {
      if (hasSent) {
        return;
      }

      hasSent = true;
      const now = performance.now();

      if (activeSectionId) {
        addTime(activeSectionId, now);
      }

      const sectionEntries = Array.from(timings.entries())
        .map(([id, ms]) => ({ id, ms: roundToNearest(ms, 5000) }))
        .filter((entry) => entry.ms > 0);

      const totalMs = roundToNearest(
        sectionEntries.reduce((sum, entry) => sum + entry.ms, 0),
        5000,
      );

      const payload = JSON.stringify({
        page: window.location.pathname,
        sections: sectionEntries,
        totalMs,
      });

      if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "application/json" });
        navigator.sendBeacon("/api/visit", blob);
      } else {
        fetch("/api/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          ratios.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        const now = performance.now();
        const sorted = Array.from(ratios.entries()).sort((a, b) => b[1] - a[1]);
        const next = sorted.length && sorted[0][1] > 0.4 ? sorted[0][0] : null;
        setActiveSection(next, now);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => {
      ratios.set(section.id, 0);
      observer.observe(section);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendSummary();
      }
    };

    window.addEventListener("pagehide", sendSummary);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("pagehide", sendSummary);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  ``;

  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <Loader onComplete={() => handleLoaderComplete()} />
      {showContent && (
        <>
          <CustomCursor />
          <Header />
          <HeroV2 />
          <AboutSection />
          <Experience />
          <Tape />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </>
  );
}
