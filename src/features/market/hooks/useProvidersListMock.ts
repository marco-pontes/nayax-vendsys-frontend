import type { NProvider } from "@/types/types.tsx";
import { providers as mockData } from "@/api/mockData.ts";
import { useState } from "react";

type MockFetchResponse = { providers: NProvider[] };

export function useProvidersListMock() {
  const [providers, setProviders] = useState<NProvider[]>([]);

  async function fetchProviders() {
    const promise = new Promise<MockFetchResponse>((resolve) => {
      setTimeout(() => resolve({ providers: [...mockData] }), 500);
    });
    const { providers } = await promise;
    setProviders(providers);
  }

  return { providers, fetchProviders };
}
