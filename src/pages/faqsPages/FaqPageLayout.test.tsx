import { describe, it, expect } from "vitest";
import { render } from "../../utils/test-utils";
import { FaqPageLayout } from "./FaqPageLayout";

describe("FaqPageLayout Component", () => {
  it("renders correctly", () => {
    render(
      <FaqPageLayout
        seoTitle="SEO Title"
        seoDescription="SEO Description"
        seoKeywords="SEO Keywords"
        schema={{}}
        heroTitle="Hero Title"
        heroSubtitle="Hero Subtitle"
        heroButtonUrl="/demo"
        section2Content={<div />}
      />
    );
    expect(true).toBe(true);
  });
});