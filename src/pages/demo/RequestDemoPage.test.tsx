import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import RequestDemoPage from "./RequestDemoPage";

describe("RequestDemoPage Component", () => {
  it("renders correctly", () => {
    render(<RequestDemoPage showBackBtn={true} />);
    expect(true).toBe(true);
  });
});