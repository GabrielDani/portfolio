import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { AboutMainButtons } from "./AboutMainButtons";

export function AboutMainText() {
  return (
    <motion.div
      {...fadeInUp}
      className="col-span-2 flex flex-col gap-4 text-center md:text-left max-w-3xl"
    >
      <Heading level={1} text="Sobre Mim" />

      <Paragraph
        text={
          <>
            Sou desenvolvedor frontend com experiência prática em{" "}
            <span className="text-secondary font-semibold">
              React, JavaScript e TypeScript
            </span>
            , com foco em construir interfaces{" "}
            <span className="italic">modernas</span>,{" "}
            <span className="italic">responsivas</span> e{" "}
            <span className="italic">acessíveis</span>.
          </>
        }
      />

      <Paragraph text="Durante meu estágio na Expo Kaizen, liderei a reformulação do sistema interno da empresa, aplicando Scrum, Clean Code e boas práticas de UX/UI, resultando em uma plataforma mais intuitiva e eficiente." />

      <Paragraph
        text={
          <>
            Tenho base sólida em lógica de programação graças à minha graduação
            em Engenharia de Controle e Automação (UFLA), o que me permite atuar
            com mentalidade analítica e foco em soluções escaláveis. Em projetos
            acadêmicos, desenvolvi interfaces com{" "}
            <span className="font-mono text-secondary">JavaFX</span> (sistemas
            desktop), protótipos de{" "}
            <span className="font-medium">jogos educativos</span> em{" "}
            <span className="font-mono text-secondary">Unity/C#</span>, entre
            outras experiências que me deram visão ampla de UI antes de migrar
            para o desenvolvimento web moderno.
          </>
        }
      />

      <Paragraph
        text={
          <>
            Meus principais projetos incluem um{" "}
            <span className="italic font-medium">
              site de palpites do Brasileirão
            </span>{" "}
            onde usuários disputam um sistema de pontuações com amigos{" "}
            <span className="text-sm text-muted">
              {" "}
              (React.ts/ Node.js/ PostgreSQL)
            </span>
            , um sistema de{" "}
            <span className="italic font-medium">
              correção automática de POO em Java
            </span>{" "}
            com uso de reflexão, e um protótipo de{" "}
            <span className="italic font-medium">gamificação educacional</span>{" "}
            com Unity para ensino de Python.
          </>
        }
      />

      <Paragraph
        text={
          <>
            Atualmente, busco oportunidades como{" "}
            <span className="text-secondary font-semibold">
              Desenvolvedor Frontend ou Fullstack
            </span>{" "}
            <span className="text-sm text-muted">
              (JavaScript/TypeScript/Node)
            </span>
            , com foco em performance, acessibilidade e arquitetura limpa.
          </>
        }
      />

      <AboutMainButtons />
    </motion.div>
  );
}
