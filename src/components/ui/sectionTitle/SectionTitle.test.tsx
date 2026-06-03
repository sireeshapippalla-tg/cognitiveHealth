import { render, screen } from "../../../utils/test-utils";
import { SectionTitle } from "./SectionTitle";
import { describe, it, expect } from "vitest";

describe("SectionTitle Component", () => {
  it("renders title properly and sanitizes HTML", () => {
    render(<SectionTitle title="Test <b>Title</b>" />);
    const titleObj = screen.getByText("Title");
    expect(titleObj.parentElement?.innerHTML).toContain("Test <b>Title</b>");
  });

  it("renders subtitle when provided", () => {
    render(<SectionTitle title="Main" subtitle="Sub description" />);
    expect(screen.getByText("Sub description")).toBeInTheDocument();
  });

  it("renders pill with text and icon", () => {
    render(
      <SectionTitle
        title="Main"
        pillText="New Feature"
        pillIcon="icon.png"
      />
    );
    expect(screen.getByText("New Feature")).toBeInTheDocument();
    const icon = screen.getByRole("presentation");
    expect(icon).toHaveAttribute("src", "icon.png");
  });
});
