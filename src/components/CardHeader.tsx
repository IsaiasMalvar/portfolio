import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({
  description,
  className,
}: {
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col md:text-center", className)}>
      <div className="inline-flex items-center gap-2 md:justify-center">
        <StarIcon className="size-9 gap-2 text-emerald-300" />
        <h3 className="text-3xl">{description}</h3>
      </div>
    </div>
  );
};

export default CardHeader;
