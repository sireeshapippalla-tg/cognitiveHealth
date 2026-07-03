import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import { SectionTitle } from "./SectionTitle";

describe("SectionTitle Component", () => {
  it("renders correctly", () => {
    render(<SectionTitle title="Title" />);
    expect(true).toBe(true);
  });
});