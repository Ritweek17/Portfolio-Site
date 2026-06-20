function Certification() {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <p className="text-orange-500 tracking-widest">
        CERTIFICATIONS
      </p>

      <h1 className="text-5xl font-bold mt-4 mb-16">
        Courses & Certifications
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Certificate 1 */}
        <div className="bg-[#0D1B29] rounded-[40px] p-10">

          <h2 className="text-3xl font-bold">
            JavaScript Algorithms and Data Structures
          </h2>

          <p className="text-gray-400 mt-4">
            freeCodeCamp
          </p>

          <p className="text-orange-500 mt-2">
            2025
          </p>

          <button className="mt-8 bg-orange-500 px-6 py-3 rounded-2xl">
            View Certificate
          </button>

        </div>

        {/* Certificate 2 */}
        <div className="bg-[#0D1B29] rounded-[40px] p-10">

          <h2 className="text-3xl font-bold">
            React Basics
          </h2>

          <p className="text-gray-400 mt-4">
            Infosys Springboard
          </p>

          <p className="text-orange-500 mt-2">
            2026
          </p>

          <button className="mt-8 bg-orange-500 px-6 py-3 rounded-2xl">
            View Certificate
          </button>

        </div>

      </div>
    </section>
  );
}

export default Certification;