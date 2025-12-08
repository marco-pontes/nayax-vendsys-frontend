import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { PricingTab } from "./PricingTab";
import type { MarketDetails } from "@/types/types";

vi.mock(
  "@/features/market/components/tabs/pricing/form/MarketPricingForm.tsx",
  () => ({
    MarketPricingForm: ({ market }: { market: any }) => (
      <div data-testid="pricing-form-mock">Form for {market.accountName}</div>
    ),
  }),
);

describe("PricingTab", () => {
  const mockMarket: MarketDetails = {
    account: undefined,
    applyFee: false,
    assets: [],
    creditCardFee: 0,
    creditCardFeePercentage: 0,
    hasPriceTags: false,
    lastMarketPush: undefined,
    lastProductPush: undefined,
    lastSale: undefined,
    location: undefined,
    mgmtNumber: 0,
    productUpdatesInQueue: [],
    provider: undefined,
    id: 123,
    active: true,
  };

  it("renders the card header and description correctly", () => {
    render(<PricingTab market={mockMarket} />);

    expect(screen.getByText("Asset Pricing")).toBeInTheDocument();
    expect(
      screen.getByText("Asset pricing and tax information."),
    ).toBeInTheDocument();
  });
});
