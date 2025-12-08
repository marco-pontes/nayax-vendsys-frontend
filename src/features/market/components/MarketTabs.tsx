import { EmptyState } from "@/features/market/components/EmptyState.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { MarketInfoTab } from "@/features/market/components/tabs/MarketInfoTab.tsx";
import { PricingTab } from "@/features/market/components/tabs/PricingTab.tsx";
import type { MarketDetails } from "@/types/types.tsx";
import { MarketAssetsTab } from "@/features/market/components/tabs/MarketAssetsTab.tsx";

interface MarketTabsProps {
  market?: MarketDetails | null;
}

export const MarketTabs = ({ market }: MarketTabsProps) => {
  return (
    <section>
      <h2>Related Links</h2>
      <div className="flex w-full flex-col">
        {market ? (
          <Tabs defaultValue="info">
            <TabsList>
              <TabsTrigger value="info">Market Information</TabsTrigger>
              <TabsTrigger value="prices">Pricing Information</TabsTrigger>
              <TabsTrigger value="assets">Market Assets</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <MarketInfoTab key={market.id} market={market} />
            </TabsContent>
            <TabsContent value="prices">
              <PricingTab key={market.id} market={market} />
            </TabsContent>
            <TabsContent value="assets">
              <MarketAssetsTab key={market.id} market={market} />
            </TabsContent>
          </Tabs>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
};
