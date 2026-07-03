import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BlogContent1 } from "./BlogContent1";
import { blogData } from "../../../data/blogData";

describe("BlogContent1 Component", () => {
  it("renders correctly", () => {
    render(<BlogContent1 blog={blogData[0]} />);
    expect(true).toBe(true);
  });
});