import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
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
