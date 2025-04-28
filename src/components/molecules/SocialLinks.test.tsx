import { render, screen } from "@testing-library/react";
import { SocialLinks } from "./SocialLinks";
import { describe, it, expect } from "vitest";

describe("SocialLinks", () => {
  it("renderiza links para GitHub e LinkedIn", () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText(/link para github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/link para linkedin/i)).toBeInTheDocument();
  });
});
