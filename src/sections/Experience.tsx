import { EvervaultCard } from "@/components/ui/evervault-card";
import { Timeline } from "@/components/ui/timeline";
import {
  IconBrandFramerMotion,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconGitPullRequest,
  IconGrain,
  IconSql,
} from "@tabler/icons-react";
import Image from "next/image";

import tigat from "../../public/images/tigat.png";
import nileode from "../../public/images/nileode-home.png";
import dideco from "../../public/images/dideco.png";
import mojo from "../../public/images/mojo.png";

import calmify from "../../public/images/calmify-home.png";
import calmifyChat from "../../public/images/ai-chat.png";
import feature from "../../public/images/feature.png";
import calmifyFaq from "../../public/images/calmify-faq.png";

export const Experience = () => {
  const experience = [
    {
      name: "Next.Js",
      logo: <IconBrandNextjs size={100} stroke={1.25} />,
    },
    {
      name: "Typescript",
      logo: <IconBrandTypescript size={100} stroke={1.25} />,
    },
    {
      name: "Javascript",
      logo: <IconBrandJavascript size={100} stroke={1.25} />,
    },
    {
      name: "React",
      logo: <IconBrandReact size={100} stroke={1.25} />,
    },
    {
      name: "Framer Motion",
      logo: <IconBrandFramerMotion size={100} stroke={1.25} />,
    },
    {
      name: "Redux",
      logo: <IconBrandRedux size={100} stroke={1.25} />,
    },
    {
      name: "React Query",
      logo: <IconBrandReactNative size={100} stroke={1.25} />,
    },
    {
      name: "Tailwind",
      logo: <IconBrandTailwind size={100} stroke={1.25} />,
    },

    {
      name: "Node.Js",
      logo: <IconBrandNodejs size={100} stroke={1.25} />,
    },
    {
      name: "MongoDB",
      logo: <IconBrandMongodb size={100} stroke={1.25} />,
    },
    {
      name: "Express",
      logo: <IconGrain size={100} stroke={1.25} />,
    },
    {
      name: "Prisma",
      logo: <IconBrandPrisma size={100} stroke={1.25} />,
    },
    {
      name: "Sql",
      logo: <IconSql size={100} stroke={1.25} />,
    },
    {
      name: "Git",
      logo: <IconGitPullRequest size={100} stroke={1.25} />,
    },
    {
      name: "Mantine UI",
      logo: <IconBrandMantine size={100} stroke={1.25} />,
    },
  ];

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h1 className="text-3xl md:text-5xl mb-6  font-serif">Nileode Technologies</h1>
          <p className=" text-xs md:text-[14px] font-normal mb-8 font-poppins leading-relaxed">
            At Nileode Technologies, I played a key role as a fullstack developer in the development
            of Tigat.net, an LMS platform, ensuring a seamless and interactive learning experience.
            Additionally, I designed and built websites for Nileode, Dideco North America, HUHT
            Orphanage, and The Mojo Effect, implementing Framer Motion and GSAP to enhance visual
            storytelling and engagement.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src={tigat}
              alt="Tigat"
              width={500}
              height={500}
              className="rounded-lg object-coverh-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={nileode}
              alt="Nileode"
              width={500}
              height={500}
              className="rounded-lg object-coverh-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={dideco}
              alt="dideco"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={mojo}
              alt="mojo"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <h1 className="text-3xl md:text-5xl mb-6 font-serif">Go2Cod</h1>
          <p className=" text-xs md:text-sm font-normal mb-8">
            As the Frontend Lead at Go2Cod, I was responsible for designing and developing Calmify,
            an AI-powered therapy platform aimed at enhancing mental health support. The project won
            first place in a competition spanning all of Africa, showcasing innovation in AI-driven
            wellness solutions.
          </p>
          {/* <div className="grid grid-cols-2 gap-4">
            <Image
              src={calmify}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={calmifyChat}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={feature}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={calmifyFaq}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div> */}
        </div>
      ),
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center  overflow-clip " id="experience">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6 ">My Experience </h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8  max-w-2xl mx-auto">
        Here are some of my professional projects, showcasing my skills in fullstack development,
        UI/UX design.
      </p>
      {/* <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8  max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p> */}
      <div className="w-full ">
        <Timeline data={data} />
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-3/4 mx-auto">
        {experience.map((item) => (
          <div className="border border-white" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
