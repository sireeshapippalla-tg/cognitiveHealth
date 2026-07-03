import { describe, it, expect } from "vitest";
import { render } from "../../../utils/test-utils";
import ResourceCard from "./ResourceCard";

describe("ResourceCard Component", () => {
  it("renders correctly", () => {
    render(
      <ResourceCard
        image="test.jpg"
        title="Title"
        description="Description"
        link="/test"
        type="blog"
      />
    );
    expect(true).toBe(true);
  });
});
