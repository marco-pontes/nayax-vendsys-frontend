import { MarketTabs } from "@/features/market/components/tabs/MarketTabs.tsx";
import { PageHeader } from "@/features/market/components/header/PageHeader.tsx";
import { MarketProvider } from "@/contexts/MarketContext.tsx";

export const MarketPage = () => {
  return (
    <MarketProvider>
      <PageHeader />
      <MarketTabs />
    </MarketProvider>
  );
};
