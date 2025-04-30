import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";

export function ProjectsHeader() {
  return (
    <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
      <Heading level={1} text="Meus Projetos" />
      <Paragraph text="Alguns projetos reais, desafios técnicos e sistemas completos que desenvolvi com foco em qualidade de código, arquitetura limpa e performance." />
    </motion.div>
  );
}
