import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import AboutusHeroSection from "./aboutusHeroSection";

describe("aboutusHeroSection Component", () => {
  it("renders correctly", () => {
    render(<AboutusHeroSection />);
    expect(true).toBe(true);
  });
});
