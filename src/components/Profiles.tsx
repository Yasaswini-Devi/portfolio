import { codingProfiles } from "@/data/profiles";
import Section from "./Section";

export default function Profiles() {
  return (
    <Section id="profiles" title="Coding Profiles">
      <div className="flex flex-wrap justify-center gap-6">
        {Object.entries(codingProfiles).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-amber-50 bg-gray-800 rounded-lg hover:text-blue-300 transition"
          >
            {platform.toUpperCase()}
          </a>
        ))}
      </div>
    </Section>
  );
}