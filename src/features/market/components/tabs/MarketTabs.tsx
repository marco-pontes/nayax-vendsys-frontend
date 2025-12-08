import { EmptyState } from "@/features/market/components/EmptyState.tsx";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { MarketInfoTab } from "@/features/market/components/tabs/information/MarketInfoTab.tsx";
import { PricingTab } from "@/features/market/components/tabs/pricing/PricingTab.tsx";
import { MarketAssetsTab } from "@/features/market/components/tabs/assets/MarketAssetsTab.tsx";
import { useMarketContext } from "@/contexts/useMarketContext.tsx";

export const MarketTabs = () => {
  const { marketDetails } = useMarketContext();
  return (
    <section className="bg-muted">
      <div className="flex flex-col w-7xl m-auto p-3">
        {marketDetails ? (
          <Tabs defaultValue="info">
            <TabsList>
              <TabsTrigger value="info">Market Information</TabsTrigger>
              <TabsTrigger value="prices">Pricing Information</TabsTrigger>
              <TabsTrigger value="assets">Market Assets</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <MarketInfoTab key={marketDetails.id} market={marketDetails} />
            </TabsContent>
            <TabsContent value="prices">
              <PricingTab key={marketDetails.id} market={marketDetails} />
            </TabsContent>
            <TabsContent value="assets">
              <MarketAssetsTab key={marketDetails.id} market={marketDetails} />
            </TabsContent>
          </Tabs>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
};
