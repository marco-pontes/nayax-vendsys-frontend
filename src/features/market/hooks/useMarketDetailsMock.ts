import type { MarketDetails } from "@/types/types.tsx";
import { marketDetails as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { marketDetails: MarketDetails };

export function useMarketDetailsMock() {
  const [marketDetails, setMarketDetails] = useState<MarketDetails>();

  async function fetchMarketDetails(id: number) {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ marketDetails: { ...mockData[id] } }), 500);
    });
    const { marketDetails } = await promise;
    setMarketDetails(marketDetails);
  }

  return { marketDetails, fetchMarketDetails };
}
