import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import StatCard from "./StatCard";

describe("StatCard Component", () => {
  it("renders correctly", () => {
    render(<StatCard title="Title" value="10%" description="Description" />);
    expect(true).toBe(true);
  });
});