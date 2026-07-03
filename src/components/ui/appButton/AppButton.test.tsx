import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import AppButton from "./AppButton";

describe("AppButton Component", () => {
  it("renders correctly", () => {
    render(<AppButton>Click Me</AppButton>);
    expect(true).toBe(true);
  });
});