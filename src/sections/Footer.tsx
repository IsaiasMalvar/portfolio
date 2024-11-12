import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    title: "LinkedIn",
    href: "",
  },
  {
    title: "Github",
    href: "",
  },
  {
    title: "isamalk35@gmail.com",
    href: "",
  },
  {
    title: "+34-664-229-258",
    href: "",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip" id="footer">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-t border-white/15 py-6 text-sm md:flex-row md:justify-end">
          <nav className="z-10 flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-serif font-semibold">{link.title}</span>
                <ArrowUpRightIcon />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
