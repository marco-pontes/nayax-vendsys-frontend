import type { MarketProvider } from "@/types/types.tsx";
import { marketProviders as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { marketProviders: MarketProvider[] };

export function useMarketProvidersListMock() {
  const [marketProviders, setMarketProviders] = useState<MarketProvider[]>([]);

  async function fetchMarketProviders() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ marketProviders: [...mockData] }), 500);
    });
    const { marketProviders } = await promise;
    setMarketProviders(marketProviders);
  }

  return { marketProviders, fetchMarketProviders };
}
