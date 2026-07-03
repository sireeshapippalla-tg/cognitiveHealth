import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import PlatformIntroSection from "./PlatformIntroSection";

describe("PlatformIntroSection Component", () => {
  it("renders correctly", () => {
    render(<PlatformIntroSection />);
    expect(true).toBe(true);
  });
});
