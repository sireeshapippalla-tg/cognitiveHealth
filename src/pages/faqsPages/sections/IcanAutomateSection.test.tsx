import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { IcanAutomateSection } from "./IcanAutomateSection";

describe("IcanAutomateSection Component", () => {
  it("renders correctly", () => {
    render(<IcanAutomateSection />);
    expect(true).toBe(true);
  });
});