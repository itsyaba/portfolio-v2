"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [counter, setCounter] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [loaderPhase, setLoaderPhase] = useState<"counting" | "transforming" | "exiting">(
    "counting"
  );

  useEffect(() => {
    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 increments * 50ms)

    // Phase transitions
    setTimeout(() => setLoaderPhase("transforming"), 6000);
    setTimeout(() => setLoaderPhase("exiting"), 7000);
    setTimeout(() => {
      setShowLoader(false);
      onComplete?.();
    }, 8000);

    return () => clearInterval(counterInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full bg-gray-950 fixed top-0 left-0 text-white pointer-events-none z-50 flex items-center justify-center font-cursive"
        >
          {/* Counter */}
          <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={
              loaderPhase === "transforming" || loaderPhase === "exiting"
                ? { y: -150, opacity: 0 }
                : { y: 0, opacity: 1 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed left-12 bottom-12 text-8xl font-normal tabular-nums"
          >
            {counter.toString().padStart(3, "0")}
          </motion.div>

          {/* Loader Container */}
          <motion.div
            initial={{ scale: 1, rotate: 0, y: 0, x: 0 }}
            animate={
              loaderPhase === "exiting"
                ? { scale: 40, rotate: 45, y: 500, x: 2000 }
                : { scale: 1, rotate: 0, y: 0, x: 0 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2  flex"
          >
            {/* Loader Background */}
            <motion.div
              initial={{ backgroundColor: "#6b7280" }}
              animate={
                loaderPhase === "transforming" || loaderPhase === "exiting"
                  ? { backgroundColor: "transparent" }
                  : { backgroundColor: "#6b7280" }
              }
              transition={{ duration: 0.1 }}
              className="absolute inset-0"
            />

            {/* Loader Bar 1 */}
            <motion.div
              initial={{ width: 0, rotate: 0, y: 0 }}
              animate={{
                width: loaderPhase === "counting" ? "200px" : "200px",
                rotate: loaderPhase === "transforming" || loaderPhase === "exiting" ? 90 : 0,
                y: loaderPhase === "transforming" || loaderPhase === "exiting" ? -50 : 0,
              }}
              transition={{
                width: { duration: 6, ease: "easeInOut" },
                rotate: { duration: 0.5, delay: loaderPhase === "transforming" ? 0 : 0 },
                y: { duration: 0.5, delay: loaderPhase === "transforming" ? 0 : 0 },
              }}
              className="bar relative bg-white h-[50px] z-10"
            />

            {/* Loader Bar 2 */}
            <motion.div
              initial={{ width: 0, x: 0, y: 0 }}
              animate={{
                width: counter > 38 ? "100px" : 0,
                x: loaderPhase === "transforming" || loaderPhase === "exiting" ? -75 : 0,
                y: loaderPhase === "transforming" || loaderPhase === "exiting" ? 75 : 0,
              }}
              transition={{
                width: { duration: 4.1, ease: "easeInOut" },
                x: { duration: 0.5, delay: loaderPhase === "transforming" ? 0 : 0 },
                y: { duration: 0.5, delay: loaderPhase === "transforming" ? 0 : 0 },
              }}
              className="bar relative bg-white h-[50px] z-10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
