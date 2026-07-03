import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import SolutionsHeroSection from "./solutionsHeroSection";

describe("solutionsHeroSection Component", () => {
  it("renders correctly", () => {
    render(<SolutionsHeroSection />);
    expect(true).toBe(true);
  });
});
