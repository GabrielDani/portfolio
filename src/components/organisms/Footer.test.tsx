import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";
import { expect, describe, it } from "vitest";

describe("Footer", () => {
  it("renderiza o texto de direitos autorais", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Meu Portfólio\. Todos os direitos reservados\./i)
    ).toBeInTheDocument();
  });
});
