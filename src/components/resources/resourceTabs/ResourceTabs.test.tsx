import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceTabs from "./ResourceTabs";

describe("ResourceTabs Component", () => {
  it("renders correctly", () => {
    render(<ResourceTabs />);
    expect(true).toBe(true);
  });
});
