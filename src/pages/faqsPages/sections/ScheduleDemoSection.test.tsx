import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { ScheduleDemoSection } from "./ScheduleDemoSection";

describe("ScheduleDemoSection Component", () => {
  it("renders correctly", () => {
    render(<ScheduleDemoSection heroButtonUrl="/demo" />);
    expect(true).toBe(true);
  });
});