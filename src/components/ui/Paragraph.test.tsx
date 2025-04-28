import { render, screen } from "@testing-library/react";
import { Paragraph } from "./Paragraph";
import { describe, it, expect } from "vitest";

describe("Paragraph", () => {
  it("renderiza o texto corretamente", () => {
    render(<Paragraph text="Texto de parágrafo." />);
    expect(screen.getByText("Texto de parágrafo.")).toBeInTheDocument();
  });
});
