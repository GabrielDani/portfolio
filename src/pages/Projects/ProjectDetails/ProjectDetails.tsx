import { Heading } from "@/components/atoms/Heading";
import { Paragraph } from "@/components/atoms/Paragraph";
import { PageContainer } from "@/components/atoms/PageContainer";

type ProjectDetailsProps = {
  title: string;
  description: string;
  features: string[];
  technologies?: {
    frontend?: string[];
    backend?: string[];
  };
  links?: {
    site?: string;
    frontend?: string;
    backend?: string;
  };
  screenshots: string[];
};

export const ProjectDetails = ({
  title,
  description,
  features,
  technologies,
  links,
  screenshots,
}: ProjectDetailsProps) => {
  const hasFrontend = technologies?.frontend?.length;
  const hasBackend = technologies?.backend?.length;

  return (
    <PageContainer>
      <Heading level={1} text={title} />
      <Paragraph text={description} />

      <div className="space-y-4">
        <Heading level={2} text="🛠️ Funcionalidades" />
        <ul className="list-disc list-inside text-start text-primary font-semibold space-y-2">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>

      {(hasFrontend || hasBackend) && (
        <div className="space-y-4">
          <Heading level={2} text="🔧 Tecnologias utilizadas" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-start">
            {hasFrontend && (
              <div>
                <h3 className="font-semibold text-primary">Frontend:</h3>
                <ul className="list-disc list-inside">
                  {technologies!.frontend!.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {hasBackend && (
              <div>
                <h3 className="font-semibold text-primary">Backend:</h3>
                <ul className="list-disc list-inside">
                  {technologies!.backend!.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {links && (links.site || links.frontend || links.backend) && (
        <div className="space-y-4">
          <Heading level={2} text="🔗 Links do Projeto" />
          <ul className="list-disc list-inside text-blue-600 underline text-start">
            {links.site && (
              <li>
                <a href={links.site} target="_blank" rel="noopener noreferrer">
                  🌐 Site online
                </a>
              </li>
            )}
            {links.frontend && (
              <li>
                <a
                  href={links.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📁 Repositório Frontend
                </a>
              </li>
            )}
            {links.backend && (
              <li>
                <a
                  href={links.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🗄️ Repositório Backend
                </a>
              </li>
            )}
          </ul>
        </div>
      )}

      <div className="space-y-4">
        <Heading level={2} text="📸 Screenshots" />
        <div className="grid grid-cols-1 divide-y divide-secondary">
          {screenshots.map((src, i) => (
            <div key={i} className="py-6">
              {" "}
              {/* Ajuste o padding vertical conforme necessário */}
              <img
                src={src}
                alt={`screenshot ${i + 1}`}
                className="rounded shadow w-full"
              />
              {/* A linha será automaticamente adicionada entre os itens */}
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
};
