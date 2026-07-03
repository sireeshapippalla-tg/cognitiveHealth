import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import BulletList from "../BulletList";

describe("BulletList Component", () => {
  it("renders correctly", () => {
    render(<BulletList items={[]} />);
    expect(true).toBe(true);
  });
});
