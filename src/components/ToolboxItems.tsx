import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { Fragment } from "react";

const ToolBoxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={(twMerge("flex"), className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.7)5%, rgba(0, 0, 0, 0.9)90%, transparent)",
      }}
    >
      <div
        className={twMerge(
          "inline-flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
              >
                <TechIcon component={item.iconType} />
                <span className="font-serif font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
