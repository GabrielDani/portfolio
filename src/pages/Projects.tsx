import { useState } from "react";
import { projects } from "@/data/projects";
import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { Filter } from "@/components/molecules/Filter";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) =>
          p.techs.some((tech) => tech.toLowerCase() === filter)
        );

  const techs = Array.from(
    new Set(projects.flatMap((p) => p.techs.map((t) => t.toLowerCase())))
  );

  return (
    <PageContainer>
      <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
        <Heading level={1} text="Meus Projetos" />
        <Paragraph text="Alguns projetos pessoais e desafios técnicos que desenvolvi para aprimorar minhas habilidades." />
      </motion.div>

      <Filter techs={techs} current={filter} onChange={setFilter} />

      <motion.div
        {...fadeInUp}
        className="grid gap-6 mt-10 w-full max-w-5xl md:grid-cols-2"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </PageContainer>
  );
}
