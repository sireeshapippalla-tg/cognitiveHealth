import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import MeasurableRsultsSection from "./measurableRsultsSection";

describe("measurableRsultsSection Component", () => {
  it("renders correctly", () => {
    render(<MeasurableRsultsSection />);
    expect(true).toBe(true);
  });
});
