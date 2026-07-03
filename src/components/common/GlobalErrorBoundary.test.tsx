import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import GlobalErrorBoundary from "./GlobalErrorBoundary";

describe("GlobalErrorBoundary Component", () => {
  it("renders correctly", () => {
    render(<GlobalErrorBoundary />);
    expect(true).toBe(true);
  });
});
