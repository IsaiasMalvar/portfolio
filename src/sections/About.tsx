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
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px] p-0">
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
          <Card>
            <CardHeader description="Beyond software" />
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
