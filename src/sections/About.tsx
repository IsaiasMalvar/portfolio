import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import GitIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SpringIcon from "@/assets/icons/spring-svgrepo-com.svg";
import NextJsIcon from "@/assets/icons/nextjs-svgrepo-com.svg";
import DockerIcon from "@/assets/icons/docker-svgrepo-com (1).svg";
import SQLIcon from "@/assets/icons/sql-svgrepo-com.svg";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolboxItems";
import Tailwind from "@/assets/icons/tailwind-svgrepo-com.svg";
const toolBoxItems = [
  {
    title: "TypeScript",
    iconType: TypescriptIcon,
  },
  {
    title: "Tailwind",
    iconType: Tailwind,
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
    left: "5%",
    top: "15%",
  },
  {
    title: "Literature",
    emoji: "📚",
    left: "40%",
    top: "5%",
  },
  {
    title: "Animals",
    emoji: "🐾",
    left: "50%",
    top: "30%",
  },
  {
    title: "Cinema",
    emoji: "📽️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gym",
    emoji: "💪",
    left: "35%",
    top: "55%",
  },
  {
    title: "Meditation",
    emoji: "🧘🏾‍♂️",
    left: "60%",
    top: "45%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container md:max-w-[1300px]">
        <SectionHeader
          eyebrow="About me"
          title="Balancing Technical Expertise with Unending Curiosity"
        />
        <div className="mt-20 flex flex-col gap-8 px-1 md:grid md:grid-cols-3">
          <Card className="h-[320px] p-0 md:col-start-1 md:col-end-3">
            <CardHeader
              description="Tools of the trade"
              className="px-6 pt-6"
            />
            <ToolBoxItems items={toolBoxItems} className="mt-10" />
            <ToolBoxItems
              items={toolBoxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-full"
            />
          </Card>
          <Card className="flex h-[320px] flex-col p-0 md:col-start-3">
            <CardHeader description="Beyond software" className="px-6 py-6" />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
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
