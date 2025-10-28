import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // @ts-ignore - lenis has destroy method at runtime
      lenis.destroy && lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-indigo-500/30">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-x-0 -top-24 h-52 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-x-0 -bottom-24 h-52 bg-gradient-to-t from-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
