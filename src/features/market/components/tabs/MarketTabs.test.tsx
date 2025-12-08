import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MarketTabs } from "./MarketTabs";
import { useMarketContext } from "@/contexts/useMarketContext";

vi.mock("@/contexts/useMarketContext");

vi.mock("@/features/market/components/EmptyState.tsx", () => ({
  EmptyState: () => <div data-testid="empty-state">No Market Selected</div>,
}));

vi.mock(
  "@/features/market/components/tabs/information/MarketInfoTab.tsx",
  () => ({
    MarketInfoTab: ({ market }: { market: any }) => (
      <div data-testid="info-tab">Info for {market.accountName}</div>
    ),
  }),
);

vi.mock("@/features/market/components/tabs/pricing/PricingTab.tsx", () => ({
  PricingTab: ({ market }: { market: any }) => (
    <div data-testid="pricing-tab">Pricing for {market.accountName}</div>
  ),
}));

vi.mock("@/features/market/components/tabs/assets/MarketAssetsTab.tsx", () => ({
  MarketAssetsTab: ({ market }: { market: any }) => (
    <div data-testid="assets-tab">Assets for {market.accountName}</div>
  ),
}));

describe("MarketTabs", () => {
  const mockMarket = {
    id: 1,
    accountName: "Test Account",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the empty state when marketDetails is null", () => {
    (useMarketContext as any).mockReturnValue({
      marketDetails: null,
    });

    render(<MarketTabs />);

    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });

  it("renders the tabs and default content when marketDetails is present", () => {
    (useMarketContext as any).mockReturnValue({
      marketDetails: mockMarket,
    });

    render(<MarketTabs />);

    // Check empty state is gone
    expect(screen.queryByTestId("empty-state")).not.toBeInTheDocument();

    // Check tabs headers exist
    expect(
      screen.getByRole("tab", { name: /market information/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /pricing information/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("tab", { name: /market assets/i }),
    ).toBeInTheDocument();

    // Check default tab content is visible (Info)
    expect(screen.getByTestId("info-tab")).toBeInTheDocument();
    expect(screen.getByTestId("info-tab")).toHaveTextContent(
      "Info for Test Account",
    );

    // Other tabs should not be visible yet
    expect(screen.queryByTestId("pricing-tab")).not.toBeInTheDocument();
    expect(screen.queryByTestId("assets-tab")).not.toBeInTheDocument();
  });

  it("switches content when different tabs are clicked", async () => {
    const user = userEvent.setup();
    (useMarketContext as any).mockReturnValue({
      marketDetails: mockMarket,
    });

    render(<MarketTabs />);

    // Switch to Pricing
    const pricingTrigger = screen.getByRole("tab", {
      name: /pricing information/i,
    });
    await user.click(pricingTrigger);

    expect(screen.queryByTestId("info-tab")).not.toBeInTheDocument();
    expect(screen.getByTestId("pricing-tab")).toBeInTheDocument();
    expect(screen.getByTestId("pricing-tab")).toHaveTextContent(
      "Pricing for Test Account",
    );

    // Switch to Assets
    const assetsTrigger = screen.getByRole("tab", { name: /market assets/i });
    await user.click(assetsTrigger);

    expect(screen.queryByTestId("pricing-tab")).not.toBeInTheDocument();
    expect(screen.getByTestId("assets-tab")).toBeInTheDocument();
    expect(screen.getByTestId("assets-tab")).toHaveTextContent(
      "Assets for Test Account",
    );
  });
});
