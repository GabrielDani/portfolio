import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { email, github, linkedin, phone } from "@/data/contacts";
import { ContactLink } from "@/components/atoms/ContactLink";
import { CopyButton } from "@/components/atoms/CopyButton";

export default function Contact() {
  return (
    <PageContainer>
      <motion.div {...fadeInUp} className="text-center space-y-4 max-w-2xl">
        <Heading level={1} text="Entre em Contato" />
        <Paragraph text="Estou disponível para novas oportunidades, colaborações ou para trocar ideias sobre tecnologia." />
        <Paragraph text="Me chame no LinkedIn, envie um e-mail ou confira meu GitHub." />

        <div className="mt-6 flex justify-center gap-6 text-3xl text-primary">
          <ContactLink
            href={github}
            label="GitHub"
            icon={<FaGithub />}
            external
          />
          <ContactLink
            href={linkedin}
            label="LinkedIn"
            icon={<FaLinkedin />}
            external
          />
        </div>
        <div className="mt-6 flex justify-center gap-6 text-3xl text-primary">
          <CopyButton value={email} label="E-mail" />
          <CopyButton value={phone} label="Telefone" />
        </div>
      </motion.div>
    </PageContainer>
  );
}
