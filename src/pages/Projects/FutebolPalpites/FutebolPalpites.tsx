import { ProjectDetails } from "../ProjectDetails/ProjectDetails";

export default function FutebolPalpites() {
  return (
    <ProjectDetails
      title="Palpites Brasileirão"
      description="Aplicação web interativa onde os usuários podem palpitar resultados dos jogos do Brasileirão. O sistema registra, pontua e classifica os participantes em rankings, promovendo uma experiência gamificada durante o campeonato."
      features={[
        "📅 Palpites por rodada com placares para cada jogo",
        "🔒 Autenticação segura com JWT e controle de sessão",
        "📊 Ranking geral e por rodada com critérios de pontuação claros",
        "📝 Histórico de palpites do usuário",
        "⚙️ Painel administrativo para cadastrar jogos",
        "📱 Responsividade completa (mobile-first)",
      ]}
      technologies={{
        frontend: [
          "TypeScript",
          "React + Vite",
          "TailwindCSS + ShadCN UI",
          "React Router",
          "Zustand para gerenciamento de estado",
        ],
        backend: [
          "Node.js + Express",
          "Prisma ORM + PostgreSQL",
          "Autenticação com JWT",
          "Validações com Zod",
          "Segurança com CORS e Bcrypt",
        ],
      }}
      links={{
        site: "https://futebol-palpites-frontend.vercel.app",
        frontend: "https://github.com/GabrielDani/futebol-palpites-frontend",
        backend: "https://github.com/GabrielDani/futebol-palpites-backend",
      }}
      screenshots={[
        "/images/projects/futebol-palpites/auth.jpg",
        "/images/projects/futebol-palpites/home.jpg",
        "/images/projects/futebol-palpites/ranking.jpg",
        "/images/projects/futebol-palpites/palpites.jpg",
        "/images/projects/futebol-palpites/admin.jpg",
      ]}
    />
  );
}
