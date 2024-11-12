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
    <div
      className="md:py-38 lg:py-45 relative z-0 overflow-x-clip py-28"
      id="home"
    >
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px]"></div>
        <div className="hero-ring size-[820px]"></div>
        <div className="hero-ring size-[1020px]"></div>
        <div className="hero-ring size-[1220px]"></div>
        <div className="hero-ring size-[1420px]"></div>
        <div className="hero-ring size-[1600px]"></div>

        <div>
          <HeroOrbit
            size={800}
            rotation={-72}
            shouldOrbit={true}
            duration="25s"
            shouldSpin={true}
            spin="20s"
          >
            <StartIcon className="size-28 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={164}
            shouldOrbit={true}
            duration="25s"
            shouldSpin={true}
            spin="20s"
          >
            <SparkleIcon className="size-14 animate-pulse text-blue-500" />
          </HeroOrbit>
          <HeroOrbit
            size={710}
            rotation={32}
            shouldOrbit={true}
            duration="25s"
            shouldSpin={true}
            spin="20s"
          >
            <SparkleIcon className="size-14 animate-pulse text-blue-500" />
          </HeroOrbit>

          <HeroOrbit
            size={650}
            rotation={-5}
            shouldOrbit={true}
            duration="20s"
            shouldSpin={true}
            spin="18s"
          >
            <div className="size-2 rounded-full bg-green-500"></div>
          </HeroOrbit>
          <HeroOrbit
            size={640}
            rotation={34}
            shouldOrbit={true}
            duration="20s"
            shouldSpin={true}
            spin="18s"
          >
            <StartIcon className="size-8 text-cyan-600" />
          </HeroOrbit>
          <HeroOrbit
            size={610}
            rotation={85}
            shouldOrbit={true}
            duration="20s"
            shouldSpin={true}
            spin="18s"
          >
            <div className="size-3 rounded-full bg-green-500"></div>
          </HeroOrbit>

          <HeroOrbit
            size={530}
            rotation={140}
            shouldOrbit={true}
            duration="15s"
            shouldSpin={true}
            spin="15s"
          >
            <SparkleIcon className="size-8 animate-pulse text-cyan-500" />
          </HeroOrbit>
          <HeroOrbit
            size={520}
            rotation={-41}
            shouldOrbit={true}
            duration="15s"
            shouldSpin={true}
            spin="15s"
          >
            <div className="size-2 rounded-full bg-green-500"></div>
          </HeroOrbit>
          <HeroOrbit
            size={510}
            rotation={98}
            shouldOrbit={true}
            duration="15s"
            shouldSpin={true}
            spin="15s"
          >
            <StartIcon className="size-12 text-emerald-500" />
          </HeroOrbit>

          <HeroOrbit
            size={440}
            rotation={79}
            shouldOrbit={true}
            duration="12s"
            shouldSpin={true}
            spin="12s"
          >
            <SparkleIcon className="size-8 animate-pulse text-blue-500" />
          </HeroOrbit>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src={manSitting}
          className="size-[250px] md:size-[350px]"
          alt="Man sitting with laptop"
        />
      </div>
      <div className="mx-auto w-full">
        <h1 className="mt-8 px-5 text-center text-3xl uppercase tracking-wide md:text-5xl">
          Isaias Malvar Guios <span>↔️</span> Fullstack Developer
        </h1>
        <p className="mt-4 px-2 text-center tracking-wide text-white/90 md:text-lg">
          Focused in providing self-reliant, trustworthy sofware.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
        <button className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6">
          <span className="font-medium tracking-wide">🧑‍💻 Explore my work</span>
          <ArrowDown className="size-4" />
        </button>
      </div>
    </div>
  );
};
