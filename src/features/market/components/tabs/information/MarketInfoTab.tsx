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
import { Field } from "@/components/ui/field.tsx";
import { MarketInfoForm } from "@/features/market/components/tabs/information/form/MarketInfoForm.tsx";
interface MarketInfoTabProps {
  market: MarketDetails;
}

export const MarketInfoTab = ({ market }: MarketInfoTabProps) => {
  return (
    <Card className={"border-t-0"}>
      <CardHeader>
        <CardTitle>Market Information</CardTitle>
        <CardDescription>
          Basic Market Information is displayed here. Active markets have some
          options disabled.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <MarketInfoForm market={market} />
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="form-market">
            Save changes
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
