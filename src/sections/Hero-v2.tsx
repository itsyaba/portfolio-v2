import Hyperspeed from "@/components/Hyperspeed";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import memojiImage from "../../public/images/memoji-computer.png";

const HeroV2 = () => {
  return (
    <div className="relative h-screen overflow-hidden" id="hero">
      <div className="container absolute inset-0 z-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center ">
          <Image
            src={memojiImage}
            alt="person peeking from behind laptop"
            className="size-[100px] rounded-full"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div>Available for new projects</div>
          </div>
        </div>
        <div className=" mx-auto">
          <h1 className="font-cursive md:text-8xl text-5xl text-center mt-8 tracking-wide">
            Hi. I&apos;m Yeabsira.
          </h1>
          {/* <h1 className="font-serif text-xl text-center">A Developer.</h1> */}
          <p className="text-center mt-4 text-white/60 md:text-lg">
            I specialize in transforming designs into functional, high-performance , scalable
            websites and web applications.
          </p>
        </div>

        <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-4 relative z-10">
          <Link href="#projects">
            <HoverBorderGradient
              containerClassName="rounded-full"
              className="bg-white text-black flex items-center space-x-2"
            >
              <span>Explore My Work</span>

              <ArrowDown className="size-4" />
            </HoverBorderGradient>
          </Link>
          <Link href="/resume.pdf" download="yeabsira.pdf">
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:cursor-pointer z-10">
              My Resume
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="h-full w-full m">
          <Hyperspeed
            effectOptions={{
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [12, 80],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 526344,
                islandColor: 657930,
                background: 0,
                shoulderLines: 1250072,
                brokenLines: 1250072,
                leftCars: [14177983, 6770850, 12732332],
                rightCars: [242627, 941733, 3294549],
                sticks: 242627,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroV2;
