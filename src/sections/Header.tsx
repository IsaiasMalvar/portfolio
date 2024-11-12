import { forwardRef } from "react";

export const Header = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div
      className="fixed top-3 z-10 flex w-full items-center justify-center"
      ref={ref}
    >
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#certifications" className="nav-item">
          Certifications
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:scale-125 hover:bg-white/70 hover:text-gray-900"
        >
          Contact
        </a>
      </nav>
    </div>
  );
});

Header.displayName = "Header"; // Optional: Helps with debugging in dev tools
