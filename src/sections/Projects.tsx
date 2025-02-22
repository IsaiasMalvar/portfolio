import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import alojamiento from "@/assets/images/alojamient-alby.png";
import blog from "@/assets/images/blog.png";
import tams from "@/assets/images/tams.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal project",
    year: "2024",
    title: "Talent Acquisition Management Prototype - JAVA SPRING BOOT & REACT",
    results: [
      { title: "Axon Server Based talent management" },
      {
        title:
          "Developed a scalable talent management system using Spring Boot microservices",
      },
      {
        title:
          "Implemented a responsive front-end with React, Tailwind CSS, and TypeScript",
      },
    ],
    link: "https://github.com/IsaiasMalvar/talent-acquisition-microservices",
    image: tams,
  },
  {
    company: "Alojamiento Alby",
    year: "2023",
    title: "Private Accommodation Website - REACT & TYPESCRIPT",
    results: [
      { title: "Reduced maintenance costs by 80%" },
      { title: "Great performance improvement" },
      { title: "CAPTCHA and mail service ready" },
    ],
    link: "https://alojamientoalby.com/#/web",
    image: alojamiento,
  },
  {
    company: "Personal project",
    year: "2024",
    title: "Software Development MDX Blog - NEXT.JS & MDX",
    results: [
      {
        title:
          "Implemented a blog using Next.js and MDX for seamless content creation.",
      },
      {
        title:
          "Utilized Tailwind CSS for styling and Radix UI components for enhanced UI/UX.",
      },
      {
        title:
          "Configured ESLint and TypeScript for code quality and type safety.",
      },
    ],
    link: "https://blog-pkuo.vercel.app/",
    image: blog,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="relative overflow-clip pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader eyebrow="Code in action" title="Featured Projects" />
        <div className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="lgsticky sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20"
              style={{
                top: `calc(64px + ${index * 60}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="text-small inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text font-bold uppercase tracking-widest text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-2xl md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="mt-4 border-t-2 border-white/5 md:mt-5" />
                  <ul className="mt-4 flex flex-col gap-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title + "li"}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span className="font-serif font-semibold">
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto">
                      {project.title ===
                      "Talent Acquisition Management Prototype - JAVA SPRING BOOT & REACT" ? (
                        <span>Go to Repository</span>
                      ) : (
                        <span>Go to Site</span>
                      )}
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
