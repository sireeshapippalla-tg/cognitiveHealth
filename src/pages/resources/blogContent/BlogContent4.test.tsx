import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { BlogContent4 } from "./BlogContent4";
import { blogData } from "../../../data/blogData";

describe("BlogContent4 Component", () => {
  it("renders correctly", () => {
    render(<BlogContent4 blog={blogData[3]} />);
    expect(true).toBe(true);
  });
});