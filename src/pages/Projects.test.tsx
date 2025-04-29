import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Projects from "./Projects";
import { describe, it, expect } from "vitest";

describe("Projects Page", () => {
  it("mostra todos os projetos ao iniciar", () => {
    render(<Projects />);
    expect(screen.getByText(/meus projetos/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });

  it("filtra projetos por tecnologia", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const reactFilter = screen.getByRole("button", { name: /react/i });
    await user.click(reactFilter);

    const cards = screen.getAllByRole("link");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("reseta o filtro com botão Todos", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const todosButton = screen.getByRole("button", { name: /todos/i });
    await user.click(todosButton);

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });
});
