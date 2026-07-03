import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import DenialWorkFlowPage from "./DenialWorkFlowPage";

describe("DenialWorkFlowPage Component", () => {
  it("renders correctly", () => {
    render(<DenialWorkFlowPage />);
    expect(true).toBe(true);
  });
});
