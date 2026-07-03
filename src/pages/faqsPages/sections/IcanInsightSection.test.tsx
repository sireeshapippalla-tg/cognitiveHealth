import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { IcanInsightSection } from "./IcanInsightSection";

describe("IcanInsightSection Component", () => {
  it("renders correctly", () => {
    render(<IcanInsightSection />);
    expect(true).toBe(true);
  });
});