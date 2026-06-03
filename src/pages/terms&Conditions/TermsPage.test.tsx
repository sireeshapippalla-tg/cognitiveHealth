import { render, screen } from "../../utils/test-utils";
import TermsPage from "./TermsPage";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("TermsPage Component", () => {
  it("renders the hero section and search bar", () => {
    render(<TermsPage />);
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search terms topics/i)).toBeInTheDocument();
  });

  it("filters accordion items based on search", async () => {
    render(<TermsPage />);
    const searchInput = screen.getByPlaceholderText(/search terms topics/i);
    
    // Type something that doesn't exist
    await userEvent.type(searchInput, "nonexistentstring");
    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    
    // Clear and type something that does exist
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, "Liability");
    expect(screen.queryByText(/no results found/i)).not.toBeInTheDocument();
  });
});
