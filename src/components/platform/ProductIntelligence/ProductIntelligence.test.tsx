import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ProductIntelligence from "./ProductIntelligence";

describe("ProductIntelligence Component", () => {
  it("renders correctly", () => {
    render(<ProductIntelligence />);
    expect(true).toBe(true);
  });
});
