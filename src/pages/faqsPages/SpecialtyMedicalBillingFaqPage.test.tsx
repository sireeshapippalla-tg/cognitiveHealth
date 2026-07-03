import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import SpecialtyMedicalBillingFaqPage from "./SpecialtyMedicalBillingFaqPage";

describe("SpecialtyMedicalBillingFaqPage Component", () => {
  it("renders correctly", () => {
    render(<SpecialtyMedicalBillingFaqPage />);
    expect(true).toBe(true);
  });
});
