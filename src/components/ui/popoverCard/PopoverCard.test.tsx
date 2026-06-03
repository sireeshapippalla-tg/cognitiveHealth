import { render, screen } from "../../../utils/test-utils";
import PopoverCard from "./PopoverCard";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("PopoverCard Component", () => {
  it("renders title, label, and description", () => {
    render(
      <PopoverCard 
        title="Main Title" 
        label="NEW" 
        description="A cool new feature" 
        icon={<span data-testid="popover-icon" />} 
        onClick={() => {}} 
      />
    );
    expect(screen.getByText("Main Title")).toBeInTheDocument();
    expect(screen.getByText("NEW")).toBeInTheDocument();
    expect(screen.getByText("A cool new feature")).toBeInTheDocument();
    expect(screen.getByTestId("popover-icon")).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const mockClick = vi.fn();
    render(<PopoverCard title="Title" icon={<span />} onClick={mockClick} />);
    
    // The component might not be a standard button, but it is clickable
    const titleText = screen.getByText("Title");
    await userEvent.click(titleText);
    expect(mockClick).toHaveBeenCalled();
  });
});
