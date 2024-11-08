import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performant",
  "Accesible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div
          className="flex"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9), black)",
          }}
        >
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
