import grainImage from "@/assets/images/grain.jpg";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-14">
      <div className="container md:max-w-[1300px]">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-gray-900 sm:text-center md:inline-flex md:items-center md:gap-16 md:text-start">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col justify-start">
            <h2 className="text-2xl">Get in Touch</h2>
            <p className="mt-2 text-wrap font-serif text-sm">
              If you’re looking for a dedicated full-stack developer with a
              knack for backend systems, I’d love to connect. Let’s discuss how
              I can help bring your ideas to life!
            </p>
          </div>
          <button className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-gray-900 px-6 text-white md:mt-0 md:text-nowrap md:px-3">
            <span className="font-serif">Contact me</span>
            <ArrowUpRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
