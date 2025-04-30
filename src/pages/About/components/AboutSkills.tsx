import { staggeredContainer } from "@/components/animations/variants";
import { SkillGroup } from "@/components/molecules/SkillGroup";
import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { BookOpen, Layers, Monitor, Server, Wrench } from "lucide-react";

export function AboutSkills() {
  return (
    <motion.div
      {...staggeredContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12 w-full max-w-5xl"
    >
      <SkillGroup
        title="Frontend & UI"
        skills={skills.frontend}
        icon={<Monitor />}
      />

      <SkillGroup
        title="Backend & Databases"
        skills={skills.backend}
        icon={<Server />}
      />

      <SkillGroup
        title="DevOps & Tools"
        skills={skills.devops}
        icon={<Wrench />}
      />

      <SkillGroup
        title="Engineering Practices"
        skills={skills.methodologies}
        icon={<BookOpen />}
      />
      <SkillGroup
        title="Foundational & Legacy Tech"
        skills={skills.foundational}
        icon={<Layers />}
      />
    </motion.div>
  );
}
