import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";

type CreditCardFeeFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const CreditCardFeeField = <T extends FieldValues>({
  form,
  name,
}: CreditCardFeeFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-credit-card-fee" className="w-1/3">
              Credit Card Fee
            </FieldLabel>
            <Input
              value={field.value?.toString()}
              onChange={(event) => field.onChange(Number(event.target.value))}
              type="number"
              id="form-credit-card-fee"
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
