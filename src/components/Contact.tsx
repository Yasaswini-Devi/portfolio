import { contact } from "@/data/contact";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="text-center space-y-3">
        <p>Email: <a href={`mailto:${contact.email}`} className="text-blue-400">{contact.email}</a></p>
        <p>Phone: {contact.phone}</p>
        <p>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-blue-400">LinkedIn</a>
        </p>
      </div>
    </Section>
  );
}