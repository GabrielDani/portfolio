import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { PageContainer } from "@/components/atoms/PageContainer";
import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { ButtonLink } from "@/components/atoms/ButtonLink";
import { Button } from "@/components/atoms/Button";

export default function ErrorFallback() {
  const error = useRouteError();
  const navigate = useNavigate();

  const message = isRouteErrorResponse(error)
    ? `${error.status} - ${error.statusText}`
    : "Erro inesperado ao carregar a página.";

  return (
    <div className="bg-background text-body dark:bg-dark-background dark:text-dark-text flex min-h-screen flex-col">
      <PageContainer>
        <Heading level={1} text="Erro 😢" />
        <Paragraph text="Algo deu errado ao carregar essa rota." />
        <Paragraph text={String(message)} />

        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <ButtonLink href="/" text="Voltar ao Início" variant="primary" />
          <Button
            variant="primary-outline"
            onClick={() => window.location.reload()}
          >
            Tentar Novamente
          </Button>
        </div>
      </PageContainer>
    </div>
  );
}
