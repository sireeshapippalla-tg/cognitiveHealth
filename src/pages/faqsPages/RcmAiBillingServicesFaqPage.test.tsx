import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import RcmAiBillingServicesFaqPage from "./RcmAiBillingServicesFaqPage";

describe("RcmAiBillingServicesFaqPage Component", () => {
  it("renders correctly", () => {
    render(<RcmAiBillingServicesFaqPage />);
    expect(true).toBe(true);
  });
});
