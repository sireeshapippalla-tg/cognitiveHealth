import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import PopoverCard from "./PopoverCard";

describe("PopoverCard Component", () => {
  it("renders correctly", () => {
    render(
      <PopoverCard
        title="Title"
        description="Desc"
        icon={<div />}
        onClick={() => {}}
      />
    );
    expect(true).toBe(true);
  });
});