import { createContext, useContext } from "react";
import type { MarketDetails } from "@/types/types.tsx";

export type MarketContextType = {
  currentMarketId: number | null;
  setCurrentMarketId: React.Dispatch<React.SetStateAction<number | null>>;
  marketDetails: MarketDetails | null; // Assumindo que você tem um tipo para MarketDetails
};

export const MarketContext = createContext<MarketContextType | undefined>(
  undefined,
);
export const useMarketContext = () => {
  const context = useContext(MarketContext);

  if (context === undefined) {
    throw new Error("useMarketContext must be used within a MarketProvider");
  }

  return context;
};
