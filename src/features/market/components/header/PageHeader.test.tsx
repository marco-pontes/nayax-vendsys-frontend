import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { PageHeader } from "./PageHeader";
import { useMarketContext } from "@/contexts/useMarketContext";
import { useMarketsListMock } from "@/features/market/hooks/useMarketsListMock";
import userEvent from "@testing-library/user-event";

vi.mock("@/contexts/useMarketContext");
vi.mock("@/features/market/hooks/useMarketsListMock");

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

vi.mock("@/components/shared/NayaxAutocomplete.tsx", () => ({
  NayaxAutocomplete: ({ onSelect, options, id }: any) => (
    <div data-testid="mock-autocomplete">
      <label htmlFor={id}>Mock Autocomplete</label>
      <select
        id={id}
        onChange={(e) => onSelect(Number(e.target.value))}
        data-testid="market-select"
      >
        <option value="">Select Market</option>
        {options.map((opt: any) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  ),
}));

vi.mock("@/features/market/components/header/PageHeaderSkeleton.tsx", () => ({
  PageHeaderSkeleton: () => <div data-testid="header-skeleton">Loading...</div>,
}));

describe("PageHeader", () => {
  const mockSetCurrentMarketId = vi.fn();
  const mockFetchMarkets = vi.fn();

  const mockMarkets = [
    {
      id: 1,
      accountName: "Test Account",
      providerName: "Test Provider",
      active: true,
    },
    {
      id: 2,
      accountName: "Inactive Account",
      providerName: "Other Provider",
      active: false,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    (useMarketContext as any).mockReturnValue({
      setCurrentMarketId: mockSetCurrentMarketId,
    });

    (useMarketsListMock as any).mockReturnValue({
      markets: null,
      fetchMarkets: mockFetchMarkets,
    });
  });

  it("renders the loading skeleton initially when markets are null", () => {
    render(<PageHeader />);
    expect(screen.getByTestId("header-skeleton")).toBeInTheDocument();
    expect(mockFetchMarkets).toHaveBeenCalledTimes(1);
  });

  it("renders the header content correctly when markets are loaded", () => {
    (useMarketsListMock as any).mockReturnValue({
      markets: mockMarkets,
      fetchMarkets: mockFetchMarkets,
    });

    render(<PageHeader />);

    expect(screen.queryByTestId("header-skeleton")).not.toBeInTheDocument();
    expect(screen.getByText("markets.page.title")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Market")).toBeInTheDocument();
    expect(screen.getByLabelText("Include Inactive")).toBeInTheDocument();
  });

  it("calls setCurrentMarketId when a market is selected", async () => {
    const user = userEvent.setup();
    (useMarketsListMock as any).mockReturnValue({
      markets: mockMarkets,
      fetchMarkets: mockFetchMarkets,
    });

    render(<PageHeader />);

    const select = screen.getByTestId("market-select");
    await user.selectOptions(select, "1");

    expect(mockSetCurrentMarketId).toHaveBeenCalledWith(1);
  });

  it("passes formatted options to the autocomplete", () => {
    (useMarketsListMock as any).mockReturnValue({
      markets: mockMarkets,
      fetchMarkets: mockFetchMarkets,
    });

    render(<PageHeader />);

    const options = screen.getAllByRole("option");

    expect(options[1]).toHaveTextContent("1: Test Account - Test Provider");
    expect(options[2]).toHaveTextContent(
      "2: Inactive Account - Other Provider",
    );
  });
});
