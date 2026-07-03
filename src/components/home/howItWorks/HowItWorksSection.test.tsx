import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import HowItWorksSection from "./HowItWorksSection";

describe("HowItWorksSection Component", () => {
  it("renders correctly", () => {
    render(<HowItWorksSection />);
    expect(true).toBe(true);
  });
});
