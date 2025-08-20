import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string, title: string, children: ReactNode }) {
  return (
    <section id={id} className="py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">{title}</h2>
      <div>{children}</div>
    </section>
  );
}