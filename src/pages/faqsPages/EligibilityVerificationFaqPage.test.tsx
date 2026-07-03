import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import EligibilityVerificationFaqPage from "./EligibilityVerificationFaqPage";

describe("EligibilityVerificationFaqPage Component", () => {
  it("renders correctly", () => {
    render(<EligibilityVerificationFaqPage />);
    expect(true).toBe(true);
  });
});
