import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import NayaxSyncFusionTable from "@/components/shared/NayaxSyncFusionTable.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { MarketDetails } from "@/types/types.tsx";

interface MarketInfoTabProps {
  market: MarketDetails;
}

export const MarketAssetsTab = ({ market }: MarketInfoTabProps) => {
  const columnConfigs = [
    { field: "id", headerText: "Id" },
    { field: "serial", headerText: "Serial" },
    { field: "model", headerText: "Model" },
    { field: "active", headerText: "Active" },
    { field: "isCash", headerText: "Is Cash" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Assets</CardTitle>
        <CardDescription>
          Market asset listing and information is displayed here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <NayaxSyncFusionTable
          items={market.assets}
          columnConfigs={columnConfigs}
        />
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
};
