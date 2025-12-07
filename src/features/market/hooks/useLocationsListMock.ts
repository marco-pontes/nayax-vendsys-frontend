import type { NLocation } from "@/types/types.tsx";
import { locations as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { locations: NLocation[] };

export function useLocationsListMock() {
  const [locations, setLocations] = useState<NLocation[]>([]);

  async function fetchLocations() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ locations: [...mockData] }), 500);
    });
    const { locations } = await promise;
    setLocations(locations);
  }

  return { locations, fetchLocations };
}
