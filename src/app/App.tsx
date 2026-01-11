import { Navbar } from '../components/layouts/Navbar';
import { Hero } from '../features/landing/Hero';
import { About } from '../features/about/About';
import { Skills } from '../features/skills/Skills';
import { Experience } from '../features/experience/Experience';
import { Projects } from '../features/projects/Projects';
import { Contact } from '../features/contact/Contact';
import { Highlights } from '../features/landing/Highlights';
import { AuroraBackground } from '../components/layouts/AuroraBackground';

export default function App() {
  return (
    <div className="overflow-hidden">
      <AuroraBackground />
      <Navbar />
      <main className=" pt-[65px] md:pt-[72px]">
        <Hero />
        <About />
        {/* <Highlights /> */}
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500 dark:text-slate-400">Copyright © {new Date().getFullYear()} Wildan. All rights reserved.</footer>
    </div>
  );
}
