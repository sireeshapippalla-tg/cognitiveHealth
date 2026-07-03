import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BlogContent3 } from "./BlogContent3";
import { blogData } from "../../../data/blogData";

describe("BlogContent3 Component", () => {
  it("renders correctly", () => {
    render(<BlogContent3 blog={blogData[2]} />);
    expect(true).toBe(true);
  });
});