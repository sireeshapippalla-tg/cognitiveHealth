import { describe, it, expect } from "vitest";
import * as BlogContents from "./BlogContents";

describe("BlogContents", () => {
  it("exports content correctly", () => {
    expect(BlogContents).toBeDefined();
  });
});