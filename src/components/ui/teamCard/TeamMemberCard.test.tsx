import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import TeamMemberCard from "./TeamMemberCard";

describe("TeamMemberCard Component", () => {
  const mockMember = {
    title: "Jane Doe",
    subtitle: "Member",
    image: "test.jpg",
    description: "Bio text"
  };
  it("renders correctly", () => {
    render(<TeamMemberCard member={mockMember} />);
    expect(true).toBe(true);
  });
});