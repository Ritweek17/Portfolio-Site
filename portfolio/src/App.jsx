import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import MouseGlow from "./components/MouseGlow";
import Reveal from "./components/Reveal";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="
        relative
        min-h-screen
        overflow-x-hidden
        text-white
        bg-gradient-to-b
        from-[#08121C]
        via-[#0D1B29]
        to-[#08121C]
      "
    >
      {/* Effects */}
      <MouseGlow />
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />

<Reveal>
  <About />
</Reveal>

<Reveal>
  <TechMarquee />
</Reveal>

<Reveal>
  <TechStack />
</Reveal>

<Reveal>
  <Projects />
</Reveal>

<Reveal>
  <Certification />
</Reveal>

<Reveal>
  <Contact />
</Reveal>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;