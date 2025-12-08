import { NayaxAutocomplete } from "@/components/shared/NayaxAutocomplete.tsx";
import { useEffect } from "react";
import { useMarketsListMock } from "@/features/market/hooks/useMarketsListMock.ts";
import { BadgeCheck, BadgeX } from "lucide-react";
import { PageHeaderSkeleton } from "@/features/market/components/PageHeaderSkeleton.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";

type PageHeaderProps = { onSelectMarket: (v: number | null) => void };

export function PageHeader({ onSelectMarket }: PageHeaderProps) {
  const { markets, fetchMarkets } = useMarketsListMock();

  useEffect(() => {
    fetchMarkets();
  });

  return (
    <section className="bg-[#262626]">
      {!markets ? (
        <PageHeaderSkeleton />
      ) : (
        <div className="flex flex-col gap-3 p-12">
          <div className="flex items-center gap-3">
            <Label className="color-white">Select Market </Label>
            <NayaxAutocomplete
              options={markets.map((market) => ({
                value: market.id,
                label: `${market.id}: ${market.accountName} - ${market.providerName}`,
                icon: market.active ? <BadgeCheck /> : <BadgeX />,
              }))}
              onSelect={onSelectMarket}
            />

            <div className="flex items-start">
              <Label htmlFor="terms-2">Accept terms and conditions</Label>
              <Checkbox id="terms-2" defaultChecked />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
