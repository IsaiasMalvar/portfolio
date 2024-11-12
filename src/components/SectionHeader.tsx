export const SectionHeader = ({
  title,
  eyebrow,
  size,
}: {
  title?: string;
  eyebrow: string;
  size?: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p
          className={`bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-2xl uppercase tracking-widest text-transparent sm:text-4xl md:text-${size}xl`}
        >
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-6 text-center text-2xl md:text-5xl">{title}</h2>
    </>
  );
};
