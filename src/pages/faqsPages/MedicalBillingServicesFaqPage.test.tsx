import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import MedicalBillingServicesFaqPage from "./MedicalBillingServicesFaqPage";

describe("MedicalBillingServicesFaqPage Component", () => {
  it("renders correctly", () => {
    render(<MedicalBillingServicesFaqPage />);
    expect(true).toBe(true);
  });
});
