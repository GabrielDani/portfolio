import { PageContainer } from "@/components/atoms/PageContainer";
import { ProjectsHeader } from "./components/ProjectHeader";
import { ProjectsFilter } from "./components/ProjectFilter";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectType } from "@/types/project";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const availableTypes: string[] = Object.values(ProjectType);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <PageContainer>
      <ProjectsHeader />
      <ProjectsFilter
        types={availableTypes}
        current={filter}
        onChange={setFilter}
      />
      <ProjectsGrid projects={filtered} />
    </PageContainer>
  );
}
