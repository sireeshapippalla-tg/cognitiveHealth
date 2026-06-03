import { render, screen } from "../../../utils/test-utils";
import MetricsSection from "./MetricsSection";
import { describe, it, expect } from "vitest";

describe("MetricsSection Component", () => {
  const mockStats = [
    { value: "100", title: "Users", description: "Active users" },
    { value: "50%", title: "Growth", description: "YoY Growth" },
  ];

  it("renders header section properly", () => {
    render(
      <MetricsSection 
        title="Our Metrics" 
        subtitle="Key figures" 
        pillText="Stats" 
        stats={mockStats} 
      />
    );
    expect(screen.getByText("Our Metrics")).toBeInTheDocument();
    expect(screen.getByText("Key figures")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
  });

  it("renders all stat cards", () => {
    render(<MetricsSection title="T" subtitle="S" stats={mockStats} />);
    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Active users")).toBeInTheDocument();
    expect(screen.getByText("Growth")).toBeInTheDocument();
    expect(screen.getByText("YoY Growth")).toBeInTheDocument();
  });
});
