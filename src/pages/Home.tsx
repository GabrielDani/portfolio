import { SocialLinks } from "@/components/common/SocialLinks";
import { Avatar } from "@/components/ui/Avatar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { fadeInUp, fadeIn, scaleIn } from "@/animations/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 space-y-6">
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
    </section>
  );
}
