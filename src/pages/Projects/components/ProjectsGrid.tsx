import { ProjectCard } from "@/components/molecules/ProjectCard";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";
import type { Project } from "@/types/project";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <motion.div
      {...fadeInUp}
      className="grid gap-6 mt-10 w-full max-w-5xl md:grid-cols-2"
    >
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </motion.div>
  );
}
