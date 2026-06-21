
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
        relative
        sticky
        top-0
        z-50
        flex
        items-center
        justify-between
        px-6
        md:px-10
        py-5
        bg-[#08121C]/80
        backdrop-blur-xl
        border-b
        border-white/10
        shadow-[0_8px_30px_rgb(0,0,0,0.3)]
      "
    >
      {/* Logo */}
      <h1
        className="
          text-2xl
          md:text-3xl
          font-extrabold
          tracking-widest
          cursor-pointer
          hover:scale-105
          transition-all
          duration-300
        "
      >
        RITWEEK
        <span className="text-orange-500">.</span>
      </h1>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-10">
        <li>
          <a
            href="#home"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#tech"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            Tech Stack
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#certifications"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            Certifications
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="relative text-gray-400 hover:text-orange-500 transition-all duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Resume Button Desktop */}
        <a
          href="/resume.pdf"
          download
          className="
            hidden md:block
            border
            border-orange-500
            px-5
            py-2
            rounded-xl
            text-orange-500
            font-medium
            hover:bg-orange-500
            hover:text-white
            hover:scale-105
            transition-all
            duration-300
            shadow-md
            hover:shadow-orange-500/30
          "
        >
          Resume
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="
            absolute
            top-full
            left-0
            w-full
            bg-[#08121C]/95
            backdrop-blur-xl
            border-b
            border-white/10
            flex
            flex-col
            items-center
            gap-8
            py-8
            md:hidden
          "
        >
          <a
            href="#home"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>

          <a
            href="#tech"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tech Stack
          </a>

          <a
            href="#projects"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>

          <a
            href="#certifications"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </a>

          <a
            href="#contact"
            className="text-gray-400 hover:text-orange-500 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              border
              border-orange-500
              px-5
              py-2
              rounded-xl
              text-orange-500
              font-medium
              hover:bg-orange-500
              hover:text-white
              transition-all
              duration-300
            "
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

