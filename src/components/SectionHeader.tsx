export const SectionHeader = ({
  title,
  eyebrow,
}: {
  title: string;
  eyebrow: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="sm:text-4xl text-5xl uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
    </>
  );
};
