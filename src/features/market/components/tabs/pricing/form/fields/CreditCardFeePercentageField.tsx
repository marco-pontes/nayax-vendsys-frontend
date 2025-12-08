import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";

type CreditCardFeePercentageFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const CreditCardFeePercentageField = <T extends FieldValues>({
  form,
  name,
}: CreditCardFeePercentageFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel
              htmlFor="form-credit-card-fee-percentage"
              className="w-1/3"
            >
              Credit Card Fee Percentage
            </FieldLabel>
            <Input
              value={field.value?.toString()}
              onChange={(event) => field.onChange(Number(event.target.value))}
              type="number"
              id="form-credit-card-fee-percentage"
              aria-invalid={fieldState.invalid}
              className="w-2/3"
            />
          </Field>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </>
      )}
    />
  );
};
