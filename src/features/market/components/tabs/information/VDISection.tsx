import type { MarketDetails } from "@/types/types.tsx";
import { Label } from "@/components/ui/label.tsx";
import moment from "moment/moment";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

interface VDISectionProps {
  market: MarketDetails;
}

export const VDISection = ({ market }: VDISectionProps) => {
  return (
    <Card className="self-end content-end items-end justify-self-end">
      <CardHeader>
        <CardTitle>VDI Info</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap flex-row text-xs">
        <div className="flex w-1/2">
          <Label className="text-xs font-bold">Last Market Push Date:</Label>
          &nbsp;
          {market.lastMarketPush
            ? moment(market.lastMarketPush).format("MM/DD/YYYY, h:mm:ss ")
            : "-"}
        </div>
        <div className="flex w-1/2">
          <Label className="text-xs font-bold">Last Product Push Date:</Label>
          &nbsp;
          {market.lastProductPush
            ? moment(market.lastProductPush).format("MM/DD/YYYY, h:mm:ss ")
            : "-"}
        </div>
        <div className="flex w-1/2">
          <Label className="text-xs font-bold">Last Sale Received Date:</Label>
          &nbsp;
          {market.lastSale
            ? moment(market.lastSale).format("MM/DD/YYYY, h:mm:ss ")
            : "-"}
        </div>
        <div className="flex w-1/2">
          <Label className="text-xs font-bold">Products In Queue:</Label>&nbsp;
          {market.productUpdatesInQueue.length}
        </div>
      </CardContent>
    </Card>
  );
};
