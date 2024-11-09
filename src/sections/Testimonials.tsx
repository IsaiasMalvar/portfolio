import qualentum from "@/assets/images/qualentum.png";
import isdi from "@/assets/images/isdi.png";
import ull from "@/assets/images/ull.jpg";
import dit from "@/assets/images/DIT (1).png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";

const certifications = [
  {
    name: "Qualentum",
    position: "Backend Bootcamp - Java Spring Specialization",
    text: "Diving into backend development transformed my approach to building scalable applications. Through my Java specialization, I mastered tools like Docker for containerization, optimized data flow with database and caching techniques, and streamlined processes using Spring Boot",
    avatar: qualentum,
  },
  {
    name: "Isdicoders",
    position: "Fullstack web development",
    text: "My journey through ISDI Coders laid a solid foundation in web development. Working with the MERN stack and TypeScript, I built a full-stack CRUD application from the ground up, deepening my understanding of creating dynamic and responsive web app",
    avatar: isdi,
  },
  {
    name: "Universidad de La Laguna",
    position: "Grado en Turismo",
    text: "For my thesis at Universidad de La Laguna, I explored the impact of technological startups in the tourism industry—a project that earned academic recognition and sparked my passion for software. Analyzing how tech innovation reshapes travel experiences became the gateway to my career in web development, where I aim to bridge the worlds of technology and tourism",
    avatar: ull,
  },
  {
    name: "Dublin Institute of Technology",
    position: "Erasmus year - Tourism Marketing Specialization",
    text: "My Erasmus year at Dublin Institute of Technology was pivotal in honing my English proficiency and adapting to the pace of a vibrant, urban environment..",
    avatar: dit,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Certifiably Skilled"
          title="Academic recognitions"
        />
        <p>Certifiably Skilled</p>
        <h2>Academic recognitions</h2>
        <div>
          {certifications.map((testimonal) => (
            <div
              key={testimonal.name}
              className="relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-6"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <Image
                src={testimonal.avatar}
                alt={testimonal.name}
                width={100}
                height={100}
              />
              <div>{testimonal.name}</div>
              <div>{testimonal.position}</div>
              <p>{testimonal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
