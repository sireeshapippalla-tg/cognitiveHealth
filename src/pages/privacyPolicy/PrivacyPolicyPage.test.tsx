import { render, screen } from "../../utils/test-utils";
import PrivacyPolicyPage from "./PrivacyPolicyPage";
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

describe("PrivacyPolicyPage Component", () => {
  it("renders the hero section and search bar", () => {
    render(<PrivacyPolicyPage />);
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search privacy topics/i)).toBeInTheDocument();
  });

  it("filters accordion items based on search", async () => {
    render(<PrivacyPolicyPage />);
    const searchInput = screen.getByPlaceholderText(/search privacy topics/i);
    
    // Type something that doesn't exist
    await userEvent.type(searchInput, "nonexistentstring");
    expect(screen.getByText(/no results found/i)).toBeInTheDocument();
    
    // Clear and type something that does exist
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, "Information");
    expect(screen.queryByText(/no results found/i)).not.toBeInTheDocument();
  });
});
