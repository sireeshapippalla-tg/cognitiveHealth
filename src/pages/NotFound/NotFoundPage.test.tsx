import { render, screen } from "../../utils/test-utils";
import NotFoundPage from "./NotFoundPage";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("NotFoundPage Component", () => {
  it("renders 404 message and buttons", () => {
    render(<NotFoundPage />);
    
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /go to home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /go back/i })).toBeInTheDocument();
  });

  it("navigates to home when Go to Home is clicked", async () => {
    render(<NotFoundPage />);
    
    const homeBtn = screen.getByRole("button", { name: /go to home/i });
    await userEvent.click(homeBtn);
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("navigates back when Go Back is clicked", async () => {
    render(<NotFoundPage />);
    
    const backBtn = screen.getByRole("button", { name: /go back/i });
    await userEvent.click(backBtn);
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
