import { render, screen } from "../../utils/test-utils";
import TrustedLogos from "./TrustedLogos";
import { describe, it, expect } from "vitest";

describe("TrustedLogos Component", () => {
  const mockLogos = [
    { src: "logo1.png", alt: "Logo 1" },
    { src: "logo2.png", alt: "Logo 2" },
  ];

  it("renders title if provided", () => {
    render(<TrustedLogos title="Trusted By" logos={mockLogos} />);
    expect(screen.getByText("Trusted By")).toBeInTheDocument();
  });

  it("renders all logos in the track", () => {
    render(<TrustedLogos logos={mockLogos} />);
    
    const images = screen.getAllByRole("img");
    expect(images.length).toBeGreaterThanOrEqual(4);
    expect(images[0]).toHaveAttribute("alt", "Logo 1");
    expect(images[0]).toHaveAttribute("src", "logo1.png");
  });
});
