import { render, screen } from "../../../utils/test-utils";
import SplitSection from "./SplitSection";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("SplitSection Component", () => {
  it("renders content and image", () => {
    render(
      <SplitSection 
        eyebrow="Introduction" 
        title="Welcome" 
        description="Here is some description" 
        image="test-image.png" 
      />
    );
    expect(screen.getByText("Introduction")).toBeInTheDocument();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Here is some description")).toBeInTheDocument();
    
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "test-image.png");
  });

  it("handles primary and secondary actions", async () => {
    const onPrimary = vi.fn();
    const onSecondary = vi.fn();
    
    render(
      <SplitSection 
        image="test.png" 
        primaryAction={{ label: "Primary", onClick: onPrimary }} 
        secondaryAction={{ label: "Secondary", onClick: onSecondary }} 
      />
    );
    
    const primaryBtn = screen.getByRole("button", { name: /Primary/i });
    const secondaryBtn = screen.getByRole("button", { name: /Secondary/i });
    
    await userEvent.click(primaryBtn);
    expect(onPrimary).toHaveBeenCalledTimes(1);
    
    await userEvent.click(secondaryBtn);
    expect(onSecondary).toHaveBeenCalledTimes(1);
  });
});
