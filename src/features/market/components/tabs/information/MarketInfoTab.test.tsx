import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MarketInfoTab } from "./MarketInfoTab";
import { marketDetails } from "@/api/mockData";

// Mock the child form component
vi.mock(
  "@/features/market/components/tabs/information/form/MarketInfoForm.tsx",
  () => ({
    MarketInfoForm: ({ market }: { market: any }) => (
      <div data-testid="market-info-form-mock">
        Info Form for {market.account.name}
      </div>
    ),
  }),
);

describe("MarketInfoTab", () => {
  // Use a sample market from the mock data provided
  const mockMarket = marketDetails[1];

  it("renders the card header and description correctly", () => {
    render(<MarketInfoTab market={mockMarket} />);

    expect(screen.getByText("Market Information")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Basic Market Information is displayed here. Active markets have some options disabled.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the MarketInfoForm with the correct market prop", () => {
    render(<MarketInfoTab market={mockMarket} />);

    const formMock = screen.getByTestId("market-info-form-mock");
    expect(formMock).toBeInTheDocument();
    expect(formMock).toHaveTextContent(
      `Info Form for ${mockMarket.account.name}`,
    );
  });

  it("renders the save button associated with the correct form id", () => {
    render(<MarketInfoTab market={mockMarket} />);

    const saveButton = screen.getByRole("button", { name: /save changes/i });

    expect(saveButton).toBeInTheDocument();
    expect(saveButton).toHaveAttribute("type", "submit");
    // This connects the external button to the form inside the child component
    expect(saveButton).toHaveAttribute("form", "form-market");
  });
});
