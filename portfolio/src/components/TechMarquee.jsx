function TechMarquee() {
  const techs = [
    "React ⚛️",
    "JavaScript 🚀",
    "Node.js 🟢",
    "Express ⚡",
    "MongoDB 🍃",
    "Tailwind 🎨",
    "GSAP 🎬",
    "Framer Motion ✨",
    "Git 🌿",
    "GitHub 🐙",
  ];

  return (
    <section className="overflow-hidden py-10">

      <div className="flex w-max animate-marquee gap-20">

        {[...techs, ...techs].map((tech, index) => (
          <span
            key={index}
            className="text-2xl font-semibold text-gray-400"
          >
            {tech}
          </span>
        ))}

      </div>

    </section>
  );
}

export default TechMarquee;