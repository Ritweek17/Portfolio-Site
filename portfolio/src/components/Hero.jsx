
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hello", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(".name", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".role", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".description", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(".buttons", {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        min-h-screen
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-between
        gap-10
        lg:gap-20
      "
    >
      {/* Left Side */}
      <div className="flex-1 text-center lg:text-left">
        <p className="hello text-orange-500 text-2xl mb-6">
          Hello 👋
        </p>

        <h1 className="name text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
          I'm Ritweek
        </h1>

        <h2 className="role text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-5">
          Full Stack Developer
        </h2>

        <p className="description text-gray-400 text-lg leading-8 mt-8 max-w-xl mx-auto lg:mx-0">
          Passionate Computer Science student at ABES Engineering College.
          I enjoy building modern web applications and solving problems
          through code. Currently exploring React, Node.js and backend
          development to become a Full Stack Developer.
        </p>

        {/* Buttons */}
        <div className="buttons flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
          <a
            href="/resume.pdf"
            download
            className="
              bg-orange-500
              px-8
              md:px-10
              py-4
              rounded-3xl
              text-lg
              md:text-xl
              hover:bg-orange-600
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Download CV
          </a>

          <a
            href="mailto:ritweekdubey2006@gmail.com"
            className="
              border
              border-[#1F3A52]
              px-8
              md:px-10
              py-4
              rounded-3xl
              text-lg
              md:text-xl
              hover:border-orange-500
              hover:bg-[#14283B]
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side */}
      <motion.div
        className="
          flex-1
          flex
          justify-center
          items-center
          relative
          mt-20
          lg:mt-0
        "
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Orange Glow */}
        <div
          className="
            absolute
            w-[280px]
            h-[280px]
            sm:w-[350px]
            sm:h-[350px]
            lg:w-[550px]
            lg:h-[550px]
            bg-orange-500
            rounded-full
            blur-[180px]
            opacity-30
          "
        />

        {/* Availability Badge */}
<div
  className="
    absolute

    /* Mobile */
    top-3
    left-55
    -translate-x-1/2

    /* Tablet */
    sm:-top-0
    sm:left-70
    sm:-translate-x-1/2

    /* Desktop */
    lg:top-0
    lg:right-0
    lg:translate-x-4
    lg:left-auto
    lg:translate-x-0

    z-20
    bg-[#081827]
    border border-[#1F3A52]
    px-5
    py-3
    rounded-3xl
    shadow-lg
  "
>
  <div className="flex items-center gap-3">
    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>

    <span className="text-white text-xs md:text-base whitespace-nowrap">
      Available for opportunities
    </span>
  </div>
</div>
        {/* Avatar */}
        <motion.img
          src="/profile.png"
          alt="profile"
          className="
relative
z-10

mt-16
sm:mt-10
lg:mt-0

w-[250px]
sm:w-[320px]
lg:w-[600px]

object-contain
"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </section>
  );
}

export default Hero;

