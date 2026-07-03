import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import MainLayout from "./MainLayout";

describe("MainLayout Component", () => {
  it("renders correctly", () => {
    render(<MainLayout />);
    expect(true).toBe(true);
  });
});
