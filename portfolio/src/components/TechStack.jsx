import { motion } from "framer-motion";

function TechStack() {
  return (
    <section
      id="tech"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="text-orange-500 tracking-widest">
        TECHNOLOGIES
      </p>

      <h1 className="text-5xl font-bold mt-4 mb-16">
        My Tech Stack
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Frontend */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Frontend
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">HTML</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">CSS</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">JavaScript</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">React</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Tailwind CSS</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Bootstrap</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Responsive Design</div>
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Backend
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Node.js</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Express.js</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">REST APIs</div>
          </div>

          <h3 className="text-orange-500 mt-8 mb-4">
            Currently Learning
          </h3>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">JWT</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Authentication</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">MVC Architecture</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">File Upload</div>
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Database
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">MongoDB</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Mongoose</div>
          </div>

          <h3 className="text-orange-500 mt-8 mb-4">
            Future Goals
          </h3>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">PostgreSQL</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Redis</div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="bg-[#0D1B29] rounded-[40px] p-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.03,
            y: -10
          }}
        >
          <h2 className="text-3xl font-bold mb-8">
            Tools & Platforms
          </h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Git</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">GitHub</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">VS Code</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Postman</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Render</div>
            <div className="bg-[#08121C] px-4 py-2 rounded-xl">Vercel</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default TechStack;