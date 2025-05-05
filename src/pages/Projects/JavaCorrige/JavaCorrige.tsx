import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

export default function JavaCorrige() {
  return (
    <ProjectDetails
      title="JavaCorrige - Sistema de Correção Automática de Exercícios Práticos de POO"
      description="O JavaCorrige é uma solução projetada para automatizar a correção de exercícios práticos de Programação Orientada a Objetos (POO) em Java. Utilizando técnicas avançadas de reflexão, o sistema analisa o código enviado pelos alunos e gera relatórios em PDF com correções detalhadas e notas automáticas baseadas em gabaritos anotados."
      features={[
        "🔍 Análise automatizada de código Java via Reflection API",
        "📝 Geração de relatórios em PDF com feedback detalhado",
        "📊 Sistema de pontuação baseado em anotações customizadas (@Nota, @Especificacao)",
        "📦 Processamento de arquivos .java e arquivos compactados",
        "⚙️ Configuração flexível via arquivos de gabarito",
        "📑 Suporte a múltiplos exercícios em lote",
        "🖥️ Interface de linha de comando intuitiva",
      ]}
      technologies={{
        backend: [
          "Java 21",
          "Java Reflection API",
          "Maven (Gerenciamento de dependências)",
          "iText 7 (Geração de PDFs)",
          "Análise léxica e estrutural de código-fonte",
          "Comparação com gabaritos anotados",
          "Validação de métodos, atributos e construtores",
          "Sistema de penalidades por itens incorretos",
          "Empacotamento com jpackage",
          "Scripts de execução (.bat/.sh)",
          "Configuração de variáveis de ambiente",
        ],
      }}
      links={{
        backend: "https://github.com/GabrielDani/JavaCorrige",
      }}
      screenshots={[
        "/images/projects/javacorrige/home.png",
        "/images/projects/javacorrige/error-execution.png",
        "/images/projects/javacorrige/success-execution.png",
        "/images/projects/javacorrige/report-sample-1.png",
        "/images/projects/javacorrige/report-sample-error.png",
      ]}
    />
  );
}
