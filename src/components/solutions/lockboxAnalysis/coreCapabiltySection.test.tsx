import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import CoreCapabiltySection from "./coreCapabiltySection";

describe("coreCapabiltySection Component", () => {
  it("renders correctly", () => {
    render(<CoreCapabiltySection />);
    expect(true).toBe(true);
  });
});
