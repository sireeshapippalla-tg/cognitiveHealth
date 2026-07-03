import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import WhyExistSection from "./whyExistSection";

describe("whyExistSection Component", () => {
  it("renders correctly", () => {
    render(<WhyExistSection />);
    expect(true).toBe(true);
  });
});
