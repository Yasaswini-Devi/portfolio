import { projects } from "@/data/projects";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div key={proj.title} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition">
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-300 mb-3">{proj.description}</p>
            <div className="text-sm text-gray-400 mb-4">
              {proj.techStack.join(" • ")}
            </div>
            <div className="flex gap-4 text-blue-400 text-sm">
              {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>}
              {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}