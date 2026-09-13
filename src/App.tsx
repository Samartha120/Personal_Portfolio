import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';
import './styles/globals.css';

export function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-200">
      <Navbar />
      <main id="main-content" className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
