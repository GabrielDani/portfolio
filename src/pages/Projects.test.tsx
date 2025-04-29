import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/data/projects", async () => {
  const actual = await vi.importActual("@/data/projects");
  return {
    ...actual,
    projects: [
      {
        title: "Teste Card",
        description: "Descrição de teste",
        techs: ["React", "TS"],
        link: "https://example.com",
        thumbnail: "/img.png",
      },
    ],
  };
});

describe("Projects Page", () => {
  it("renderiza o título e descrição da página", () => {
    render(<Projects />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /meus projetos/i
    );
    expect(screen.getByText(/alguns projetos pessoais/i)).toBeInTheDocument();
  });

  it("renderiza um card de projeto com título, descrição e techs", () => {
    render(<Projects />);
    expect(screen.getByText("Teste Card")).toBeInTheDocument();
    expect(screen.getByText("Descrição de teste")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TS")).toBeInTheDocument();
  });

  it("possui link externo para o projeto", () => {
    render(<Projects />);
    const link = screen.getByRole("link", { name: /teste card/i });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
  });
});
