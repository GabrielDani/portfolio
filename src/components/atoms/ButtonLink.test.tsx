import { render, screen } from "@testing-library/react";
import { ButtonLink } from "./ButtonLink";
import { describe, it, expect } from "vitest";

describe("ButtonLink", () => {
  it("renderiza botão primário", () => {
    render(
      <ButtonLink href="/projetos" text="Ver Projetos" variant="primary" />
    );
    expect(screen.getByText("Ver Projetos")).toBeInTheDocument();
  });

  it("renderiza botão outline", () => {
    render(<ButtonLink href="/contato" text="Contato" variant="outline" />);
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });
});
