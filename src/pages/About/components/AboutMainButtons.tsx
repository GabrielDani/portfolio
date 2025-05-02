import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/variants";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Code, Contact } from "lucide-react";
import { FaFileDownload } from "react-icons/fa";

export function AboutMainButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6 max-w-lg">
      <ButtonLink
        href="/projetos"
        variant="primary"
        text="Ver Meus Projetos"
        icon={<Code className="w-4 h-4 text-base" />}
      />
      <ButtonLink
        href="/contato"
        variant="outline"
        text="Entrar em Contato"
        icon={<Contact className="w-4 h-4 text-base" />}
      />
      <ButtonLink
        href="/Currículo_GabrielDaniAz.pdf"
        text="Baixar Currículo"
        variant="outline"
        download
        icon={<FaFileDownload className="text-base" />}
        className="col-span-2 justify-center"
      />
    </div>
  );
}
