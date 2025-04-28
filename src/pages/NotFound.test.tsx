import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { describe, it, expect } from "vitest";

describe("NotFound", () => {
  it("renderiza título 404 e botão de voltar", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Ops! Página não encontrada.")).toBeInTheDocument();
    expect(screen.getByText("Voltar para o início")).toBeInTheDocument();
  });
});
