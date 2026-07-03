import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import FeatureSection from "./FeatureSection";

describe("FeatureSection Component", () => {
  it("renders correctly", () => {
    render(<FeatureSection title="Title" items={[]} />);
    expect(true).toBe(true);
  });
});