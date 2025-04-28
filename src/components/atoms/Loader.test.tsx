import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader";
import { describe, it, expect } from "vitest";

describe("Loader", () => {
  it("renderiza o spinner de carregamento", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByText("Carregando...")).toBeInTheDocument();
  });
});
