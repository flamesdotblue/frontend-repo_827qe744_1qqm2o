import { motion } from 'framer-motion';
import { Rocket, Sparkles, Zap } from 'lucide-react';

const skills = [
  'React',
  'Next.js',
  'JavaScript (ES202x)',
  'TypeScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'GSAP',
  'Framer Motion',
  'Node.js',
  'REST APIs',
  'Git & GitHub',
  'Vite',
  'Accessibility',
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Sparkles className="text-cyan-400" /> Core Skills
            </h2>
            <p className="mt-2 text-white/60">A toolkit shaped by building real products over the past 3+ years.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-white/50">
            <Zap size={14} className="text-indigo-400" /> Performance focused
          </div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-sm hover:bg-white/10"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card icon={<Rocket className="text-cyan-400" size={18} />} title="Frontend Engineering" desc="Pixel-perfect UIs with accessible, component-driven architecture." />
          <Card icon={<Zap className="text-indigo-400" size={18} />} title="Motion & Interactions" desc="Delightful micro-interactions powered by Framer Motion and GSAP." />
          <Card icon={<Sparkles className="text-emerald-400" size={18} />} title="Performance" desc="Optimized loading, code-splitting, and smooth 60fps animations." />
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 text-white/80"
    >
      <div className="mb-3 inline-flex items-center gap-2 text-sm">
        {icon}
        <span className="font-semibold text-white/90">{title}</span>
      </div>
      <p className="text-sm leading-relaxed text-white/70">{desc}</p>
    </motion.div>
  );
}
