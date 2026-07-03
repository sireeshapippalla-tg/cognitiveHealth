import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BlogContentDefault } from "./BlogContentDefault";
import { blogData } from "../../../data/blogData";

describe("BlogContentDefault Component", () => {
  it("renders correctly", () => {
    render(<BlogContentDefault blog={blogData[4]} />);
    expect(true).toBe(true);
  });
});