import { Avatar } from "@/components/atoms/Avatar";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { motion } from "framer-motion";
import { scaleIn, fadeInUp } from "@/components/animations/variants";

export function HomeHeader() {
  return (
    <>
      <motion.div {...scaleIn}>
        <Avatar imageSrc="/profilePhoto.jpg" alt="Gabriel Dani" />
      </motion.div>

      <motion.div {...fadeInUp} className="space-y-2 text-center">
        <Heading level={1} text="Gabriel Dani de Azevedo" />
        <Heading
          level={2}
          text="Desenvolvedor Fullstack | React.js · Node.js · TypeScript"
          variant="subheading"
        />
        <Paragraph
          text="Construo aplicações completas, desde interfaces modernas até APIs escaláveis. 
          Combino habilidades em Frontend (React, UI/UX) com Backend (Node.js, bancos de dados) 
          para entregar soluções integradas e de alta performance."
        />
      </motion.div>
    </>
  );
}
