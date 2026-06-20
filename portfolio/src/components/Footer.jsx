import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6 md:px-8 py-16">

      <div className="border-t border-[#1F3A52] pt-10 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Logo and Title */}
        <div className="text-center md:text-left">

          <h1
            className="
              text-3xl
              font-extrabold
              tracking-widest
              cursor-pointer
              hover:scale-105
              transition-all
              duration-300
            "
          >
            RITWEEK<span className="text-orange-500">.</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Full Stack Developer
          </p>

        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Ritweek17"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              p-3
              rounded-full
              hover:bg-[#14283B]
              hover:text-orange-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ritweek17"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              p-3
              rounded-full
              hover:bg-[#14283B]
              hover:text-orange-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ritweekdubey2006@gmail.com"
            className="
              text-gray-400
              p-3
              rounded-full
              hover:bg-[#14283B]
              hover:text-orange-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaEnvelope />
          </a>

          <a
            href="https://leetcode.com/u/Ritweek_Dubey/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              p-3
              rounded-full
              hover:bg-[#14283B]
              hover:text-orange-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaCode />
          </a>

        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 mt-10 text-sm">
        © 2026 Ritweek Dubey. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;