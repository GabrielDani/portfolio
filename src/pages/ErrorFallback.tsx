import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import Layout from "@/components/organisms/Layout";

export default function ErrorFallback() {
  const error = useRouteError();

  const message = isRouteErrorResponse(error)
    ? `${error.status} - ${error.statusText}`
    : "Erro inesperado ao carregar a página.";

  return (
    <div className="bg-background text-body dark:bg-dark-background dark:text-dark-text flex min-h-screen flex-col">
      <PageContainer>
        <Heading level={1} text="Erro 😢" />
        <Paragraph text="Algo deu errado ao carregar essa rota." />
        <Paragraph text={String(message)} />
      </PageContainer>
    </div>
  );
}
