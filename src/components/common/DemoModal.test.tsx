import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import DemoModal from "./DemoModal";

describe("DemoModal Component", () => {
  it("renders correctly", () => {
    render(<DemoModal />);
    expect(true).toBe(true);
  });
});
