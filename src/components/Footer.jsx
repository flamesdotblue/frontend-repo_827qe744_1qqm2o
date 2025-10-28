export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Flames • Built with React, Tailwind, and love.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@portfolio.dev" className="hover:text-white">Email</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
