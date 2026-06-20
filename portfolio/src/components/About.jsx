import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <motion.div
        className="bg-[#0D1B29] rounded-[40px] p-12"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-orange-500 text-sm tracking-widest">
          ABOUT ME
        </p>

        <div className="grid md:grid-cols-2 gap-20 mt-10">

          {/* Left */}
          <div>

            <h2 className="text-5xl font-bold mb-8">
              Who's Ritweek?
            </h2>

            <p className="text-gray-400 leading-8 text-lg">
              I'm a passionate developer who enjoys creating
              beautiful and scalable web applications.
              Currently learning React, Node.js and backend
              development while solving DSA problems and
              building projects.
            </p>

          </div>

          {/* Right */}
          <div className="space-y-10">

            <div>
              <h3 className="text-gray-500 mb-2">
                Education
              </h3>

              <p className="text-2xl">
                ABES Engineering College
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 mb-2">
                Branch
              </h3>

              <p className="text-2xl">
                Computer Science Engineering
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 mb-2">
                Location
              </h3>

              <p className="text-2xl">
                Ghaziabad, India
              </p>
            </div>

            <div>
              <h3 className="text-gray-500 mb-2">
                Status
              </h3>

              <p className="text-2xl text-green-400">
                Learning & Building 🚀
              </p>
            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-10 mt-24">

          <motion.div
            className="bg-[#08121C] rounded-3xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-5xl font-bold text-orange-500">
              10+
            </h1>

            <p className="text-gray-400 mt-3">
              Projects
            </p>

          </motion.div>

          <motion.div
            className="bg-[#08121C] rounded-3xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-5xl font-bold text-orange-500">
              500+
            </h1>

            <p className="text-gray-400 mt-3">
              DSA Problems
            </p>

          </motion.div>

          <motion.div
            className="bg-[#08121C] rounded-3xl p-8"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-5xl font-bold text-orange-500">
              15+
            </h1>

            <p className="text-gray-400 mt-3">
              Technologies
            </p>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}

export default About;