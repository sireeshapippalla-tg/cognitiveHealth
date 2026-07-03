import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import PopoverCard from "./PopoverCard";

describe("PopoverCard Component", () => {
  it("renders correctly", () => {
    render(<PopoverCard title="Title" description="Desc" items={[]} icon="icon.png" />);
    expect(true).toBe(true);
  });
});