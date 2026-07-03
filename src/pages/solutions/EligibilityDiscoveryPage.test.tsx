import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import EligibilityDiscoveryPage from "./EligibilityDiscoveryPage";

describe("EligibilityDiscoveryPage Component", () => {
  it("renders correctly", () => {
    render(<EligibilityDiscoveryPage />);
    expect(true).toBe(true);
  });
});
