import { render, screen } from "../../../utils/test-utils";
import AppButton from "./AppButton";
import { describe, it, expect } from "vitest";

describe("AppButton Component", () => {
  it("renders with primary variant by default", () => {
    render(<AppButton>Click Me</AppButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("MuiButton-contained");
  });

  it("renders with outline variant", () => {
    render(<AppButton variantType="outline">Outline</AppButton>);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("MuiButton-outlined");
  });

  it("renders start and end icons", () => {
    render(
      <AppButton
        startIcon={<span data-testid="start-icon" />}
        endIcon={<span data-testid="end-icon" />}
      >
        Icons
      </AppButton>
    );
    expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    expect(screen.getByTestId("end-icon")).toBeInTheDocument();
  });
});
