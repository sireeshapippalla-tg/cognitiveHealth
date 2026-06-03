import { render, screen, fireEvent } from "../../../utils/test-utils";
import ExpandableCard from "./expandableCard";
import { describe, it, expect } from "vitest";

describe("ExpandableCard Component", () => {
  const mockItem = {
    id: 1,
    title: "John Doe",
    subtitle: "Manager",
    description: "A very good manager",
    image: "john.png",
  };

  it("renders title and subtitle", () => {
    render(<ExpandableCard item={mockItem} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Manager")).toBeInTheDocument();
  });

  it("expands to show description on click when not capability", () => {
    render(<ExpandableCard item={mockItem} variant="team" />);
    const header = screen.getByText("John Doe").parentElement?.parentElement;
    expect(header).toBeInTheDocument();
    
    if(header) {
      fireEvent.click(header);
    }
    
    expect(screen.getByText("A very good manager")).toBeInTheDocument();
  });
});
