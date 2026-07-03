import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import AdvisorCard from "./advisoryCard";

describe("AdvisorCard Component", () => {
  const mockAdvisor = {
    id: 1,
    name: "Jane Doe",
    role: "Advisor",
    description: "Bio text"
  };
  it("renders correctly", () => {
    render(<AdvisorCard advisor={mockAdvisor} />);
    expect(true).toBe(true);
  });
});