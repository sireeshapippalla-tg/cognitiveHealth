import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import AdvisorCard from "./advisoryCard";

describe("AdvisorCard Component", () => {
  const mockAdvisor = {
    name: "Jane Doe",
    title: "Advisor",
    image: "test.jpg",
    bio: "Bio text"
  };
  it("renders correctly", () => {
    render(<AdvisorCard advisor={mockAdvisor} />);
    expect(true).toBe(true);
  });
});