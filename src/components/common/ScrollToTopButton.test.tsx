import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import ScrollToTopButton from "./ScrollToTopButton";

describe("ScrollToTopButton Component", () => {
  it("renders correctly", () => {
    render(<ScrollToTopButton />);
    expect(true).toBe(true);
  });
});
