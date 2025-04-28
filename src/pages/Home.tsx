import { SocialLinks } from "@/components/molecules/SocialLinks";
import { Avatar } from "@/components/atoms/Avatar";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp, fadeIn, scaleIn } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { PageContainer } from "@/components/atoms/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <motion.div {...scaleIn}>
        <Avatar icon="👨‍💻" />
      </motion.div>

      <motion.div {...fadeInUp} className="space-y-2">
        <Heading level={1} text="Olá, eu sou Gabriel Dani" />
        <Heading
          level={2}
          text="Desenvolvedor Frontend | React | TypeScript | UI/UX"
          variant="subheading"
        />
        <Paragraph text="Crio aplicações web modernas, responsivas e focadas em performance e experiência do usuário." />
      </motion.div>

      <motion.div {...fadeInUp} className="flex gap-4 mt-4">
        <ButtonLink href="/projetos" variant="primary" text="Ver Projetos" />
        <ButtonLink href="/contato" variant="outline" text="Contato" />
      </motion.div>

      <motion.div {...fadeIn} className="mt-6">
        <SocialLinks />
      </motion.div>
    </PageContainer>
  );
}
