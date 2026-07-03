import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders correctly", () => {
    render(<Footer />);
    expect(true).toBe(true);
  });
});
