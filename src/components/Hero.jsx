import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to opportunities • 3+ years experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Software Engineer crafting modern, animated web experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-xl text-base sm:text-lg text-white/70"
          >
            Specializing in React, Next.js, Tailwind CSS, GSAP, and Framer Motion. I build fast, accessible, and playful interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 hover:opacity-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="h-[380px] sm:h-[420px] md:h-[520px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          {/* Soft glow overlays that do not capture pointer events */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
