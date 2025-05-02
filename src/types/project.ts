export type Project = {
  title: string;
  description: string;
  techs: string[];
  link: string;
  thumbnail?: string;
  type: ProjectType;
};

export enum ProjectType {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  IA = "Inteligência Artificial",
  SYSTEM = "Sistema",
  GAME_DEV = "Game Development",
}
