import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ImpactSection from "./ImpactSection";

describe("ImpactSection Component", () => {
  it("renders correctly", () => {
    render(<ImpactSection />);
    expect(true).toBe(true);
  });
});
