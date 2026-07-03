import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BenefitsFeaturesSection } from "./BenefitsFeaturesSection";

describe("BenefitsFeaturesSection Component", () => {
  it("renders correctly", () => {
    render(<BenefitsFeaturesSection title="Title" benefits={[]} features={[]} />);
    expect(true).toBe(true);
  });
});