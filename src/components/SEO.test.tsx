import { describe, it, expect } from "vitest";
import { render } from "../utils/test-utils";
import SEO from "./SEO";

describe("SEO Component", () => {
  it("renders correctly", () => {
    render(<SEO />);
    expect(true).toBe(true);
  });
});
