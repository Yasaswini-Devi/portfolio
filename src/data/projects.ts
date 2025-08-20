export type Project = {
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Book Recommendation System",
    description: "Built with Flask and Scikit-learn to recommend books based on user preferences.",
    techStack: ["Python", "Flask", "Scikit-learn"],
    github: "https://github.com/username/book-recommendation",
  },
  {
    title: "Expense Tracker Dashboard",
    description: "React + Express + MongoDB app with Chart.js visualizations.",
    techStack: ["React", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/username/expense-tracker",
    demo: "https://expense-tracker-demo.vercel.app"
  }
];