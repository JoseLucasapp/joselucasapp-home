import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Recommendations } from "./components/Recommendations";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Recommendations />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
