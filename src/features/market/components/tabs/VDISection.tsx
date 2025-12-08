import type { MarketDetails } from "@/types/types.tsx";
import { Label } from "@/components/ui/label.tsx";
import moment from "moment/moment";

interface VDISectionProps {
  market: MarketDetails;
}

export const VDISection = ({ market }: VDISectionProps) => {
  return (
    <>
      <div className="flex items-start">
        <Label htmlFor="terms-2">Last Market Push Date</Label>
        {market.lastMarketPush
          ? moment(market.lastMarketPush).format("MM/DD/YYYY, h:mm:ss ")
          : "-"}
      </div>
      <div className="flex">
        <Label htmlFor="terms-2">Last Product Push Date</Label>
        {market.lastProductPush
          ? moment(market.lastProductPush).format("MM/DD/YYYY, h:mm:ss ")
          : "-"}
      </div>
      <div className="flex">
        <Label htmlFor="terms-2">Last Sale Received Date</Label>
        {market.lastSale
          ? moment(market.lastSale).format("MM/DD/YYYY, h:mm:ss ")
          : "-"}
      </div>
      <div className="flex">
        <Label htmlFor="terms-2">Products In Queue</Label>
        {market.productUpdatesInQueue.length}
      </div>
    </>
  );
};
