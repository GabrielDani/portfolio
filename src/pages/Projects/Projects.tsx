// src/pages/Projects/index.tsx
import { PageContainer } from "@/components/atoms/PageContainer";
import { ProjectsHeader } from "./components/ProjectHeader";
import { ProjectsFilter } from "./components/ProjectFilter";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { useState } from "react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const techs = Array.from(
    new Set(projects.flatMap((p) => p.techs.map((t) => t.toLowerCase())))
  );

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) =>
          p.techs.some((tech) => tech.toLowerCase() === filter)
        );

  return (
    <PageContainer>
      <ProjectsHeader />
      <ProjectsFilter techs={techs} current={filter} onChange={setFilter} />
      <ProjectsGrid projects={filtered} />
    </PageContainer>
  );
}
