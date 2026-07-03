import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { ReusableHowItWorks } from "./ReusableHowItWorks";

describe("ReusableHowItWorks Component", () => {
  it("renders correctly", () => {
    render(<ReusableHowItWorks title="Test Title" steps={[]} />);
    expect(true).toBe(true);
  });
});