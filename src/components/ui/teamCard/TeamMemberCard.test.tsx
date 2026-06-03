import { render, screen } from "../../../utils/test-utils";
import TeamMemberCard from "./TeamMemberCard";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("TeamMemberCard Component", () => {
  const mockMember = {
    title: "Jane Doe",
    subtitle: "CEO",
    image: "jane.png",
    description: "CEO of the company",
  };

  it("renders member info", () => {
    render(<TeamMemberCard member={mockMember} />);
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("CEO")).toBeInTheDocument();
    const avatar = screen.getByRole("img", { name: "Jane Doe" });
    expect(avatar).toHaveAttribute("src", "jane.png");
  });

  it("opens modal on button click", async () => {
    render(<TeamMemberCard member={mockMember} />);
    
    const button = screen.getByRole("button", { name: /view jane doe's profile/i });
    await userEvent.click(button);
    
    expect(screen.getAllByText("Jane Doe").length).toBeGreaterThan(0);
    expect(screen.getByText("CEO of the company")).toBeInTheDocument();
  });
});
