import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { MarketInformationForm } from "@/features/market/components/forms/MarketInformationForm.tsx";
import { Button } from "@/components/ui/button.tsx";
import type { MarketDetails } from "@/types/types.tsx";
import { Field } from "@/components/ui/field.tsx";
import { VDISection } from "@/features/market/components/tabs/VDISection.tsx";

interface MarketInfoTabProps {
  market: MarketDetails;
}

export const MarketInfoTab = ({ market }: MarketInfoTabProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Information</CardTitle>
        <CardDescription>
          Basic Market Information is displayed here. Active markets have some
          options disabled.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <MarketInformationForm market={market} />
        <Card>
          <CardHeader>
            <CardTitle>VDI Info</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            <VDISection market={market} />
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          {/*<Button type="button" variant="outline" onClick={() => form.reset()}>*/}
          {/*  Reset*/}
          {/*</Button>*/}
          <Button type="submit" form="form-market">
            Save changes
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
