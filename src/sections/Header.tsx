import Link from "next/link";
import { forwardRef } from "react";

export const Header = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return (
    <div
      className="fixed top-3 z-10 flex w-full items-center justify-center xs:px-3"
      ref={ref}
    >
      <nav className="flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <Link
          href="/contact"
          className="rounded-full bg-black px-4 py-1.5 text-sm duration-200 hover:scale-110"
        >
          <span className="text-slate-50">CONTACT</span>
        </Link>
      </nav>
    </div>
  );
});

Header.displayName = "Header";
