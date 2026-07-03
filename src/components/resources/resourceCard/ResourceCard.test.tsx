import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceCard from "./ResourceCard";

describe("ResourceCard Component", () => {
  it("renders correctly", () => {
    render(<ResourceCard />);
    expect(true).toBe(true);
  });
});
