import { PropsWithChildren, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  duration,
  spin,
  shouldSpin = false,
  shouldOrbit = false,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  duration?: string;
  shouldOrbit?: boolean;
  spin?: string;
  shouldSpin?: boolean;
}>): ReactElement => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: duration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(
              shouldSpin && "animate-spin [animation-duration:15s]",
            )}
            style={{
              animationDuration: spin,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
