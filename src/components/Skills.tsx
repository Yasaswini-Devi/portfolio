import { skills } from "@/data/skills";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category}>
            <h3 className="font-medium text-lg mb-2 capitalize">{category}</h3>
            <ul className="space-y-1 text-gray-300">
              {list.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}