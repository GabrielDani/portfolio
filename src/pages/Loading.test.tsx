import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { describe, it, expect } from "vitest";

describe("Loading", () => {
  it("exibe mensagem de carregando", () => {
    render(<Loading />);
    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
});
