import { NayaxAutocomplete } from "@/components/shared/NayaxAutocomplete.tsx";
import { useEffect } from "react";
import { useMarketsListMock } from "@/features/market/hooks/useMarketsListMock.ts";
import { BadgeCheck, BadgeX } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Label } from "@/components/ui/label.tsx";
import { PageHeaderSkeleton } from "@/features/market/components/header/PageHeaderSkeleton.tsx";

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
        <div className="flex flex-row flex-wrap content-center items-center p-8">
          <div className="flex gap-8 w-full mb-6">
            <Label className="text-white" htmlFor="nayax-markets">
              Select Market{" "}
            </Label>
            <NayaxAutocomplete
              options={markets.map((market) => ({
                value: market.id,
                label: `${market.id}: ${market.accountName} - ${market.providerName}`,
                icon: market.active ? (
                  <BadgeCheck className="text-green-400" />
                ) : (
                  <BadgeX className="text-red-400" />
                ),
              }))}
              onSelect={onSelectMarket}
              id={"nayax-markets"}
            />
          </div>

          <div className="flex gap-5">
            <Label htmlFor="include-inactive" className="text-white">
              Include Inactive
            </Label>
            <Checkbox
              id="include-inactive"
              className={"items-end"}
              defaultChecked
              disabled
            />
          </div>
        </div>
      )}
    </section>
  );
}
