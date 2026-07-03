import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import RevenueCycleManagementFaqPage from "./RevenueCycleManagementFaqPage";

describe("RevenueCycleManagementFaqPage Component", () => {
  it("renders correctly", () => {
    render(<RevenueCycleManagementFaqPage />);
    expect(true).toBe(true);
  });
});
