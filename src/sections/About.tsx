import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import AboutImage from "../../public/images/aboutme.png";
import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className=" flex items-start justify-center -mt-36" id="about">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center md:gap-8">
            <h1 className="text-4xl md:text-[6rem] font-bold  font-cursive ">
              About Me
            </h1>
            <p className="capitalize text-2xl md:text-3xl font-fredoka  font-medium md:pt-4 pt-2 -mb-14 md:mb-2 italic">
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
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left md:hidden "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
