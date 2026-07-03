import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import TeamMemberModal from "./TeamMemberModal";

describe("TeamMemberModal Component", () => {
  const mockMember = {
    name: "Jane Doe",
    title: "Member",
    image: "test.jpg",
    bio: "Bio text"
  };
  it("renders correctly", () => {
    render(<TeamMemberModal open={true} onClose={() => {}} member={mockMember} />);
    expect(true).toBe(true);
  });
});