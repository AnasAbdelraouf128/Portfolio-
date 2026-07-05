import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience } from "@/components/portfolio/AboutSections";
import { Skills, Achievements, Projects, Contact, Footer } from "@/components/portfolio/SkillSections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="page-bg" aria-hidden="true" />
      <Navbar />
      <main className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
