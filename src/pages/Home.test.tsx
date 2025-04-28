import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("renderiza corretamente título e botões", () => {
    render(<Home />);
    expect(screen.getByText(/olá, eu sou/i)).toBeInTheDocument();
    expect(screen.getByText(/ver projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });
});
