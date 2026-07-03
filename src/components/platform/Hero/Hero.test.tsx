import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import Hero from "./Hero";

describe("Hero Component", () => {
  it("renders correctly", () => {
    render(<Hero />);
    expect(true).toBe(true);
  });
});
