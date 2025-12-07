import { NayaxAutocomplete } from "@/components/shared/NayaxAutocomplete.tsx";
import { useEffect, useState } from "react";
import { useMarketsListMock } from "@/features/market/hooks/useMarketsListMock.ts";
import { BadgeCheck, BadgeX } from "lucide-react";
import { PageHeaderSkeleton } from "@/features/market/components/PageHeaderSkeleton.tsx";

export function PageHeader() {
  const [currentMarket, setCurrentMarket] = useState<number | null>(null);
  const { markets, fetchMarkets } = useMarketsListMock();

  useEffect(() => {
    fetchMarkets();
  });

  useEffect(() => {
    console.log(currentMarket);
  }, [currentMarket]);

  const handleSelectMarket = (value: number | null) => {
    setCurrentMarket(value);
  };

  return (
    <section className="bg-[#262626]">
      {!markets ? (
        <PageHeaderSkeleton />
      ) : (
        <NayaxAutocomplete
          options={markets.map((market) => ({
            value: market.id,
            label: `${market.id}: ${market.accountName} - ${market.providerName}`,
            icon: market.active ? <BadgeCheck /> : <BadgeX />,
          }))}
          onSelect={handleSelectMarket}
        />
      )}
    </section>
  );
}
