import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Avatar } from "@/components/atoms/Avatar";
import { fadeInUp, fadeIn, scaleIn } from "@/components/animations/variants";
import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "TailwindCSS",
  "Framer Motion",
  "Zustand",
  "Next.js",
  "Vitest",
  "Testing Library",
  "Figma",
  "Vite",
  "Jest",
];

// Container para controlar o stagger
const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animação para cada skill
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <PageContainer>
      {/* Layout em 3 colunas para telas grandes */}
      <div className="flex flex-col items-center gap-8 md:flex-row lg:grid lg:grid-cols-3 lg:items-start w-full">
        {/* Avatar */}
        <motion.div {...scaleIn} className="flex justify-center lg:justify-end">
          <Avatar icon="👨‍💻" />
        </motion.div>

        {/* Texto Principal */}
        <motion.div
          {...fadeInUp}
          className="col-span-2 flex flex-col gap-4 text-center md:text-left max-w-3xl"
        >
          <Heading level={1} text="Sobre Mim" />
          <Paragraph text="Sou Gabriel Dani, desenvolvedor frontend apaixonado por construir experiências digitais modernas, rápidas e focadas no usuário." />
          <Paragraph text="Tenho sólida experiência com React, TypeScript, TailwindCSS, Framer Motion e foco constante em boas práticas de arquitetura e acessibilidade." />
          <Paragraph text="Atualmente busco uma oportunidade para atuar como Desenvolvedor Frontend, onde possa aplicar meus conhecimentos, crescer profissionalmente e contribuir para a criação de produtos de alto impacto." />
          <Paragraph text="Trabalho muito bem em equipe, sou proativo, adaptável, curioso por novas tecnologias e apaixonado por resolver problemas de forma criativa e eficiente." />
          <Paragraph text="Estou pronto para desafios reais de mercado e para fazer a diferença na equipe que me acolher!" />

          <div className="mt-6 flex flex-wrap gap-4">
            <ButtonLink
              href="/projetos"
              variant="primary"
              text="Ver Meus Projetos"
            />
            <ButtonLink
              href="/contato"
              variant="outline"
              text="Entrar em Contato"
            />
          </div>
        </motion.div>
      </div>

      {/* Skills com animação */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-12 w-full max-w-5xl"
      >
        <Heading
          level={2}
          text="Tecnologias que domino:"
          variant="subheading"
        />
        <motion.ul className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
          {skills.map((tech) => (
            <motion.li
              key={tech}
              variants={item}
              className="bg-surface dark:bg-dark-surface py-2 px-4 rounded-md shadow hover:shadow-lg transition font-medium text-primary-dark"
            >
              {tech}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </PageContainer>
  );
}
