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

const ARRIVAL_SESSION_KEY = "portfolio_visit_arrival_sent";
const MAX_TRACKED_CLICKS = 25;

type TrackedClick = {
  label: string;
  href?: string;
  section?: string;
  elapsedMs: number;
};

function postVisit(body: Record<string, unknown>) {
  const payload = JSON.stringify(body);
  if (typeof navigator !== "undefined" && navigator.sendBeacon) {
    const blob = new Blob([payload], { type: "application/json" });
    return navigator.sendBeacon("/api/visit", blob);
  }
  fetch("/api/visit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  }).catch(() => {});
  return true;
}

export default function HomePageClient() {
  const [showContent, setShowContent] = useState(false);

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
    const visitStartedAt = performance.now();
    const clicks: TrackedClick[] = [];

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

    const getReadableText = (value: string | null | undefined) =>
      value?.replace(/\s+/g, " ").trim().slice(0, 80) || "";

    const getClickTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return null;
      }

      return (
        target.closest<HTMLElement>("[data-visit-click]") ||
        target.closest<HTMLElement>("a, button, [role='button']")
      );
    };

    const getContainingSectionId = (element: HTMLElement) =>
      sections.find((section) => section.contains(element))?.id;

    const getClickLabel = (element: HTMLElement) => {
      const explicitLabel = getReadableText(element.dataset.visitClick);
      if (explicitLabel) {
        return explicitLabel;
      }

      const label =
        getReadableText(element.getAttribute("aria-label")) ||
        getReadableText(element.textContent) ||
        getReadableText(element.getAttribute("title"));

      if (!label || label.toLowerCase() === "toggle menu") {
        return null;
      }

      return label;
    };

    const handleClick = (event: MouseEvent) => {
      if (clicks.length >= MAX_TRACKED_CLICKS) {
        return;
      }

      const element = getClickTarget(event.target);
      if (!element) {
        return;
      }

      const label = getClickLabel(element);
      if (!label) {
        return;
      }

      const link = element.closest<HTMLAnchorElement>("a[href]");
      clicks.push({
        label,
        href: link?.href,
        section: getContainingSectionId(element),
        elapsedMs: performance.now() - visitStartedAt,
      });
    };

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

      postVisit({
        arrival: false,
        page: window.location.pathname,
        referrer: document.referrer || undefined,
        sections: sectionEntries,
        totalMs,
        clicks,
      });
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

    let shouldSendArrival = true;
    try {
      if (typeof sessionStorage !== "undefined") {
        if (sessionStorage.getItem(ARRIVAL_SESSION_KEY)) {
          shouldSendArrival = false;
        } else {
          sessionStorage.setItem(ARRIVAL_SESSION_KEY, "1");
        }
      }
    } catch {
      /* private mode / blocked storage — still send one arrival this load */
    }
    if (shouldSendArrival) {
      queueMicrotask(() => {
        postVisit({
          arrival: true,
          page: window.location.pathname,
          sections: [],
          totalMs: 0,
        });
      });
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendSummary();
      }
    };

    window.addEventListener("pagehide", sendSummary);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("click", handleClick, { capture: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pagehide", sendSummary);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [showContent]);

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
