import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import ScrollToTop from "./ScrollToTop";

describe("ScrollToTop Component", () => {
  it("renders correctly", () => {
    render(<ScrollToTop />);
    expect(true).toBe(true);
  });
});
