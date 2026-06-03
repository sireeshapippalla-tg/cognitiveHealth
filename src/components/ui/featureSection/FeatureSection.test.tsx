import { render, screen } from "../../../utils/test-utils";
import FeatureSection from "./FeatureSection";
import { describe, it, expect } from "vitest";

describe("FeatureSection Component", () => {
  const mockItems = [
    { icon: <span data-testid="icon-1">Icon1</span>, title: "Feature 1", description: "Desc 1" },
    { icon: <span data-testid="icon-2">Icon2</span>, title: "Feature 2", description: "Desc 2" },
  ];

  it("renders the title and subtitle", () => {
    render(<FeatureSection title="Main Title" subtitle="Subtitle here" items={mockItems} />);
    expect(screen.getByText("Main Title")).toBeInTheDocument();
    expect(screen.getByText("Subtitle here")).toBeInTheDocument();
  });

  it("renders all feature items properly", () => {
    render(<FeatureSection title="Title" items={mockItems} />);
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Desc 1")).toBeInTheDocument();
    expect(screen.getByTestId("icon-1")).toBeInTheDocument();
    
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Desc 2")).toBeInTheDocument();
    expect(screen.getByTestId("icon-2")).toBeInTheDocument();
  });
});
