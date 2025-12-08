import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { MarketDetails } from "@/types/types.tsx";
import { MarketPricingForm } from "@/features/market/components/tabs/pricing/form/MarketPricingForm.tsx";

interface PricingTabProps {
  market: MarketDetails;
}

export const PricingTab = ({ market }: PricingTabProps) => {
  return (
    <Card className={"border-t-0"}>
      <CardHeader>
        <CardTitle>Asset Pricing</CardTitle>
        <CardDescription>Asset pricing and tax information.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <MarketPricingForm market={market} />
      </CardContent>
      <CardFooter>
        <Button type="submit" form="form-pricing">
          Save changes
        </Button>
      </CardFooter>
    </Card>
  );
};
