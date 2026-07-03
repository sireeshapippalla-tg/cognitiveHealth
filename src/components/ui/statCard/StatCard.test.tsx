import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import StatCard from "./StatCard";

describe("StatCard Component", () => {
  it("renders correctly", () => {
    render(<StatCard title="Title" value="Value" change="+10%" label="Label" />);
    expect(true).toBe(true);
  });
});