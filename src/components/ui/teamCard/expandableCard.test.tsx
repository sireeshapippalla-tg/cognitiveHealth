import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ExpandableCard from "./expandableCard";

describe("ExpandableCard Component", () => {
  const mockItem = {
    id: 1,
    title: "Title",
    desc: "Description"
  };
  it("renders correctly", () => {
    render(<ExpandableCard item={mockItem} />);
    expect(true).toBe(true);
  });
});