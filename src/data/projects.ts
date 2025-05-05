import { Project, ProjectType } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Palpites Brasileirão - Frontend",
    thumbnail:
      "/images/projects/futebol-palpites/thumb-futebol-palpites-frontend.jpg",
    description:
      "Aplicação SPA para palpite de jogos do Brasileirão, com sistema de autenticação, pontuação e rankings.",
    link: "/projetos/futebol-palpites",
    techs: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "ShadCN",
      "Zustand",
      "React Router",
      "Vite",
    ],
    type: ProjectType.FRONTEND,
  },
  {
    title: "Palpites Brasileirão - Backend",
    thumbnail:
      "/images/projects/futebol-palpites/thumb-futebol-palpites-backend.jpg",
    description:
      "API RESTful para autenticação, jogos, palpites e rankings em tempo real do sistema de futebol.",
    link: "/projetos/futebol-palpites",
    techs: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "Zod",
      "JWT",
      "PostgreSQL",
      "CORS",
      "Bcrypt",
    ],
    type: ProjectType.BACKEND,
  },
  {
    title: "JavaCorrige - Sistema de Correção Automática de POO",
    thumbnail: "/images/projects/javacorrige/thumb-javacorrige.jpg",
    description:
      "Ferramenta para correção automática de exercícios de Programação Orientada a Objetos em Java. " +
      "Analisa código-fonte via Reflection API, compara com gabaritos anotados e gera relatórios em PDF com notas e feedback detalhado.",
    link: "/projetos/javacorrige",
    techs: [
      "Java",
      "Java Reflection API",
      "Maven",
      "iText (PDF)",
      "JDK 21",
      "Annotations",
      "File I/O",
      "JPackage",
    ],
    type: ProjectType.SYSTEM,
  },
  {
    title: "Portfólio",
    thumbnail: "/images/projects/portfolio/thumb-portfolio.jpg",
    description:
      "Portfólio pessoal com foco em acessibilidade, design moderno e boas práticas de arquitetura frontend.",
    link: "https://github.com/GabrielDani/portfolio",
    techs: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "ShadCN",
      "Framer Motion",
      "React Router",
      "Vitest",
      "Zustand",
    ],
    type: ProjectType.FRONTEND,
  },
  {
    title: "Reconhecimento Dígitos Manuscritos - IA",
    description:
      "Treinamento de modelo para classificar dígitos manuscritos (MNIST) usando bibliotecas de IA.",
    link: "https://github.com/GabrielDani/Reconhecimento_Digitos_Manuscritos",
    techs: [
      "Python",
      "Jupyter Notebook",
      "Scikit-learn",
      "Pandas",
      "Matplotlib",
    ],
    type: ProjectType.IA,
  },
  {
    title: "Previsão Preços de Casas - IA",
    description:
      "Modelo supervisionado para prever preços de casas com base em atributos do dataset.",
    link: "https://github.com/GabrielDani/Previsao_Precos_Casas",
    techs: ["Python", "Jupyter Notebook", "Pandas", "Scikit-learn", "Seaborn"],
    type: ProjectType.IA,
  },
  {
    title: "Classificação de Flores (Iris Dataset)",
    description:
      "Modelo de classificação baseado em algoritmos como KNN e Regressão Logística.",
    link: "https://github.com/GabrielDani/Classificacao_Flores_Iris",
    techs: ["Python", "Jupyter Notebook", "Scikit-learn", "Seaborn"],
    type: ProjectType.IA,
  },
  {
    title: "Calculadora de Investimentos",
    description:
      "Ferramenta para calcular crescimento de investimentos com aportes mensais e juros compostos.",
    link: "https://github.com/GabrielDani/Calculadora_Investimentos",
    techs: ["JavaScript", "HTML", "CSS"],
    type: ProjectType.FRONTEND,
  },
  {
    title: "Rastreamento com Google Maps",
    description:
      "Aplicativo em Java para rastreamento de posições geográficas integrando API do Google Maps.",
    link: "https://github.com/GabrielDani/Rastreamento_GoogleMaps",
    techs: ["Java", "JavaFX", "Google Maps API"],
    type: ProjectType.SYSTEM,
  },
];
