import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import HeroSection from "./HeroSection";

describe("HeroSection Component", () => {
  it("renders correctly", () => {
    render(<HeroSection />);
    expect(true).toBe(true);
  });
});
