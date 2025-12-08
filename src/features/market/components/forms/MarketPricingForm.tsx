import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import type { MarketDetails } from "@/types/types.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";

const formSchema = z.object({
  creditCardFee: z.number().min(0, ""),
  creditCardFeePercentage: z.number(),
  applyFee: z.boolean(),
  hasPriceTags: z.boolean(),
});

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
    <form id="form-market" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="creditCardFee"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-credit-card-fee">
                  Credit Card Fee
                </FieldLabel>
                <Input
                  value={field.value?.toString()}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  type="number"
                  id="form-credit-card-fee"
                  aria-invalid={fieldState.invalid}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="creditCardFeePercentage"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-credit-card-fee-percentage">
                  Credit Card Fee Percentage
                </FieldLabel>
                <Input
                  value={field.value?.toString()}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                  type="number"
                  id="form-credit-card-fee-percentage"
                  aria-invalid={fieldState.invalid}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="applyFee"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-apply-fee">
                  Apply fee to account top-ups
                </FieldLabel>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="form-apply-fee"
                  aria-invalid={fieldState.invalid}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
        <Controller
          name="hasPriceTags"
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Field data-invalid={fieldState.invalid} orientation="horizontal">
                <FieldLabel htmlFor="form-has-price-tags">
                  Has price tags
                </FieldLabel>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="form-has-price-tags"
                  aria-invalid={fieldState.invalid}
                />
              </Field>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </>
          )}
        />
      </FieldGroup>
    </form>
  );
}
