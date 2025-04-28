import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";
import { describe, it, expect } from "vitest";

describe("Heading", () => {
  it("renderiza título principal (h1)", () => {
    render(<Heading level={1} text="Título Principal" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Título Principal"
    );
  });

  it("renderiza subtítulo (h2)", () => {
    render(<Heading level={2} text="Subtítulo" variant="subheading" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Subtítulo"
    );
  });
});
