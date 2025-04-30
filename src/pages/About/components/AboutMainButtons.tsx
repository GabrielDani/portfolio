import { ButtonLink } from "@/components/atoms/ButtonLink";
import { FaFileDownload } from "react-icons/fa";

export function AboutMainButtons() {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <ButtonLink href="/projetos" variant="primary" text="Ver Meus Projetos" />
      <ButtonLink href="/contato" variant="outline" text="Entrar em Contato" />
      <ButtonLink
        href="/Currículo_GabrielDaniAz.pdf"
        text="Baixar Currículo"
        variant="outline"
        download
        icon={<FaFileDownload className="text-base" />}
      />
    </div>
  );
}
