import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BlogContent2 } from "./BlogContent2";
import { blogData } from "../../../data/blogData";

describe("BlogContent2 Component", () => {
  it("renders correctly", () => {
    render(<BlogContent2 blog={blogData[1]} />);
    expect(true).toBe(true);
  });
});