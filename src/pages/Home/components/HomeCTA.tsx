import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { FaFileDownload } from "react-icons/fa";
import { Code, Eye } from "lucide-react";

export function HomeCTA() {
  return (
    <motion.div {...fadeInUp} className="grid grid-cols-2 gap-4 mt-6">
      <ButtonLink
        href="/projetos"
        variant="primary"
        text="Ver Projetos"
        icon={<Code className="w-4 h-4 text-base" />}
      />

      <ButtonLink
        href="/sobre"
        variant="outline"
        text="Sobre Mim"
        icon={<Eye className="w-4 h-4 text-base" />}
      />

      <ButtonLink
        href="/Currículo_GabrielDaniAz"
        variant="outline"
        text="Baixar Currículo"
        download
        icon={<FaFileDownload className="w-4 h-4 text-base" />}
        className="col-span-2 justify-center"
      />
    </motion.div>
  );
}
