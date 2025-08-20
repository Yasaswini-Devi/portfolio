import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />
      <Skills />
      <Projects />
      <Profiles />
      <Contact />
    </main>
  );
}