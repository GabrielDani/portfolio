import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { fadeInUp } from "@/components/animations/variants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <PageContainer>
      <motion.div {...fadeInUp} className="text-center space-y-4 max-w-2xl">
        <Heading level={1} text="Entre em Contato" />
        <Paragraph text="Estou disponível para novas oportunidades, colaborações ou para tomar um café e conversar sobre tecnologia." />
        <Paragraph text="Me envie uma mensagem pelo LinkedIn, GitHub ou e-mail e responderei o mais rápido possível!" />

        <div className="mt-6 space-x-4">
          <a
            href="https://github.com/GabrielDani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary-dark"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/gabriel-dani-de-azevedo-a69740288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:text-primary-dark"
          >
            LinkedIn
          </a>
          <a
            href="gabriel.dani07@gmail.com"
            className="text-primary underline hover:text-primary-dark"
          >
            E-mail
          </a>
        </div>
      </motion.div>
    </PageContainer>
  );
}
