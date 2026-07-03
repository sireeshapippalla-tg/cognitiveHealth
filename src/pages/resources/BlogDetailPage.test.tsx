import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import BlogDetailPage from "./BlogDetailPage";

describe("BlogDetailPage Component", () => {
  it("renders correctly", () => {
    render(<BlogDetailPage />);
    expect(true).toBe(true);
  });
});
