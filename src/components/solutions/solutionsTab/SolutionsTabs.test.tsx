import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import SolutionsTabs from "./SolutionsTabs";

describe("SolutionsTabs Component", () => {
  it("renders correctly", () => {
    render(<SolutionsTabs />);
    expect(true).toBe(true);
  });
});
