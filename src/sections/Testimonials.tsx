import qualentum from "@/assets/images/qual.png";
import isdi from "@/assets/images/isdi.png";
import ull from "@/assets/images/ull.jpg";
import dit from "@/assets/images/DIT (1).png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

const certifications = [
  {
    name: "Qualentum",
    position: "Backend Bootcamp - Java Spring Specialization",
    text: (
      <>
        Diving into backend development transformed my approach to building
        scalable applications. Through my <b>Java</b> specialization, I mastered
        tools like <b>Docker</b> for containerization, optimized data flow with{" "}
        <b>database</b> and <b>caching</b> techniques, and streamlined processes
        using <b>Spring Boot</b>.
      </>
    ),
    avatar: qualentum,
  },
  {
    name: "Isdicoders",
    position: "Fullstack web development",
    text: (
      <>
        My journey through <b>ISDI Coders</b> laid a solid foundation in web
        development. Working with the <b>MERN</b> stack and <b>TypeScript</b>, I
        built a full-stack <b>CRUD application</b> from the ground up, deepening
        my understanding of creating <b>dynamic</b> and <b>responsive</b> web
        apps.
      </>
    ),
    avatar: isdi,
  },
  {
    name: "Universidad de La Laguna",
    position: "Tourism Major",
    text: (
      <>
        For my thesis at the <b>Universidad de La Laguna</b>, I explored the
        impact of <b>technological startups</b> in the tourism industry—a
        project that earned academic recognition and sparked my passion for{" "}
        <b>software</b>. Analyzing how <b>tech innovation</b> reshapes travel
        experiences became the gateway to my career in <b>web development</b>,
        where I aim to bridge the worlds of <b>technology</b> and <b>tourism</b>
        .
      </>
    ),
    avatar: ull,
  },
  {
    name: "Dublin Institute of Technology",
    position: "Erasmus year - Tourism Marketing Specialization",
    text: (
      <>
        My <b>Erasmus year</b> at <b>Dublin Institute of Technology</b> was
        pivotal in honing my <b>English proficiency</b> and adapting to the pace
        of a <b>vibrant, urban environment</b>.
      </>
    ),
    avatar: dit,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Certifiably Skilled"
          title="Academic recognitions"
        />
        <div
          className="-my-4 mt-12 flex overflow-x-clip py-4 lg:mt-20"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.7)5%, rgba(0, 0, 0, 0.9)90%, transparent)",
          }}
        >
          <div className="animate-move-left flex flex-none gap-8 pr-8 [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {certifications.map((certifications) => (
                  <Card
                    key={certifications.name}
                    className="max-w-xs transition duration-300 hover:scale-125 md:max-w-md md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="inline-flex size-14 flex-none items-center justify-center rounded-full bg-gray-700 p-2">
                        <Image
                          src={certifications.avatar}
                          alt={certifications.name}
                          className="max-h-full object-contain"
                        />
                      </div>
                      <div>
                        <div className="font-sans">{certifications.name}</div>
                        <div className="text-sm tracking-wide text-white/70">
                          {certifications.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 font-serif text-sm font-extralight leading-6">
                      {certifications.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
