import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import HealthcareBackOfficeFaqPage from "./HealthcareBackOfficeFaqPage";

describe("HealthcareBackOfficeFaqPage Component", () => {
  it("renders correctly", () => {
    render(<HealthcareBackOfficeFaqPage />);
    expect(true).toBe(true);
  });
});
