"use client";
// import { ArrowRightIcon } from "lucide-react";
import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import darkSaaSLandingPage from "../../public/images/dark-saas-landing-page.png";

import grainImage from "../../public/images/grain.jpg";
import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { div } from "framer-motion/client";
import { IconBrandGithub } from "@tabler/icons-react";
import { Card } from "@/components/Card";

const projects = [
  {
    name: "Cypress",
    description:
      "This project is a simplified clone of the popular productivity application, Notion. It's designed to replicate some of the core features of Notion, providing a platform where users can create, edit, and organize their notes in a flexible and intuitive interface.",
    // image: CypressImg,
    link: "https://cypress.com",
    repo: "https://github.com/itsyaba/cypress",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Rate My University",
    description: "A University Rating Website",
    // image: CypressImg,
    link: "https://ratemyuniversity.com",
    repo: "https://github.com/itsyaba/ratemyuniversity",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Breadit",
    description: "A Reddit Clone",
    // image: BreaditImg,
    link: "https://breadit.com",
    repo: "https://github.com/itsyaba/breadit",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Tms Platform",
    description: "A Task Management System",
    // image: TmsPlatformImg,
    link: "https://tms.com",
    repo: "https://github.com/itsyaba/tms",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "E-Commerce",
    description: "An E-Commerce Website",
    // image: ECommerceImg,
    link: "https://ecommerce.com",
    repo: "https://github.com/itsyaba/ecommerce",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Gallery Glimpses",
    description: "An Image Gallery",
    // image: GalleryImg,
    link: "https://galleryglimpses.com",
    repo: "https://github.com/itsyaba/galleryglimpses",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: false,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Rock Paper Scissors Game",
    description: "A Rock Paper Scissors Game",
    // image: RockPaperScissorsImg,
    link: "https://rockpaperscissors.com",
    repo: "https://github.com/itsyaba/rockpaperscissors",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
];

export function ProjectsSection() {
  const tabs = [
    {
      title: "Top Projects",
      value: "top-projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            Top Projects
          </p>
          <ProjectList chosenStack="top-projects" />
        </div>
      ),
    },
    {
      title: "Next.js",
      value: "nextjs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">Next Js</p>
          <ProjectList chosenStack="nextjs" />
        </div>
      ),
    },
    {
      title: "MERN Stack",
      value: "mern",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">MERN Stack</p>
          <ProjectList chosenStack="mern" />
        </div>
      ),
    },
    {
      title: "HTML/CSS",
      value: "html-css",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">HTML/CSS</p>
          <ProjectList chosenStack="html-css" />
        </div>
      ),
    },
    {
      title: "All Projects",
      value: "all-projects",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl  bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-center text-2xl font-cursive  mt-6">
            All Projects
          </p>
          <ProjectList chosenStack="all-projects" />
        </div>
      ),
    },
  ];

  return (
    <div className=" h-full my-40">
      <div className="container mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h1>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto   items-center justify-center   w-screen md:w-3/4"
        id="projects"
      >
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const ProjectList = ({ chosenStack }: { chosenStack: string }) => {
  const filteredProjects = projects.filter((project) => {
    if (chosenStack === "nextjs") return project.isNextjs;
    if (chosenStack === "top-projects") return project.isTopProject;
    if (chosenStack === "mern") return project.isMern;
    if (chosenStack === "html-css") return project.isHtmlCss;
    return true;
  });

  return (
    <div>
      <div className="flex flex-col gap-20 mt-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Card
              key={index}
              className=" px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 "
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl">
                    {project.name}
                  </h3>
                  <hr className="border-white/5 border-t-2 mt-4" />
                  <p className="text-white/60 mt-4 text-sm md:text-base ">
                    {project.description}
                  </p>
                  <ul className="text-white/50 mt-4 flex flex-wrap gap-4 flex-row">
                    {project.tech.map((tech, index) => (
                      <li
                        key={index}
                        className="bg-white/10 p-2 rounded-lg text-white/50 text-small md:text-base"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row gap-4 items-center justify-start my-8">
                    <Link
                      href={project.link}
                      className="w-2/3 md:w-2/5"
                      target="_blank"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300">
                        <span>View Live Site</span>
                        <ArrowRightIcon className="size-4 " />
                      </button>
                    </Link>

                    <Link href={project.repo} target="_blank">
                      <button className="bg-black p-2 rounded-full cursor-pointer">
                        <IconBrandGithub className="size-8" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={aiStartupLandingPage}
                    alt={project.name}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute  lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>No projects found for the selected filter.</p>
        )}
      </div>
    </div>
  );
};
