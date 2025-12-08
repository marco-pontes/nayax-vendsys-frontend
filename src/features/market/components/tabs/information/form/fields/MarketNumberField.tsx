import {
  Controller,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";

type NumberFieldProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  disabled?: boolean;
  name: Path<T>;
};

export const MarketNumberField = <T extends FieldValues>({
  form,
  name,
  disabled = false,
}: NumberFieldProps<T>) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState }) => (
        <>
          <Field data-invalid={fieldState.invalid} orientation="horizontal">
            <FieldLabel htmlFor="form-number" className="w-1/3">
              Market Number
            </FieldLabel>
            <Input
              value={field.value?.toString()}
              onChange={(event) => field.onChange(Number(event.target.value))}
              type="number"
              id="form-number"
              aria-invalid={fieldState.invalid}
              disabled={disabled}
              className="w-2/3"
            />
          </Field>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </>
      )}
    />
  );
};
