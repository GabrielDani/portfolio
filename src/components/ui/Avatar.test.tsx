import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { describe, it, expect } from "vitest";

describe("Avatar", () => {
  it("renderiza o ícone corretamente", () => {
    render(<Avatar icon="👨‍💻" />);
    expect(
      screen.getByRole("img", { name: /avatar programador/i })
    ).toBeInTheDocument();
  });
});
