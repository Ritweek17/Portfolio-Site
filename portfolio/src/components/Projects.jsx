import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 md:px-8 py-24"
    >
      <p className="text-orange-500 tracking-widest">
        FEATURED PROJECTS
      </p>

      <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-16">
        Things I've Built
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Amazon Clone */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10,
          }}
        >
          <h2 className="text-3xl font-bold">
            Amazon Clone
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            A modern Amazon Clone built with React and Tailwind CSS.
            Features include search, cart, category filtering,
            multi-language support and local storage.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              React
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              Tailwind CSS
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              Context API
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://amazon-clone-f20x.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-orange-500
                px-6
                py-3
                rounded-2xl
                hover:bg-orange-600
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ritweek17/AMAZON-CLONE"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-[#1F3A52]
                px-6
                py-3
                rounded-2xl
                hover:border-orange-500
                hover:bg-[#14283B]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Netflix Clone */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10,
          }}
        >
          <h2 className="text-3xl font-bold">
            Netflix Clone
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            A responsive Netflix Clone inspired by the original Netflix UI,
            built using HTML and CSS with focus on responsiveness and layout.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              HTML
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              CSS
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://ritweek17.github.io/Mini-Project-1/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-orange-500
                px-6
                py-3
                rounded-2xl
                hover:bg-orange-600
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ritweek17/Mini-Project-1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-[#1F3A52]
                px-6
                py-3
                rounded-2xl
                hover:border-orange-500
                hover:bg-[#14283B]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Tic Tac Toe */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10,
          }}
        >
          <h2 className="text-3xl font-bold">
            Tic Tac Toe
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            Interactive Tic Tac Toe game built using HTML, CSS and JavaScript.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              HTML
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              CSS
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              JavaScript
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://ritweek17.github.io/WEB-MINI-PROJECTS/TIC-TAC-TOE/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-orange-500
                px-6
                py-3
                rounded-2xl
                hover:bg-orange-600
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ritweek17/WEB-MINI-PROJECTS/tree/main/TIC-TAC-TOE"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-[#1F3A52]
                px-6
                py-3
                rounded-2xl
                hover:border-orange-500
                hover:bg-[#14283B]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Stone Paper Scissors */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10,
          }}
        >
          <h2 className="text-3xl font-bold">
            Stone Paper Scissors
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            A fun and interactive Stone Paper Scissors game built using
            HTML, CSS and JavaScript.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              HTML
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              CSS
            </div>

            <div className="bg-[#08121C] px-4 py-2 rounded-xl">
              JavaScript
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a
              href="https://ritweek17.github.io/WEB-MINI-PROJECTS/STONE-PAPER-SCISSORS/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-orange-500
                px-6
                py-3
                rounded-2xl
                hover:bg-orange-600
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Ritweek17/WEB-MINI-PROJECTS/tree/main/STONE-PAPER-SCISSORS"
              target="_blank"
              rel="noopener noreferrer"
              className="
                border
                border-[#1F3A52]
                px-6
                py-3
                rounded-2xl
                hover:border-orange-500
                hover:bg-[#14283B]
                hover:scale-105
                transition-all
                duration-300
              "
            >
              GitHub
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;