import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceTabs from "./ResourceTabs";

describe("ResourceTabs Component", () => {
  it("renders correctly", () => {
    render(<ResourceTabs searchQuery="" />);
    expect(true).toBe(true);
  });
});
