"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const interactiveElements = useRef<NodeListOf<Element>>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    let ctx: gsap.Context;
    let animation: gsap.core.Tween;

    if (!cursor || !cursorFollower) return;

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // GSAP context for better cleanup
    // eslint-disable-next-line prefer-const
    ctx = gsap.context(() => {
      animation = gsap.to(
        {},
        {
          duration: 0.016,
          repeat: -1,
          onRepeat: () => {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(cursorFollower, {
              css: {
                left: posX - 11,
                top: posY - 11,
              },
            });

            gsap.set(cursor, {
              css: {
                left: mouseX,
                top: mouseY,
              },
            });
          },
        }
      );
    });

    // Cursor interaction handlers
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 0, opacity: 0.005, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 3, opacity: 0.9, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(cursorFollower, { scale: 1, opacity: 0.3, duration: 0.3 });
    };

    const handleClick = () => {
      gsap.to(cursor, {
        scale: 100,
        duration: 0.5,
        onComplete: () => {
          gsap.to(cursor, { scale: 1, duration: 0.5 });
        },
      });
    };

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.body.style.cursor = "none";

    // Initialize interactive elements
    const elements = document.querySelectorAll("a, button, [data-cursor-hover]");
    (interactiveElements as any).current = elements;
    elements.forEach((element) => {
      if (element) {
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);
        element.addEventListener("click", handleClick);
      }
    });

    // Cleanup
    return () => {
      ctx.revert();
      animation?.kill();
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";

      // eslint-disable-next-line react-hooks/exhaustive-deps
      interactiveElements.current?.forEach((element) => {
        if (element) {
          element.removeEventListener("mouseenter", handleMouseEnter);
          element.removeEventListener("mouseleave", handleMouseLeave);
          element.removeEventListener("click", handleClick);
        }
      });
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="hidden  md:block fixed w-[10px] h-[10px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference transition-[transform,opacity] duration-300 ease-linear"
      />
      <div
        ref={cursorFollowerRef}
        className="hidden md:block fixed w-8 h-8 bg-white rounded-full pointer-events-none z-[99] opacity-30 mix-blend-difference transition-[transform,opacity] duration-[0.6s] ease-[cubic-bezier(0.75,-1.27,0.3,2.33)]"
      />
    </>
  );
}
