import { EvervaultCard } from "@/components/ui/evervault-card";
import {
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

  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6 ">
        My Experience{" "}
      </h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8  max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div
        id="experience"
        className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-3/4 mx-auto"
      >
        {experience.map((item) => (
          <div className="border border-white" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
