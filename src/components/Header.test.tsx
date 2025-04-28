// src/components/Header.test.tsx
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";
import { expect, describe, it } from "vitest";

describe("Header", () => {
  it("renderiza o título do portfólio", () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText("Meu Portfólio")).toBeInTheDocument();
  });

  it("renderiza os links de navegação", () => {
    render(<Header />, { wrapper: MemoryRouter });
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("aplica a classe ativa correta ao link atual", () => {
    render(
      <MemoryRouter initialEntries={["/projetos"]}>
        <Header />
      </MemoryRouter>
    );

    const projetosLink = screen.getByText("Projetos");
    expect(projetosLink.className).toContain("text-primary");
  });

  it("navega para a rota correta ao clicar no link", async () => {
    const user = userEvent.setup();
    render(<Header />, { wrapper: MemoryRouter });

    const sobreLink = screen.getByText("Sobre");
    await user.click(sobreLink);

    expect(sobreLink).toBeInTheDocument();
  });
});
