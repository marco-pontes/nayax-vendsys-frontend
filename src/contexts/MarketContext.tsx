import { useState, useEffect, type ReactNode } from "react";
import { useMarketDetailsMock } from "@/features/market/hooks/useMarketDetailsMock.ts";
import {
  MarketContext,
  type MarketContextType,
} from "@/contexts/useMarketContext.tsx";

type MarketProviderProps = {
  children: ReactNode;
};

export const MarketProvider = ({ children }: MarketProviderProps) => {
  const [currentMarketId, setCurrentMarketId] = useState<number | null>(null);

  const { marketDetails, fetchMarketDetails } = useMarketDetailsMock();

  useEffect(() => {
    if (currentMarketId) fetchMarketDetails(currentMarketId);
  }, [currentMarketId, fetchMarketDetails]);

  const contextValue: MarketContextType = {
    currentMarketId,
    setCurrentMarketId,
    marketDetails,
  };

  return (
    <MarketContext.Provider value={contextValue}>
      {children}
    </MarketContext.Provider>
  );
};
