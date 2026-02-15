"use client";

import cypressImage from "../../public/images/projects/cypresss.png";
import breaditImage from "../../public/images/projects/breadit.png";
import bookmarkImage from "../../public/images/projects/bookmark.jpg";
import ecommerceImage from "../../public/images/projects/ecommerce.png";
import galleryImage from "../../public/images/projects/gallery.png";
import rockImage from "../../public/images/projects/rockpaperscissor.png";
import spaceImage from "../../public/images/projects/space.jpg";
import tmsImage from "../../public/images/projects/tms.png";
import threadsImage from "../../public/images/projects/threads.png";
import ratemyuniImage from "../../public/images/projects/ratemyuni.jpg";

import ArrowRightIcon from "../../public/icons/arrow-up-right.svg";

import DomeGallery from "@/components/DomeGallery";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import tigatImage from "../../public/images/tigat-new.png";
import nileodeImage from "../../public/images/nileode-new.png";
import whalersImage from "../../public/images/whalers.png";
import LalibelaImage from "../../public/images/lalibela.png";
import calmifyImage from "../../public/images/calmify-home.png";
import servicenowImage from "../../public/service.png";
import HUHTImage from "../../public/images/huht-new.png";
import DidecoImage from "../../public/images/dideco.png";
import MojoImage from "../../public/images/mojo.png";
import ideeza from "../../public/images/ideeza.png";
import sambike from "../../public/images/sambike.png";
import humble from "../../public/images/humble.png";

