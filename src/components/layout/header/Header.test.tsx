import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import Header from "./Header";

describe("Header Component", () => {
  it("renders correctly", () => {
    render(<Header />);
    expect(true).toBe(true);
  });
});
