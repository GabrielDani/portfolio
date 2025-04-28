import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Paragraph } from "@/components/atoms/Paragraph";

export default function NotFound() {
  return (
    <PageContainer>
      <Heading level={1} text="404" />
      <Paragraph text="Ops! Página não encontrada." />
      <ButtonLink href="/" text="Voltar para o início" variant="primary" />
    </PageContainer>
  );
}
