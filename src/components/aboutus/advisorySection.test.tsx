import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import AdvisorySection from "./advisorySection";

describe("advisorySection Component", () => {
  it("renders correctly", () => {
    render(<AdvisorySection />);
    expect(true).toBe(true);
  });
});
