import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import AboutImage from "../../public/images/aboutme.png";
import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className=" flex items-start justify-center -mt-32" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center md:gap-3 -mb-28 md:-mb-0">
            <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
              About Me
            </h1>
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
              A glimpse into my world
            </p>
          </div>
        }
      >
        <Image
          src={AboutImage}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
          draggable={false}
        />
        <Image
          src={AboutImageMobile}
          alt="hero"
          height={720}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-left md:hidden "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
