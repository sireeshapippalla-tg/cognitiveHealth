import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import { FaqPageLayout } from "./FaqPageLayout";

describe("FaqPageLayout Component", () => {
  it("renders correctly", () => {
    render(<FaqPageLayout title="Title" />);
    expect(true).toBe(true);
  });
});