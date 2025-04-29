import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <PageContainer>
      <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
        <Heading level={1} text="Meus Projetos" />
        <Paragraph text="Alguns projetos pessoais e desafios técnicos que desenvolvi para aprimorar minhas habilidades." />
      </motion.div>

      <motion.div
        {...fadeInUp}
        className="grid gap-6 mt-10 w-full max-w-5xl md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </motion.div>
    </PageContainer>
  );
}
