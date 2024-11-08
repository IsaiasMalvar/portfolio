/* eslint-disable react/no-unescaped-entities */
import manSitting from "@/assets/images/man-sitting.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StartIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-38 lg:py-45 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%,black_70%,transparent)">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StartIcon className="size-28 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit size={640} rotation={34}>
          <StartIcon className="size-8 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StartIcon className="size-12 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-8 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-10 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <SparkleIcon className="size-14 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={85}>
          <div className="size-3 rounded-full bg-cyan-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-cyan-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-cyan-300/20"></div>
        </HeroOrbit>
      </div>

      <div className="flex flex-col items-center ">
        <Image
          src={manSitting}
          className="size-[250px] md:size-[350px]"
          alt="Man sitting with laptop"
        />
        <div className="bg-cyan-50/5 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-2 w-72 h-14 overflow-hidden relative ">
          <div className="text-lg font-medium marquee-text">
            ISAIAS MALVAR GUIOS
          </div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
          Crafting Scalable Solutions from Frontend to Backend
        </h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          My skills are focused in providing self-reliant, trustworthy sofware.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
          <span className="font-medium tracking-wide">Explore my work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span>🧑‍💻</span>
          <span className="font-medium">Let's Connect</span>
        </button>
      </div>
    </div>
  );
};
