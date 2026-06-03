import { render, screen } from "../../../utils/test-utils";
import TeamMemberModal from "./TeamMemberModal";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("TeamMemberModal Component", () => {
  const mockMember = {
    title: "Alice",
    subtitle: "CTO",
    image: "alice.png",
    description: "Tech lead",
  };

  it("renders modal content when open", () => {
    render(<TeamMemberModal open={true} onClose={() => {}} member={mockMember} />);
    
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("CTO")).toBeInTheDocument();
    expect(screen.getByText("Tech lead")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<TeamMemberModal open={false} onClose={() => {}} member={mockMember} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    render(<TeamMemberModal open={true} onClose={handleClose} member={mockMember} />);
    
    const closeBtn = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeBtn);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
