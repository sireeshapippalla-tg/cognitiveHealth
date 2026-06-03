import { render, screen } from "../../../utils/test-utils";
import { ReusableHowItWorks } from "./ReusableHowItWorks";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("ReusableHowItWorks Component", () => {
  const mockSteps = [
    { title: "Step 1", description: "First step", icon: <span data-testid="step-1" /> },
    { title: "Step 2", description: "Second step", icon: <span data-testid="step-2" /> },
  ];

  it("renders the title and steps", () => {
    render(<ReusableHowItWorks title="How it Works" steps={mockSteps} />);
    expect(screen.getByText("How it Works")).toBeInTheDocument();
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("First step")).toBeInTheDocument();
  });

  it("renders pill elements if provided", () => {
    render(
      <ReusableHowItWorks 
        title="Title" 
        steps={mockSteps} 
        pillText="Beta" 
        pillIcon="icon.png" 
      />
    );
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("handles CTA button clicks", async () => {
    const mockClick = vi.fn();
    render(<ReusableHowItWorks steps={mockSteps} ctaText="Get Started" onCtaClick={mockClick} />);
    
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
    
    await userEvent.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
