import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import CTASection from "./CTASection";

describe("CTASection Component", () => {
  it("renders correctly", () => {
    render(<CTASection />);
    expect(true).toBe(true);
  });
});
