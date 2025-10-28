import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-semibold tracking-tight text-white/90"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">Flames</span>
            <span className="text-white/60">.dev</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:hello@portfolio.dev" aria-label="Email" className="p-2 rounded-md hover:bg-white/10 text-white/80">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/10 text-white/80">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/10 text-white/80">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
