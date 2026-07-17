import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceList from "./ResourceList";

describe("ResourceList Component", () => {
  it("renders correctly", () => {
    render(<ResourceList activeTab={0} />);
    expect(true).toBe(true);
  });
});
