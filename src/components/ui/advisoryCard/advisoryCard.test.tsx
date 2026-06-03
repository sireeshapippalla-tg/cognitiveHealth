import { render, screen } from "../../../utils/test-utils";
import AdvisorCard from "./advisoryCard";
import { describe, it, expect } from "vitest";

describe("AdvisorCard Component", () => {
  const mockAdvisor = {
    id: 1,
    name: "Dr. Smith",
    role: "Medical Advisor",
    description: "Expert in AI.",
  };

  it("renders advisor details", () => {
    render(<AdvisorCard advisor={mockAdvisor} />);
    expect(screen.getByText("Dr. Smith")).toBeInTheDocument();
    expect(screen.getByText("Medical Advisor")).toBeInTheDocument();
    expect(screen.getByText("Expert in AI.")).toBeInTheDocument();
  });
});
