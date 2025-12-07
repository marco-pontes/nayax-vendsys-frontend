import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { MarketInfoTab } from "@/features/market/components/tabs/MarketInfoTab.tsx";
import { PricingTab } from "@/features/market/components/tabs/PricingTab.tsx";
import { AssetSyncTab } from "@/features/market/components/tabs/AssetSyncTab.tsx";
import { EmptyState } from "@/features/market/components/EmptyState.tsx";
import { PageHeader } from "@/features/market/components/PageHeader.tsx";

export const MarketContent = () => {
  return (
    <>
      <PageHeader />
      <h4>Related Links</h4>
      <section>
        <div className="flex w-full max-w-sm flex-col">
          <EmptyState />
        </div>
        <div className="flex w-full max-w-sm flex-col">
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="market-info">Market Information</TabsTrigger>
              <TabsTrigger value="prices">Pricing Information</TabsTrigger>
              <TabsTrigger value="asset-sync">Asset Sync</TabsTrigger>
            </TabsList>
            <TabsContent value="market-info">
              <MarketInfoTab />
            </TabsContent>
            <TabsContent value="prices">
              <PricingTab />
            </TabsContent>
            <TabsContent value="asset-sync">
              <AssetSyncTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};
