import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import HowitWorksSection from "./HowitWorksSection";

describe("HowitWorksSection Component", () => {
  it("renders correctly", () => {
    render(<HowitWorksSection />);
    expect(true).toBe(true);
  });
});
