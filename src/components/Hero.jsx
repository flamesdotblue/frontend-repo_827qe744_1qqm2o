import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import SplitType from 'split-type';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Split the title into lines for animation
    const split = new SplitType(titleRef.current, { types: 'lines' });

    // Ensure lines are block-level for correct transforms
    split.lines?.forEach((line) => {
      line.style.overflow = 'hidden';
      line.style.display = 'block';
    });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(badgeRef.current, { y: 12, opacity: 0, duration: 0.5 })
      .from(split.lines, { yPercent: 100, opacity: 0, duration: 0.8, stagger: 0.06 }, '-=0.1')
      .from(subtitleRef.current, { y: 12, opacity: 0, duration: 0.6 }, '-=0.2');

    return () => {
      tl.kill();
      split.revert();
    };
  }, []);

  return (
    <section id="home" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to opportunities • 3+ years experience
          </div>

          <h1
            ref={titleRef}
            className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Software Engineer crafting modern, animated web experiences
          </h1>

          <p
            ref={subtitleRef}
            className="mt-5 max-w-xl text-base sm:text-lg text-white/70"
          >
            Specializing in React, Next.js, Tailwind CSS, GSAP, and Framer Motion. I build fast, accessible, and playful interfaces.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
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
