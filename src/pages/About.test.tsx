import { render, screen } from "@testing-library/react";
import About from "./About";
import { describe, it, expect } from "vitest";

describe("About Page", () => {
  it("renderiza o título principal", () => {
    render(<About />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /sobre mim/i
    );
  });

  it("renderiza os textos principais", () => {
    render(<About />);
    expect(
      screen.getByText(/desenvolvedor frontend apaixonado/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/atualmente busco uma oportunidade/i)
    ).toBeInTheDocument();
  });

  it("renderiza botões de ação", () => {
    render(<About />);
    expect(screen.getByText(/ver meus projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/entrar em contato/i)).toBeInTheDocument();
  });

  it("renderiza a lista de skills", () => {
    render(<About />);
    expect(screen.getAllByText(/react/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/typescript/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/tailwindcss/i).length).toBeGreaterThan(0);
  });
});
