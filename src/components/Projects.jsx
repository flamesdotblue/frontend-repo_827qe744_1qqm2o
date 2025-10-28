import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful marketing site featuring a Spline 3D hero, smooth scroll and GSAP scenes.',
    tags: ['React', 'Spline', 'GSAP', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Next.js SaaS Dashboard',
    desc: 'Modern analytics dashboard with charts, server components, and granular animations.',
    tags: ['Next.js', 'Framer Motion', 'TypeScript'],
    link: '#',
  },
  {
    title: 'Portfolio Boilerplate',
    desc: 'A starter kit for designers and engineers to ship portfolios fast with great defaults.',
    tags: ['Vite', 'React', 'Tailwind'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Selected Projects</h2>
          <p className="mt-2 text-white/60">A few highlights that showcase motion, polish, and clean architecture.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, desc, tags, link }) {
  return (
    <motion.a
      href={link}
      target={link.startsWith('http') ? '_blank' : undefined}
      rel={link.startsWith('http') ? 'noreferrer' : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 hover:border-white/20"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-white">{title}</h3>
        <ExternalLink size={16} className="text-white/40 group-hover:text-white/70" />
      </div>
      <p className="text-sm leading-relaxed text-white/70">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{t}</span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-2xl" />
      </div>
    </motion.a>
  );
}
