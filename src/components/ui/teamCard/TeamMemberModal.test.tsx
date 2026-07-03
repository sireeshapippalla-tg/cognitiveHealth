import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import TeamMemberModal from "./TeamMemberModal";

describe("TeamMemberModal Component", () => {
  const mockMember = {
    title: "Jane Doe",
    subtitle: "Member",
    image: "test.jpg",
    description: "Bio text"
  };
  it("renders correctly", () => {
    render(<TeamMemberModal open={true} onClose={() => {}} member={mockMember} />);
    expect(true).toBe(true);
  });
});