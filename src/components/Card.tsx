import grainImge from "@/assets/images/grain.jpg";
import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "after:content-['']p-6 relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20",
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url(${grainImge.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
