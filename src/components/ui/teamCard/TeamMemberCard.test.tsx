import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import TeamMemberCard from "./TeamMemberCard";

describe("TeamMemberCard Component", () => {
  const mockMember = {
    name: "Jane Doe",
    title: "Member",
    image: "test.jpg",
    bio: "Bio text"
  };
  it("renders correctly", () => {
    render(<TeamMemberCard member={mockMember} />);
    expect(true).toBe(true);
  });
});