const sideProjects = [
  {
    name: "Breadit",
    description:
      "Breadit is a full-stack website built using modern web technologies, including Next.js with the App Router, TypeScript, and Tailwind CSS. The project provides a smooth, dynamic user experience with features like infinite scrolling for loading posts, authentication via NextAuth with Google integration, and personalized feeds for authenticated users. It employs optimistic updates to enhance the user experience by reflecting changes immediately while processing, and advanced caching mechanisms using Upstash Redis. ",
    image: breaditImage,
    link: "https://breadit-nextjs.vercel.app",
    repo: "https://github.com/itsyaba/breadit",
    tech: ["Next.js", "TailwindCSS", "Postgres", "Prisma", "React Query", "NextAuth", "upstash"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Cypress",
    description:
      "This project is a simplified clone of the popular productivity application, Notion. It's designed to replicate some of the core features of Notion, providing a platform where users can create, edit, and organize their notes in a flexible and intuitive interface.",
    image: cypressImage,
    link: "https://cypress-note-taking.vercel.app",
    repo: "https://github.com/itsyaba/cypress",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js", "Clerk"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Rate My Uni (Hackathon Project)",
    description:
      "The project is focused on building a simple, yet functional, web-based interface where students and users can rate universities based on various criteria (e.g., campus, academics). It aims to create a platform where users can submit and view ratings for different universities, much like popular 'Rate My Professor' services but focused on universities as a whole.",
    image: ratemyuniImage,
    link: "https://ratemyuniversity.com",
    repo: "https://github.com/itsyaba/rate-my-uni",
    tech: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: false,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Task Management Platform",
    description:
      "Project management dashboard built with modern web technologies. It leverages Next.js for the frontend, styled with Tailwind CSS, and uses Redux Toolkit and Material UI for state management and data grid handling. The backend is powered by Node.js and Express, with Prisma as the ORM to interact with a PostgreSQL database.",
    image: tmsImage,
    link: "https://tms.comhttps://tms-platforms.vercel.app",
    repo: "https://github.com/itsyaba/tms-platform",
    tech: [
      "Next.js",
      "TailwindCSS",
      "NeonDB",
      "Express",
      "Node.js",
      "Prisma",
      "Redux Toolkit",
      "MUI",
    ],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Ethiopian Elegance",
    description:
      " E-commerce website designed to sell traditional Ethiopian clothing, jewelry, and home goods. The platform allows users to browse products by category, view detailed descriptions, and add items to a shopping cart. It includes essential e-commerce functionalities such as user account creation, order history tracking, and checkout with payment integration using Stripe.",
    image: ecommerceImage,
    link: "https://ethiopian-elegance.onrender.com",
    repo: "https://github.com/itsyaba/Ethiopian-Elegance",
    tech: ["MongoDB", "Express", "React.js", "Node.js", "TailwindCSS", "Stripe", "Mantine UI"],
    isTopProject: true,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Gallery Glimpses",
    description:
      "A gallery website where users can upload images in either private or public mode. If an image is set to private, only the uploader can view it. Public images are visible to all users.",
    image: galleryImage,
    link: "https://gallery-glimpse-web.vercel.app",
    repo: "https://github.com/itsyaba/Gallery_Glimpse_Frontend",
    tech: ["React.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    isTopProject: true,
    isNextjs: false,
    isMern: true,
    isHtmlCss: false,
  },
  {
    name: "Space Tourism Website ",
    description: "Frontend Mentor Challenge to build a space tourism landing page.",
    image: spaceImage,
    link: "https://frontend-mentor-rock-paper-scissors-challenge.netlify.app",
    repo: "https://github.com/itsyaba/Rock--Paper-scissors",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Clipboard ",
    description:
      "A history of everything you copy Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.",
    image: bookmarkImage,
    link: "https://frontend-mentor-rock-paper-scissors-challenge.netlify.app",
    repo: "https://github.com/itsyaba/Rock--Paper-scissors",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Rock Paper Scissors Game",
    description: "A Rock Paper Scissors Game",
    image: rockImage,
    link: "https://frontend-mentor-rock-paper-scissors-challenge.netlify.app",
    repo: "https://github.com/itsyaba/Rock--Paper-scissors",
    tech: ["JavaScript ", "HTML", "CSS"],
    isTopProject: false,
    isNextjs: false,
    isMern: false,
    isHtmlCss: true,
  },
  {
    name: "Threads Clone",
    description: "Threads Clone",
    image: threadsImage,
    link: "https://threads-clone-nextjs-project.vercel.app/",
    repo: "https://github.com/itsyaba/Threads-Clone",
    tech: ["Next.js ", "Tailwind", "MongoDB"],
    isTopProject: false,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
  {
    name: "Breadit",
    description:
      "Breadit is a full-stack website built using modern web technologies, including Next.js with the App Router, TypeScript, and Tailwind CSS. The project provides a smooth, dynamic user experience with features like infinite scrolling for loading posts, authentication via NextAuth with Google integration, and personalized feeds for authenticated users. It employs optimistic updates to enhance the user experience by reflecting changes immediately while processing, and advanced caching mechanisms using Upstash Redis. ",
    image: breaditImage,
    link: "https://breadit-nextjs.vercel.app",
    repo: "https://github.com/itsyaba/breadit",
    tech: ["Next.js", "TailwindCSS", "Postgres", "Prisma", "React Query", "NextAuth", "upstash"],
    isTopProject: true,
    isNextjs: true,
    isMern: false,
    isHtmlCss: false,
  },
];

const projects = [
  {
    name: "IDEEZA",
    description: "IDEEZA is a platform for learning and teaching.",
    image: ideeza,
    link: "https://ideeza.com",
    location: "Israel",
  },
  {
    name: "Tigat.net",
    description: "Tigat.net is a platform for learning and teaching.",
    image: tigatImage,
    link: "https://tigat.net",
    location: "Ethiopia",
  },
  {
    name: "BetterLink",
    description: "Servicenow is a platform for learning and teaching.",
    image: servicenowImage,
    link: "https://www.betterlink.ca",
    location: "Canada",
  },
  {
    name: "Sam Bike",
    description: "Servicenow is a platform for learning and teaching.",
    image: sambike,
    link: "https://bike-sharing-web.vercel.app/",
    // link: "https://servicenow.com",
    location: "Canada",
  },
  {
    name: "Humble Coffe",
    description: "Servicenow is a platform for learning and teaching.",
    image: humble,
    link: "https://humblecoffeewa.com/",
    // link: "https://servicenow.com",
    location: "Canada",
  },
  {
    name: "Whalers",
    description: "Whalers is a platform for learning and teaching.",
    image: whalersImage,
    link: "https://whalerapp.com",
    location: "USA",
  },
  {
    name: "Nileode Technologies",
    description: "Nileode Technologies is a platform for learning and teaching.",
    image: nileodeImage,
    link: "https://nileode.com",
    location: "Ethiopia",
  },
  {
    name: "Lalibela",
    description: "Lalibela is a platform for learning and teaching.",
    image: LalibelaImage,
    link: "https://lalibelahoney.com",
    location: "Ethiopia",
  },

  {
    name: "The Mojo Effect",
    description: "Mojo is a platform for learning and teaching.",
    image: MojoImage,
    link: "https://themojoeffect.com/",
    location: "USA",
  },
  {
    name: "HUHT Orphanage",
    description: "HUHT Orphanage is a platform for learning and teaching.",
    image: HUHTImage,
    link: "https://huhtorphanage.com",
    location: "Canada",
  },
  {
    name: "Dideco North America",
    description: "Dideco North America is a platform for learning and teaching.",
    image: DidecoImage,
    link: "https://dideco.com",
    location: "North America",
  },
  {
    name: "Calmify",
    description: "Calmify is a platform for learning and teaching.",
    image: calmifyImage,
    link: "https://calmify.com",
    location: "Ethiopia",
  },
];

export function ProjectsSection() {
  const domeGalleryImages = sideProjects
    .filter((project) => project.isTopProject)
    .map((project) => ({
      src: typeof project.image === "string" ? project.image : project.image.src,
      alt: project.name,
      title: project.name,
      description:
        project.description.length > 140
          ? `${project.description.slice(0, 140)}...`
          : project.description,
      href: project.link,
    }));

  return (
    <div className=" h-full my-40">
      <div className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center backdrop-blur-sm">
            Real-world Results
          </p>
        </div>
        <h2 className="font-cursive text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>

        {/* main projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10 font-poppins w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col gap-4 ${index % 2 !== 0 ? "mt-8" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="flex flex-row gap-4 p-2 bg-gradient-to-br from-emerald-300 to-sky-500 backdrop-blur-sm rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={project.image} alt={project.name} className="rounded-lg" />
              </motion.div>
              <motion.div
                className="flex flex-row gap-1 items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <h3 className="text-2xl font-cursive">{project.name}</h3> -
                <p className="text-white/60">{project.location}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link href={project.link} className="w-1/3" target="_blank">
                  <button className="bg-white text-gray-950 h-12 w-1/3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer hover:bg-white/80   transition-all duration-300 capitalize ">
                    <span> check it out </span>
                    <ArrowRightIcon className="size-4 " />
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <div
        className="h-screen md:h-[60rem] [perspective:1000px] relative flex flex-col  mx-auto  items-center justify-center w-screen md:w-3/4 "
        id="projects"
      >
        {/* other side projects */}
        <div className="flex flex-col gap-4 mb-10">
          <h2 className="text-2xl font-cursive">Selected Side Projects</h2>
        </div>

        <div className="w-screen h-[70vh] md:h-screen max-w-6xl">
          <DomeGallery
            images={domeGalleryImages}
            fit={0.75}
            minRadius={800}
            maxVerticalRotationDeg={20}
            segments={34}
            dragDampening={2}
            openedImageWidth="min(84vw, 980px)"
            openedImageHeight="min(78vh, 640px)"
            openedImageBorderRadius="16px"
            grayscale={false}
          />
        </div>
      </div>
    </div>
  );
}
