import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FieldGroup } from "@/components/ui/field";

import type { MarketDetails } from "@/types/types.tsx";
import { CreditCardFeeField } from "@/features/market/components/tabs/pricing/form/fields/CreditCardFeeField.tsx";
import { CreditCardFeePercentageField } from "@/features/market/components/tabs/pricing/form/fields/CreditCardFeePercentageField.tsx";
import { ApplyFeeField } from "@/features/market/components/tabs/pricing/form/fields/ApplyFeeField.tsx";
import { HasPriceTagsField } from "@/features/market/components/tabs/pricing/form/fields/HasPriceTagsField.tsx";
import { formSchema } from "@/features/market/components/tabs/pricing/form/formSchema.ts";

interface MarketFormProps {
  market: MarketDetails;
}

export function MarketPricingForm({ market }: MarketFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      creditCardFee: market.creditCardFee,
      creditCardFeePercentage: market.creditCardFeePercentage,
      applyFee: market.applyFee,
      hasPriceTags: market.hasPriceTags,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <form
      id="form-pricing"
      className="flex flex-row gap-16"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FieldGroup className="w-1/2">
        <CreditCardFeeField form={form} name="creditCardFee" />
        <CreditCardFeePercentageField
          form={form}
          name="creditCardFeePercentage"
        />
      </FieldGroup>
      <FieldGroup className="w-1/2">
        <ApplyFeeField form={form} name="applyFee" />
        <HasPriceTagsField form={form} name="hasPriceTags" />
      </FieldGroup>
    </form>
  );
}
