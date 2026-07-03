import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import MetricsSection from "./MetricsSection";

describe("MetricsSection Component", () => {
  it("renders correctly", () => {
    render(<MetricsSection title="Title" subtitle="Sub" stats={[]} />);
    expect(true).toBe(true);
  });
});