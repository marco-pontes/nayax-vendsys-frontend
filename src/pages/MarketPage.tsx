import { MarketTabs } from "@/features/market/components/tabs/MarketTabs.tsx";
import { useMarketDetailsMock } from "@/features/market/hooks/useMarketDetailsMock.ts";
import { useEffect, useState } from "react";
import { PageHeader } from "@/features/market/components/header/PageHeader.tsx";

export const MarketPage = () => {
  const [currentMarketId, setCurrentMarketId] = useState<number | null>(null);
  const { marketDetails, fetchMarketDetails } = useMarketDetailsMock();

  useEffect(() => {
    if (currentMarketId) fetchMarketDetails(currentMarketId);
  }, [currentMarketId, fetchMarketDetails]);

  const handleSelectMarket = (value: number | null) => {
    setCurrentMarketId(value);
  };

  return (
    <>
      <PageHeader onSelectMarket={handleSelectMarket} />
      <MarketTabs market={marketDetails} />
    </>
  );
};
