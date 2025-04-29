interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio Profissional",
    description:
      "Site pessoal criado com React, TypeScript, Tailwind e Framer Motion.",
    techs: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    link: "https://github.com/gabrieldani/portfolio",
  },
  {
    title: "Blog Tech",
    description:
      "Blog técnico com suporte a Markdown, tema escuro e deploy via Vercel.",
    techs: ["Next.js", "Markdown", "Zustand", "Vercel"],
    link: "https://github.com/gabrieldani/blog-tech",
  },
];
