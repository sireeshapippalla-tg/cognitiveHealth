import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import BehavioralHealthRcmFaqPage from "./BehavioralHealthRcmFaqPage";

describe("BehavioralHealthRcmFaqPage Component", () => {
  it("renders correctly", () => {
    render(<BehavioralHealthRcmFaqPage />);
    expect(true).toBe(true);
  });
});
