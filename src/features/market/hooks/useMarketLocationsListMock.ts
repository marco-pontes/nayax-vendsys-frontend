import type { MarketLocation } from "@/types/types.tsx";
import { marketLocations as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { marketLocations: MarketLocation[] };

export function useMarketLocationsListMock() {
  const [marketLocations, setMarketLocations] = useState<MarketLocation[]>([]);

  async function fetchMarketLocations() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ marketLocations: [...mockData] }), 500);
    });
    const { marketLocations } = await promise;
    setMarketLocations(marketLocations);
  }

  return { marketLocations, fetchMarketLocations };
}
