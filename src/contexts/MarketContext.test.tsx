import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MarketProvider } from "./MarketContext";
import { useMarketContext } from "@/contexts/useMarketContext";
import { useMarketDetailsMock } from "@/features/market/hooks/useMarketDetailsMock";
import { marketDetails } from "@/api/mockData";

// Mock the data fetching hook
vi.mock("@/features/market/hooks/useMarketDetailsMock");

// Test component to consume the context
const TestConsumer = () => {
  const { currentMarketId, setCurrentMarketId, marketDetails } =
    useMarketContext();

  return (
    <div>
      <div data-testid="current-id">{currentMarketId ?? "null"}</div>
      <div data-testid="market-data">
        {marketDetails ? marketDetails.account.name : "no-data"}
      </div>
      <button onClick={() => setCurrentMarketId(123)}>Select Market 123</button>
      <button onClick={() => setCurrentMarketId(null)}>Clear Market</button>
    </div>
  );
};

describe("MarketProvider", () => {
  const mockFetchMarketDetails = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Default mock implementation
    (useMarketDetailsMock as any).mockReturnValue({
      marketDetails: null,
      fetchMarketDetails: mockFetchMarketDetails,
    });
  });

  it("provides initial state with null currentMarketId", () => {
    render(
      <MarketProvider>
        <TestConsumer />
      </MarketProvider>,
    );

    expect(screen.getByTestId("current-id")).toHaveTextContent("null");
    expect(screen.getByTestId("market-data")).toHaveTextContent("no-data");
    // Should not fetch on mount if id is null
    expect(mockFetchMarketDetails).not.toHaveBeenCalled();
  });

  it("triggers fetchMarketDetails when currentMarketId is updated", async () => {
    const user = userEvent.setup();
    render(
      <MarketProvider>
        <TestConsumer />
      </MarketProvider>,
    );

    // Click button to set market ID to 123
    await user.click(screen.getByText("Select Market 123"));

    expect(screen.getByTestId("current-id")).toHaveTextContent("123");

    // Check if the fetch function from the hook was called with the new ID
    await waitFor(() => {
      expect(mockFetchMarketDetails).toHaveBeenCalledWith(123);
    });
  });

  it("does not fetch details when currentMarketId is set to null", async () => {
    const user = userEvent.setup();
    render(
      <MarketProvider>
        <TestConsumer />
      </MarketProvider>,
    );

    // First select a market to "dirty" the state (though we are testing the transition to null)
    // Actually, let's just click 'Clear Market' which sets it to null.
    // Since it starts at null, this is a bit redundant, but ensures no side effect runs for null.
    await user.click(screen.getByText("Clear Market"));

    expect(screen.getByTestId("current-id")).toHaveTextContent("null");
    expect(mockFetchMarketDetails).not.toHaveBeenCalled();
  });
});
