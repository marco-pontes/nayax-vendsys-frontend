import type { MarketSummary } from "@/types/types.tsx";
import { markets as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { markets: MarketSummary[] };

export function useMarketsListMock() {
  const [markets, setMarkets] = useState<MarketSummary[] | null>(null);

  async function fetchMarkets() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ markets: [...mockData] }), 500);
    });
    const { markets } = await promise;
    setMarkets(markets);
  }

  return { markets, fetchMarkets };
}
