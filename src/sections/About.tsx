import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import TypescriptIcon from "@/assets/icons/typescript-svgrepo-com.svg";
import GitIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SpringIcon from "@/assets/icons/spring-svgrepo-com.svg";
import NextJsIcon from "@/assets/icons/nextjs-icon-svgrepo-com.svg";
import DockerIcon from "@/assets/icons/docker-svgrepo-com (1).svg";
import SQLIcon from "@/assets/icons/sql-database-generic-svgrepo-com.svg";
import { TechIcon } from "@/components/TechIcon";
import { title } from "process";

const toolBoxItems = [
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "GitHub",
    iconType: GitIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "SpringBoot",
    iconType: SpringIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "SQL",
    iconType: SQLIcon,
  },
];

const hobbies = [
  {
    title: "Piano",
    emoji: "🎹",
  },
  {
    title: "Fitness",
    emoji: "📚",
  },
  {
    title: "Cinema",
    emoji: "📽️",
  },
  {
    title: "Gym",
    emoji: "💪",
  },
  {
    title: "Meditation",
    emoji: "🧘🏾‍♂️",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="Balancing Technical Expertise with Unending Curiosity"
        />
        <div className="mt-20">
          <Card>
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 gap-2 text-emerald-300" />
                <h3 className="text-3xl">Tools of the trade</h3>
              </div>
            </div>
            <div>
              {toolBoxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>After hanging the tools</h3>
              <p>Some of my favourite interests beyond software:</p>
            </div>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
