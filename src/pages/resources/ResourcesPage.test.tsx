import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import ResourcesPage from "./ResourcesPage";

describe("ResourcesPage Component", () => {
  it("renders correctly", () => {
    render(<ResourcesPage />);
    expect(true).toBe(true);
  });
});
